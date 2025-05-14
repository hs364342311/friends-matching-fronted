<!-- 健康申报提示单页 -->
<template>
  <div class="health-notice">
    <!-- 顶部区域 -->
    <div class="top-section">
      <img src="@/assets/白云.png" alt="cloud" class="cloud-image">
      <div class="header-content">
        <img src="@/assets/健康申报提示.png" alt="character" class="character-image">
        <div class="notice-title">健康申报提示</div>
      </div>
    </div>

    <!-- 提示文本区域 -->
    <div class="notice-text">
      <div class="text-box">
        <p class="title">各位进出境旅客朋友：</p>
        <p class="content" style="text-indent: 2em;">
          快乐的旅程让人难忘，身体状态请多关注。
        </p>
        <p class="content" style="text-indent: 2em;">
          为了您和大家的健康和安全，如您发现自己或同行人有以下情况，请在航程途中向机组、在进出境时向海关申报健康状况及相关信息。
        </p>
      </div>
    </div>

    <!-- 症状列表区域 -->
    <div class="symptoms-container">
      <div v-for="(symptom, index) in symptoms" :key="index" class="symptom-card">
        <div class="symptom-label"><span style="background-color: #FFB6C1; border-radius: 6px; padding: 5px 10px;">{{ symptom.label }}</span></div>
        <div class="symptom-image-container">
          <img :src="symptom.image" :alt="symptom.label" class="symptom-image">
        </div>
      </div>
    </div>

    <!-- 底部提示区域 -->
    <div class="bottom-section">
      <div class="message-container">
        <img src="@/assets/卡通人物-健康申报提示信息.png" alt="character" class="character-image">
        <div class="message-bubble">
          更多健康申报提示信息，可以参考以下内容
        </div>
      </div>
    </div>

    <!-- 申报信息详情区域 -->
    <div class="declaration-details">
      <!-- 须申报情形 -->
      <div class="info-card">
        <div class="info-header">
          <div class="header-tag">须申报情形</div>
        </div>
        <div class="info-content">
          如实申报健康状况及相关信息，有发热、咳嗽、呼吸困难、呕吐、腹泻、皮疹、不明原因皮下出血等传染病症状，或已经诊断患有传染性疾病的进境出境人员须主动向海关进行健康申报。
        </div>
      </div>
      
      <!-- 禁止情形 -->
      <div class="info-card">
        <div class="info-header">
          <div class="header-tag">禁止情形</div>
        </div>
        <div class="info-content">
          患有严重精神病、传染性肺结核病或者有可能对公共卫生造成重大危害的其他传染病的外国人不得进境。进境的外国人拒绝接受《中华人民共和国国境卫生检疫法》第十一条规定的检疫查验措施的，海关可以作出不准其进境的决定。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const symptoms = [
  {
    label: '发热',
    image: new URL('@/assets/发热.png', import.meta.url).href
  },
  {
    label: '咳嗽',
    image: new URL('@/assets/咳嗽.png', import.meta.url).href
  },
  {
    label: '呼吸困难',
    image: new URL('@/assets/呼吸困难.png', import.meta.url).href
  },
  {
    label: '呕吐、腹泻',
    image: new URL('@/assets/呕吐、腹泻.png', import.meta.url).href
  },
  {
    label: '皮疹',
    image: new URL('@/assets/皮疹.png', import.meta.url).href
  },
  {
    label: '不明原因皮下出血等症状',
    image: new URL('@/assets/不明原因皮下出血.png', import.meta.url).href
  }
]
</script>

<style scoped>
.health-notice {
  min-height: 100vh;
  background-color: #87CEEB;
  padding: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.top-section {
  position: relative;
  margin-bottom: 10px;
}

.cloud-image {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 60px;
  height: auto;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
}

.character-image {
  width: 60px;
  height: auto;
}

.notice-title {
  color: white;
  font-size: 24px;
  font-weight: bold;
  background-color: #1E90FF;
  padding: 8px 35px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.notice-text {
  margin-bottom: 10px;
  padding: 0px 15px;
}

.text-box {
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.title {
  margin: 0;
  font-weight: bold;
  color: #333;
}

.content {
  margin: 10px 0;
  color: #666;
  line-height: 1.5;
}

.symptoms-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 30px;
}

.symptom-card {
  display: flex;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
}

.symptom-label {
  width: 30%;
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}

.symptom-image-container {
  width: 70%;
  padding: 15px;
  display: flex;
  justify-content: left;
  align-items: center;
  height: 150px;
}

.symptom-image {
  width: auto;
  height: 110%;
  max-width: 100%;
  object-fit: contain;
}

.bottom-section {
  margin: 10px 0;
}

.message-container {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.message-bubble {
  background: white;
  margin-top: 10px;
  border-radius: 15px;
  position: relative;
  color: #1989fa;
  font-size: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  padding: 20px 16px;
}

/* 申报信息详情样式 */
.declaration-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 5px;
  margin-bottom: 20px;
}

.info-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-header {
  background: #1989fa;
  padding: 12px 20px;
  display: flex;
  align-items: center;
}

.header-tag {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.info-content {
  padding: 20px;
  color: #333;
  line-height: 1.8;
  font-size: 15px;
  text-align: justify;
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .health-notice {
    padding: 15px;
    gap: 15px;
  }

  .notice-title {
    font-size: 20px;
  }

  .symptom-label {
    font-size: 14px;
    padding: 10px;
  }

  .symptom-image-container {
    height: 150px;
    padding: 10px;
  }

  .text-box {
    padding: 15px;
  }

  .message-bubble {
    font-size: 14px;
    padding: 20px 16px;
  }

  .character-image {
    width: 50px;
  }
}
</style> 