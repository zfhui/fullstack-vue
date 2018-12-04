const ButtonRow = {
  template: `
    <div>
      <button @click="onHoodieClick" class="ui button">Hoodie</button>
      <button @click="onTeeClick" class="ui button">Tee</button>
      <button @click="onFittedCapClick" class="ui button">FittedCap</button>
      <button @click="onJacketClick" class="ui button">Jacket</button>
    </div>`,
    methods: {
      onHoodieClick(evt) {
        console.log('The user clicked button-hoodie', evt);
      },
      onTeeClick(evt) {
        console.log('The user clicked button-tee', evt);
      },
      onFittedCapClick(evt) {
        console.log('The user clicked button-fitted-cap', evt);
      },
      onJacketClick(evt) {
        console.log('The user clicked button-hacket', evt);
      }
    }
}

new Vue({
  el: '#app',
  components: {
    'button-row': ButtonRow
  }
})
