import React from 'react';
import ReactLoading from 'react-loading';

const Example = ({ type, color }) => (
  <ReactLoading type={'bubbles'} color={'rgb(110, 214, 255)'} height={667} width={375} className='loading' />
);

export default Example;