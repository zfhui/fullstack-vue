const inputComponent = {
  template: `<input :placeholder="placeholder" class="input is-small" type="text" />`,
  props: ['placeholder']
}

new Vue({
  el: '#app',
  components: {
    'input-component': inputComponent
  },
  data: {
    notes: [],
    timestamps: [],
    placeholder: 'Enter a note'
  }
})
