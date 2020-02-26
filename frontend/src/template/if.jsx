import React from 'react';

export default props => {
  if (props.hideProps) {
    return props.children;
  } else {
    return false;
  }
};
