import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import './Videos.css';
import { Navbar } from '../Navbar';

const videoData = [
  { src: require("./videos/projects2.mp4"), title: "" },
  { src: require("./videos/project4.mp4"), title: "" },
  { src: require("./videos/project3.mp4"), title: "" },
  { src: require("./videos/project1.mp4"), title: "" },
  { src: require("./videos/projects2.mp4"), title: "" },
  { src: require("./videos/project4.mp4"), title: "" },
];

const Videos = () => {
  const [reactions, setReactions] = useState(videoData.map(() => ({ liked: false, disliked: false })));

  const handleReaction = (index, reactionType) => {
    setReactions((prevReactions) => {
      const newReactions = [...prevReactions];

      if (!newReactions[index][reactionType]) {
        // If not already reacted, update the reaction type
        newReactions[index][reactionType] = true;

        // Reset the other reaction to false
        newReactions[index][reactionType === 'liked' ? 'disliked' : 'liked'] = false;
      }

      return newReactions;
    });
  };

  const handleComment = () => {
    // Add your code to handle comments here
    alert('Comment button clicked!');
  };

  return (
    <>
      <Navbar />
      <div className="videos-container">
        {videoData.map((video, index) => (
          <div key={index} className="video-card">
            <video controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="interaction">
              <button onClick={() => handleReaction(index, 'liked')} disabled={reactions[index].liked}>
                <FontAwesomeIcon icon={faThumbsUp} /> Like
                <p className="ptag">{reactions[index].liked ? 1 : 0}</p>
              </button>
              <button onClick={() => handleReaction(index, 'disliked')} disabled={reactions[index].disliked}>
                <FontAwesomeIcon icon={faThumbsDown} /> Dislike
                <p className="ptag">{reactions[index].disliked ? 1 : 0}</p>
              </button>
              <button onClick={handleComment}>
                <FontAwesomeIcon icon={faComment} /> Comment
              </button>
            </div>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Videos;