import React from 'react';
import {SvgXml} from 'react-native-svg';

const EditIcon = () => {
  return (
    <SvgXml xml={`
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.2262 14.8145H15.0001" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6912 1.55119C10.4743 0.638526 8.74862 0.8848 7.83595 2.10078C7.83595 2.10078 3.29708 8.14717 1.72256 10.245C0.148032 12.3438 1.63745 14.9442 1.63745 14.9442C1.63745 14.9442 4.57463 15.6196 6.12652 13.5507C7.67932 11.4827 12.2399 5.40647 12.2399 5.40647C13.1526 4.19049 12.9072 2.46385 11.6912 1.55119Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66284 3.68115L11.0668 6.98684" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `}/>
  );
};

export default EditIcon;