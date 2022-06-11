<template>
    <h2>{{ friend.name }}</h2>
    <button v-on:click="toggleDetails">{{detailsToggleStatus ? 'Hide' : 'Show'}}</button>
    <ul v-if="detailsToggleStatus">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            detailsToggleStatus: false,
            friend: {
                id: 1,
                name: "Manuel Lorenz",
                phone: "01234 5678 991",
                email: "manuel@localhost.com",
            },
        };
    },

    methods: {
        toggleDetails() {
            this.detailsToggleStatus = !this.detailsToggleStatus;
        }
    }
};
</script>