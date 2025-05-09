<!-- 禁止和限制携带通关物品单页 -->
<template>
  <div class="customs-restrictions">
    <!-- 顶部区域 -->
    <div class="top-section">
      <!-- 标题区域 -->
      <div class="title-container">
        <h1 class="main-title">禁限物品介绍</h1>
      </div>
      
      <!-- 提示区域 -->
      <div class="notice-section">
        <img src="../assets/卡通人像.png" alt="customs officer" class="officer-image">
        <div class="notice-bubble">
          下面列出的都是禁止或限制进出境的物品，不能随意携带通关哦！
        </div>
      </div>
    </div>

    <!-- 物品列表区域 -->
    <div class="items-list">
      <div v-for="(item, index) in restrictedItems" :key="index" class="item-card">
        <div class="item-image-container">
          <img :src="item.image" :alt="item.label" class="item-image">
        </div>
        <div class="item-label">{{ item.label }}</div>
      </div>
    </div>

    <!-- 底部提示区域 -->
    <div class="bottom-section">
      <div class="message-container">
        <img src="../assets/卡通人像.png" alt="customs officer" class="officer-image">
        <div class="message-bubble">
          关于禁止或限制携带进出境的物品，可以参考以下内容
        </div>
      </div>
    </div>

    <!-- 详细信息区域 -->
    <div class="details-section">
      <!-- 法律依据 -->
      <div class="info-card">
        <div class="info-content legal-basis">
          根据国家有关法律、法规规定，海关调整《中华人民共和国禁止进出境物品表》和《中华人民共和国限制进出境物品表》，并以海关总署令第43号公布执行。具体如下：
        </div>
      </div>

      <!-- 中华人民共和国禁止进出境物品表 -->
      <div class="info-card">
        <div class="info-header">
          <div class="header-tag">禁止携带、邮寄进境的动植物及其产品</div>
        </div>
        <div class="info-content">
          <h4>一、禁止进境物品</h4>
          <ol>
            <li>1. 各种武器、仿真武器、弹药及爆炸物品；</li>
            <li>2. 伪造的货币及伪造的有价证券；</li>
            <li>3. 对中国政治、经济、文化、道德有害的印刷品、胶卷、照片、唱片、影片、录音带、录像带、激光视盘、计算机存储介质及其它物品；</li>
            <li>4. 各种烈性毒药；</li>
            <li>5. 鸦片、吗啡、海洛英、大麻以及其它能使人成瘾的麻醉品、精神药物；</li>
            <li>6. 带有危险性病菌、害虫及其它有害生物的动物、植物及其产品；</li>
            <li>7. 有碍人畜健康的、来自疫区的以及其它能传播疾病的食品、药品或其它物品。</li>
          </ol>

          <h4>二、禁止出境物品</h4>
          <ol start="9">
            <li>1. 列入禁止进境范围的所有物品；</li>
            <li>2. 内容涉及国家秘密的手稿、印刷品、胶卷、照片、唱片、影片、录音带、录像带、激光视盘、计算机存储介质及其它物品；</li>
            <li>3. 珍贵文物及其它禁止出境的文物；</li>
            <li>4. 濒危的和珍贵的动物、植物(均含标本)及其种子和繁殖材料。</li>
          </ol>

        </div>
      </div>

      <!-- 禁止携带、邮寄进境的动植物及其产品 -->
      <div class="info-card">
        <div class="info-header">
          <div class="header-tag">中华人民共和国禁止携带、邮寄进境的动植物及其产品名录</div>
        </div>
        <div class="info-content">
          <h4>一、动物及动物产品类</h4>
          <ol>
            <li>1. 活动物（犬、猫除外）。包括所有的哺乳动物、鸟类、鱼类、甲壳类、两栖类、爬行类、昆虫类和其他无脊椎动物，动物遗传物质。</li>
            <li>2. 生或熟肉类（含脏器类）及其制品。</li>
            <li>3. 水生动物产品。干制，熟制，发酵后制成的食用酱汁类水生动物产品除外。</li>
            <li>4. 动物源性乳及乳制品。包括生乳、巴氏杀菌乳、灭菌乳、调制乳、发酵乳，奶油、黄油、奶酪、炼乳等乳制品。</li>
            <li>5. 蛋及其制品。包括鲜蛋、皮蛋、咸蛋、蛋液、蛋壳、蛋黄酱等蛋源产品。</li>
            <li>6. 燕窝。经商业无菌处理的罐头装燕窝除外。</li>
            <li>7. 油脂类，皮张，原毛类，蹄（爪）、骨、牙、角类及其制品。经加工处理且无血污、肌肉和脂肪等的蛋壳类、蹄（爪）骨角类、贝壳类、甲壳类等工艺品除外。</li>
            <li>8. 动物源性饲料、动物源性中药材、动物源性肥料。</li>
          </ol>

          <h4>二、植物及植物产品类</h4>
          <ol start="9">
            <li>1. 新鲜水果、蔬菜。</li>
            <li>2. 鲜切花。</li>
            <li>3. 烟叶。</li>
            <li>4. 种子、种苗及其他具有繁殖能力的植物、植物产品及材料。</li>
          </ol>

          <h4>三、其他检疫物类</h4>
          <ol start="13">
            <li>1. 菌种、毒种、寄生虫等动植物病原体，害虫及其他有害生物，兽用生物制品，细胞、器官组织、血液及其制品等生物材料及其他高风险生物因子。</li>
            <li>2. 动物尸体、动物标本、动物源性废弃物。</li>
            <li>3. 土壤及有机栽培介质。</li>
            <li>4. 转基因生物材料。</li>
            <li>5. 国家禁止进境的其他动植物、动植物产品和其他检疫物。</li>
          </ol>
          <h4>注：</h4>
          <ol start="13">
            <li>1. 通过携带或寄递方式进境的动植物及其产品和其他检疫物，经国家有关行政主管部门审批许可，并具有输出国家或地区官方机构出具的检疫证书，不受此名录的限制。</li>
            <li>2. 具有输出国家或地区官方机构出具的动物检疫证书和疫苗接种证书的犬、猫等宠物，每人仅限携带或分离托运一只。具体检疫要求按相关规定执行。</li>
            <li>3. 法律、行政法规、部门规章对禁止携带、寄递进境的动植物及其产品和其他检疫物另有规定的，按相关规定办理。</li>
          </ol>
        </div>
      </div>

      <!-- 限制进出境物品 -->
      <div class="info-card">
        <div class="info-header">
          <div class="header-tag">限制进出境的物品：中华人民共和国限制进出境物品表</div>
        </div>
        <div class="info-content">
          <h4>一、限制进境物品</h4>
          <ol>
            <li>1. 无线电收发信机、通信保密机；</li>
            <li>2. 烟、酒；</li>
            <li>3. 濒危的和珍贵的动物、植物(均含标本)及其种子和繁殖材料；</li>
            <li>4. 国家货币；</li>
            <li>5. 海关限制进境的其它物品。</li>
          </ol>

          <h4>二、限制出境物品</h4>
          <ol>
            <li>1. 金银等贵重金属及其制品；</li>
            <li>2. 国家货币；</li>
            <li>3. 外币及其有价证券；</li>
            <li>4. 无线电收发信机、通信保密机；</li>
            <li>5. 贵重中药材；</li>
            <li>6. 一般文物；</li>
            <li>7. 海关限制出境的其他物品。</li>
          </ol>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const restrictedItems = [
  {
    label: '毒品和管制类精神药品',
    image: new URL('../assets/毒品和管制类精神药品.png', import.meta.url).href
  },
  {
    label: '濒危物种及其制品',
    image: new URL('../assets/濒危物种及其制品.png', import.meta.url).href
  },
  {
    label: '活体动物、异宠等',
    image: new URL('../assets/活体动物、异宠等.png', import.meta.url).href
  },
  {
    label: '肉制品',
    image: new URL('../assets/肉制品.png', import.meta.url).href
  },
  {
    label: '植物、盆栽',
    image: new URL('../assets/植物、盆栽.png', import.meta.url).href
  },
  {
    label: '新鲜水果',
    image: new URL('../assets/新鲜水果.png', import.meta.url).href
  },
  {
    label: '种子',
    image: new URL('../assets/种子.png', import.meta.url).href
  },
  {
    label: '土壤',
    image: new URL('../assets/土壤.png', import.meta.url).href
  },
  {
    label: '疫苗、生物样本',
    image: new URL('../assets/疫苗、生物样本.png', import.meta.url).href
  },
  {
    label: '动物标本',
    image: new URL('../assets/动物标本.png', import.meta.url).href
  },
  {
    label: '燕窝。经商业无菌处理的罐头装燕窝除外',
    image: new URL('../assets/燕窝。经商业无菌处理的罐头装燕窝除外.png', import.meta.url).href
  },
  {
    label: '西洋参',
    image: new URL('../assets/西洋参.png', import.meta.url).href
  }
]
</script>

