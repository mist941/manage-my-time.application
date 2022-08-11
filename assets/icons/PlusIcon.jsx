import React from 'react';
import {SvgXml} from 'react-native-svg';

const PlusIcon = () => {
  return (
    <SvgXml xml={`
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.33331V31.6666" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.33334 20H31.6667" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `}/>
  );
};

export default PlusIcon;