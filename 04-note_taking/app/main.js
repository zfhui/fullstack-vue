const inputComponent = {
  template: `<input placeholder='Enter a note' class="input is-small" type="text" />`,
}

new Vue({
  el: '#app',
  components: {
    'input-component': inputComponent
  }
})
