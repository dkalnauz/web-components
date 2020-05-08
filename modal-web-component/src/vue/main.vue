<script>
import { log } from "util";
export default {
  props: {
    expanded: Boolean
  },
  methods: {
    handleCloseModalCallback() {
      isModalVisible = false;
    },
    showModal() {
      this.expanded = true;
    },
    hideModal() {
      this.expanded = false;
      this.$emit('closeCallback');
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
</style>

<template>
  <div class="app-wrapper">
    <h1>Vue</h1>
    <my-modal :expanded="expanded ? '': null" @click="hideModal">
      <modal-header slot="header">Modal header</modal-header>
      <modal-content
        slot="content"
      >Nullam neque sapien, tempor ut euismod vel, dapibus id arcu. Praesent ut tristique nunc, nec faucibus libero. Phasellus nec lectus sit amet diam.</modal-content>
    </my-modal>
    <my-button type="primary" @click="showModal">Show plain text</my-button>
  </div>
</template>