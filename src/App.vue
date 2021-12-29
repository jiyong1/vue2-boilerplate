<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

type AppDataType = {
  message: string;
};

export default Vue.extend({
  data(): AppDataType {
    return {
      message: 'hi',
    };
  },
  methods: {
    test(text: number) {
      this.message = text;
    },
  },
  created() {
    this.test('dddd');
  },
});
</script>

<style scoped lang="scss">
div {
  p {
    font-size: 2rem;
  }
}
</style>
