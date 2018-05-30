var crimeObject = [];
var houseObject = [];
var polygons = [];
var affordability = [];
var foundFeatureGeo = [];
var districtCenters = [];
var addedMarker = [];
var addedShape = [];
var closestDistricts =[];
var sortable = [];
var sortable1 = [];
var centers = [];
var topDistricts = [];
var topDrawn = [];
var addedShape2 = [];
var datasets,dataManager,idsDataBases,initialPos,geoData;
var map;
var crimeDistrict;
var mnNumbers =[101,102,103,104,105,106,107,108,109,110,111,112]; 
var bxNumbers = [201,202,203,204,205,206,207,208,209,210,211,212];
var bkNumbers = [301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318];
var quNumbers = [401,402,403,404,405,406,407,408,409,410,411,412,413,414];
var stNumbers = [501,502,503];


var NYC_DISTRICTS = {
    
    "101" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"102" :{ buildings : [], avgIncome : 0 , maxIncome : 0 , distance : 0, crimeHistory:[]},
	"103" :{ buildings : [], avgIncome : 0 , maxIncome : 0 , distance : 0, crimeHistory:[]},
	"104" :{ buildings : [], avgIncome : 0 , maxIncome : 0 ,distance : 0, crimeHistory:[]},
	"105" :{ buildings : [], avgIncome : 0 , maxIncome : 0 , distance : 0, crimeHistory:[]},
	"106" :{ buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"107" :{ buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"108" :{ buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"109" :{ buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"110" :{ buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"111" :{ buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"112" :{ buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
    "201" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"202" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"203" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"204" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"205" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"206" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"207" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"208" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"209" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"210" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"211" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"212" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
    "301" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"302" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"303" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"304" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"305" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"306" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"307" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0, crimeHistory:[]},
	"308" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"309" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"310" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"311" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"312" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"313" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"314" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"315" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"316" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"317" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"318" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
    "401" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"402" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"403" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"404" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"405" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"406" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"407" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"408" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"409" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"410" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"411" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"412" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"413" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"414" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]}, 
	"501" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"502" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]},
	"503" : { buildings : [], avgIncome : 0 , maxIncome : 0, distance : 0 , crimeHistory:[]}  
};



$(document).ready(function(){
    

	$("#nhButton").click(function(){
        $("#naviBar2").hide();
		updateData(1);
	});

	$("#geoButton").click(function(){
        $("#naviBar2").hide();
		updateData(2);
	});
    $("#clearButton").click(function(){
        clearMarkers();
    });
    $("#clearMapButton").click(function(){
        clearShapes();
    });
    $("#afforButton").click(function(){
        $("#naviBar2").hide();
		updateData(3);
	});
    $("#crimeButton").click(function(){
        $("#naviBar2").show();
    });
    $("#mn").click(function(){
        crimeDistrict = 'Manhattan';
		updateData(4);
	});
    $("#bk").click(function(){
        crimeDistrict = 'Brooklyn';
		updateData(4);

    });
    $("#bx").click(function(){
        crimeDistrict = 'Bronx';
        updateData(4);

    });
    $("#qu").click(function(){
        crimeDistrict = 'Queens';
        updateData(4);

	});
    $("#st").click(function(){
        crimeDistrict = 'Staten Island';
        updateData(4);
	});
    $("#download").on("click",downloadT)

    
 
})



var myVar;
    
function waitLoad(){
        
    getDataURL();
    $("#bottom").hide();
    $("#infoChart").hide();
    $("#naviBar2").hide();
    myVar = setTimeout(showPage, 3000);
        
}
    
function getDataURL() {
    
    dataManager = new DataManager();
    idsDataBases = dataManager.getKeysURLS();
    datasets = dataManager.getDataFromURLS();
    
}


function updateData(number){

		switch (number)
		{
			case 1:
                getNeighbourhoodData(datasets['neighborhood']);
			break;
			case 2:
                getGeoData(datasets['districts']);
			break;
			case 3:
                getAffordabiltyData();
                break;
			case 4:
                getCrimes(crimeDistrict);
			break;
			default:
			break;
		}
}


function getAffordabiltyData(){
    
    clearMap();
    clearAddedShape();
    
    $("#bottom").show();
    
    if(affordability.length == 0){
        
        var avgArray;
        var maxArray;

        var data = datasets['housing'];

        for(var i = 0;i<data.length;i++){

            if(data[i][23] != null && data[i][24] != null ){

                var latLng = {lat: parseFloat(data[i][23]) , lng: parseFloat(data[i][24])};
                var key = "";
                var text = data[i][19];
                var splitString = text.split("");
                
                var building = {Borough : data[i][15], LatLng : latLng , UnitIncome : data[i][31], District: splitString[3]+splitString[4]};

                affordability.push(building);
                
                switch (building.Borough){
                        
                    case 'Manhattan':
                        key = "1"+building.District;
                        break;
                    case 'Bronx' :
                        key = "2"+building.District;
                        break;
                    case 'Brooklyn':
                        key = "3"+building.District;
                        break;
                    case 'Queens':
                        key = "4"+building.District;
                        break;
                    case 'Staten Island':
                        key = "5"+building.District;
                        break;
                        
                }
                
                var max = parseInt(building.District);
                
                if(max%100 < 20){
                    NYC_DISTRICTS[key].buildings.push(building);
                }
                
            }

        }
        
        
        
    for (var key in NYC_DISTRICTS) {
        
        var sum = 0;
        var avg = 0;
        
        for(var i = 0; i < NYC_DISTRICTS[key].buildings.length;i++){
            
             sum += parseInt(NYC_DISTRICTS[key].buildings[i].UnitIncome);
            
        }
        
        avg = sum / NYC_DISTRICTS[key].buildings.length;
        
                
        if(isNaN(avg)){
            
            avg = 0;
        }
                
        NYC_DISTRICTS[key].avgIncome = avg;
        NYC_DISTRICTS[key].maxIncome = sum;
            
    }
        
        
        
        for (var key in NYC_DISTRICTS) {
            
            sortable.push([key,NYC_DISTRICTS[key].avgIncome,NYC_DISTRICTS[key]]);
            sortable1.push([key,NYC_DISTRICTS[key].maxIncome,NYC_DISTRICTS[key]]);
        }  
        
        

        sortable.sort(function(a,b){
            
            return b[1] - a[1];
            
        })
        
        sortable1.sort(function(a,b){
            
            return b[1] - a[1];
            
        })

        console.log("Done!");    
    }    
    
    var topSum = []
    var topAvg = [];
    
    for(var i = 0; i < 10 ;i++){   
        topSum.push(sortable[i]);
        topAvg.push(sortable1[i]);
    }
    
    var drawTop = []
    
    for(var k=0;k<10;k++){
        drawTop.push(sortable[k][0])
    }
    
    updateChart(topSum);
    printAffortability(sortable);
    findCheapest(sortable);
    console.log(drawTop);  
    districtShapes2(datasets['districts'],drawTop,'indigo');
     
}


function getNeighbourhoodData(data){
    
    clearMap();
    clearAddedShape();
    

	nhObject = [];
    nhJSON = data;
    var num;
    
	for(var i=0;i<data.length;i++){
            var num = data[i][9].split(/[\s+()]/);
            nhObject.push([data[i][10],data[i][16],num[3],num[2]]);
              
		 }
    
        
    if(closestDistricts.length == 0)
    {
        districtShapes(datasets['districts'],false);
        for(var j = 0; j< 175;j++){
        findCenter(addedShape[j].getPaths().getArray()[0].b,addedShape[j].Name)
        }
        findClosest(closestDistricts);     
    }
    
    console.log(topDistricts)
   
   districtShapes2(datasets['districts'],topDistricts,'blue');
   printDistrictNumbers(topDistricts);
        
}


function getCrimes(crimeBoro){
    
    
    var br;
    var bronxCrimes = [];
    var brooklynCrimes = [];
    var statenCrimes = [];
    var queensCrimes = [];
    var manhattanCrimes = [];
    var crimes = [];
    
    clearMap();
    clearAddedShape();
    districtShapes(datasets['districts'],true);
    
    
    for(var i = 0; i < 1000;i++){
        
        if (datasets['bxCrimes'][i].lat_lon != undefined) {
                bronxCrimes.push({boro : datasets['bxCrimes'][i].boro_nm, offense: datasets['bxCrimes'][i].ofns_desc , latLng: datasets['bxCrimes'][i].lat_lon , date: datasets['bxCrimes'][i].cmplnt_fr_dt});
        }
        
        if(datasets['bkCrimes'][i].lat_lon != undefined){
            
                brooklynCrimes.push({boro : datasets['bkCrimes'][i].boro_nm, offense: datasets['bkCrimes'][i].ofns_desc , latLng: datasets['bkCrimes'][i].lat_lon , date: datasets['bkCrimes'][i].cmplnt_fr_dt});
            
        }
        
        if(datasets['stCrimes'][i].lat_lon != undefined){
           
            statenCrimes.push({boro : datasets['stCrimes'][i].boro_nm, offense: datasets['stCrimes'][i].ofns_desc , latLng: datasets['stCrimes'][i].lat_lon , date: datasets['stCrimes'][i].cmplnt_fr_dt});   
    
        }
        
        if(datasets['quCrimes'][i].lat_lon != undefined){
                   
            queensCrimes.push({boro : datasets['quCrimes'][i].boro_nm, offense: datasets['quCrimes'][i].ofns_desc , latLng: datasets['quCrimes'][i].lat_lon , date: datasets['quCrimes'][i].cmplnt_fr_dt}); 
            
        }
        
        if(datasets['mnCrimes'][i].lat_lon != undefined){
                    
            manhattanCrimes.push({boro : datasets['mnCrimes'][i].boro_nm, offense: datasets['mnCrimes'][i].ofns_desc , latLng: datasets['mnCrimes'][i].lat_lon , date: datasets['mnCrimes'][i].cmplnt_fr_dt});
            
        }
        
        if(datasets['crimes'][i].lat_lon != undefined){
        
             crimes.push({boro : datasets['crimes'][i].boro_nm, offense: datasets['crimes'][i].ofns_desc , latLng: datasets['crimes'][i].lat_lon , date: datasets['crimes'][i].cmplnt_fr_dt}); 
        
        }

        
    }
        
    var text;
    
    /*for(var j=0;j<addedShape.length;j++){
        
        var br = addedShape[j].Name;
                
        if( br < 113 ){
			text = "Manhattan";
           manhattanCrimes = getCrimeCoords2(addedShape[j],manhattanCrimes);
		}else if ( 200 <= br && br < 213){
			text = "Bronx";
          bronxCrimes = getCrimeCoords2(addedShape[j],bronxCrimes);
		}
		else if(300 <= br && br < 319){
			text = "Brooklyn";
         brooklynCrimes = getCrimeCoords2(addedShape[j],brooklynCrimes);
		}
		else if(400 <= br && br < 415){
			text = "Queens";
            queensCrimes = getCrimeCoords2(addedShape[j],queensCrimes);
		}
		else if( 500 <= br && br < 504){
			text ="Staten Island";
          statenCrimes = getCrimeCoords2(addedShape[j],statenCrimes);
		}
		else{
        
            //Do nothing
        } 
        
        
    }*/
    
    var group;
    var text;
    var crimeArray;
    var shapes;
    console.log(crimeBoro)
    
    
    switch (crimeBoro){
            
        case 'Manhattan':
            group = groupById(manhattanCrimes);
            crimeArray = manhattanCrimes;
            shapes = mnNumbers;
            break;
        case 'Brooklyn':
            group = groupById(brooklynCrimes);
            crimeArray = brooklynCrimes;
            shapes = bkNumbers;
            break;
        case 'Bronx':
            group = groupById(bronxCrimes);
            crimeArray = bronxCrimes;
            shapes = bxNumbers;
            break;
        case 'Queens':
            group = groupById(queensCrimes);
            crimeArray = queensCrimes;
            shapes = quNumbers;
            break;
        case 'Staten Island':
            group = groupById(statenCrimes);
            crimeArray = statenCrimes;
            shapes = stNumbers;
            break;
        
            
    }
    
    
    printCrimeStats(group,crimeBoro);
    updateDonutChart(group)    
    drawCrime(crimeArray);
    districtShapes2(datasets['districts'],shapes,'green');

    console.log(group);
    
    console.log('done');

    
}





function getCrimeCoords (polygonObject,crimeData){
    
    var testPointCoords;
    var lat;
    var lng;    
    
    for(var i=0;i<crimeData.length;i++){
                
        lat = parseFloat(crimeData[i].latLng.latitude);
        lng = parseFloat(crimeData[i].latLng.longitude);
        
        
        testPointCoords = new google.maps.LatLng(lat,lng);
                
        var isInside = google.maps.geometry.poly.containsLocation(testPointCoords, polygonObject);
                
        if(isInside){
            NYC_DISTRICTS[String(polygonObject.Name)].crimeHistory.push(crimeData[i]);
            //crimeData.splice(i, 1);
        }
        
    }
    
}



function getCrimeCoords2 (polygonObject,crimeData){
    
    var testPointCoords;
    var lat;
    var lng; 
    var dummyArray = [];
    var dummy;
    
    while(crimeData.length > 0){
        
        dummy = crimeData.pop();
        
        lat = parseFloat(dummy.latLng.latitude);
        lng = parseFloat(dummy.latLng.longitude);
        
        testPointCoords = new google.maps.LatLng(lat,lng);            
        
        var isInside = google.maps.geometry.poly.containsLocation(testPointCoords, polygonObject);
                
        
        if(isInside){
            
            if(NYC_DISTRICTS[String(polygonObject.Name)]!=null){
                NYC_DISTRICTS[String(polygonObject.Name)].crimeHistory.push(dummy);
            }
            dummy = null;

        }
        else{
            
            dummyArray.push(dummy);
        }
        
    }
    
    return dummyArray;
    
}



//-----------------------Utility Functions---------------------------------------------------------------------------


function findCenter(polygonCoords,tag){
    
    var bounds = new google.maps.LatLngBounds();

    
    for (var i = 0; i < polygonCoords.length; i++) {
      bounds.extend(polygonCoords[i]);
    }
        
    centers = bounds.getCenter();

    addMarker(centers,tag)

}

var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
  var R = 6378137; 
  var dLat = rad(p2.lat - p1.lat);
  var dLong = rad(p2.lng - p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; 
};



function getGeoData(data){
    
    clearElementsInMap(topDrawn)

	geoObject = [];
	districtNumber = [];
	geoObjectJSON = {};
      
    for(var j=0; j < data.length;j++){
        loadGeoJson(data[j]);    
    }

    
}


function findClosest(districtArray){
    
    var rounds = 0;
    var position = 1;
    var completed = false;
    var topDistricts1 = [];
    
    districtArray.sort(function(a, b){
      return a.dis -  b.dis;
    });
    
    while(!completed){
        
        if(!(topDistricts1.indexOf(districtArray[rounds].mk.title) >= 0))
        {
            districtArray[rounds].mk.setVisible(true);
            topDistricts1.push(districtArray[rounds].mk.title);
            districtArray[rounds].mk.setLabel(" "+position);
            //districtArray[rounds].mk.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
            NYC_DISTRICTS[String(districtArray[rounds].district)].distance = districtArray[rounds].dis;
            districtArray[rounds].mk.setTitle("Distance Rank #"+position);
            position++; 
            rounds++;
            
        }
        else{
            rounds++;
        }
        
        if(topDistricts1.length == 10){
            completed = true;
        }
        
    }
        
    topDistricts = topDistricts1;
    
}


function findCheapest(top){

    
    if(closestDistricts.length == 0)
    {
        districtShapes(datasets['districts'],false);
        for(var j = 0; j< 175;j++){
        findCenter(addedShape[j].getPaths().getArray()[0].b,addedShape[j].Name)
        }
    }
     

    for(var i=0 ; i < closestDistricts.length;i++){
        
        for(var j=0;j<10;j++){
            
            if(closestDistricts[i].district == parseInt(top[j][0])){       
                
              // closestDistricts[i].mk.setVisible(true);
               closestDistricts[i].mk.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')

            }
            
        }
        
        
    }
    
    
    
}



function addCoordinates(){
    
        for(var key in NYC_DISTRICTS){
            NYC_DISTRICTS[key].push(geoObjectJSON[key]);
        }
	
}

function printDistrictNumbers(top){
    
    
    
    $("table").empty(); 
    $("#bottom").show();
    $("#infoChart").hide();
    $("#tableBody").empty();
    var table = $("table")[0];
    var header = table.createTHead();
    var tableReference = $("table")[0]
    var newRow,district,borough,rank,avg,text,distance;
	newRow= header.insertRow(tableReference.rows.length);
    rank=newRow.insertCell();
    rank.innerHTML="Rank";
    district = newRow.insertCell();
    district.innerHTML = "District";
    borough=newRow.insertCell();
    borough.innerHTML="Borough";
    distance=newRow.insertCell();
    distance.innerHTML="Distance mi";


	for(var j=0;j<top.length;j++){
        
            text = getBorough(top[j]);
                    
			newRow=tableReference.insertRow(tableReference.rows.length);
			rank = newRow.insertCell();
			rank.innerHTML = j+1;
            district = newRow.insertCell();
            district.innerHTML = top[j] % 100;
            borough = newRow.insertCell();
            borough.innerHTML = text;
            distance = newRow.insertCell();
            var key = String(top[j])
            var distanceValue = ((NYC_DISTRICTS[key].distance)/1000)*0.62137119;
            distance.innerHTML = distanceValue;
	}

}


function printCrimeStats(top,crimeBoro){
    
    console.log(top);
    
    $("table").empty(); 
    $("#bottom").show();
    $("#infoChart").show();
    $("#tableBody").empty();
    var table = $("table")[0];
    var header = table.createTHead();
    var tableReference = $("table")[0]
    var newRow,offense,ocurrence,rank,avg,text,distance;
	newRow= header.insertRow(tableReference.rows.length);
    offense=newRow.insertCell();
    offense.innerHTML="Offense";
    ocurrence = newRow.insertCell();  
    ocurrence.innerHTML = "Occured in 2016 First Quarter ";
    borough=newRow.insertCell();
    borough.innerHTML="Borough";
    var text = crimeBoro;
    
    for(key in top){
            
			newRow=tableReference.insertRow(tableReference.rows.length);
			offense = newRow.insertCell();
			offense.innerHTML = String(key);
            occured = newRow.insertCell();
            occured.innerHTML = top[key].length;
            borough = newRow.insertCell();
            borough.innerHTML = text;
        
        
    }



	for(var j=0;j<top.length;j++){
        
            text = getBorough(top[j]);
    
	}

}



function printAffortability(array){
    
    $("#infoChart").show();
    $("table").empty();
    var table = $("table")[0];
    var header = table.createTHead();
	var tableReference=$("table")[0]
	var newRow,district,borough,rank,avg;
	newRow= header.insertRow(tableReference.rows.length);
    rank=newRow.insertCell();
    rank.innerHTML="Rank";
    district = newRow.insertCell();
    district.innerHTML = "District";
    borough=newRow.insertCell();
    borough.innerHTML="Borough";
    avg = newRow.insertCell();
    avg.innerHTML = "Average Income Units";
    
	for(var j=0;j<10;j++){
            
			newRow=tableReference.insertRow(tableReference.rows.length);
            rank=newRow.insertCell();
            rank.innerHTML=(j+1);
            district = newRow.insertCell();
            district.innerHTML = parseInt(array[j][0])%100 ;
            borough=newRow.insertCell();
            borough.innerHTML = array[j][2].buildings[0].Borough;
            avg=newRow.insertCell();
            avg.innerHTML=array[j][1];

	}
    
    
}


function getBorough(boro){
    
    
        if(boro < 113 )
		{
			br = 'Manhattan';
		}
		else if(200 <= boro && boro < 213){
			br = 'Bronx';
		}
		else if(300 <= boro && boro < 319){
			br = 'Brooklyn';
		}
		else if(400 <= boro && boro < 415){
			br = 'Queens';
		}
		else if(500 <= boro && boro < 504)
		{
			br = 'Staten Island';
		}
		else{
			br = 'Nothing';
		}
    
    return br;
}

//------------------------------------------ Google Maps---------------------------------------------

function initMap(){

    initialPos = {lat: 40.729100, lng: -73.996500};

	map = new google.maps.Map(document.getElementById('mapContainer'), {
    center : initialPos,
    zoom: 12
	});

  var marker = new google.maps.Marker({
    position: initialPos,
    map: map,
    title : "NYU Stern School of Bussiness"
  });


}


function loadGeoJson(obj){
     
    map.data.addGeoJson(obj);
    
        
	map.data.setStyle(function(feature) {
    
        
    var boro = feature.getProperty('BoroCD');
        
		var color;

		if(boro < 113 )
		{
			color = 'blue';
		}
		else if(200 <= boro && boro < 213){
			color = 'red';
		}
		else if(300 <= boro && boro < 319){
			color = 'yellow';
		}
		else if(400 <= boro && boro < 415){
			color = 'orange';
		}
		else if(500 <= boro && boro < 504)
		{
			color = 'purple';
		}
		else{
			color = 'green';
		}


		map.data.addListener('mouseover', function(event) {


		var br = event.feature.getProperty('BoroCD');
		var text;

		if(NYC_DISTRICTS[br] != null  && br < 113 ){
			text = "Manhattan";
		}else if (NYC_DISTRICTS[br] != null && 200 <= br && br < 213){
			text = "Bronx";
		}
		else if(NYC_DISTRICTS[br] != null && 300 <= br && br < 319){
			text = "Brooklyn";
		}
		else if(NYC_DISTRICTS[br] != null && 400 <= br && br < 415){
			text = "Queens";
		}
		else if(NYC_DISTRICTS[br] != null && 500 <= br && br < 504){
			text ="Staten Island";
		}
		else{
			text = "Non-livable";
		} 

			document.getElementById('info-box').textContent =  text + " District - " + br%100;
        });
        
            
        return {
        fillColor: color,
        strokeWeight: 1,
        };
                          
    });
    

}

function addMarker(obj,tag){
     
    var name = String(tag);
    
    var marker = new google.maps.Marker({
        position: obj,
        visible : false,
        title : name
    });
    
    marker.setMap(map);
    addedMarker.push(marker);
    
    var lt = marker.getPosition().lat();
    var ln = marker.getPosition().lng();
    myLatlng = {lat: lt, lng: ln};
    
    
    var distance = getDistance(initialPos,myLatlng);
        
    if(NYC_DISTRICTS[name] != null){
        NYC_DISTRICTS[name].distance = distance;
    }     
    closestDistricts.push({mk : marker, dis: distance , district : tag});
        
}



// https://developers.google.com/maps/documentation/javascript/maptypes


function districtShapes (data,crimeCase) {
  for (let i = 0; i < data.length; i++) {
    let coordinates = data[i]['geometry']['coordinates'];
    let name = data[i]['properties']['BoroCD'];
    let color = 'black';

    for (let j = 0; j < coordinates.length; j++) {
      let fCoordinates;
      if (coordinates.length > 1) {
        fCoordinates = formatCoordinates(coordinates[j][0]);
      } else {
        fCoordinates = formatCoordinates(coordinates[j]);
      }
        let polygon = drawPolygon(fCoordinates, color,name);
        //let polygon = drawPolygon2(fCoordinates, color,name);

      addedShape.push(polygon);
    }
  }
}
    
    
function districtShapes2 (data,top,colorName) {
  for (let i = 0; i < data.length; i++) {
    let coordinates = data[i]['geometry']['coordinates'];
    let name = data[i]['properties']['BoroCD'];
    let color = colorName;

    for (let j = 0; j < coordinates.length; j++) {
      let fCoordinates;
        if (coordinates.length > 1) {
            fCoordinates = formatCoordinates(coordinates[j][0]);
        } else {
            fCoordinates = formatCoordinates(coordinates[j]);
        }
        for(var k=0;k<top.length;k++){
            
            if(name == top[k]){
                let polygon = drawPolygon(fCoordinates, color,name);
                polygon.setMap(this.map);
                topDrawn.push(polygon); 
            }
        }
    }
  }
}




function drawPolygon(coordinate, color,name) {
  let district = new google.maps.Polygon({
    paths: coordinate,
    strokeColor: color,
    strokeOpacity: 0.2,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.35,
    Name : name
  });

  return district;
}


function drawPolygon2(coordinate, color) {
  let district = new google.maps.Polygon({
    paths: coordinate,
    strokeColor: color,
    strokeOpacity: 0.2,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.35,
  });

  return district;
}


function formatCoordinates(coordinate) {
  let r = [];
  for (let i = 0; i < coordinate.length; i++) {
    r[i] = {
      lng: Number(coordinate[i][0]),
      lat: Number(coordinate[i][1])
    };
  }

  return r;
}



function clearElementsInMap(elements) {
  for (let v of elements) {
    v.setMap(null);
  }
}


function clearMap() {
  clearMarkers();
  clearShapes();
  //d3.select("svg").remove();


}

function clearMarkers() {
  clearElementsInMap(addedMarker);
  closestDistricts = [];
  addedMarker = [];
}

function clearShapes() {
    clearElementsInMap(topDrawn);
    map.data.forEach(callback);
    document.getElementById('info-box').textContent =  " ";

}


var callback = function(feature) {
        map.data.remove(feature);
   };


function drawHousing(pos){
    
    var marker = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: pos,
            radius: 10   
    
    });
    

    marker.setMap(map);
    addedMarker.push(marker);
  
}

