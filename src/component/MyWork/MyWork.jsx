import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import MyWork_Data from "../../assets/mywork_data";
import mywork_data from "../../assets/mywork_data";
const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="arrow" className="mywork-arrow" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          console.log(work);
          return <img key={index} src={work.w_img} alt="mywork" />;
        })}
      </div>
    </div>
  );
};

export default MyWork;
