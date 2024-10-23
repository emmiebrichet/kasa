import React from 'react';
import bandeau from '../assets/_Section 1 (2).png'; 
import Collapse from '../composents/Collapse'; // Import du composant Collapse
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div>
      {/* Bandeau Image */}
      <div className="Banner">
        <img src={bandeau} alt="bandeau" />
      </div>

      {/* Utilisation du composant Collapse */}
      <div className="collapse-section">
        <Collapse title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements,et toutes les informations sont régulèrement vérifiées par nos équipes. </p>
        </Collapse>

        <Collapse title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Service">
          <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nod hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>La sécurité est la prioprité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
      </div>
    </div>
  );
}

export default About;