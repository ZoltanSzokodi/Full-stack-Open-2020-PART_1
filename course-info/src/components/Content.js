import React, { Fragment } from 'react';
import Part from './Part';

const Content = ({ course: { parts } }) => {
  return (
    <Fragment>
      {parts.map((part, i) => (
        <Part key={i} part={part} />
      ))}
    </Fragment>
  );
};

export default Content;
