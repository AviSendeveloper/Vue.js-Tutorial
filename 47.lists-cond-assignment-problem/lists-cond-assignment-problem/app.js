const app = Vue.createApp({
    data() {
        return {
            insertedInput: '',
            tasks: [],
            toggeleStatus: false,
        }
    },

    methods: {
        addTask() {
            this.tasks.push(this.insertedInput);
            this.insertedInput = ''
        },

        toggleList() {
            this.toggeleStatus = !this.toggeleStatus;
        }
    }
});

app.mount('#assignment');