import React from 'react';
import {Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

const StatisticPieChart = ({data}) => {
  return (
    <PieChart
      data={data}
      width={Dimensions.get('window').width - 25}
      height={240}
      chartConfig={{
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
      accessor="population"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    />
  );
};

export default StatisticPieChart;