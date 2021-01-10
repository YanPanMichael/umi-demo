import React, { memo } from 'react';

const AAA = memo((props) => {
  return (
    <div>
      AAA
      {props.children}
    </div>
  );
});

export default AAA;