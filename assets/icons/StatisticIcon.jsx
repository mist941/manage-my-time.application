import React from 'react';
import {SvgXml} from 'react-native-svg';

const StatisticIcon = () => {
  return (
    <SvgXml xml={`
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5 25V12.5" stroke="#8811FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 25V5" stroke="#8811FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.5 25V17.5" stroke="#8811FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `}/>
  );
};

export default StatisticIcon;