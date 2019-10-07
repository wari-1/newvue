<template>
  <div>
    <input type="text" v-model="firstName" ref="firstInput" v-change="true" />
    <input type="text" v-model="lastName" />
    <input type="text" v-model="fullName" />
    <span>{{fullName}}</span>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      firstName: "zz",
      lastName: "xx"
    };
  },
  mounted() {
    // this.$refs.firstInput.focus();
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newVal) {
        if (newVal.split(" ").length > 1) {
          this.firstName = newVal.split(" ")[0];
          this.lastName = newVal.split(" ")[1];
        }
      }
    }
  }
};
</script>

<style>
</style>
