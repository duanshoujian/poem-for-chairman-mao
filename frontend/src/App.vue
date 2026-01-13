<template>
  <div class="min-h-screen bg-gray-50 pb-[50px]">
    <van-nav-bar title="Vue3 + Vant 示例" fixed />
    
    <div class="pt-[46px] px-4 py-4">
      <van-cell-group inset>
        <van-cell title="欢迎使用" value="Vue3 + Vant" />
        <van-cell title="当前计数" :value="count.toString()" />
      </van-cell-group>

      <div class="flex gap-3 my-5 mx-4">
        <van-button type="primary" class="flex-1" @click="increment">增加</van-button>
        <van-button type="danger" class="flex-1" @click="decrement">减少</van-button>
        <van-button type="default" class="flex-1" @click="reset">重置</van-button>
      </div>

      <van-cell-group inset class="mt-5">
        <van-cell title="通知示例" is-link @click="handleShowNotify" />
        <van-cell title="对话框示例" is-link @click="handleShowDialog" />
        <van-cell title="Toast 示例" is-link @click="handleShowToast" />
      </van-cell-group>

      <van-tabbar v-model="activeTab" fixed>
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
        <van-tabbar-item icon="friends-o">朋友</van-tabbar-item>
        <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  showNotify,
  showDialog,
  showToast
} from 'vant'

const count = ref<number>(0)
const activeTab = ref<number>(0)

const increment = (): void => {
  count.value++
}

const decrement = (): void => {
  count.value--
}

const reset = (): void => {
  count.value = 0
  showToast('已重置')
}

const handleShowNotify = (): void => {
  showNotify({
    type: 'success',
    message: '这是一个通知示例',
    duration: 2000
  })
}

const handleShowDialog = (): void => {
  showDialog({
    title: '提示',
    message: '这是一个对话框示例',
  })
}

const handleShowToast = (): void => {
  showToast({
    type: 'success',
    message: '这是一个 Toast 示例',
    duration: 2000
  })
}
</script>

