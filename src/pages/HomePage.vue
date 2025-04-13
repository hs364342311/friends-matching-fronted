<!-- 首页导航 -->
<template>
  <div class="home-page">
    <div class="home-container">
      <!-- 页面头部 -->
      <div class="page-header">
        <h1 class="page-title">进出境旅客及行李物品<br>通关规定查询</h1>
      </div>

      <!-- 导航卡片区域 -->
      <div class="nav-cards">
        <!-- 禁限物品介绍 -->
        <router-link to="/prohibited/items" class="nav-card">
          <div class="card-icon">
            <van-icon name="warning-o" size="32" color="#1989fa"/>
          </div>
          <div class="card-content">
            <h3>禁限物品介绍</h3>
          </div>
        </router-link>

        <!-- 行李物品监管规定查询 -->
        <router-link to="/item/detail" class="nav-card">
          <div class="card-icon">
            <van-icon name="search" size="32" color="#1989fa"/>
          </div>
          <div class="card-content">
            <h3>行李物品监管规定查询</h3>
          </div>
        </router-link>

        <!-- 健康申报规定查询 -->
        <router-link to="/health/declaration" class="nav-card">
          <div class="card-icon">
            <van-icon name="shield-o" size="32" color="#1989fa"/>
          </div>
          <div class="card-content">
            <h3>健康申报规定查询</h3>
          </div>
        </router-link>

        <!-- 海关总署令及公告 -->
        <a class="nav-card" href="http://www.customs.gov.cn/customs/302249/index.html" target="_blank">
          <div class="card-icon">
            <van-icon name="description" size="32" color="#1989fa"/>
          </div>
          <div class="card-content">
            <h3>海关总署令及公告</h3>
          </div>
        </a>
      </div>

      <!-- 底部反馈区域 -->
<!--      <div class="feedback-section">-->
<!--        <p>如对小程序有更多意见建议，欢迎在此留言</p>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script setup>
// No additional script needed for now
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: url('../assets/blue-bg.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 16px;
}

.home-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 16px;
}

.page-header {
  text-align: center;
  margin-bottom: 32px;
  padding: 20px 0;
}

.page-title {
  font-size: 24px;
  color: #333;
  margin: 0;
  font-weight: 600;
  line-height: 1.4;
}

.nav-cards {
  display: grid;
  gap: 16px;
  margin-top: 24px;
}

.nav-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  cursor: pointer;
}

.nav-card:active {
  transform: scale(0.98);
}

.card-icon {
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(25, 137, 250, 0.1);
  border-radius: 12px;
}

.card-content {
  flex: 1;
}

.card-content h3 {
  margin: 0;
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

.feedback-section {
  margin-top: 40px;
  text-align: center;
  padding: 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
}

.feedback-section p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .home-page {
    padding: 12px;
  }

  .page-title {
    font-size: 20px;
  }

  .nav-card {
    padding: 20px;
  }

  .card-icon {
    width: 40px;
    height: 40px;
  }

  .card-content h3 {
    font-size: 15px;
  }

  .feedback-section {
    margin-top: 32px;
  }
}
</style>
