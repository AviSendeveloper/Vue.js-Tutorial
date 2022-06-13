const app = Vue.createApp({
    data() {
        return {
            outputText : '',
            outputTextEnter : '',
        }
    },

    methods : {
        showAlert() {
            alert('Work successfully');
        },

        output(event) {
            this.outputText = event.target.value;
        },

        outputEnter(event) {
            this.outputTextEnter = this.outputText;
        },
    }
});

app.mount('#assignment')