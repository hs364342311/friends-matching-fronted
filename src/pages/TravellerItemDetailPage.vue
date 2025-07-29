<!-- 物品详情页 -->
<template>
  <div class="detail-page">
    <div class="detail-container">
      <!-- 页面头部 -->
      <div class="page-header">
        <div class="header-content">
          <img src="../assets/物品查询卡通人像.png" alt="海关人像" class="character-image"/>
          <div class="title-container">
            <h1 class="page-title">行李物品通关规定查询</h1>
          </div>
        </div>
        <img src="../assets/白云.png" alt="白云" class="cloud-image"/>
      </div>

      <!-- 搜索框 -->
      <div class="search-box">
        <van-search
            v-model="searchKeyword"
            placeholder="请输入物品名称"
            shape="round"
            background="transparent"
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
        <!-- 用户意见反馈入口 -->
        <div class="feedback-entrance">
          <van-button
            type="primary"
            size="normal"
            round
            icon="chat-o"
            @click="showFeedbackDialog = true"
            class="feedback-btn"
          >
            用户意见反馈
          </van-button>
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
            <!-- <div class="info-item">
              <div class="label">
                <van-tag type="primary" size="medium">规定依据</van-tag>
              </div>
              <div class="value" v-html="searchResult.stipulate"></div>
            </div> -->
          </div>
        </div>
        
        <!-- 搜索结果页面的反馈按钮 -->
        <div class="result-feedback">
          <van-button
            type="default"
            size="small"
            plain
            icon="chat-o"
            @click="showFeedbackDialog = true"
            class="result-feedback-btn"
          >
            意见反馈
          </van-button>
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
            <van-button
              type="primary"
              size="small"
              plain
              icon="chat-o"
              @click="showFeedbackDialog = true"
              class="empty-feedback-btn"
            >
              意见反馈
            </van-button>
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

    <!-- 用户意见反馈弹窗 -->
    <van-popup
        v-model:show="showFeedbackDialog"
        position="center"
        round
        closeable
        close-on-click-overlay
        :style="{ 
          width: '92%', 
          maxWidth: '420px',
          minHeight: '480px',
          maxHeight: '85vh'
        }"
        class="feedback-popup-wrapper"
    >
      <div class="feedback-popup">
        <div class="feedback-header">
          <van-icon name="chat-o" size="24" color="#1989fa" class="feedback-icon"/>
          <h3 class="feedback-title">用户意见反馈</h3>
          <p class="feedback-subtitle">您的宝贵意见将帮助我们改进服务</p>
        </div>
        
        <van-form @submit="submitFeedback" ref="feedbackFormRef">
          <div class="feedback-content">
            <van-field
              v-model="feedbackForm.content"
              type="textarea"
              label="意见建议"
              placeholder="请告诉我们您的问题或建议..."
              autosize
              :rules="[
                { required: true, message: '请填写您的意见建议' },
                { max: 50, message: '建议内容不能超过50字' }
              ]"
              :maxlength="50"
              show-word-limit
              class="feedback-textarea"
              name="content"
            />
            
            <van-field
              v-model="feedbackForm.contactInfo"
              label="联系方式"
              placeholder="请输入邮箱或手机号"
              class="feedback-contact"
              name="contactInfo"
            />
          </div>
          
          <div class="feedback-actions">
            <van-button
              block
              type="primary"
              native-type="submit"
              round
              :loading="feedbackLoading"
              loading-text="提交中..."
              class="submit-btn"
            >
              提交反馈
            </van-button>
          </div>
        </van-form>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { showToast, showSuccessToast } from 'vant';
import myAxios from '../plugins/myAxios.ts';
import {record} from "../api/moduleClick"

const searchKeyword = ref('');
const searchResult = ref(null);
const showEmptyResult = ref(false);
const showItemList = ref(false);
const itemList = ref([]);
const totalCount = ref(0);

// 意见反馈相关状态
const showFeedbackDialog = ref(false);
const feedbackLoading = ref(false);
const feedbackFormRef = ref(null);

// 使用reactive来确保对象属性的响应式
const feedbackForm = reactive({
  content: '',
  contactInfo: ''
});

