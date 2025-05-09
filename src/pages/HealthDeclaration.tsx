import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #87CEEB;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const HeaderIcon = styled.img`
  width: 60px;
  height: 60px;
`;

const HeaderTitle = styled.div`
  background-color: #00BFFF;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  margin-left: 10px;
  font-size: 18px;
`;

const MessageBox = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  margin: 15px 0;
  width: 90%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const SymptomContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const SymptomLabel = styled.div`
  background-color: #FFB6C1;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 16px;
`;

const SymptomImage = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const InfoSection = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
  width: 90%;
`;

const HealthDeclaration: React.FC = () => {
  const symptoms = [
    { label: '发热', image: '/assets/fever.png' },
    { label: '咳嗽', image: '/assets/cough.png' },
    { label: '呼吸困难', image: '/assets/breathing.png' },
    { label: '呕吐、腹泻', image: '/assets/stomach.png' },
    { label: '皮疹', image: '/assets/rash.png' },
    { label: '不明原因皮下出血', image: '/assets/bleeding.png' },
  ];

  return (
    <PageContainer>
      <Header>
        <HeaderIcon src="/assets/卡通人像.png" alt="Icon" />
        <HeaderTitle>健康申报提示</HeaderTitle>
        <img src="/assets/白云.png" alt="Cloud" style={{ position: 'absolute', right: '20px', top: '20px' }} />
      </Header>

      <MessageBox>
        <p>各位进出境旅客朋友：</p>
        <p>快乐的旅程让人难忘，身体状态请多关注。</p>
        <p>为了您和大家的健康和安全，如您发现自己或同行人有以下情况，请在航程途中向机组、在进境时向海关申报健康状况及相关信息。</p>
      </MessageBox>

      {symptoms.map((symptom, index) => (
        <SymptomContainer key={index}>
          <SymptomLabel>{symptom.label}</SymptomLabel>
          <SymptomImage>
            <img src={symptom.image} alt={symptom.label} />
          </SymptomImage>
        </SymptomContainer>
      ))}

      <InfoSection>
        <h3>更多健康申报提示信息，可以参考以下内容</h3>
        <h4>须申报情形</h4>
        <p>如实申报健康状况及相关信息，有发热、咳嗽、呼吸困难、呕吐、腹泻、皮疹、不明原因皮下出血等传染病症状，或已经诊断患有传染性疾病的进境出境人员须主动向海关进行健康申报。</p>
        <h4>禁止情形</h4>
        <p>患有严重精神病、传染性肺结核病或者有可能对公共卫生造成重大危害的其他传染病的外国人不得进境。进境的外国人拒绝接受《中华人民共和国国境卫生检疫法》第十一条规定的检疫查验措施的，海关可以作出不准其进境的决定。</p>
      </InfoSection>
    </PageContainer>
  );
};

export default HealthDeclaration; 