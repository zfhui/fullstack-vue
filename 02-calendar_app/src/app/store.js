import Vue from 'vue';
import { seedData } from './seed.js';

export const store = {
  state: {
    seedData
  },
  getActiveDay () {
    return this.state.seedData.find((day) => day.active);
  },
  setActiveDay (dayId) {
    this.state.seedData.map((dayObj) => {
      dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
    });
  },
  submitEvent (eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({ "details": eventDetails, "edit": false });
  },
  editEvent (dayId, eventDetails) {
    this.resetEditOfAllEvents();

    const dayObj = this.state.seedData.find(day => day.id === dayId);
    const eventObj = dayObj.events.find(event => event.details === eventDetails );

    eventObj.edit = true;
  },
  resetEditOfAllEvents () {
    this.state.seedData.map((dayObj) => {
      dayObj.events.map((event) => {
        event.edit = false;
      });
    });
  },
  updateEvent (dayId, originalEventDetails, updatedEventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayId);
    const eventObj = dayObj.events.find(event => event.details === originalEventDetails );

    eventObj.details = updatedEventDetails;
    eventObj.edit = false;
  }
}