function drawCrime(crimeArray){
    
    clearMarkers();
    
    for(var i=0;i<crimeArray.length;i++){
        
        dummy = crimeArray[i];
        
        lat = parseFloat(dummy.latLng.latitude);
        lng = parseFloat(dummy.latLng.longitude);
        
        pos = new google.maps.LatLng(lat,lng); 
        
        var marker = new google.maps.Circle({
            strokeColor: "RED",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "RED",
            fillOpacity: 0.35,
            map: map,
            center: pos,
            radius: 25   
    
    });
    

    marker.setMap(map);
    addedMarker.push(marker);
             
    }
    
    
    
}


//-----------------------------------D3-----------------------------------



function updateChart(dataset){
    
    d3.selectAll("svg > *").remove();

    
    
    var width = 500;
    var height = 400;
    
    var x = d3.scaleLinear()
            .range([0, width])
            .domain([0,100]);
    
    var axis = d3.axisBottom(x);

    
    var widthScale = d3.scaleLinear()
                    .domain([0,100])
                    .range([0,width]);
    
    var colorScale = d3.scaleLinear()
                    .domain([0,100])
                    .range(["red","green"]);
    
    
    var canvas = d3.select("svg")
        .attr("width",width)
        .attr("height",height)
        .append("g")
        .attr("transform","translate(0,20)")
    
    var bars = canvas.selectAll("rect")
                .data(dataset)
                .enter()
                    .append("rect")
                    .attr("width", function(d){return widthScale(d[1]);})
                    .attr("height", 25)
                    .attr("fill",function(d){ return colorScale(d[1]);})
                    .attr("y",function(d,i){ return i*35});
    
    canvas.selectAll("text")
        .data(dataset)
        .enter()
            .append("text")
            .attr("fill","white")
            .attr("y",function(d,i){return i*35+15})
            .text(function(d){ return parseInt(d[0])%100 + " " + d[2].buildings[0].Borough }) 
    
    canvas.append("g")
        .attr("transform","translate(0,350)")
        .call(axis);
    
    
}

