<!-- 健康申报规范查询页面 -->
<template>
  <div class="health-page">
    <div class="health-container">
      <!-- 页面头部 -->
      <div class="page-header">
        <h1 class="page-title">健康申报责任义务</h1>
      </div>

      <!-- 内容区域 -->
      <div class="content-section">
        <!-- 健康申报部分 -->
        <div class="info-card">
          <div class="info-header">
            <van-tag type="primary" size="medium">须申报情形</van-tag>
          </div>
          <div class="info-content">
            如实申报健康状况及相关信息，有发热、咳嗽、呼吸困难、呕吐、腹泻、皮疹、不明原因皮下出血等传染病症状，或已经诊断患有传染性疾病的进境出境人员须主动向海关进行健康申报。
          </div>
        </div>

        <!-- 禁止情形部分 -->
        <div class="info-card">
          <div class="info-header">
            <van-tag type="primary" size="medium">禁止情形</van-tag>
          </div>
          <div class="info-content">
            患有严重精神病、传染性肺结核病或者有可能对公共卫生造成重大危害的其他传染病的外国人不得进境。进境的外国人拒绝接受《中华人民共和国国境卫生检疫法》第十一条规定的检疫查验措施的，海关可以作出不准其进境的决定。
          </div>
        </div>

        <!-- 相关规定依据部分 -->
        <div class="info-card">
          <div class="info-header">
            <van-tag type="primary" size="medium">相关规定依据</van-tag>
          </div>
          <div class="info-content">
            《中华人民共和国国境卫生检疫法》、《中华人民共和国国境卫生检疫法实施细则》、《海关总署关于优化调整健康申报模式的公告》（海关总署公告〔2023〕151 号）
          </div>
        </div>
      </div>

      <!-- 底部服务热线 -->
<!--      <div class="service-section">-->
<!--        <p>如需查询更多信息，请拨打海关服务热线 <a class="service-phone" href="tel:12360">12360</a></p>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script setup>
// No additional script needed for now
</script>

<style scoped>
.health-page {
  min-height: 100vh;
  background: url('../assets/blue-bg.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 16px;
}

.health-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 16px;
}

.page-header {
  text-align: center;
  margin-bottom: 12px;
  padding: 20px 0;
}

.page-title {
  font-size: 24px;
  color: #333;
  margin: 0;
  font-weight: 600;
  line-height: 1.4;
}

.content-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.info-header {
  background: #1989fa;
  color: white;
  padding: 12px 16px;
}

.info-content {
  padding: 16px;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
}

.service-section {
  margin-top: 32px;
  text-align: center;
  padding: 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
}

.service-section p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.service-phone {
  color: #1989fa;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .health-page {
    padding: 12px;
  }

  .page-title {
    font-size: 20px;
  }

  .info-content {
    font-size: 14px;
    padding: 14px;
  }

  .service-section {
    margin-top: 24px;
  }
}
</style>
