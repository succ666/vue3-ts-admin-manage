<template>
  <div class="login-box">
    <span class="title">登录灾备云</span>
    <div class="main">
      <div class="poster">
        <img src="../../assets/fenghuangshuju.jpg">
      </div>
      <a-form
        :model="formState"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item>
          <a-input v-model:value="formState.username" placeholder="手机号码/邮箱地址/用户名" size="large">
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input-password v-model:value="formState.password" placeholder="登录密码" size="large">
            <template #prefix>
              <lock-outlined />
            </template>
          </a-input-password>
        </a-form-item>
        <div class="login-form-wrap">
          <a-form-item>
            <a-checkbox
              v-model:checked="formState.remember"
            >保持登录状态</a-checkbox>
          </a-form-item>
          <a href="">短信验证码登录</a>
        </div>
        <a-form-item>
          <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button" size="large">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed} from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { router } from "@/router";
interface FormState {
  username: string,
  password: string,
  remember: boolean
}

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined
  },
  setup(){
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
      router.push({ name: 'home'})

    };
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled
    };
  }
})
</script>

<style>
.login-box{
  width: 970px;
  height: 416px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.title{
  display: block;
  text-align: center;
  height: 65px;
  line-height: 65px;
  font-weight: 800;
  font-size: 22px;
}
.main{
  background-color: #fff;
  display: flex;
  height: 350px;
}
.poster{
  width: 550px;
  padding: 40px;
}
.poster img{
  width: 450px;
  height: 250px;
}
.login-form{
  width: 420px;
  padding: 40px;
}
.login-form-wrap{
  display: flex;
  justify-content: space-between;
}
.login-form-button{
  width: 100%;
}
</style>
