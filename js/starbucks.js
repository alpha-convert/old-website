
$(document).ready(function(){
	navigator.geolocation.getCurrentPosition(getStarbucks);
});

function getStarbucks(p){
	$.getJSON(makeUrl(p.coords.latitude,p.coords.longitude),function(data){
		console.log(data);
		$("h2").append(data.paging.total)
		
	});
}

function makeUrl(lati,longi){
	var url = "https://testhost.openapi.starbucks.com/location/v2/stores/nearby?latlng="+lati+","+longi+"&radius=10";
	return url;
}