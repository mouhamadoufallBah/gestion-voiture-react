// Voiture.js
import React from 'react';

const Voiture = ({ marque, couleur, annee, afficherAge, toggleAfficherAge }) => {
  const age = afficherAge ? getAge(annee) : null;

  return (
    <tr>
      <td>{marque}</td>
      <td>{couleur}</td>
      <td>{annee}</td>
      <td>{age}</td>
      <td>
        <button onClick={toggleAfficherAge}>
          {afficherAge ? 'Masquer Âge' : 'Afficher Âge'}
        </button>
      </td>
    </tr>
  );
};

const getAge = (anneeFabrication) => {
  const anneeActuelle = new Date().getFullYear();
  return anneeActuelle - anneeFabrication;
};

export default Voiture;
