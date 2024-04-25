import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import { Navbar } from '../Navbar';
function Home() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/slider');
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
    }, 4005);

    return () => clearInterval(intervalId);
  }, [data]);

  return (
    // <div style={{ position: 'relative', textAlign: 'center' }}>
    //   <img src={data.length > 0 && data[index]} width="100%" height={450} />
    //   <div className="flex mlr-10 center" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', display: 'flex' ,padding:'0px',}}>
    //     {data.length > 0 &&
    //       data.map((imgItem, imgIndex) => (
    //         <div
    //           key={imgIndex + 1}
    //           style={
    //             imgIndex === index
    //               ? {
    //                   margin: '10px',
    //                   background: '#B931FC',
    //                   width: '10px',
    //                   height: '10px',
    //                   borderRadius: '50%',
    //                 }
    //               : {
    //                   margin: '10px',
    //                   background: '#e5e5e5',
    //                   width: '10px',
    //                   height: '10px',
    //                   borderRadius: '50%',
    //                 }
    //           }
    //         ></div>
    //       ))}
    //   </div>
    // </div>
    <>
    <Navbar/>
      <div class="hello">
        <div class="container">
          <h1>Start Exploring the projects</h1>
          <div class="image-container">
            <img src="https://images.datacamp.com/image/upload/v1661355364/Machine_Learning_1_5fcdbe9f53.png" alt="Edu Meeting" class="landing-image"></img>
            <img src="https://online.york.ac.uk/wp-content/uploads/2021/09/Illustration-of-a-brain-with-cogs-inside-and-pathways-outside-and-deep-learning-written-above.jpg" class="landing-image"></img>
            <img src="https://elearningindustry.com/wp-content/uploads/2021/08/Artificial-Intelligence-For-Project-Based-Learning.png" alt="Edu Meeting" class="landing-image"></img>
            <img src="https://cdn.sanity.io/images/oaglaatp/production/3f09ea1c508d66b48a998f956721004e1bb21860-3720x2160.png?w=3720&h=2160&auto=format" alt="Edu Meeting" class="landing-image"></img>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/81fd1e100718715.5f0ef9fe9e100.png" alt="Edu Meeting" class="landing-image"></img>
            <img src="https://img.freepik.com/free-vector/travel-landing-page-with-photo_23-2148360912.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=ais" alt="Edu Meeting" class="landing-image"></img>
            <img src="https://admin.technoxis.com//Images/PortfolioImages/Img_PortFolio_204a3542-a668-4f6c-a906-865b766bf233.png" alt="Edu Meeting" class="landing-image"></img>
            <img src="https://cloudif.ai/wp-content/uploads/2020/04/cloudif.ai-projects-suitable-for-ai.jpg" alt="Edu Meeting" class="landing-image"></img>

          </div>
          <br></br>
          <p  className='tag'>Unlock a world of knowledge and collaboration with our learning platform.</p>
          <a href="#" class="cta-button" >Get Started</a>
        </div>
       
        
        {/* <h2>Explore trending Technologies</h2> */}
                     
                        <h2>Explore trending Technologies and projects</h2>

                        <div class="content-box2">
                          <img src="https://blog.amrapali.ac.in/wp-content/uploads/2023/04/gff.jpg"/>

                            <p>Embark on a journey of knowledge and innovation! 🚀✨ We invite you to explore our captivating projects in [Web Development/Machine Learning/Data Science]. Each project is a testament to creativity and expertise.

                              Ready to be inspired? Click [here] to dive into the world of possibilities!

                              Happy exploring,</p>

                        </div>

                      </div>
                      <div class="content-box">
                        <p>our mission is to revolutionize project management by bringing all projects under one comprehensive platform. By centralizing projects on our platform, we aim to streamline processes, enhance collaboration, and empower teams to achieve their goals with efficiency and innovation. Join us on this journey towards a centralized, dynamic, and integrated approach to project management, where success knows no bounds. Please take a moment to share your rating and let us know how we're doing. Your support means the world to us! ⭐️⭐️⭐️⭐️⭐️</p>
                        <img src="https://media.istockphoto.com/id/861322484/photo/businessman-touchscreen-gold-stars.jpg?s=612x612&w=0&k=20&c=sar8QRu3aePm7IUzfrZ2QrKHfsqmnwGzB68hKuivk0k="/>

                      </div>
                      
   
                      <footer>
                        <div class="quick-links">
                          <ul>
                            <li class="a">Quick Links</li>

                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                          </ul>
                        </div>
                        <div class="quick-links1">
                          <ul>
                            <li class="a">Most Viewed Projects</li>

                            <li>Machine Learning</li>
                            <li>Deep Learning</li>
                            <li>Full stack Web Development</li>
                            <li>Data Science</li>
                            <li>Frontend Development</li>
                          </ul>
                            </div>
                            <div class="quick-links2">
                              <ul>
                                <li class="a">Trending Technologies</li>

                                <li>Artificial Intelligence and Machine Learning</li>
                                <li>Cybersecurity</li>
                                <li>Blockchain</li>
                                <li>Augmented Reality and Virtual Reality</li>
                                <li>Internet of Things</li>
                                <li>Robotic Process Automation</li>
                                <li>DevOps and Continuous Integration/Continuous Deployment</li>
                                <li>Quantum Computing</li>
                              </ul>
                            </div>
                      </footer>               
  </>

 );
}
export default Home;
