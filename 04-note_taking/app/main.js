const inputComponent = {
  template: `<input placeholder='Enter a note' class="input is-small" type="text" />`,
}

const state = {
  notes: [],
  timestamps: []
}

const mutations = {
  ADD_NOTE (state, payload) {
    let newNote = payload;
    state.notes.push(newNote);
  },
  ADD_TIMESAMP (state, payload) {
    let newTimeStamp = payload;
    state.timestamps.push(newTimeStamp);
  }
}

const actions = {
  addNote (constxt, payload) {
    context.commit('ADD_NOTE', payload);
  },
  addTimeStamp (constxt, payload) {
    context.commit('ADD_TIMESAMP', payload);
  }
}

const getters = {
  getNotes: state => states.notes,
  getTimestamps: state => states.timestamps,
  getNoteCount: state => states.notes.length
}


const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

new Vue({
  el: '#app',
  store, 
  components: {
    'input-component': inputComponent
  }
})
