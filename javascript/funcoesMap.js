
var marcadores = new Array();
var infoatual = null;

function placeMarker(position, map, title, msg, id)
{
	var marker = new google.maps.Marker({
		position: position,
      	animation: google.maps.Animation.DROP,
      	map: map,
      	title: title
	});

	//cria uma caixa de texto
    var infowindow = new google.maps.InfoWindow(
  	{ content: msg,
    	size: new google.maps.Size(50,50)
  	});

	//add o evento click
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
		atualizar(infowindow);
    }) ;

    //map.panTo(position);
	popula(id, marker, infowindow);
}

function placeMarkerAzul(position, map, title, msg, id)
{
	var image = new google.maps.MarkerImage("http://maps.google.com/mapfiles/kml/paddle/blu-circle.png", null, null, null, new google.maps.Size(32, 32));

    var marker = new google.maps.Marker({
      position: position,
      animation: google.maps.Animation.DROP,
      map: map,
      title: title,
      icon: image
    });

	//cria uma caixa de texto
    var infowindow = new google.maps.InfoWindow(
	{ content: msg,
    	size: new google.maps.Size(50,50)
  	});

  	//add o evento click
  	google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
		atualizar(infowindow);
	}) ;

    //map.panTo(position);
  	popula(id, marker, infowindow);
}
function placeMarkerAmarelo(position, map, title, msg, id)
{
	var image = new google.maps.MarkerImage("http://maps.google.com/mapfiles/kml/paddle/ylw-circle.png", null, null, null, new google.maps.Size(32, 32));

    var marker = new google.maps.Marker({
      position: position,
      animation: google.maps.Animation.DROP,
      map: map,
      title: title,
      icon: image
    });

	//cria uma caixa de texto
    var infowindow = new google.maps.InfoWindow(
	{ content: msg,
    	size: new google.maps.Size(50,50)
  	});

  	//add o evento click
  	google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
		atualizar(infowindow);
	}) ;

    //map.panTo(position);
  	popula(id, marker, infowindow);
}
function placeMarkerVerde(position, map, title, msg, id)
{
	var image = new google.maps.MarkerImage("http://maps.google.com/mapfiles/kml/paddle/grn-circle.png", null, null, null, new google.maps.Size(32, 32));

    var marker = new google.maps.Marker({
      position: position,
      animation: google.maps.Animation.DROP,
      map: map,
      title: title,
      icon: image
    });

	//cria uma caixa de texto
    var infowindow = new google.maps.InfoWindow(
	{ content: msg,
    	size: new google.maps.Size(50,50)
  	});

  	//add o evento click
  	google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
		atualizar(infowindow);
	}) ;

    //map.panTo(position);
  	popula(id, marker, infowindow);
}
function placeMarkerVermelho(position, map, title, msg, id)
{
	var image = new google.maps.MarkerImage("http://maps.google.com/mapfiles/kml/paddle/red-circle.png", null, null, null, new google.maps.Size(32, 32));

    var marker = new google.maps.Marker({
      position: position,
      animation: google.maps.Animation.DROP,
      map: map,
      title: title,
      icon: image
    });

	//cria uma caixa de texto
    var infowindow = new google.maps.InfoWindow(
	{ content: msg,
    	size: new google.maps.Size(50,50)
  	});

  	//add o evento click
  	google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
		atualizar(infowindow);
	}) ;

    //map.panTo(position);
  	popula(id, marker, infowindow);
}
var initialLocation;
function pegaGeoLocalizacao()
{
	// Try W3C Geolocation (Preferred)
	if(navigator.geolocation)
	{
  		browserSupportFlag = true;
  		navigator.geolocation.getCurrentPosition(function(position)
  		{ //alert("oi");
    		initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    		map.setCenter(initialLocation);
    		map.setZoom(14);
    		//desenha(initialLocation);
    		//alert("W3C: '" + initialLocation.toString() + "'");
		}, function()
		{
    		//handleNoGeolocation(browserSupportFlag);
  		});

		// Try Google Gears Geolocation
	}
	else if (google.gears)
	{
  		browserSupportFlag = true;
  		var geo = google.gears.factory.create('beta.geolocation');
  		geo.getCurrentPosition(function(position)
  		{
    		initialLocation = new google.maps.LatLng(position.latitude,position.longitude);
    		map.setCenter(initialLocation);
    		//localizacao = initialLocation;
  		}, function()
  		{
    		//handleNoGeoLocation(browserSupportFlag);
  		});
		// Browser doesn't support Geolocation
	}
	else
	{
  		browserSupportFlag = false;
  		//seta a posicao central na unesp
 		 map.setCenter(latlng);
  		//handleNoGeolocation(browserSupportFlag);
	}
}

