Vue.createApp({
    data() {
        return {
            messages : [],
            enteredValue : ''
        }
    },

    methods : {
        getMsg() {
            this.messages.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');