import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('sb-notebook', 'Integration | Component | sb notebook', {
  integration: true
})

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value')
  // Handle any actions with this.on('myAction', function(val) { ... })

  this.render(hbs`{{sb-notebook}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#sb-notebook}}
      template block text
    {{/sb-notebook}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
