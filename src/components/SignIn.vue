<template>
  <a-form class="aform " :model="formState" name="basic" :wrapper-col="{span: 24 }" autocomplete="off"
    @finish="onFinish" @finishFailed="onFinishFailed">
    <a-form-item name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
      <a-input v-model:value="formState.username" placeholder="用户名" />
    </a-form-item>

    <a-form-item name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
      <a-input-password v-model:value="formState.password" placeholder="密码" />
    </a-form-item>

    <a-form-item name="remember">
      <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
    </a-form-item>

    <a-form-item class="asub" :wrapper-col="{span: 24 }">
      <a-button type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  setup() {
    const formState = reactive({
      username: '',
      password: '',
      remember: true,
    });

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },

});
</script>

<style scoped>
.asub {
  text-align: center;
}

.aform{
  margin: 2rem auto 0 auto;
  max-width: 17rem;
  min-width: 13.5rem;
}

</style>