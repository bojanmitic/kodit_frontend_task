import React, { Component } from 'react';
import ScatterChartWrapper from '../components/ScatterChartWrapper';
import "./main.css";

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        fetch('https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                "who_rules": "kodit.io"  
            })
            }).then(response => response.json()
            ).then(data => this.setState({data}));
    }
  render() {
      const  {data} = this.state;
      return (
      <div>
        <h1 className="title">Data visualization for apartments</h1>
         <ScatterChartWrapper  data={data}/>
      </div>
    )
  }
}

export default Main;
