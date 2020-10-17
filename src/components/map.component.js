import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map 
        google={this.props.google} 
        style={{width: '84%', height: '84%', position: 'center'}}
        className={'map'}
        zoom={14}
        >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD3KjyyZhYa41t6tsJN_VroCB9BNhduQE0")
})(MapContainer)