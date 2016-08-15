'use strict'
const fs = require('fs')
const path = require('path')
const Printer = require('ipp-printer')
const Dinero = require('dinero')
const moment = require('moment')
const osTmpdir = require('os-tmpdir')
const getPort = require('get-port')
const log = require('electron-log')

class DineroPrinter {

  constructor (options) {
    this.options = options
    this.client = new Dinero({
      clientId: 'dineroappios',
      clientSecret: 'VYDaSKI3jGw3eiQmbbTTNnoa9kmRLeu16Pb0Q1NW3Mc'
    })

    getPort().then(port => {
      this.printer = new Printer({
        name: 'Dinero Printer',
        port: port
      })

      this.printer.on('job', job => {
        log.info('printer.job.%d.received. name=%s', job.id, job.name)

        var fileName = 'job-' + job.id + '.pdf'
        var filePath = path.join(osTmpdir(), fileName)
        var fileStream = fs.createWriteStream(filePath)

        job.on('end', () => {
          log.info('printer.job.%d.saved. file=%s', job.id, filePath)
          this.upload(filePath, job)
        })

        job.pipe(fileStream)
      })
    })
  }

  upload (filePath, job) {
    let apiKey = this.options.apiKey
    let orgId = this.options.orgId

    var authenticate = () => {
      return this.client.auth(apiKey, apiKey)
    }

    var createFile = (path) => {
      log.info('dinero.file.uploading, path=', path)
      return this.client.files.create(orgId, {
        image: fs.createReadStream(path)
      }, {
        multipart: true
      })
    }

    var createVoucher = (fileId) => {
      log.info('dinero.voucher.creating, fileId=', fileId)
      return this.client.vouchers.purchase.create(orgId, {
        FileGuid: fileId,
        Notes: 'Uploaded from Dinero Printer',
        VoucherDate: moment(new Date()).format('YYYY-MM-DD')
      })
    }

    authenticate()
    .then(() => {
      log.info('dinero.authenticated')
      return createFile(filePath)
    }).then(body => {
      log.info('dinero.file.uploaded, id=', body.FileGuid)
      return createVoucher(body.FileGuid)
    }).then(body => {
      log.info('dinero.voucher.created, id=', body.VoucherGuid)
      log.info('printer.job.completed, id=', job.id)
    }).catch(err => {
      log.info('dinero.error', err)
    })
  }
}

module.exports = DineroPrinter
