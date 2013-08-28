
// Enable the visual refresh
google.maps.visualRefresh = true;

var map;//google map object
function initialize() { //constructor
  var cities = new Array();//array of cities and its geo location
  cities["manaus"]=new google.maps.LatLng(-3.1, -60.0);
  cities["rio"]=new google.maps.LatLng(-22.9, -43.2);
  cities["sp"]=new google.maps.LatLng(-23.55, -46.644);
  cities["bh"]=new google.maps.LatLng(-19.9, -43.92);
  cities["portoalegre"]=new google.maps.LatLng(-30.01, -51.2);
  cities["br"]=new google.maps.LatLng(-15.8, -47.86);
  cities["cuiaba"]=new google.maps.LatLng(-15.58, -56.09);
  cities["curitiba"]=new google.maps.LatLng(-25.4, -49.2);
  cities["fortaleza"]=new google.maps.LatLng(-3.72, -38.55);
  cities["natal"]=new google.maps.LatLng(-5.8, -35.2);
  cities["recife"]=new google.maps.LatLng(-8.05, -34.9);
  cities["salvador"]=new google.maps.LatLng(-12.95, -38.44);

  var mapOptions = {//map options
    zoom: 4,	//zoom level
    center: cities["br"],	//default center
    mapTypeId: google.maps.MapTypeId.ROADMAP,	//map type
    minZoom: 4	//minimum zoom
  };
  map = new google.maps.Map(document.getElementById('mapa'),mapOptions); //create the map
  
  var markerCities = new Array(); //array of cities and their markers
  markerCities["manaus"]=new google.maps.Marker({position:cities["manaus"],map: map, title: 'Manaus'});
  markerCities["rio"]=new google.maps.Marker({position:cities["rio"],map: map, title: 'Rio de Janeiro'});
  markerCities["sp"]=new google.maps.Marker({position:cities["sp"],map: map, title: 'São Paulo'});
  markerCities["bh"]=new google.maps.Marker({position:cities["bh"],map: map, title: 'Belo Horizonte'});
  markerCities["portoalegre"]=new google.maps.Marker({position:cities["portoalegre"],map: map, title: 'Porto Alegre'});
  markerCities["br"]=new google.maps.Marker({position:cities["br"],map: map, title: 'Brasília'});
  markerCities["cuiaba"]=new google.maps.Marker({position:cities["cuiaba"],map: map, title: 'Cuiabá'});
  markerCities["curitiba"]=new google.maps.Marker({position:cities["curitiba"],map: map, title: 'Curitiba'});
  markerCities["fortaleza"]=new google.maps.Marker({position:cities["fortaleza"],map: map, title: 'Fortaleza'});
  markerCities["natal"]=new google.maps.Marker({position:cities["natal"],map: map, title: 'Natal'});
  markerCities["recife"]=new google.maps.Marker({position:cities["recife"],map: map, title: 'Recife'});
  markerCities["salvador"]=new google.maps.Marker({position:cities["salvador"],map: map, title: 'Salvador'});
  
  
  google.maps.event.addListener(map, 'rightclick', function(event) { //right click on map action
    placeMarker(event.latLng);
  });
  

  //google.maps.event.addListener(map, 'center_changed', function() {//when the user changes the maps center, the map automaticaly return to its original center
    // 5 seconds after the center of the map has changed, pan back to the
    // marker.
    //window.setTimeout(function() {
    //  map.panTo(marker.getPosition());
    //}, 5000);
  //});
  var defaultZoomIn = 12;
  
  //add one listener for each of the 12 cities
  google.maps.event.addListener(markerCities["br"], 'dblclick',function(){
      map.setZoom(12);//set zoom in
      map.setCenter(markerCities["br"].getPosition()); //center map
  });
  
  google.maps.event.addListener(markerCities["manaus"], 'dblclick',function(){
      map.setZoom(defaultZoomIn);
      map.setCenter(markerCities["manaus"].getPosition());
  });
  
  google.maps.event.addListener(markerCities["rio"], 'dblclick',function(){
      map.setZoom(defaultZoomIn);
      map.setCenter(markerCities["rio"].getPosition());
  });
  
  google.maps.event.addListener(markerCities["sp"], 'dblclick',function(){
      map.setZoom(defaultZoomIn);
      map.setCenter(markerCities["sp"].getPosition());
  });
  
  google.maps.event.addListener( markerCities["bh"], 'dblclick',function(){
      map.setZoom(defaultZoomIn);
      map.setCenter( markerCities["bh"].getPosition());
  });
  
  google.maps.event.addListener(markerCities["portoalegre"], 'dblclick',function(){
      map.setZoom(defaultZoomIn);
      map.setCenter(markerCities["portoalegre"].getPosition());
  });

  google.maps.event.addListener(markerCities["cuiaba"], 'dblclick',function(){
      map.setZoom(defaultZoomIn);
      map.setCenter(markerCities["cuiaba"].getPosition());
  });
  
  google.maps.event.addListener(markerCities["curitiba"], 'dblclick',function(){
      map.setZoom(defaultZoomIn);
      map.setCenter(markerCities["curitiba"].getPosition());
  });
  
  google.maps.event.addListener(markerCities["fortaleza"], 'dblclick',function(){
      map.setZoom(defaultZoomIn);
      map.setCenter(markerCities["fortaleza"].getPosition());
  });
  
  google.maps.event.addListener(markerCities["natal"], 'dblclick',function(){
      map.setZoom(defaultZoomIn);
      map.setCenter(markerCities["natal"].getPosition());
  });
  
  google.maps.event.addListener(markerCities["recife"], 'dblclick',function(){
      map.setZoom(defaultZoomIn);
      map.setCenter(markerCities["recife"].getPosition());
  });
  
  google.maps.event.addListener(markerCities["salvador"], 'dblclick',function(){
      map.setZoom(defaultZoomIn);
      map.setCenter(markerCities["salvador"].getPosition());
  });
  
}

