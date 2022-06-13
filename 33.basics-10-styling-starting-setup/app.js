const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },

    methods: {
        selectBox(boxName) {
            if (boxName == 'A') {
                if (this.boxASelected == false) {
                    this.boxASelected = true;
                } else {
                    this.boxASelected = false;
                }
            } else if (boxName == 'B'){
                if (this.boxBSelected == false) {
                    this.boxBSelected = true;
                } else {
                    this.boxBSelected = false;
                }
            } else if (boxName == 'C') {
                if (this.boxCSelected == false) {
                    this.boxCSelected = true;
                } else {
                    this.boxCSelected = false;
                }
            }
        }
    }
});

app.mount('#styling');