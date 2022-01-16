<template>
  <div>
    <el-form class="LoginFormContainer">
      <h3 style="text-align: center">系统登录</h3>
      <el-form-item label="姓名" label-width="50px">
        <el-input type="text" v-model="LoginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="50px">
        <el-input type="password" v-model="LoginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label-width="50px">
        <el-checkbox v-model="LoginForm.checked">记住我</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      LoginForm: {
        username: 'admin',
        password: '123456',
        code: '',
        checked: ''
      }
    }
  },
  created () {
  },
  methods: {
    submitLogin () {
      console.log('process.env.VUE_APP_MOCKING------------', process.env.VUE_APP_MOCKING)
      axios.post('/api/users/login')
        .then(res => {
          console.log('mock data ----------------', res.data)
          this.$router.push('/home')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.LoginFormContainer {
  border-radius: 15px; // 给div元素添加圆角的边框
  background-clip: padding-box; // 指定绘图区的背景
  margin: 380px auto; // 一个声明中设置所有外边距属性，该属性可以有1到4个值 上边距 右边距 下边距 左边距
  width: 350px;
  padding: 15px 35px 15px 35px; // （填充）是一个简写属性，定义元素边框与元素内容之间的空间，即上下左右的内边距
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>
