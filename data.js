var URLS = {
  "neighborhood": 'https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json',
  "districts": "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson",
  "crimes": "https://data.cityofnewyork.us/resource/y2vc-h2nh.json",
  "housing": "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json", 
  "bxCrimes" : "https://data.cityofnewyork.us/resource/y2vc-h2nh.json?boro_nm=BRONX",
  "bkCrimes" : "https://data.cityofnewyork.us/resource/y2vc-h2nh.json?boro_nm=BROOKLYN",
  "mnCrimes" : "https://data.cityofnewyork.us/resource/y2vc-h2nh.json?boro_nm=MANHATTAN",
  "quCrimes" : "https://data.cityofnewyork.us/resource/y2vc-h2nh.json?boro_nm=QUEENS",
  "stCrimes" : "https://data.cityofnewyork.us/resource/y2vc-h2nh.json?boro_nm=STATEN ISLAND"
    
};

function DataManager() {

let r = {};
  for (let key in URLS) {
    $.get(URLS[key], function(data) {})
      .done(function(data) {
        switch (key) {
          case Object.keys(URLS)[0]:
            r[key] = data.data;
            break;
          case Object.keys(URLS)[1]:
            r[key] = JSON.parse(data).features;
            break;
          case Object.keys(URLS)[2]:
            r[key] = data;
            break;
          case Object.keys(URLS)[3]:
            r[key] = data.data;
            break;
          case Object.keys(URLS)[4]:
            r[key] = data;
            break;
          case Object.keys(URLS)[5]:
            r[key] = data;
            break;
          case Object.keys(URLS)[6]:
            r[key] = data;
            break;
          case Object.keys(URLS)[7]:
            r[key] = data;
            break;
          case Object.keys(URLS)[8]:
            r[key] = data;
            break;
          default:
            break;
        }
      })
      .fail(function(error) {
        console.log(error);
      });
  }

  this.result = r;
  this.keys = Object.keys(URLS);
}

DataManager.prototype.getDataFromURLS = function() {
  return this.result;
}

DataManager.prototype.getKeysURLS = function() {
  return this.keys;
}