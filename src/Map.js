import React from 'react';

import { compose, withProps } from 'recompose';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import { googleMap } from './Data';

const getGoogleMapUrl = ({ key, baseUrl, apiPath }) => {
	return `${baseUrl}${apiPath}?key=${key}&v=3.exp&libraries=geometry,drawing,places`;
};

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
		loadingElement: <div style={{ height: '100%' }} />,
		containerElement: <div style={{ height: '100vh' }} />,
		mapElement: <div style={{ height: '100%' }} />
	}),
	withScriptjs,
	withGoogleMap
)(Map);
