<!-- 欢迎页面 -->
<template>
  <div class="welcome-container">
    <div class="welcome-card">
      <!-- <h1 class="welcome-title">温馨出行提醒</h1> -->
      <div class="welcome-content">
        <p class="content-text">各位进出境旅客：</p>
        <p class="content-text" style="text-indent: 2em;">为保障您的国际（地区）旅途顺畅，提醒关注以下事项：</p>

        <h2>一、行前准备</h2>
        <ol>
          <li>请通过海关总署门户网站等官方渠道，全面了解出入境相关规定、禁限物品清单等；认真核对携带物品是否符合检验检疫相关要求。</li>
        </ol>

        <h2>二、申报须知</h2>
        <ol>
          <li>按照中国相关法律法规，请如实进行物品申报及健康申报，并主动配合海关检查。</li>
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
  router.push('/home');
};
</script>

<style scoped>
.welcome-container {
  min-height: 100vh;
  padding: 20px;
  background: url('../assets/blue-welcome.png') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
}

.welcome-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(25, 137, 250, 0.1), rgba(57, 185, 249, 0.2));
  pointer-events: none;
}

.welcome-card {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  padding: 30px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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

.content-text {
  margin: 12px 0;
  font-size: 16px;
}

.welcome-content h2 {
  color: #1989fa;
  font-size: 18px;
  margin: 24px 0 16px;
  font-weight: 600;
  position: relative;
  padding-left: 12px;
}

.welcome-content h2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 18px;
  background-color: #1989fa;
  border-radius: 2px;
}

.welcome-content ol {
  padding-left: 20px;
  margin: 0 0 16px;
}

.welcome-content li {
  margin-bottom: 12px;
  line-height: 1.8;
  color: #444;
  position: relative;
}

.service-phone {
  color: #1989fa;
  text-decoration: none;
  font-weight: 500;
}

.button-container {
  margin-top: 32px;
  text-align: center;
}

.button-container :deep(.van-button) {
  height: 44px;
  font-size: 16px;
  border-radius: 22px;
  width: 80%;
  max-width: 320px;
  font-weight: 500;
  background: linear-gradient(135deg, rgba(25, 137, 250, 0.95), rgba(57, 185, 249, 0.95));
  border: none;
  box-shadow: 0 4px 12px rgba(25, 137, 250, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.button-container :deep(.van-button):hover {
  background: linear-gradient(135deg, #1989fa, #39b9f9);
  transform: translateY(-1px);
  transition: all 0.3s ease;
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .welcome-container {
    padding: 16px;
  }

  .welcome-card {
    padding: 20px;
  }

  .welcome-content {
    font-size: 14px;
  }

  .content-text {
    font-size: 15px;
  }

  .welcome-content h2 {
    font-size: 16px;
  }

  .welcome-content li {
    line-height: 1.6;
  }

  .button-container :deep(.van-button) {
    width: 90%;
    height: 40px;
    font-size: 15px;
  }
}
</style>
