<!-- 搜索结果页 -->
<template>
  <!-- 搜索 -->
  <van-row>
    <van-col span="6">
      <van-dropdown-menu>
        <van-dropdown-item v-model="itemTypeValue" :options="itemTypeOption" @change="onItemTypeChange"/>
      </van-dropdown-menu>
    </van-col>
    <van-col span="18">
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
    </van-col>
  </van-row>
  <van-empty v-if="!itemListPage || itemListPage.length < 1" description="搜索结果为空"/>
  <!--  <van-empty v-if="!itemListPage || itemListPage.length < 1" description="搜索结果为空" image="/public/1.png"/>-->
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
const itemTypeValue = ref('');
const itemTypeOption = ref([
  {text: '全部类型', value: ''}
]);

// 组件加载完成后查找标签符合的用户
onMounted(async () => {
  getPage(1);
  getItemTypeList();
});

const onSearch = () => {
  itemListPage.value = [];
  getPage(1, itemTypeValue.value);
}
const onItemTypeChange = (value) => {
  getPage(1, value);
}
const getPage = async (pageNo, selectItemTypeValue) => {
  const response = await myAxios.get('/search/v1/forbiddenGoodsIndex/page', {
    params: {
      keyword: searchKeyWord.value,
      itemType: selectItemTypeValue,
      pageNo: pageNo,
      pageSize: itemsPerPage.value,
    },
    // 解析参数使得后端集合能够接收到 ?hobbies=["coding","reading","music"]
    paramsSerializer: params => qs.stringify(params, {indices: false})
  });
  if (response?.data) {
    itemListPage.value = response.data.list;
    totalItem.value = response.data.totalCount;
  } else {
    itemListPage.value = [];
  }
  loading.value = false;
}
// 改变页码时触发
const changePage = () => {
  getPage(currentPage.value);
}
// 获取物品列表
const getItemTypeList = async () => {
  const response = await myAxios.get('/search/v1/forbiddenGoodsIndex/typeList', {
    params: {},
    // 解析参数使得后端集合能够接收到 ?hobbies=["coding","reading","music"]
    paramsSerializer: params => qs.stringify(params, {indices: false})
  });
  if (response?.data) {
    let dic = response.data.map(value => ({text: value, value}));
    itemTypeOption.value = [...itemTypeOption.value, ...dic];
  }
}

</script>

<style scoped>

</style>
