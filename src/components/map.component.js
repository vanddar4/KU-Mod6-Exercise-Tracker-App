import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map 
          google={this.props.google} 
          style={{width: '80%', height: '80%', position: 'center'}}
          className={'map'}
          zoom={14}
        >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD3KjyyZhYa41t6tsJN_VroCB9BNhduQE0",
})(MapContainer);

// <InfoWindow onClose={this.onInfoWindowClose}>
//     <div>
//       <h1>{this.state.selectedPlace.name}</h1>
//     </div>
// </InfoWindow>