function showPage() {
  document.getElementById("load-screen").style.display = "none";
  document.getElementById("max-container").style.display = "block";
}

function clearAddedShape(){
    
    addedShape = [];
    
}

function downloadT(){
    $("table").tableToCSV()

}



function updateDonutChart(dataset){
    
    d3.selectAll("svg > *").remove();

    
    var data = [];
    var total = 0;
    
    for (var k in dataset){
        
        data.push(dataset[k]);
        total = total + dataset[k].length;
    }
    
    var color = d3.scaleLinear()
        .domain([0, 25, 50])
        .range(['green', 'red', 'yellow']);

    console.log(data)
    
    //Margin and Radius
    var margin = {top:20,right:20,bottom:20,left:5},
        width = 500 - margin.right - margin.left,
        height = 500 - margin.top - margin.bottom
        radius = width/2;
    
    //Arc Generator 
    
    var arc = d3.arc()
        .outerRadius(radius-10)
        .innerRadius(0);
    
    var labelArc = d3.arc()
        .outerRadius(radius - 50)
        .innerRadius(radius - 50);
    
    var pie = d3.pie()
        .value(function(d){return (d.length*100)/total;})
    
    //Define Svg 
    
    var svg = d3.select("svg")
        .attr("width",width)
        .attr("height",height)
        .append("g")
        .attr("transform","translate(" + width/2 + "," + height/2 + ")");
    
    //append arcs
    
    console.log(data)
    
    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class","arc");
    //append path
    g.append("path")
        .attr("d",arc)
        .attr("fill",function(d){return color((d.data.length*100)/total)})
    //append label text
    g.append("text")
        .attr("transform", function(d) { var c = labelArc.centroid(d); return "translate(" + c[0]    +"," + c[1] + ")";})
        .attr("dy",".35em")
        .attr("fill","white")
        .text(function(d){ return d.data.length;  });
}


function groupById(data){
    
    var groupId = [];
    var maxId = 0;
    for (var i = 0; i < data.length; i++){
    var item = data[i];

    if (!groupId[item.offense]){
        groupId[item.offense] = [];
    }

    groupId[item.offense].push(data[i]);

        
}
    return groupId; 
    
}
