// ./src/components/pages/Projects.js

import React, { useEffect, useState } from 'react';
import './Projects.css';
import axios from 'axios';
import { Navbar } from '../Navbar';
const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/projects')
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div className="gallery-container">
      {data.length > 0 ? (
        data.map((projectItem, projectIndex) => (
          <div key={projectIndex + 1} className="content">
            <img src={`http://localhost:5000/${projectItem?.p_img}`} alt="" className="img" />
            <div className="project-details">
              <h1 className='title'>{projectItem.p_title}</h1>
             <h3>Description</h3> <h5>{projectItem.p_description}</h5>
              {/* <h3>Project Experience</h3><h6>{projectItem.p_exp}</h6> */}
              <p><a>{projectItem.p_link}</a></p>
              <ul className="rating">
                <li>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star"></i>
                </li>
              </ul>
              <button className="more-1" id="moreInfoBtn">
                More Info
              </button>
            </div>
          </div>
        ))
      ) : (
        'No data found'
      )}
    </div>
    </>
  );
};

export default Projects;
