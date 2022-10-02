import {SvgXml} from 'react-native-svg';
import React from 'react';

const DeleteIcon = () => {
  return (
    <SvgXml xml={`
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7205 6.9292C13.7205 13.8805 14.7211 17.0226 7.99106 17.0226C1.26019 17.0226 2.28142 13.8805 2.28142 6.9292" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 4.2644H1" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.969 4.2643C10.969 4.2643 11.4272 1 7.9994 1C4.57246 1 5.03065 4.2643 5.03065 4.2643" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `}/>
  );
};

export default DeleteIcon;