const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: '',
      lastName: '',
      fromInput: '',
    };
  },

  watch: {
    counter(value) {
      const that = this;
      setTimeout(function(){
        that.counter = 0;
      }, 2000);
    }
  },

  computed: {
    getFullName() {
      const lastName = this.lastName;
      const firstName = this.firstName;
      console.log('Execute again');

      if (firstName === '' || lastName === '') {
        return '';
      }

      return firstName + ' ' + lastName ;
    },
  },

  methods: {
    resetName() {
      this.firstName = '';
      this.lastName = '';
    },

    getCount($method) {
      // adding or substracting counter value
      if ($method == 'add') {
        this.counter = this.counter + 1;
      }
      else if ($method == 'reduce') {
        this.counter = this.counter - 1;
      }

      // return this.checkCounter();
    },

    // check if counter value not geting negetive value
    checkCounter() {
      if (this.counter < 0) {
        this.counter = 0;
      }
    },

    getFormInput(event) {
      this.fromInput = event.target.value;
    },

    submitForm() {
      alert(this.fromInput);
    },
  }
});

app.mount('#events');
