import React from 'react';

const TYPES = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success',
}

const Button = ({ text, url, buttonType }) => {
  return (
    <a href="{url}" className="btn btn--primary">
      {text}
    </a>
  );
};

export default Button;