<template>
    <a-button type="primary" @click="info">Display normal message</a-button>
  </template>
  <script>
  import { message } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    setup() {
      const info = () => {
        message.info('This is a normal message');
      };
  
      return {
        info,
      };
    },
  
  });
  </script>