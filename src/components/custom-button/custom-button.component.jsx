import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignedIn, ...otherProps }) => (
  <button
    className={`custom-button ${isGoogleSignedIn ? 'signed-in' : ''}`}
    disabled={isGoogleSignedIn}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
