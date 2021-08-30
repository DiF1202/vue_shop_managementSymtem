<!--
 * @Author: your name
 * @Date: 2021-08-31 00:28:59
 * @LastEditTime: 2021-08-31 00:40:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\src\components\home.vue
-->
<template>
  <div>
    Home 组件
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped></style>
