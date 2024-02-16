import React from 'react';

function Cell({value, status}) {
  const className = status ? `cell ${status}` : 'cell';
  return (
    <span className={className}>
      {value}
    </span>
  );
}

export default Cell;
