import React from 'react';
import {
  ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Scatter,ResponsiveContainer
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import './styles.css/scatterChartDetails.css';

 const ScatterChartDetails = (props) => {
   const {data} = props;

   const splittingDataArray = (data, property) => {
    return data.reduce((acc, obj) => {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, []);
  }

  //we have 3 types of apartments: with balcony, without balcony,
  // and with no data about balcony

  const splittingDataBasedOnBalcony = splittingDataArray(data, 'balcony');

  const withoutBalcony = splittingDataBasedOnBalcony[0];
  const withBalcony = splittingDataBasedOnBalcony[1];
  const nullBalcony = splittingDataBasedOnBalcony[null];


  return (
    <ResponsiveContainer  width="90%" minHeight="55vh">
    <ScatterChart >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey={"size_sqm"} name="Square meter" unit="m2" />
      <YAxis type="number" dataKey={"price_sqm"} name="Price" unit="€" />
      <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      <Scatter name="Apartments with balconies" data={withBalcony} fill="#82ca9d" />
      <Scatter name="Apartments without balconies" data={withoutBalcony} fill="#8884d8" />
      <Scatter name="No data about balconies" data={nullBalcony} fill="red" />
   </ScatterChart>
   </ResponsiveContainer>
  )
}

export default ScatterChartDetails;
