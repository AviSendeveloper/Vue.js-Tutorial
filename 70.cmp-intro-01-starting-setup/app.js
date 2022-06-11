const app = Vue.createApp({
    data() {
        return {
            toggleDetailsStatus: false,
            friends: [
                {
                    id: 1,
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 2,
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    },

    methods: {
        toggleDetails() {
            this.toggleDetailsStatus = !this.toggleDetailsStatus;
        }
    }
});

app.mount('#app');