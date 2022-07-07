<template>
  <li>
    <h2>{{ name }} ({{ isFavourite ? 'Favourite' : 'Not favourite'}})</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavourite">Change Favourite Status</button>
    <button @click="$emit('delete', id)">Delete</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavourite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value) {
      //   return value == '1' || value == '0';
      // }
    }
  },

  emits: ['toggle-favourite'],
  // emits: {
  //   'toggle-favourite': function(id) {
  //     // any logic
  //     if (id) {
  //       return true;
  //     } else {
  //       consol.warn('Id is missing');
  //       return false;
  //     }
  //   }
  // },

  data() {
    return {
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavourite() {
      this.$emit('toggle-favourite', this.id);
    }
  },
};
</script>