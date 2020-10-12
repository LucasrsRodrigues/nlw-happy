import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import mapMarkerImg from '../../assets/images/map-marker.svg';
import MapComponent from '../../components/MapComponent';

import { Container } from './styles';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Suzano</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <MapComponent />

      <Link to="fffr" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
