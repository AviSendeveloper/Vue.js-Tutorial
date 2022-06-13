const app = Vue.createApp({
    data() {
        return {
            name : 'Developer',
            age : 24,
            imageUrl : "https://static.remove.bg/remove-bg-web/6ad52d54336ad62d58e7bd1317d40fb98e377ad5/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
            text : 'hello'
        }
    },

    methods : {
        getRandomNumber() {
            const number = Math.random();
            if (number > 0.5) {
                return favNumber = 1;
            } else {
                return favNumber = 0;
            }
        }
    }
});

app.mount('#assignment');