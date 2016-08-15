const storage = require('electron-json-storage')
const AutoLaunch = require('auto-launch')
const log = require('electron-log')

class Options {

  constructor (options) {
    this.options = options || {}
    this.properties = {}

    this.appLauncher = new AutoLaunch({
      name: this.options.appName
    })

    storage.get('properties', (err, value) => {
      if (err) {
        this.properties = {
          apiKey: '',
          orgId: '',
          autoStartEnabled: false
        }
      } else {
        this.properties = value

        this.appLauncher.isEnabled().then(function(enabled) {
          this.properties.autoStartEnabled = enabled
        })        
      }
    })
  }

  get apiKey () {
    return this.properties.apiKey
  }

  set apiKey (value) {
    this.properties.apiKey = value
    this.persist()
  }

  get orgId () {
    return this.properties.orgId
  }

  set orgId (value) {
    this.properties.orgId = value
    this.persist()
  }

  set autoStartEnabled(value) {
    if(value) {
      this.appLauncher.enable()
    } else {
      this.appLauncher.disable()
    }

    this.properties.autoStartEnabled = value
    this.persist()
  }

  persist () {
    log.info('logger.persist', this.properties)
    storage.set('properties', this.properties)
  }

}

module.exports = Options
