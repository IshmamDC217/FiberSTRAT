import React, { useState } from 'react';
import PropTypes from 'prop-types';

function GuitarPartButton(props) {
  const { partName, info, position, onClick } = props;
  const [showInfo, setShowInfo] = useState(false);

  const handleButtonClick = () => {
    onClick(position);
    setShowInfo(true);
  };

  const handleInfoClose = () => {
    onClick(null);
    setShowInfo(false);
  };

  const infoPanel = showInfo && (
    <div className="info-panel">
      <h2>{partName}</h2>
      <p>{info}</p>
      <button onClick={handleInfoClose}>Close</button>
    </div>
  );

  return (
    <>
      <button onClick={handleButtonClick}>Zoom to {partName}</button>
      {infoPanel}
    </>
  );
}

GuitarPartButton.propTypes = {
  partName: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GuitarPartButton;
