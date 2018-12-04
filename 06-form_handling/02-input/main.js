const InputForm = {
  template: `
    <div class="input-form">
      <form class="ui form">
        <div class="field">
          <input ref="newItem" type="text" placeholder="Add an item!">
        </div>
        <button class="ui button">Submit</button>
      </form>
    </div>
  `
}

new Vue({
  el: '#app',
  components: {
    'input-form': InputForm
  }
})
