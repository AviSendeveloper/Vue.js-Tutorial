const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
      confirmedName : '',
      fromInput : '',
    };
  },

  methods : {
    getFormInput(event) {
      this.fromInput = event.target.value;
    },
    
    submitForm() {
      alert(this.fromInput);
    },

    getConfirmedName() {
      this.confirmedName = this.name;
    },

    getName(event) {
      this.name = event.target.value;
    },

    getCount($method) {
      // adding or substracting counter value
      if($method == 'add') {
        this.counter = this.counter + 1;
      }
      else if($method == 'reduce') {
        this.counter = this.counter - 1;
      }

      return this.checkCounter();
    },

    // check if counter value not geting negetive value
    checkCounter() {
      if (this.counter < 0) {
        this.counter = 0;
      }
    }
  }
});

app.mount('#events');
