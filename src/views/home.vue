<template>
<el-container class="container">
  <el-header class="header">
    <el-row>
        <el-col :span="4">
            <img src="../assets/logo.png" alt="">
        </el-col>
        <el-col :span="19" class="middle">
            <h2>电商管理系统</h2>
        </el-col>
        <el-col :span="1">
            <a href="#" 
            class="loginout"
            @click.prevent="handeleSignout()"
            >退出</a>
        </el-col>
    </el-row>
  </el-header>
  <el-container>
    <el-aside class="aside" width="200px">
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :router="true" >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
          <el-menu-item index="/users"><i class="el-icon-menu"></i>用户列表</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
          <el-menu-item index="2-1"><i class="el-icon-menu"></i>角色列表</el-menu-item>
          <el-menu-item index="2-2"><i class="el-icon-menu"></i>权限列表</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
          <el-menu-item index="3-1"><i class="el-icon-menu"></i>商品列表</el-menu-item>
          <el-menu-item index="3-2"><i class="el-icon-menu"></i>分类参数</el-menu-item>
          <el-menu-item index="3-3"><i class="el-icon-menu"></i>商品分类</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
          <el-menu-item index="4-1"><i class="el-icon-menu"></i>订单列表</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据统计</span>
        </template>
          <el-menu-item index="5-1"><i class="el-icon-menu"></i>数据列表</el-menu-item>
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-main class="main">Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
    //判断用户是否登录，如果没有登录就直接跳转到登录页
    beforeCreate() {
        //获取token值
        const token = sessionStorage.getItem('token')
        if(!token) {
            //跳转
            this.$router.push({name: 'login'})
            this.$message.warning('请先登录');
        }
    },
    methods: {
        //处理退出登录
        handeleSignout() {
            //清楚touken
            sessionStorage.clear()
            //页面跳回去
            this.$router.push({name: 'login'})
            //提示
            this.$message.success('退出成功');
        }
    }
    
};
</script>

<style>
.container {
  height: 100%;
}

.header {
  background-color: #b3c0d1;
}

.aside {
  background-color: #d3dce6;
}

.main {
  background-color: #e9eef3;
  height: 100%;
}
.header .middle {
  line-height: 60px;
  color: #fff;
  text-align: center;
}
.header .loginout {
  line-height: 60px;
  text-decoration: none;
}
h2 {
  margin: 0;
  padding: 0;
}
</style>
