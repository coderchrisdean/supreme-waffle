import React, { useState, useEffect } from 'react';
import './PhotoSection.css';

const PhotoSection = () => {
  const [photos, setPhotos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // fetch photos to be used on the side section
    fetch('https://api.unsplash.com/search/photos?query=egypt&orientation=landscape&per_page=6', {
      headers: {
        Authorization: 'Client-ID PzLZhcz4vPSatSS1AAEFfGeO02_vbgSFA26wyjLEYkc'
      }
    })
    .then(res => res.json())
    .then(data => setPhotos(data.results))
    .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [photos]);

  return (
    <section className="photo-section">
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={photo.id} className={`photo-container ${index === activeIndex ? 'active' : ''}`}>
            <img src={photo.urls.small} alt={photo.description} className="photo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoSection;
