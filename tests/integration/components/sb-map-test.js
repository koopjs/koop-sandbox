import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('sb-map', 'Integration | Component | sb map', {
  integration: true
})

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value')
  // Handle any actions with this.on('myAction', function(val) { ... })

  this.render(hbs`{{sb-map}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#sb-map}}
      template block text
    {{/sb-map}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
