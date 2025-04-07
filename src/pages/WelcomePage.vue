<!-- 欢迎页面 -->
<template>
  <div class="welcome-container">
    <div class="welcome-card">
      <!-- <h1 class="welcome-title">温馨出行提醒</h1> -->
      <div class="welcome-content">
        <p>进出境旅客：</p>
        <p>为保障您的旅途顺畅，提醒关注以下事项：</p>

        <h2>一、行前准备</h2>
        <ol>
          <li> 请通过海关总署门户网站等官方渠道，全面了解出入境相关规定、禁限物品清单等；认真核对携带物品是否符合检验检疫相关要求。</li>
        </ol>

        <h2>二、申报须知</h2>
        <ol>
          <li>按照海关总署公告2023年第151号（关于优化调整健康申报模式的公告）、海关总署公告2025年第43号（关于进出境人员行李物品申报有关事宜的公告） 等规定，请如实进行物品申报及健康申报，并主动配合海关检查。</li>
        </ol>

        <h2>三、温馨提示</h2>
        <ol>
          <li>本小程序将根据国家相关法律法规及规范性文件的调整不定期更新，相关通关规定供您参考；未尽事项，请拨打海关服务热线（<a class="service-phone" href="tel:12360">12360</a>）。</li>
        </ol>

<!--        <p class="footer-message">文明出行始于守法，如实申报既是公民义务，更是对自身权益的最佳保障。<br>祝您安心出行，旅途顺遂！</br></p>-->

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
  router.push('/item/detail');
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
  font-size: 15px;
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