// 组件挂载时滚动到顶部
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });
  record({
    moduleName: "行李物品通关规定查询",
    appVersion: "2",
    modulePath: "/traveller/item/detail"
  })
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
        appVersion: "2",
        pageNo: 1,
        pageSize: 10
      }
    });

    if (response?.data?.list?.length > 0) {
      if (response.data.list.length === 1) {
        searchResult.value = response.data.list[0];
        showEmptyResult.value = false;
        showItemList.value = false;
      } else {
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

// 验证联系方式（邮箱或手机号）
const validateContact = (value) => {
  if (!value) return false;
  
  // 邮箱正则
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // 手机号正则（简化版）
  const phoneRegex = /^1[3-9]\d{9}$/;
  
  return emailRegex.test(value) || phoneRegex.test(value);
};

// 提交意见反馈
const submitFeedback = async () => {
  if (feedbackLoading.value) return;
  
  feedbackLoading.value = true;
  
  try {
    // 构建请求参数，根据接口文档调整
    const requestData = {
      contactInfo: feedbackForm.contactInfo,
      feedbackType: "FEATURE_SUGGESTION",
      appVersion: "2", // 旅客版使用appVersion: "2"
      // 注意：接口文档中未明确说明反馈内容字段名，可能需要根据实际接口调整
      // 常见的字段名可能是：content、feedbackContent、suggestion 等
      suggestion: feedbackForm.content  // 如果接口不支持此字段，请联系后端确认正确的字段名
    };
    
    const response = await myAxios.post('/search/v1/userFeedback/insert', requestData);
    
    if (response?.success || response?.data === true) {
      showSuccessToast('反馈提交成功，感谢您的宝贵意见！');
      // 重置表单
      feedbackForm.content = '';
      feedbackForm.contactInfo = '';
      showFeedbackDialog.value = false;
    } else {
      showToast(response?.data?.msg || '提交失败，请稍后重试');
    }
  } catch (error) {
    console.error('提交反馈失败:', error);
    showToast('网络错误，请检查网络连接后重试');
  } finally {
    feedbackLoading.value = false;
  }
};
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  background: #7ed6fb;
  padding: 16px;
}

.detail-container {
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.page-header {
  position: relative;
  margin-bottom: 20px;
  padding: 20px 0;
  width: 100%;
}

.header-content {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  position: relative;
  z-index: 1;
}

.character-image {
  width: 80px;
  height: auto;
  margin-top: 10px;
}

.cloud-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: auto;
  z-index: 0;
}

.title-container {
  flex: 1;
  background: #00A0E9;
  border-radius: 16px;
  padding: 12px 10px;
  margin-top: 32px;
  box-shadow: 0 4px 8px rgba(0, 160, 233, 0.2);
}

.page-title {
  font-size: 24px;
  color: white;
  margin: 0;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
}

.search-box {
  background: white;
  border-radius: 20px;
  padding: 8px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

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
  color: #999;
  text-align: left;
}

:deep(.van-cell) {
  padding: 0;
  line-height: 36px;
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

.popup-container {
  padding: 20px 0;
}

.popup-header {
  text-align: center;
  padding: 0 16px 16px;
  border-bottom: 1px solid #f5f5f5;
}

.popup-title {
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

@media (max-width: 768px) {
  .detail-page {
    padding: 12px;
  }

  .page-header {
    padding: 15px 0;
  }

  .character-image {
    width: 80px;
    margin-top: 8px;
  }

  .cloud-image {
    width: 60px;
  }

  .title-container {
    padding: 12px 16px;
    margin-top: 30px;
  }

  .page-title {
    font-size: 20px;
  }

  .search-box {
    padding: 6px 12px;
  }

  .tip-card {
    padding: 16px;
  }

  .tip-content h3 {
    font-size: 15px;
  }

  .tip-content p {
    font-size: 13px;
  }

  .result-header h2 {
    font-size: 16px;
  }

  .value {
    font-size: 14px;
  }

  .popup-title {
    font-size: 16px;
  }

  .item-name {
    font-size: 13px;
  }
}

/* 用户意见反馈入口样式 */
.feedback-entrance {
  margin-top: 20px;
  text-align: center;
}

.feedback-btn {
  background: linear-gradient(135deg, #1989fa 0%, #0ea5e9 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(25, 137, 250, 0.3);
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.feedback-btn:hover {
  box-shadow: 0 6px 16px rgba(25, 137, 250, 0.4);
  transform: translateY(-1px);
}

.feedback-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(25, 137, 250, 0.3);
}

/* 用户意见反馈弹窗样式 */
.feedback-popup-wrapper {
  overflow: hidden;
}

.feedback-popup {
  padding: 28px 24px;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.feedback-header {
  text-align: center;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
}

.feedback-header::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #1989fa, #0ea5e9);
  border-radius: 1px;
}

.feedback-icon {
  margin-bottom: 12px;
  display: inline-block;
  padding: 12px;
  background: rgba(25, 137, 250, 0.1);
  border-radius: 50%;
}

.feedback-title {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
  letter-spacing: -0.025em;
}

.feedback-subtitle {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

.feedback-content {
  margin-bottom: 28px;
  text-align: left;
  flex: 1;
}

.feedback-textarea {
  margin-bottom: 20px;
}

.feedback-textarea :deep(.van-field__label) {
  color: #374151;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 10px;
  display: block;
}

.feedback-textarea :deep(.van-cell) {
  padding: 0;
  background: transparent;
}

.feedback-textarea :deep(.van-field__control) {
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  min-height: 120px;
  font-size: 16px;
  line-height: 1.6;
  transition: all 0.3s ease;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  resize: none;
}

.feedback-textarea :deep(.van-field__control):focus {
  border-color: #1989fa;
  box-shadow: 0 0 0 4px rgba(25, 137, 250, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);
  outline: none;
}

.feedback-textarea :deep(.van-field__control)::placeholder {
  color: #9ca3af;
  font-size: 15px;
}

.feedback-contact {
  margin-bottom: 20px;
}

.feedback-contact :deep(.van-field__label) {
  color: #374151;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 10px;
  display: block;
}

.feedback-contact :deep(.van-cell) {
  padding: 0;
  background: transparent;
}

.feedback-contact :deep(.van-field__control) {
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  height: 54px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.feedback-contact :deep(.van-field__control):focus {
  border-color: #1989fa;
  box-shadow: 0 0 0 4px rgba(25, 137, 250, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);
  outline: none;
}

.feedback-contact :deep(.van-field__control)::placeholder {
  color: #9ca3af;
  font-size: 15px;
}

.feedback-actions {
  margin-top: 16px;
  padding-top: 20px;
  border-top: 1px solid #f3f4f6;
}

.submit-btn {
  background: linear-gradient(135deg, #1989fa 0%, #0ea5e9 100%);
  border: none;
  border-radius: 14px;
  height: 52px;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 0.025em;
  box-shadow: 0 6px 20px rgba(25, 137, 250, 0.35);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.submit-btn:hover::before {
  left: 100%;
}

.submit-btn:active {
  transform: translateY(2px) scale(0.98);
  box-shadow: 0 3px 12px rgba(25, 137, 250, 0.4);
}

.submit-btn:disabled {
  opacity: 0.6;
  transform: none;
  box-shadow: 0 2px 8px rgba(25, 137, 250, 0.2);
}

/* 搜索结果页面反馈按钮样式 */
.result-feedback {
  margin-top: 16px;
  text-align: center;
}

.result-feedback-btn {
  background: linear-gradient(135deg, rgba(25, 137, 250, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%);
  border: 1px solid #1989fa;
  color: #1989fa;
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.3s ease;
  min-width: 120px;
}

.result-feedback-btn:active {
  background: linear-gradient(135deg, rgba(25, 137, 250, 0.2) 0%, rgba(14, 165, 233, 0.2) 100%);
  transform: scale(0.98);
}

/* 无结果页面反馈按钮样式 */
.empty-feedback-btn {
  background: linear-gradient(135deg, #1989fa 0%, #0ea5e9 100%);
  border: none;
  color: white;
  border-radius: 20px;
  margin-top: 12px;
  font-weight: 500;
  min-width: 120px;
  box-shadow: 0 2px 8px rgba(25, 137, 250, 0.3);
  transition: all 0.3s ease;
}

.empty-feedback-btn:active {
  transform: translateY(1px);
  box-shadow: 0 1px 4px rgba(25, 137, 250, 0.4);
}

/* 自定义表单验证错误样式 */
:deep(.van-field__error-message) {
  color: #ef4444;
  font-size: 13px;
  margin-top: 8px;
  padding-left: 4px;
  font-weight: 500;
}

/* 字数限制样式 */
:deep(.van-field__word-limit) {
  color: #6b7280;
  font-size: 13px;
  text-align: right;
  margin-top: 8px;
  font-weight: 500;
  padding-right: 4px;
}

/* 移动端特定优化 */
@media (max-width: 768px) {
  .feedback-popup {
    padding: 24px 20px;
    min-height: calc(100% - 40px);
  }
  
  .feedback-header {
    margin-bottom: 20px;
    padding-bottom: 16px;
  }
  
  .feedback-title {
    font-size: 18px;
  }
  
  .feedback-subtitle {
    font-size: 13px;
  }
  
  .feedback-textarea :deep(.van-field__control) {
    min-height: 140px;
    font-size: 16px;
    padding: 18px;
  }
  
  .feedback-contact :deep(.van-field__control) {
    height: 56px;
    font-size: 16px;
    padding: 18px;
  }
  
  .submit-btn {
    height: 54px;
    font-size: 16px;
  }
  
  .feedback-actions {
    margin-top: 12px;
    padding-top: 16px;
  }
}

/* 超小屏幕优化 */
@media (max-width: 480px) {
  .feedback-popup-wrapper {
    width: 95% !important;
    max-height: 90vh !important;
  }
  
  .feedback-popup {
    padding: 20px 16px;
    border-radius: 16px;
  }
  
  .feedback-textarea :deep(.van-field__control) {
    min-height: 160px;
    line-height: 1.7;
  }
  
  .submit-btn {
    height: 56px;
    font-size: 17px;
    border-radius: 16px;
  }
}
</style>
