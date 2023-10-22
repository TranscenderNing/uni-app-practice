<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import CategoryPanel from '@/pages/index/components/CategoryPanel'
import HotPanel from '@/pages/index/components/HotPanel'
import PageSkeleton from '@/pages/index/components/PageSkeleton.vue'
import { getHomeBannerAPI, getCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '../../types/component'
import { useGuessList } from '@/composables/index'


// 存储轮播图数据
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])


const isTriggered = ref<boolean>(false)
let isLoading = ref<boolean>(false)

// 获取首页轮播图数据
const getHomeBannerData = async () => {
  let res = await getHomeBannerAPI()
  bannerList.value = res.result
  console.log('bannerList', bannerList.value)
}

// 获取首页分类数据
const getCategoryData = async () => {
  let res = await getCategoryAPI()
  categoryList.value = res.result
}

// 获取首页热门推荐数据
const getHotData = async () => {
  let res = await getHomeHotAPI()
  hotList.value = res.result
}


const { guessRef, onScrolltolower } = useGuessList()


// 滚动刷新事件
const onRefresh = async () => {
  console.log('下拉刷新 重新从后端获取数据')
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([getHomeBannerData(), getCategoryData(), getHotData(), guessRef.value?.getGuessData()])
  isTriggered.value = false
}

// 生命周期函数 
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getCategoryData(), getHotData()])
  isLoading.value = false
})

</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />


  <PageSkeleton v-if="isLoading" />
  <template v-else>
    <!-- 滚动容器 -->
    <scroll-view class="scroll-view" @scrolltolower="onScrolltolower" @refresherrefresh="onRefresh" refresher-enabled
      :refresher-triggered="isTriggered" scroll-y>
      <!-- 自定义轮播图 -->
      <XtxSwiper :bannerList="bannerList" />
      <!-- 分类 -->
      <CategoryPanel :categoryList="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :hotList="hotList" />
      <!-- 猜你喜欢全局组件 -->
      <XtxGuess ref="guessRef" />
    </scroll-view>
  </template>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}


.scroll-view {
  flex: 1;
}
</style>
