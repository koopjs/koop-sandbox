import Ember from 'ember'

const source = `
const Koop = require('koop')
const koop = new Koop()
const craigslist = require('koop-provider-craigslist')
koop.register(craigslist)
const express = require("@runkit/runkit/express-endpoint/1.0.0")
const app = express(exports)
app.use(koop.server)
`

export default Ember.Component.extend({
  didRender () {
    RunKit.createNotebook({
      element: document.getElementById(this.elementId),
      onURLChanged: urlCB,
      nodeVersion: '> 6.0.0',
      source
    })
  }
})

function urlCB (notebook) {
  Ember.debug(notebook.URL)
}
