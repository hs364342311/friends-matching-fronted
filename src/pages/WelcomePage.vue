<!-- 欢迎页面 -->
<template>
  <div class="welcome-container">
    <div class="welcome-card">
      <!-- <h1 class="welcome-title">温馨出行提醒</h1> -->
      <div class="welcome-content">
        <p>各位出入境旅客：</p>
        <p>为保障您的旅途顺畅，请务必注意以下事项：</p>

        <h2>一、行前准备</h2>
        <ol>
          <li>通过海关总署等官方渠道，全面了解目的地国家（地区）出入境政策法规及禁止入境物品清单；</li>
          <li>仔细核查携带物品是否符合两国（地区）双向检疫要求，特别注意药品、食品、动植物制品的特殊管理规定。</li>
        </ol>

        <h2>二、申报须知</h2>
        <ol>
          <li>出入境时请主动配合边防检查，如实填报《海关申报单》及健康申明卡；</li>
          <li>随身及托运行李中若涉及限制性物品（包括超量现金、贵重物品等），请主动向海关申报；</li>
          <li>切勿存有侥幸心理，隐瞒申报将承担相应法律责任，可能面临高额罚款、物品查扣、限制入境等严重后果。</li>
        </ol>

        <h2>三、特别提示</h2>
        <p>我国海关已全面实行"旅客通关管理系统"，所有申报记录将纳入个人通关信用档案，请共同维护良好出行信用。</p>

        <p class="footer-message">文明出行始于守法，如实申报既是公民义务，更是对自身权益的最佳保障。<br>祝您安心出行，旅途顺遂！</br></p>

      </div>

      <div class="button-container">
        <van-button type="primary" size="large" @click="enterApp">进入查询系统</van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const enterApp = () => {
  router.push('/item/list');
};
</script>

<style scoped>
.welcome-container {
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 800px;
  width: 100%;
}

.welcome-title {
  text-align: center;
  color: #1989fa;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
}

.welcome-content {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

.welcome-content h2 {
  color: #1989fa;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}

.welcome-content ol {
  padding-left: 20px;
  margin-bottom: 15px;
}

.welcome-content li {
  margin-bottom: 8px;
}

.footer-message {
  font-weight: bold;
  margin-top: 20px;
  text-align: left;
  color: #1989fa;
}

.button-container {
  margin-top: 30px;
  text-align: center;
}
</style>
