<template>
<div class="login-wrap">
    <el-form   
    label-position="top" 
    label-width="80px"
    class="login-form">
    <h3>用户登录</h3>
  <el-form-item label="用户名" >
    <el-input v-model="formData.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formData.password"></el-input>
  </el-form-item>
   <el-button 
   type="primary"
   class="login-button"
   @click="handleLogin()">登录</el-button>
</el-form>
</div>
</template>

<script>
export default {
  data () {
    return {
        formData: {
            username:'',
            password: ''
        }
    }
  },
  methods: {
    async  handleLogin( ) {
          //发送表单请求
        const res = await  this.$http.post('login',this.formData)
        console.log(res)
        const {meta} = res.data;
            if(meta.status === 200) {
                //存储token值
                const token = res.data.data.token
                sessionStorage.setItem('token', token)
                // this.$message.success('登录成功')//为什么登录成功却不显示成功而是报错
                //登录成功后进行页面的跳转
                this.$router.push({name: 'home'})
            } else {
                this.$message.error(meta.msg);
            }
      }
  }
}
</script>

<style>
.login-wrap {
    background-color: #324152;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-wrap .login-form {
    background-color: #fff;
    width: 400px;
    padding: 30px;
    border-radius: 5px;
}
.login-wrap .login-form .login-button {
    width: 100%;
}
</style>
