<!-- 物品详情页 -->
<template>
  <div class="detail-page">
    <div class="detail-container">
      <!-- 页面头部 -->
      <div class="page-header">
<!--        <img src="../assets/logo.png" alt="海关logo" class="logo"/>-->
        <h1 class="page-title">行李物品通关规定查询</h1>
        <p class="page-subtitle"></p>
      </div>

      <!-- 搜索框 -->
      <div class="search-box">
        <van-search
            v-model="searchKeyword"
            placeholder="请输入物品名称"
            shape="round"
            background="#f7f8fa"
            input-align="left"
            clearable
            @search="onSearch"
        >
          <template #right-icon>
            <van-icon
              name="search"
              size="20"
              color="#1989fa"
              @click="onSearch"
              style="display: flex; align-items: center;"
            />
          </template>
        </van-search>
      </div>

      <!-- 默认提示卡片 -->
      <div class="tip-cards" v-if="!searchResult && !showEmptyResult">
        <div class="tip-card">
          <van-icon name="info-o" size="24" color="#1989fa"/>
          <div class="tip-content">
            <h3>查询提示</h3>
            <p>您可以输入物品名称（如：药品、管制刀具等）进行查询</p>
          </div>
        </div>
        <div class="tip-card">
          <van-icon name="guide-o" size="24" color="#1989fa"/>
          <div class="tip-content">
            <h3>温馨提醒</h3>
            <p>如需查询更多信息，请拨打海关服务热线<a class="service-phone" href="tel:12360">12360</a>。</p>
          </div>
        </div>
      </div>

      <!-- 搜索结果展示 -->
      <div class="result-container" v-if="searchResult">
        <div class="result-card">
          <div class="result-header">
            <h2>查询结果</h2>
            <van-icon 
              name="clear" 
              class="clear-icon" 
              @click="clearSearch"
            />
          </div>
          <div class="result-content">
            <div class="info-item">
              <div class="label">
                <van-tag type="primary" size="medium">品名</van-tag>
              </div>
              <div class="value" v-html="searchResult.itemKey"></div>
            </div>
            <div class="info-item">
              <div class="label">
                <van-tag type="primary" size="medium">监管要求</van-tag>
              </div>
              <div class="value" v-html="searchResult.supervise"></div>
            </div>
            <div class="info-item">
              <div class="label">
                <van-tag type="primary" size="medium">规定依据</van-tag>
              </div>
              <div class="value" v-html="searchResult.stipulate"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 无搜索结果提示 -->
      <div class="empty-result" v-if="showEmptyResult">
        <van-empty description="未找到相关物品">
          <template #image>
            <img src="../assets/custom-empty-image.png" />
          </template>
          <template #description>
            <p class="empty-tip">关于您搜索的物品，可以咨询海关服务热线  <a class="service-phone" href="tel:12360">12360</a></p>
          </template>
        </van-empty>
      </div>
    </div>

    <!-- 底部信息 -->
<!--    <div class="page-footer">-->
<!--      <div class="footer-item">-->
<!--        <img src="../assets/logo.jpg" alt="海关logo" class="footer-logo"/>-->
<!--        <span>中华人民共和国成都海关</span>-->
<!--      </div>-->
<!--      <div class="footer-item">-->
<!--        <img src="../assets/logo.jpg" alt="银行logo" class="footer-logo"/>-->
<!--        <span>中国银行</span>-->
<!--      </div>-->
<!--    </div>-->

    <!-- 多结果选择弹出层 -->
    <van-popup
        v-model:show="showItemList"
        position="center"
        round
        closeable
        transition="van-fade"
        :style="{ width: '90%', maxHeight: '80%' }"
    >
      <div class="popup-container">
        <div class="popup-header">
          <h3 class="popup-title">请选择查询物品</h3>
          <div class="popup-subtitle">找到 {{ totalCount }} 条相关结果</div>
        </div>
        <div class="popup-content">
          <van-cell-group inset>
            <van-cell
                v-for="item in itemList"
                :key="item.id"
                clickable
                @click="selectItem(item)"
                :style="{ padding: '16px' }"
            >
              <template #title>
                <div class="item-name" v-html="item.itemKey"></div>
              </template>
              <template #right-icon>
                <van-icon name="arrow" />
              </template>
            </van-cell>
          </van-cell-group>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import myAxios from '../plugins/myAxios.ts';

const searchKeyword = ref('');
const searchResult = ref(null);
const showEmptyResult = ref(false);
const showItemList = ref(false);
const itemList = ref([]);
const totalCount = ref(0);

// 组件挂载时滚动到顶部
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'instant' // 使用 'instant' 而不是 'smooth' 以确保立即滚动
  });
});

