<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const stroe = useStore()
const squareUrl = ref(
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F2021%2Fedpic_source%2Fd3%2F24%2F6e%2Fd3246e32e81b9a74b5f932192a4f49d3_15.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651117059&t=311deedaf8e31c31132101c6f05f6fba'
)

const logout = () => {
  stroe.dispatch('app/logout')
}
</script>

<style lang="scss" scoped>
// 深度选择器
::v-deep .el-dropdown-menu__item {
  white-space: nowrap;
}
</style>
