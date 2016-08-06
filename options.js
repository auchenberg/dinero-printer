const storage = require('electron-json-storage')

class Options {

  constructor() {
    this.properties = {}

    storage.get('properties', (err, value) => {
      if (err) {
        this.properties = {
          apiKey: '',
          orgId: '',
        }
      } else {
        this.properties = value
      }
    })
  }

  get apiKey() {
    return this.properties.apiKey
  }

  set apiKey(value) {
    this.properties.apiKey = value;
    this.persist()
  }

  get orgId() {
    return this.properties.orgId
  }

  set orgId(value) {
    this.properties.orgId = value;
    this.persist()
  }

  persist() {
    storage.set('properties', this.properties)
  }

}

module.exports = Options