google.maps.event.addDomListener(window, 'load', initialize);// when the web page is loaded, constructs the map


function placeFullMarker(location,title,description){
  var image = new google.maps.MarkerImage("http://maps.google.com/mapfiles/kml/paddle/blu-circle.png", null, null, null, new google.maps.Size(32, 32));
  var marker = new google.maps.Marker({ //create the marker
    position: location,
    map: map,
    title: title,
    icon: image
  });
  google.maps.event.addListener(marker, 'rightclick',function(){ //add right click action
    marker.setMap(null);
  });
  google.maps.event.addListener(marker, 'dblclick',function(){ //add left click action
     map.setZoom(12);
     map.setCenter(marker.getPosition());
  });
  var info = new google.maps.InfoWindow({content: strcontents});
  google.maps.event.addListener(marker, 'mouseover',function(){ //add right click action
    info.open(map,marker);
  });
  google.maps.event.addListener(marker, 'mouseout',function(){ //add right click action
    info.close();
  });
  //sendToServer(location,strcontents,title); //send information to server
}

function placeMarker(location) {//create a new marker
  var title=prompt("Titulo:","Exemplo"); //ask for title
  var strcontents=prompt("Descricao","Exemplo"); //ask for contents
  placeFullMarker(location,title,strcontents);
}



function buscaLocal(campo_query,campo_respostas){
  var address = document.getElementById(campo_query).value;
  addressToLocation(address, changeMapLocation);
}

function addressToLocation(address, callback) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({address: address}, 
  function(results, status) {			
    var resultLocations = [];			
    if(status == google.maps.GeocoderStatus.OK) {
      if(results) {
	var numOfResults = results.length;
	for(var i=0; i<numOfResults; i++) {
	  var result = results[i];
	  resultLocations.push({	text:result.formatted_address,
				  addressStr:result.formatted_address,
				  location:result.geometry.location});
	};
      }
    } else if(status == google.maps.GeocoderStatus.ZERO_RESULTS) {
      // address not found
    }			
    if(resultLocations.length > 0) {
      callback(resultLocations);
    } else {
      callback(null);
    }
  });
}

function changeMapLocation(locations,results_holder_div) {
  if(locations && locations.length) {
    var numOfLocations = locations.length;
    var contents = '<ul>\n';
    for(var i=0; i<numOfLocations; i++) {
      //add a new item to the list
      contents=contents+'<li onclick="placeFullMarker('+i+')">'+locations[i].text+'</li>\n';//or locations[i].addressStr or locations[i].location
    }
    contents = contents+'</ul>'
    results_holder_div.innerHTML=contents;
    //place marker
    placeFullMarker(locations[0].location,'',locations[0].text);
    map.setCenter(locations[0].location);
  } else {
    alert('Resultado nao encontrado.');
  }
}
































