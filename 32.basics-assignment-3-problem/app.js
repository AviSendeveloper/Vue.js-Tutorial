const app = Vue.createApp({
    data() {
        return {
            value: 0,
            result: '',
        }
    },

    methods: {
        getValue(number) {
            this.value = this.value + number;

            /*
                we can work with this as well
                but we should not do it, there is no extra benefit from it
            */
            // if (this.value < 37) {
            //     this.result = "Not there yet";
            // } else if (this.value == 37) {
            //     this.result = "Exactly same";
            // } else {
            //     this.result = "Too much";
            // }
        }
    },

    computed: {
        getRersult() {
            if (this.value < 37) {
                return "Not there yet";
            } else if (this.value == 37) {
                return "Exactly same";
            } else {
                return "Too much";
            }
        }
    },

    watch: {
        getRersult() {
            const that = this;
            console.log('Executed');
            setTimeout(function () {
                console.log('Executed setTimeout');
                that.value = 0;
            }, 5000);
        }
    }
});

app.mount('#assignment');