const museums = [
	{
		name: 'American Museum of Natural History',
		image: {
			small: './images/american-museum-of-natural-history-400.jpg',
			medium: './images/american-museum-of-natural-history-600.jpg',
			large: './images/american-museum-of-natural-history-800.jpg',
			width: 524,
			height:414
		},
		location: {
			lat: 40.7813281,
			lng: -73.9761769
		}
	},
	{
		name: 'Metropolitan Museum of Art',
		image: {
			small: './images/metropolitan-museum-of-art-400.jpg',
			medium: './images/metropolitan-museum-of-art-600.jpg',
			large: './images/metropolitan-museum-of-art-800.jpg',
			width: 552,
			height:368
		},
		location: {
			lat: 40.7794406,
			lng: -73.9654327
		}
	},
	{
		name: 'The Museum of Modern Art',
		image: {
			small: './images/the-museum-of-modern-art-400.jpg',
			medium: './images/the-museum-of-modern-art-600.jpg',
			large: './images/the-museum-of-modern-art-800.jpg',
			width: 552,
			height:414
		},
		location: {
			lat: 40.7614367,
			lng: -73.9798103
		}
	},
	{
		name: 'Solomon R. Guggenheim Museum',
		image: {
			small: './images/solomon-r-guggenheim-museum-400.jpg',
			medium: './images/solomon-r-guggenheim-museum-600.jpg',
			large: './images/solomon-r-guggenheim-museum-800.jpg',
			width: 552,
			height:414
		},
		location: {
			lat: 40.7829836,
			lng: -73.9611593
		}
	},
	{
		name: 'Museum of the City of New York',
		image: {
			small: './images/museum-of-the-city-of-new-york-400.jpg',
			medium: './images/museum-of-the-city-of-new-york-600.jpg',
			large: './images/museum-of-the-city-of-new-york-800.jpg',
			width: 537,
			height:584
		},
		location: {
			lat: 40.792498,
			lng: -73.9540977
		}
	}
];

const googleMap = {
	key: 'AIzaSyBY2rGnEKIMl0pUYJpGJ6tE9GeoiCIDoLE',
	baseUrl: 'https://maps.googleapis.com',
	apiPath: '/maps/api/js',
	initialLocation: {
		lat: 40.7826996,
		lng: -73.9682502
	},
	zoom: 13
};

const wikiPedia = {
	baseUrl: 'https://en.wikipedia.org/w/api.php'
};

const initialMuseumDetailData = [ '', [ '' ], [ 'Loading museum details...' ], [ '' ] ];
const ajaxErrorMuseumDetailData = [ '', [ '' ], [ 'Loading museum detail error, please try again' ], [ '' ] ];
export { museums, googleMap, wikiPedia, initialMuseumDetailData, ajaxErrorMuseumDetailData };
