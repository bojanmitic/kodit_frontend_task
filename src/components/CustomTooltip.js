import React, { Component } from 'react'
import './styles.css/customTooltip.css';

class CustomTooltip extends Component {
    render() {

        const { active } = this.props;
    
        if (active) {
          const { payload } = this.props;
          return (
            <div className="custom-tooltip">
              <p>{`Value of the apartment: ${Math.round(payload[1].value * payload[0].value)} €`}</p>
              <p>{`Price per m2: ${Math.round(payload[1].value)} €`}</p>
              <p>{`Square meters: ${(payload[0].payload.size_sqm)} m2`}</p>
              <p>{`Rooms: ${payload[0].payload.room_count}`}</p>
              <p>{`Description: ${payload[0].payload.description}`}</p>
              <p>{`Address: ${payload[0].payload.street} ${payload[0].payload.street_number} `}</p>
            </div>
          );
        }
    
        return null;
      }
}

export default CustomTooltip;
