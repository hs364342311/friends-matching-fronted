<template>
  <div class="nav-page">
    <div class="nav-container">
      <!-- 顶部云朵和标题 -->
      <img src="@/assets/白云.png" alt="cloud" class="cloud-img" />
      <div class="nav-title">海关通关注意事项和规定查询</div>

      <!-- 导航卡片区域 -->
      <div class="nav-list">
        <router-link to="/traveller/customs/restrictions" class="nav-item">
          <img src="@/assets/禁止和限制携带通关物.png" class="nav-avatar" alt="禁止和限制携带通关物" />
          <div class="nav-content">
            <img src="@/assets/导航图标.png" class="nav-icon" alt="点击图标" />
            <span class="nav-label">禁止和限制携带通关物品</span>
          </div>
        </router-link>
        <router-link to="/traveller/item/detail" class="nav-item">
          <img src="@/assets/行李物品通关规定查询.png" class="nav-avatar" alt="行李物品通关规定查询" />
          <div class="nav-content">
            <img src="@/assets/导航图标.png" class="nav-icon" alt="点击图标" />
            <span class="nav-label">行李物品通关规定查询</span>
          </div>
        </router-link>
        <router-link to="/traveller/health/notice" class="nav-item">
          <img src="@/assets/健康申报提示.png" class="nav-avatar" alt="健康申报提示" />
          <div class="nav-content">
            <img src="@/assets/导航图标.png" class="nav-icon" alt="点击图标" />
            <span class="nav-label">健康申报提示</span>
          </div>
        </router-link>
        <a href="http://www.customs.gov.cn/customs/302249/index.html" class="nav-item" target="_blank">
          <img src="@/assets/转到海关总署官方网站.png" class="nav-avatar" alt="转到海关总署官方网站" />
          <div class="nav-content">
            <img src="@/assets/导航图标.png" class="nav-icon" alt="点击图标" />
            <span class="nav-label">转到海关总署官方网站</span>
          </div>
        </a>
      </div>

      <!-- 底部版权信息 -->
      <div class="footer">
        成都海关 中国银行四川省分行联合开发
      </div>
    </div>
  </div>
</template>

<script setup>
// 无需额外脚本
</script>

<style scoped>
.nav-page {
  min-height: 100vh;
  background: #b3e5fc;
  padding: 0;
}

.nav-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 16px 80px 16px;
  position: relative;
}

.cloud-img {
  width: 80px;
  margin: 10px 0 0 12px;
  display: block;
}

.nav-title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background: #03a9f4;
  margin: 16px 0 32px 0;
  line-height: 1.4;
  letter-spacing: 1px;
  padding: 10px;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 20px;
  padding: 0 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 18px;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  min-height: 80px;
  height: 80px;
  width: 100%;
  box-sizing: border-box;
}

.nav-item:active {
  transform: scale(0.98);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.nav-avatar {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: contain;
  margin-right: 16px;
  flex-shrink: 0;
  display: block;
}

.nav-content {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  height: 100%;
}

.nav-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  flex-shrink: 0;
  display: block;
}

.nav-label {
  font-size: 17px;
  color: #333;
  font-weight: 500;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.5px;
  line-height: 1.2;
  display: block;
}

.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  padding: 15px 0;
  background: rgba(255, 255, 255, 0.95);
  font-size: 14px;
  color: #666;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  z-index: 100;
  letter-spacing: 0.5px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 15px 12px 80px 12px;
  }
  
  .cloud-img {
    width: 60px;
    margin: 5px 0 0 8px;
  }
  
  .nav-title {
    font-size: 18px;
    padding: 8px;
  }
  
  .nav-list {
    gap: 20px;
    padding: 0 5px;
  }
  
  .nav-item {
    padding: 10px 15px;
    min-height: 70px;
    height: 70px;
  }
  
  .nav-avatar {
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }
  
  .nav-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  
  .nav-label {
    font-size: 15px;
  }
  
  .footer {
    padding: 12px 0;
    font-size: 13px;
  }
}
</style>