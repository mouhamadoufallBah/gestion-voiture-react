// MesVoitures.js
import React, { Component } from 'react';
import Voiture from './Voiture';
import './MesVoitures.css';

class MesVoitures extends Component {
  constructor(props) {
    super(props);

    // Initialisation du state avec un tableau d'objets représentant des voitures
    this.state = {
      voitures: [
        { marque: 'Toyota', couleur: 'Rouge', annee: 2022 },
        { marque: 'Ford', couleur: 'Orange', annee: 2020 },
        { marque: 'Honda', couleur: 'Vert', annee: 2021 },
      ],
      afficherAge: Array(3).fill(false), // Initialiser un tableau d'état pour chaque voiture
    };
  }

  getAge = (anneeFabrication) => {
    const anneeActuelle = new Date().getFullYear();
    return anneeActuelle - anneeFabrication;
  };

  toggleAfficherAge = (index) => {
    // Fonction pour basculer l'affichage/masquage de l'âge pour une voiture spécifique
    this.setState((prevState) => {
      const newAfficherAge = [...prevState.afficherAge];
      newAfficherAge[index] = !newAfficherAge[index];
      return { afficherAge: newAfficherAge };
    });
  };

  render() {
    return (
      <div className="MesVoitures">
        <h1>Liste des Voitures</h1>
        <table>
          <thead>
            <tr>
              <th>Marque</th>
              <th>Couleur</th>
              <th>Année</th>
              <th>Âge</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.voitures.map((voiture, index) => (
              <Voiture
                key={index}
                marque={voiture.marque}
                couleur={voiture.couleur}
                annee={voiture.annee}
                afficherAge={this.state.afficherAge[index]} // Passer la propriété 'afficherAge' pour chaque voiture
                toggleAfficherAge={() => this.toggleAfficherAge(index)} // Passer la fonction pour basculer l'affichage/masquage de l'âge pour chaque voiture
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MesVoitures;
