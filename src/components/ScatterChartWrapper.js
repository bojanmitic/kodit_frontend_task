import React, { Component } from 'react';
import ScatterChartDetails from './ScatterChartDetails';
import './styles.css/scatterChartsWrapper.css';

class ScatterChartWrapper extends Component {
   constructor(props){
       super(props);
      this.state = {
          search: '',
      }
   }
   handleChange = (e) => {
      let value = e.target.value;
      this.setState({
         search:value
      })
   }
  render() {
      const { search } = this.state;
      const { data } = this.props;
      const filteredData = data.filter(apartment => (
              apartment.street.toLowerCase().includes(search.toLocaleLowerCase())
            )).sort(( a, b ) => a.size_sqm - b.size_sqm);
    return (
      <div>
        <input 
            type="text"
            name="search"
            placeholder="Enter the street"
            value={this.state.value}
            onChange={this.handleChange}
        />  
         <ScatterChartDetails data={filteredData} />    
      </div>
    );
  }
}

export default ScatterChartWrapper;