<style scoped>
.customs-restrictions {
  min-height: 100vh;
  background-color: #87CEEB;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.top-section {
  position: relative;
  margin-bottom: 30px;
}

.title-container {
  background-color: #00A0E9;
  padding: 15px 30px;
  margin: -20px -20px 20px -20px;
}

.main-title {
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-align: center;
}

.notice-section {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 0 10px;
  margin-top: 20px;
}

.officer-image {
  width: 80px;
  height: auto;
  margin-top: -10px;
}

.notice-bubble {
  background: white;
  border-radius: 15px;
  padding: 15px 20px;
  color: #333;
  font-size: 16px;
  position: relative;
  margin-left: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.notice-bubble::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 20px;
  border-style: solid;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

.items-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  padding: 20px 10px;
}

.item-card {
  background: white;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.item-image-container {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  border-radius: 12px;
  padding: 15px;
  overflow: hidden;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.item-label {
  background: #00A0E9;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  text-align: center;
  width: fit-content;
  max-width: 100%;
  box-shadow: 0 2px 4px rgba(0, 160, 233, 0.2);
}

@media (max-width: 768px) {
  .items-list {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
  }

  .title-container {
    padding: 12px 20px;
  }

  .main-title {
    font-size: 20px;
  }

  .officer-image {
    width: 60px;
  }

  .notice-bubble {
    font-size: 14px;
    padding: 12px 16px;
  }
}

@media (min-width: 1200px) {
  .items-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

.bottom-section {
  margin: 30px 0;
}

.message-container {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 0 10px;
}

.details-section {
  padding: 0 10px;
}

.info-card {
  background: white;
  border-radius: 15px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-header {
  background: #00A0E9;
  padding: 12px 20px;
}

.header-tag {
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.info-content {
  padding: 20px;
  color: #333;
  line-height: 1.6;
}

.info-content h4 {
  color: #00A0E9;
  margin: 20px 0 10px;
  font-size: 16px;
}

.info-content ol {
  margin: 0;
  padding-left: 20px;
}

.info-content li {
  margin-bottom: 10px;
}

.legal-basis {
  font-weight: 500;
  color: #666;
  font-size: 15px;
  line-height: 1.8;
}

.message-bubble {
  background: white;
  border-radius: 15px;
  padding: 15px 20px;
  color: #333;
  font-size: 16px;
  position: relative;
  margin-left: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.message-bubble::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 20px;
  border-style: solid;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

@media (max-width: 768px) {
  .info-header {
    padding: 10px 15px;
  }

  .header-tag {
    font-size: 15px;
  }

  .info-content {
    padding: 15px;
    font-size: 14px;
  }

  .info-content h4 {
    font-size: 15px;
  }

  .legal-basis {
    font-size: 14px;
  }
}

.main-section-title {
  text-align: center;
  margin: 30px 0;
  position: relative;
  padding: 0 20px;
}

.main-section-title h2 {
  color: #00A0E9;
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  padding: 15px 0;
  position: relative;
  display: inline-block;
}

.title-decoration {
  width: 60px;
  height: 3px;
  background: #00A0E9;
  margin: 10px auto 0;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .main-section-title h2 {
    font-size: 18px;
    padding: 10px 0;
  }

  .title-decoration {
    width: 40px;
    margin-top: 8px;
  }
}
</style> 