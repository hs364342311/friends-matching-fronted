<template>
  <div class="nav-page">
    <div class="nav-container">
      <!-- 顶部云朵和标题 -->
      <img src="@/assets/白云.png" alt="cloud" class="cloud-img" />
      <div class="nav-title">海关通关注意事项和规定查询</div>

      <!-- 导航卡片区域 -->
      <div class="nav-list">
        <div class="nav-row">
          <img src="@/assets/禁止和限制携带通关物.png" class="character-img"  alt="禁止和限制携带通关物" />
          <router-link to="/traveller/customs/restrictions" class="nav-item">
            <div class="nav-icon-container">
              <img src="@/assets/导航图标.png" class="nav-icon" alt="点击图标" />
            </div>
            <div class="nav-label">禁止和限制携带通关物品</div>
          </router-link>
        </div>

        <div class="nav-row">
          <img src="@/assets/行李物品通关规定查询.png" class="character-img" alt="行李物品通关规定查询" />
          <router-link to="/traveller/item/detail" class="nav-item">
            <div class="nav-icon-container">
              <img src="@/assets/导航图标.png" class="nav-icon" alt="点击图标" />
            </div>
            <div class="nav-label">行李物品通关规定查询</div>
          </router-link>
        </div>

        <div class="nav-row">
          <img src="@/assets/健康申报提示.png" class="character-img" alt="健康申报提示" />
          <router-link to="/traveller/health/notice" class="nav-item">
            <div class="nav-icon-container">
              <img src="@/assets/导航图标.png" class="nav-icon" alt="点击图标" />
            </div>
            <div class="nav-label">健康申报提示</div>
          </router-link>
        </div>

        <div class="nav-row">
          <img src="@/assets/转到海关总署官方网站.png" class="character-img" alt="转到海关总署官方网站" />
          <a href="http://www.customs.gov.cn/customs/302249/index.html" class="nav-item" target="_blank">
            <div class="nav-icon-container">
              <img src="@/assets/导航图标.png" class="nav-icon" alt="点击图标" />
            </div>
            <div class="nav-label">转到海关总署官方网站</div>
          </a>
        </div>
      </div>

      <!-- 底部版权信息 -->
<!--      <div class="footer">-->
<!--        成都海关 中国银行四川省分行联合开发-->
<!--      </div>-->
    </div>
  </div>
</template>

<script setup>
// 无需额外脚本
import { onMounted } from 'vue';
import {record} from "../api/moduleClick"

onMounted(async () => {
  record({
    moduleName: "导航页",
    appVersion: "2",
    modulePath: "/traveller/nav"
  })
});
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
  font-size: 23px;
  font-weight: bold;
  color: #fff;
  background: #03a9f4;
  margin: 16px 0 32px 0;
  line-height: 1.4;
  letter-spacing: 1px;
  padding: 10px;
  border-radius: 8px;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 20px;
  padding: 0 10px;
}

.nav-row {
  display: flex;
  align-items: center;
  position: relative;
}

.character-img {
  width: 97px;
  height: 80px;
  object-fit: contain;
  margin-right: 18px;
  z-index: 2;
}

.nav-item {
  display: flex;
  align-items: center;
  background: #03a9f4;
  border-radius: 12px;
  padding: 14px 20px 14px 35px;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  min-height: 40px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.nav-item:active {
  transform: scale(0.98);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.nav-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-right: 16px;
  flex-shrink: 0;
}

.nav-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.nav-label {
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.5px;
  line-height: 1.2;
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
    font-size: 21px;
    padding: 8px;
  }

  .nav-list {
    gap: 36px;
    padding: 0 5px;
  }

  .character-img {
    width: 97px;
    height: 80px;
    margin-right: 18px;
  }

  .nav-item {
    padding: 12px 16px 12px 30px;
    min-height: 40px;
  }

  .nav-icon-container {
    width: 28px;
    height: 28px;
    margin-right: 14px;
  }

  .nav-label {
    font-size: 16px;
  }

  .footer {
    padding: 12px 0;
    font-size: 13px;
  }
}
</style>
