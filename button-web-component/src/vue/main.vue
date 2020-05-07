<style scoped>
div {
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

wc-button {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

<template>
  <div class="app-wrapper">
    <h1>Vue</h1>
    <wc-button type="primary">Primary button</wc-button>
    <wc-button disabled>Disabled button</wc-button>
    <wc-button type="icon">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/64px-Vue.js_Logo_2.svg.png"
      />
    </wc-button>
  </div>
</template>