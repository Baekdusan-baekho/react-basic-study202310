import React from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children: renderCompoenet, destId }) => {
  return ReactDOM.createPortal(
    renderCompoenet,
    document.getElementById(destId)
  );
};

export default Portal;
