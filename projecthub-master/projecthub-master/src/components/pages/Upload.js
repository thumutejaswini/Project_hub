import React, { useState } from 'react';
import "./Upload.css";
import axios from 'axios';
import { Navbar } from '../Navbar';
const Upload = () => {
  // Component logic
  const [p_title, setTittle] = useState('')
  const [p_description, setDesc] = useState('')
  const [p_exp, setExp] = useState('')
  const [p_link, setLink] = useState('')
  const [p_img, setImg] = useState('')
  // const [p_video, setVideo] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value, 12)
    setTittle(e.target.value)
  }
  const handleChangeDesc = (e) => {
    console.log(e.target.value, 12)
    setDesc(e.target.value)
  }
  const handleChangeExp = (e) => {
    console.log(e.target.value, 12)
    setExp(e.target.value)
  }
  const handleChangeLink = (e) => {
    console.log(e.target.value, 12)
    setLink(e.target.value)
  }
  const handleImageChange = (e) => {
    // Assuming you're using state to manage p_img
    console.log(p_img, 12)
    setImg(e.target.files[0]);
  };

  const handleClick = () => {
    console.log(p_title, p_description, p_exp, p_link, p_img)
    const formData = new FormData()
    formData.append('p_title', p_title)
    formData.append('p_description', p_description)
    formData.append('p_exp', p_exp)
    formData.append('p_link', p_link)
    formData.append('p_img', p_img)




    axios.post('http://localhost:5000/api/projects', formData,{
      
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err, "err")
      })
  }
  return (
    <>
    <Navbar/>
    <div className="upload-container">
      <form id="projectForm" className="upload-form">
        <label htmlFor="p_title">Project Title:</label>
        <input value={p_title} onChange={handleChange} type="text" id="p_title" name="p_title" className="input-field" required />

        <label htmlFor="p_description">Project Description:</label>
        <textarea
          value={p_description}
          onChange={handleChangeDesc}
          id="p_description"
          name="p_description"
          rows="4"
          className="input-field"
          required
        ></textarea>

        <label htmlFor="p_exp">Project Experience:</label>
        <input value={p_exp} onChange={handleChangeExp} type="text" id="p_exp" name="p_exp" className="input-field" required />

        <label htmlFor="p_link">Project Link:</label>
        <input value={p_link} onChange={handleChangeLink} type="url" id="p_link" name="p_link" className="input-field" required />
        <label htmlFor="p_img">Project Image:</label>
        <input onChange={handleImageChange} type="file" id="p_img" name="p_img" className="input-field" accept="image/*" />

        <button type="submit" onClick={handleClick} className="submit-button">
          Upload Project
        </button>
      </form>
    </div>
    </>
  );
};

export default Upload;
