import React from 'react';

import { compose, withProps } from 'recompose';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import { googleMap } from './Data';

const getGoogleMapUrl = ({ key, baseUrl, apiPath }) => {
    return `${baseUrl}${apiPath}?key=${key}&v=3.exp&libraries=geometry,drawing,places`;
};

class LoadingContainer extends React.Component {
    state = {
        content: 'Loading...'
    }
    componentDidMount(){
        this.timer = setTimeout(() => {
            this.setState({content: 'Google map has failed to load, please check your network connectivity or try again.'}); 
        }, 1000);
    }
    componentWillUnmount(){
        clearTimeout(this.timer);
    }
    render(){
        return (
            this.state.content
        )
    }
}


const Map = ({ filteredMuseums, openDetail }) => (
    <GoogleMap
        defaultZoom={googleMap.zoom}
        defaultCenter={googleMap.initialLocation}
        options={{ disableDefaultUI: true }}
    >
        {filteredMuseums.map((museum, index) => (
            <Marker
                key={index}
                position={{ lat: museum.location.lat, lng: museum.location.lng }}
                onClick={() => openDetail(index)}
            />
        ))}
    </GoogleMap>
);

export default compose(
    withProps({
        googleMapURL: getGoogleMapUrl(googleMap),
        loadingElement: LoadingContainer,
        containerElement: <div style={{ height: '100vh' }} />,
        mapElement: <div style={{ height: '100%' }} />
    }),
    withScriptjs,
    withGoogleMap
)(Map);
