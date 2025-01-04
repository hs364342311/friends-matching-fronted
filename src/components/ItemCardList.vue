<!-- 用户卡片列表公共组件 -->
<template>
  <van-grid :column-num="1">
    <van-skeleton title avatar :row="3" :loading="props.loading" v-for="item in props.itemList">
      <van-space direction="vertical" style="padding: 6px; background: #f3f2f5">
        <van-grid-item>
          <van-cell-group inset>
            <van-cell title="物品类型">
              <template #value>
                <div v-html="item.itemType" class="supervise-text"></div>
              </template>
            </van-cell>
            <van-cell title="关键词品名">
              <template #value>
                <div v-html="item.itemKey" class="supervise-text"></div>
              </template>
            </van-cell>
            <van-cell title="监管要求">
              <template #value>
                <div v-html="item.supervise" class="supervise-text"></div>
              </template>
            </van-cell>
            <van-cell title="规定依据">
              <template #value>
                <div v-html="item.stipulate" class="supervise-text"></div>
              </template>
            </van-cell>
          </van-cell-group>
        </van-grid-item>
      </van-space>
    </van-skeleton>
  </van-grid>
  <van-back-top bottom="12vh"/>


</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {ItemType} from "../models/item";

const router = useRouter();

const store = useStore();

// 定义组件属性
interface ItemCardListProps {
  loading: boolean;
  itemList: ItemType[];
}

const props = withDefaults(defineProps<ItemCardListProps>(), {
  loading: true, // 默认显示加载中（骨架屏）
  // @ts-ignore
  itemList: [] as ItemType[],
});

/**
 * 查看物品详情
 */
const itemDetails = (item: ItemType) => {
  store.commit('updateItem', item); // 更新存储的当前用户数据
  router.push('/item/details')
}

</script>

<style scoped>
.custom-card {
  border: 1px solid #e0e0e0; /* 轻微的灰色边框 */
  background-color: white; /* 白色背景 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 轻微的阴影 */
  transition: box-shadow 0.3s ease-in-out; /* 阴影过渡效果 */
  cursor: pointer;
  color: #333; /* 文字颜色 */
  margin-bottom: 10px; /* 增加卡片底部的外边距 */
}

.custom-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* 鼠标悬停时更深的阴影 */
}

.supervise-text {
  text-align: left;
}
</style>
