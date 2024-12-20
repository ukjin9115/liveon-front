import React, { useState } from "react";
import "./Tabs.css"; // CSS 파일
import ViewerReactionChart from "./ViewerReactionChart"; // ViewerReactionChart 컴포넌트
import WordCloudComponent from "./WordCloudComponent"; // WordCloud 컴포넌트
import LikesAndComments from "./LikesAndComments";
const ViewerReaction = () => {
  const mockData = {
    veryPositive: 30,
    positive: 50,
    neutral: 20,
    negative: 15,
    veryNegative: 10,
  };

  return <ViewerReactionChart data={mockData} />;
};


// 탭 내용에 표시될 컴포넌트들

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("viewerReaction");

  // 탭에 따른 콘텐츠 렌더링
  const renderContent = () => {
    switch (activeTab) {
      case "viewerReaction":
        return <ViewerReaction />;
      case "keywordStats":
        return <WordCloudComponent />; // WordCloud 컴포넌트 연결
      case "likesAndComments":
        return <LikesAndComments />;
      default:
        return null;
    }
  };

  return (
    <div className="binance-tabs">
      {/* 탭 버튼 */}
      <div className="tab-buttons">
        <div
          className={`tab ${activeTab === "viewerReaction" ? "active" : ""}`}
          onClick={() => setActiveTab("viewerReaction")}
        >
          시청자 반응
        </div>
        <div
          className={`tab ${activeTab === "keywordStats" ? "active" : ""}`}
          onClick={() => setActiveTab("keywordStats")}
        >
          키워드
        </div>
        <div
          className={`tab ${activeTab === "likesAndComments" ? "active" : ""}`}
          onClick={() => setActiveTab("likesAndComments")}
        >
          좋아요 & 댓글
        </div>
      </div>

      {/* 탭 내용 */}
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
