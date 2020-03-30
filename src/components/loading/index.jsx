import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

const Loading = () => (
  <div className="page loading-page">
    <FontAwesomeIcon icon={{prefix: 'fas', iconName: 'spinner'}} size="6x" spin/>
  </div>
);

export default Loading;