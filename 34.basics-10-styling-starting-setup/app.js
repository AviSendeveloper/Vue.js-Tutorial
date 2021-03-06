const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },

    methods: {
        changeColor(box) {
            if (box == 'A') {
                if (this.boxASelected == false) {
                    this.boxASelected = true;
                } else {
                    this.boxASelected = false;
                }
            } else if (box == 'B') {
                if (this.boxBSelected == false) {
                    this.boxBSelected = true;
                } else {
                    this.boxBSelected = false;
                }
            } else if (box == 'C') {
                if (this.boxCSelected == false) {
                    this.boxCSelected = true;
                } else {
                    this.boxCSelected = false;
                }
            }

            // Another way
            // if (box == 'A') {
            //     this.boxASelected = !this.boxASelected;
            // } else if (box == 'B') {
            //     this.boxBSelected = !this.boxBSelected;
            // } else if (box == 'C') {
            //     this.boxCSelected = !this.boxCSelected;
            // }
        }
    }
});

app.mount('#styling')