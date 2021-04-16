var map = L.map('map').setView([34.82507742547061, -7.109527587890626], 3);
	
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let data = [
	{
		'title':'Los Angeles',
		'description': 'UCLA Broad Art Center<br> Where I have most of my DMA studio classes',
		'lat': 34.07561221545342,
		'lon': -118.44121075468139
	},
	{
		'title':'Taipei',
		'description': 'I go to Taiwan to visit relatives and Tapei 101 is a super cool place to visit!',
		'lat': 25.032902690153133,
		'lon': 121.56158478464933
	},
	{
		'title':'Tokyo',
		'description': 'I went to Japan when I was 8 years old, but I threw up on the airplane and was basically sick the entire trip :( I really want to visit Japan again!',
		'lat': 35.681993756251515,
		'lon': 139.76319828070703
	},
	{
		'title':'Honolulu',
		'description': 'Visited Hawaii with my family before after graduating high school',
		'lat': 21.304891789269327,
		'lon': -157.8518278920092
	},
	{
		'title':'New York',
		'description': 'Went to New York for a summer camp before and have cousins that live nearby there',
		'lat': 40.71208306034958,
		'lon': -74.00613049278037
	},
	{
		'title':'Cupertino',
		'description': 'I grew up and went to school in the Bay Area',
		'lat': 37.32313509329208,
		'lon': -122.03184980666266
	}
]

// create a feature group
let myMarkers = L.featureGroup();

// loop through data
data.forEach(function(item, index){
	let marker = L.marker([item.lat,item.lon])
		.bindPopup(` <div>${item.title}</div><img 
		src="${item.image}" width="100%><br>$${item.description}`)
		.openPopup();

	myMarkers.addLayer(marker)

	$('.sidebar').append(`<div class="sidebar-item" 
	onclick="flyToIndex(${index})">${item.title}</div>`)

});

myMarkers.addTo(map)

// define layers
let layers = {
	"My Markers": myMarkers
}

// add layer control box
L.control.layers(null,layers).addTo(map)

map.fitBounds(myMarkers.getBounds())

function flyToIndex(index){
	map.flyTo([data[index].lat,data[index].lon], 12)
	myMarkers.getLayers()[index].openPopup()
}