function desenhaCirculo()
{
	//espera 1 segundo para dar tempo de pegar a geolocalizacao
	setTimeout(function()
	{

    	//pega a localizacao
    	localizacao = map.getCenter();

	    //desenha o raio
	    var populationOptions = {
	      strokeColor: "#FF0000",
	      strokeOpacity: 0.8,
	      strokeWeight: 2,
	      fillColor: "#FF0000",
	      fillOpacity: 0.35,
	      map: map,
	      center: initialLocation,//localizacao
	      radius: 1000
	    };
	    cityCircle = new google.maps.Circle(populationOptions);

			//---------------------------------------------------------------------------------------------------------------------------------------------------------
	}, 1000);
}

function atualizar(inf)
{
	if(infoatual!=null && infoatual!=inf)
	{
		infoatual.close();
	}

	infoatual = inf;
}

function ordernar(matriz){
	var swap;
	for(i=0;i<matriz.length-1;i++){
		for(j=1;j<matriz.length;j++){

		}
	}
}

function Marcador(val2, val3)
{
	this.marc=val2;
	this.info=val3;
}

function centrar(id)
{
	atualizar(marcadores[id].info);
	map.setCenter(marcadores[id].marc.getPosition());
	marcadores[id].info.open(map,marcadores[id].marc);
	map.setZoom(14);
}

function popula(idcidad, markerc, infowin)
{
	marcadores[idcidad] = new Marcador(markerc, infowin);
}

function adicionaUnesp()
{
    var UnespSJC = new google.maps.LatLng(-23.1994682, -45.8881766);
    var UnespArara = new google.maps.LatLng(-21.7937477, -48.1817108);
    var UnespAraca = new google.maps.LatLng(-21.2093095, -50.4299749);

    placeMarkerAzul(UnespSJC, map, "Unesp - Faculdade de Odontologia/São José dos Campos", "<b>Faculdade de Odontologia/São José dos Campos</b> </br> <a target='_blank' href='http://www.fosjc.unesp.br'>www.fosjc.unesp.br</a> - <a href='mailto:dta@fosjc.unesp.br'>dta@fosjc.unesp.br</a> </br></br>Rua Eng Francisco José Longo, </br>nº 777 - Jardim São Dimas </br>Fone: (12) 3947-9000", 10001);
    placeMarkerAzul(UnespArara, map, "Unesp - Faculdade de Odontologia/Araraquara", "<b>Faculdade de Odontologia/Araraquara</b> </br> <a target='_blank' href='www.foar.unesp.br'>www.foar.unesp.br</a> - <a href='mailto:dta@foar.unesp.br'>dta@foar.unesp.br</a> </br></br>Rua Humaitá, 1680 </br>14801-903 Araraquara, SP</br>PABX: (16) 3301-6300 ", 10002);
    placeMarkerAzul(UnespAraca, map, "Unesp - Faculdade de Odontologia/Araçatuba", "<b>Faculdade de Odontologia/Araçatuba</b> </br> <a target='_blank' href='www.foa.unesp.br'>www.foa.unesp.br</a> - <a href='dta@foa.unesp.br'>dta@foa.unesp.br</a> </br></br>Rua José Bonifácio, 1193</br>16015-050 Araçatuba - SP</br>Fone: (18) 3636-3200", 10003);
}

function pegaBairro(cep)
{

}



function detectBrowser()
{/*
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map_canvas");
  var detalhes = document.getElementById("det");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '70%';
    mapdiv.style.height = '100%';
    detalhes.style.width = '30%';
  } else {
    mapdiv.style.width = '70%';
    mapdiv.style.height = '800px';
  } // */
}

function calcDist(localizacao, lat, lng)
{
	var DLA = (localizacao.lat() - lat) * 60 * 1852;
	var DLO = (localizacao.lng() - lng) * 60 * 1852;

	var comp = Math.sqrt(DLA*DLA + DLO*DLO);
	comp /= 1000;
	comp = (Math.round(comp*100))/100;
	return comp;

	//---------------------------------------------------------------------------------------------------------------------------------------------------------

}



function pegaEnd2(lat, lgn)
{
	$.ajax({
		type      : 'post',
    	url       : 'loc.php',
        data      : 'lat='+lat+"&lgn="+lgn,
        dataType  : 'html',
        success : function(txt)
        {
        	alert(txt);
        }
	});
}
