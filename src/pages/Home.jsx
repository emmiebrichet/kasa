import React, { useState, useEffect } from 'react'; 
import Banner from '../composents/Banner';
import Card from '../composents/Card';
import bannerImage from '../assets/Section1.png'; 
import './index.css';

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Erreur lors de la récupération des données :', error));
  }, []);

  return (
    <div>
      <div className='Banner'>
        <Banner image={bannerImage} altText="Bienvenue sur notre site de propriétés" />
      </div>
      <div className="property-list">
        {properties.map(property => (
          <Card
            key={property.id}
            title={property.title}
            image={property.image}
            onClick={() => window.location.href = `/property/${property.id}`} // Redirection vers la page de détail
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
