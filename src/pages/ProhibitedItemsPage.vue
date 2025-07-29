<!-- 禁止和限制进出境物品查询页面 -->
<template>
  <div class="prohibited-page">
    <div class="prohibited-container">
      <!-- 页面头部 -->
      <div class="page-header">
        <h1 class="page-title">《中华人民共和国禁止进出境物品表》和《中华人民共和国限制进出境物品表》</h1>
        <p class="page-subtitle">（1993年2月26日海关总署令第43号发布 自1993年3月1日起施行）</p>
      </div>

      <!-- 内容区域 -->
      <div class="content-section">
        <!-- 禁止进出境物品表 -->
        <div class="main-section">
          <div class="section-header">
            <h2 class="section-title">中华人民共和国禁止进出境物品表</h2>
          </div>

          <!-- 禁止进境物品部分 -->
          <div class="info-card">
            <div class="info-header">
              <span class="section-number">一、</span>
              <span class="section-name">禁止进境物品</span>
            </div>
            <div class="info-content">
              <ol class="item-list">
                <li><span class="item-number">1.</span> 各种武器、仿真武器、弹药及爆炸物品；</li>
                <li><span class="item-number">2.</span> 伪造的货币及伪造的有价证券；</li>
                <li><span class="item-number">3.</span> 对中国政治、经济、文化、道德有害的印刷品、胶卷、照片、唱片、影片、录音带、录像带、激光视盘、计算机存储介质及其他物品；</li>
                <li><span class="item-number">4.</span> 各种烈性毒药；</li>
                <li><span class="item-number">5.</span> 鸦片、吗啡、海洛因、大麻以及其他能使人成瘾的麻醉品、精神药物；</li>
                <li><span class="item-number">6.</span> 带有危险性病菌、害虫及其他有害生物的动物、植物及其产品；</li>
                <li><span class="item-number">7.</span> 有碍人畜健康的、来自疫区的以及其他能传播疾病的食品、药品或其他物品。</li>
              </ol>
            </div>
          </div>

          <!-- 禁止出境物品部分 -->
          <div class="info-card">
            <div class="info-header">
              <span class="section-number">二、</span>
              <span class="section-name">禁止出境物品</span>
            </div>
            <div class="info-content">
              <ol class="item-list">
                <li><span class="item-number">1.</span> 列入禁止进境范围的所有物品；</li>
                <li><span class="item-number">2.</span> 内容涉及国家秘密的手稿、印刷品、胶卷、照片、唱片、影片、录音带、录像带、激光视盘、计算机存储介质及其他物品；</li>
                <li><span class="item-number">3.</span> 珍贵文物及其他禁止出境的文物；</li>
                <li><span class="item-number">4.</span> 濒危的和珍贵的动物、植物（均含标本）及其种子和繁殖材料。</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- 限制进出境物品表 -->
        <div class="main-section">
          <div class="section-header">
            <h2 class="section-title">中华人民共和国限制进出境物品表</h2>
          </div>

          <!-- 限制进境物品部分 -->
          <div class="info-card">
            <div class="info-header">
              <span class="section-number">一、</span>
              <span class="section-name">限制进境物品</span>
            </div>
            <div class="info-content">
              <ol class="item-list">
                <li><span class="item-number">1.</span> 无线电收发信机、通信保密机；</li>
                <li><span class="item-number">2.</span> 烟、酒；</li>
                <li><span class="item-number">3.</span> 濒危的和珍贵的动物、植物（均含标本）及其种子和繁殖材料；</li>
                <li><span class="item-number">4.</span> 国家货币；</li>
                <li><span class="item-number">5.</span> 海关限制进境的其他物品。</li>
              </ol>
            </div>
          </div>

          <!-- 限制出境物品部分 -->
          <div class="info-card">
            <div class="info-header">
              <span class="section-number">二、</span>
              <span class="section-name">限制出境物品</span>
            </div>
            <div class="info-content">
              <ol class="item-list">
                <li><span class="item-number">1.</span> 金银等贵重金属及其制品；</li>
                <li><span class="item-number">2.</span> 国家货币；</li>
                <li><span class="item-number">3.</span> 外币及其有价证券；</li>
                <li><span class="item-number">4.</span> 无线电收发信机、通信保密机；</li>
                <li><span class="item-number">5.</span> 贵重中药材；</li>
                <li><span class="item-number">6.</span> 一般文物；</li>
                <li><span class="item-number">7.</span> 海关限制出境的其他物品。</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional script needed for now
import { onMounted } from 'vue';
import {record} from "../api/moduleClick"

onMounted(async () => {
  record({
    moduleName: "禁止和限制携带通关物",
    appVersion: "1",
    modulePath: "/prohibited/items"
  })
});
</script>

<style scoped>
.prohibited-page {
  min-height: 100vh;
  background: url('../assets/blue-bg.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 16px;
}

.prohibited-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 16px;
}

.page-header {
  text-align: center;
  margin-bottom: 24px;
  padding: 20px 0;
}

.page-title {
  font-size: 20px;
  color: #333;
  margin: 0;
  font-weight: 600;
  line-height: 1.4;
}

.page-subtitle {
  font-size: 14px;
  color: #666;
  margin: 8px 0 0;
}

.content-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.main-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-header {
  margin-bottom: 8px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
  padding-left: 12px;
  border-left: 4px solid #1989fa;
  line-height: 1.4;
}

.info-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.info-card:hover {
  transform: translateY(-2px);
}

.info-header {
  background: linear-gradient(135deg, #1989fa, #1677ff);
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-number {
  font-size: 16px;
  font-weight: 500;
}

.section-name {
  font-size: 16px;
  font-weight: 500;
}

.info-content {
  padding: 20px;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
}

.item-list {
  margin: 0;
  padding-left: 20px;
}

.item-list li {
  margin-bottom: 12px;
  position: relative;
  padding-left: 4px;
}

.item-list li:last-child {
  margin-bottom: 0;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .prohibited-page {
    padding: 12px;
  }

  .content-section {
    gap: 24px;
  }

  .section-title {
    font-size: 18px;
  }

  .info-header {
    padding: 14px;
  }

  .section-number,
  .section-name {
    font-size: 15px;
  }

  .info-content {
    font-size: 14px;
    padding: 16px;
  }

  .item-list {
    padding-left: 16px;
  }

  .item-list li {
    margin-bottom: 10px;
  }
}
</style>
