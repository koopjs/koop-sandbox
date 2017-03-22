import Ember from 'ember'

export default Ember.Route.extend({
  esriLoader: Ember.inject.service('esri-loader'),

  init () {
    this._super(...arguments);
    // lazy load the JSAPI
    const esriLoader = this.get('esriLoader');
    // NOTE: to use a version other than the latest  4.x release
    // pass the url in the options argument to load()
    esriLoader.load({ url: 'https://js.arcgis.com/3.20compact' }).catch(err => {
      // do something with the error
    })
  },

  didTransition () {
    this._super(...arguments)
    this._trackPage()
  }
})
