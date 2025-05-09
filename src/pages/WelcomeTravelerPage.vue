<template>
  <div class="traveler-bg">
    <!-- 顶层装饰元素 -->
    <div class="top-decor">
      <img src="../assets/卡通人像.png" alt="avatar" class="avatar-abs" />
      <img src="../assets/白云.png" alt="cloud" class="cloud-abs" />
    </div>
    <div class="traveler-card">
      <div class="traveler-content">
        <p class="traveler-title">各位进出境旅客朋友：</p>
        <p class="traveler-p indent">欢迎从中国海关通关，从出发至到达，中国海关将为您提供便捷、高效的通关服务，为您的旅途带来更好的体验。</p>
        <p class="traveler-p indent">守法通关，文明出行，是我们对您的期待，也是您对我们的支持。为方便您的出行，我们准备了海关通关注意事项和规定查询，希望对您有所帮助。</p>
        <p class="traveler-p indent">为了您的通关顺利，请在出行前提前了解您的健康状况、旅行和居住情况是否符合进出境卫生检疫要求；您携带进出境的行李物品是否符合出入境相关规定。具体规定可点击下方"进入查询"按钮查询，也可登录海关总署门户网站等官方网站查询。</p>
        <p class="traveler-p indent">如您在办理海关业务中遇到疑难问题需要帮助，或者对海关的工作提出意见建议，可拨打中国海关服务热线（<a class="service-phone" href="tel:12360">12360</a>）。也可在通关时联系海关工作人员，我们将及时回应您的需求。</p>
      </div>
      <div class="button-row">
        <van-button type="primary" size="large" class="main-btn" @click="enterApp">进入查询</van-button>
      </div>
    </div>
    <div class="traveler-footer">
      成都海关 中国银行四川省分行联合开发
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const enterApp = () => {
  router.push('/traveller/nav');
};
</script>

<style scoped>
.traveler-bg {
  min-height: 100vh;
  background: #7ed6fb;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 80px;
}
.top-decor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 110px;
  z-index: 100;
  pointer-events: none;
}
.avatar-abs {
  position: absolute;
  top: 18px;
  left: 18px;
  width: 90px;
  z-index: 101;
  pointer-events: none;
}
.cloud-abs {
  position: absolute;
  top: 18px;
  right: 24px;
  width: 90px;
  z-index: 100;
  pointer-events: none;
}
.traveler-card {
  margin-top: 110px;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.10);
  max-width: 420px;
  width: 92vw;
  padding: 32px 22px 24px 22px;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.traveler-content {
  width: 100%;
  color: #19a0e6;
  font-size: 17px;
  line-height: 2.1;
  text-align: left;
  margin-bottom: 18px;
}
.traveler-title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  color: #19a0e6;
}
.traveler-p {
  margin: 10px 0;
  color: #19a0e6;
}
.indent {
  text-indent: 2em;
}
.service-phone {
  color: #1989fa;
  text-decoration: none;
  font-weight: 500;
}
.button-row {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 18px;
}
.main-btn {
  width: 90%;
  max-width: 340px;
  height: 44px;
  font-size: 18px;
  border-radius: 22px;
  font-weight: 600;
  background: linear-gradient(135deg, #19a0e6 0%, #39b9f9 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(25, 137, 250, 0.15);
}
.traveler-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255,255,255,0.95);
  text-align: center;
  padding: 12px 0 8px 0;
  font-size: 15px;
  color: #19a0e6;
  z-index: 20;
  font-family: 'SimHei', '黑体';
  letter-spacing: 1px;
}
@media screen and (max-width: 600px) {
  .top-decor {
    height: 70px;
  }
  .traveler-card {
    padding: 18px 4vw 16px 4vw;
    margin-top: 70px;
    max-width: 98vw;
  }
  .avatar-abs {
    width: 56px;
    top: 22px;
    left: 4px;
  }
  .cloud-abs {
    width: 54px;
    top: 26px;
    right: 3px;
  }
  .traveler-content {
    font-size: 15px;
    line-height: 1.9;
  }
  .main-btn {
    font-size: 16px;
    height: 40px;
  }
  .traveler-footer {
    font-size: 12px;
    padding: 8px 0 6px 0;
  }
}
</style>