const onSearch = async () => {
  if (!searchKeyword.value) {
    showEmptyResult.value = false;
    searchResult.value = null;
    return;
  }

  try {
    const response = await myAxios.get('/search/v1/forbiddenGoodsIndex/page', {
      params: {
        keyword: searchKeyword.value,
        pageNo: 1,
        pageSize: 10
      }
    });

    if (response?.data?.list?.length > 0) {
      if (response.data.list.length === 1) {
        // 只有一条结果时直接显示
        searchResult.value = response.data.list[0];
        showEmptyResult.value = false;
        showItemList.value = false;
      } else {
        // 多条结果时显示选择列表
        itemList.value = response.data.list;
        totalCount.value = response.data.totalCount;
        showItemList.value = true;
        showEmptyResult.value = false;
        searchResult.value = null;
      }
    } else {
      searchResult.value = null;
      showEmptyResult.value = true;
      showItemList.value = false;
    }
  } catch (error) {
    console.error('搜索失败:', error);
    searchResult.value = null;
    showEmptyResult.value = true;
    showItemList.value = false;
  }
};

const selectItem = (item) => {
  searchResult.value = item;
  showItemList.value = false;
};

const clearSearch = () => {
  searchKeyword.value = '';
  searchResult.value = null;
  showEmptyResult.value = false;
  showItemList.value = false;
};
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  background: url('../assets/blue-bg.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 16px;
}

.detail-container {
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 80px; /* 为底部留出空间 */
}

.search-box {
  margin: 0 auto 20px;
  background: white;
  border-radius: 20px;
  padding: 8px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* :deep() 是 Vue 3 中的深度选择器
它用于修改第三方组件或子组件的样式
在这里用于覆盖 Vant UI 组件库中的默认样式
没有 :deep 的话，由于 scoped 样式的限制可能无法生效 */

:deep(.van-search) {
  padding: 0;
}

:deep(.van-search__content) {
  background: transparent;
  border-radius: 20px;
  height: 36px;
}

:deep(.van-field__control) {
  font-size: 14px;
  text-align: left;
}

:deep(.van-field__control::placeholder) {
  /* ::placeholder 是一个伪元素选择器，用于设置输入框的占位符文本样式 */
  /* 这里设置了占位符文本的颜色为浅灰色(#999)，并且左对齐显示 */
  color: #999;
  text-align: left;
}

:deep(.van-cell) {
  padding: 0;
  line-height: 36px;
}

.result-container {
  animation: fadeIn 0.3s ease-in-out;
}

.result-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.result-header {
  background: #1989fa;
  color: white;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.result-header h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
}

.clear-icon {
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.clear-icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.result-content {
  padding: 16px;
}

.info-item {
  margin-bottom: 20px;
}

.info-item:last-child {
  margin-bottom: 0;
}

.label {
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
}

.value {
  color: #333;
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-wrap;
}

.empty-result {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 32px 16px;
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;
}

.empty-tip {
  color: #666;
  font-size: 14px;
  margin: 16px 0 8px;
}

.service-phone {
  color: #1989fa;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
}

/* 弹出层样式 */
.popup-container {
  padding: 20px 0;
}

.popup-header {
  text-align: center;
  padding: 0 16px 16px;
  border-bottom: 1px solid #f5f5f5;
}

.popup-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #323233;
}

.popup-subtitle {
  margin-top: 8px;
  font-size: 14px;
  color: #969799;
}

.popup-content {
  max-height: 60vh;
  overflow-y: auto;
}

.item-name {
  font-size: 14px;
  line-height: 1.4;
  margin-top: 4px;
  color: #666;
}

:deep(.van-popup) {
  max-height: 70vh;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 移动端适配 */
@media (max-width: 768px) {
  .detail-page {
    padding: 12px;
  }

  .detail-container {
    padding-top: 12px;
  }

  .result-header h2 {
    font-size: 16px;
  }

  .label {
    font-size: 13px;
  }

  .value {
    font-size: 14px;
  }

  .popup-header h3 {
    font-size: 16px;
  }

  .item-name {
    font-size: 13px;
  }

  .page-title {
    font-size: 20px;
  }

  .tip-card {
    padding: 16px;
  }

  .footer-item {
    font-size: 12px;
  }

  .footer-logo {
    width: 20px;
    height: 20px;
  }
}

/* 原有样式保持不变，添加新的样式 */
.page-header {
  text-align: center;
  margin-bottom: 14px;
  padding: 20px 0;
}

.logo {
  width: 60px;
  height: 60px;
  margin-bottom: 16px;
}

.page-title {
  font-size: 24px;
  color: #333;
  margin: 0 0 8px;
  font-weight: 600;
}

.page-subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.tip-cards {
  margin-top: 30px;
}

.tip-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-start;
}

.tip-content {
  margin-left: 16px;
  flex: 1;
}

.tip-content h3 {
  font-size: 16px;
  color: #333;
  margin: 0 0 8px;
  font-weight: 500;
}

.tip-content p {
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  padding: 12px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.footer-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
}

.footer-logo {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.service-phone {
  display: inline-block;
  color: #1989fa;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  margin-top: 8px;
}
</style>
