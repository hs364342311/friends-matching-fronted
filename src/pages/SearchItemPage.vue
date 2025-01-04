<!-- 搜索结果页 -->
<template>
  <!-- 搜索 -->
  <van-search
      v-model="searchKeyWord"
      show-action
      placeholder="请输入搜索携带物品关键词"
      @search="onSearch"
  >
    <template #action>
      <div @click="onSearch">搜索</div>
    </template>
  </van-search>
  <van-empty v-if="!itemListPage || itemListPage.length < 1" description="搜索结果为空"/>
  <div v-else>
    <!-- 卡片列表 -->
    <item-card-list :item-list="itemListPage" :loading="loading"/>
    <!-- 分页 -->
    <van-divider/>
    <van-pagination
        v-model="currentPage"
        :total-items="totalItem"
        show-page-size="3"
        force-ellipses
        @change="changePage"
    />
  </div>

</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import myAxios from '../plugins/myAxios.ts';
import qs from 'qs';
import ItemCardList from "../components/ItemCardList.vue";

const route = useRoute(); // 获取查询参数

const {tags} = route.query;

const loading = ref(true); // 骨架屏加载效果

const currentPage = ref(1); // 当前页码
const totalItem = ref(); // 总记录数量
const itemsPerPage = ref(5); // 每页展示的记录数

const searchKeyWord = ref(''); // 搜素关键字
const itemListPage = ref();

// 组件加载完成后查找标签符合的用户
onMounted(async () => {
  getPage(1);
});

const onSearch = () => {
  itemListPage.value = [];
  getPage(1);
}
const  getPage = async (pageNo) => {
  const response = await myAxios.get('/search/v1/forbiddenGoodsIndex/page', {
    params: {
      keyword: searchKeyWord.value,
      pageNo: pageNo,
      pageSize: itemsPerPage.value,
    },
    // 解析参数使得后端集合能够接收到 ?hobbies=["coding","reading","music"]
    paramsSerializer: params => qs.stringify(params, {indices: false})
  });
  if (response?.data) {
    response.data.list.forEach(item => {

    });
    itemListPage.value = response.data.list;
    totalItem.value = response.data.totalCount;
  } else {
  }
  loading.value = false;
}
// 改变页码时触发
const changePage = () => {
  getPage(currentPage.value);
}

</script>

<style scoped>

</style>
