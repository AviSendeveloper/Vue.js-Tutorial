const app = Vue.createApp({
    data() {
        return {
            input: '',
            user1Style: false,
            user2Style: false,
        }
    },

    compounds: {
        ApplyClass() {
            return {
                user1: this.input === 'user1',
                user2: this.input === 'user2',
            }
        }
    },

    methods: {
        changeStyle() {
            console.log('Working');
            if (this.input == 'user1') {
                this.user1Style = true;
            } else if (this.input == 'user2') {
                this.user2Style = true;
            }
        }
    }
});

app.mount('#assignment')