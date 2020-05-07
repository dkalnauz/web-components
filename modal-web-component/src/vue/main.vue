<script>
import { log } from "util";
export default {
  props: {
    isModalVisible: (Boolean = false)
  },
  methods: {
    handleCloseModalCallback() {
      log("test");
      isModalVisible = false;
    },
    showModal() {
      isModalVisible = true;
    }
  }
};
</script>

<style scoped>
div {
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

my-button {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

<template>
  <div class="app-wrapper">
    <h1>Vue</h1>
    <my-modal :expanded="isModalVisible" :closeCallback="isModalVisible=false">
      <modal-header slot="header">Modal header</modal-header>
      <modal-content
        slot="content"
      >Nullam neque sapien, tempor ut euismod vel, dapibus id arcu. Praesent ut tristique nunc, nec faucibus libero. Phasellus nec lectus sit amet diam.</modal-content>
    </my-modal>
    <my-button type="primary" @click="isModalVisible=true">Show plain text</my-button>
  </div>
</template>