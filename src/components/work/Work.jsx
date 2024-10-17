import React from 'react';
import './Work.css';
import img from '../../assets/theme_pattern.svg';
import arrow from '../../assets/arrow_icon.svg';
import mywork_data from '../../assets/mywork_data';

const Work = () => {
  return (
    <div id='work' className='mywork'>
      <div className="work-title">
        <h1>My Latest Work</h1>
        <img src={img} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img key={index} src={work.w_img} alt={`Work ${index + 1}`} />
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default Work;
