## webapp_phase5

NYC Housing

##  1. Application Name

NYC Housing.

## 2. Keywords
Google Maps API, New York Districts, distance, affordability, safety.

## 3. Description of the datasets and function design

[Neighborhood Names GIS][https://catalog.data.gov/dataset/neighborhood-names-gis][area][3][229]
[NY_districts_shapes][https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson][area][2][71]
[NY_crimes][https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i/data][safety][][]
[NY_housing][https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD][][]


[Y/N] [List] Are all these datasets from data.gov or data.indy.gov? If not, where are they coming from (links)?

Y-Neighborhood Names GIS
Y-NYC Housing
N-Crime in NYC - https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i/data
N-NY-District-Shapes-https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson

## 4. Description

    In this last presentation of the hack, the final result lacks some of the characteristics demanded by the challenge. Altough it ranks the top 10 closest and most affordable districts it does not with the crime rate. The issue with crime is that a proper solution could not be found in order to rank the most secure districts with the given information, altough some crime statistics are shown in graphs and tables grouped by borough. 

Map Visualization: 

1. [Y/N] Basic Map with specific location (your map is located in a meaningful place, city of west lafayette for example) 
    (Y) NYU

2. [Y/N] [describe] Any cover on the map (for example, cloud cover to show the weather effect)
    
    (N)

Chart Visualization: 

1. [Y/N] [describe] Use Graph? What is the type? (bar chart, pie chart, radar chart ...) 

    (Y) A bar chart tht shows the average income units of the top 10 districts.
    (Y) A pie Chart that shows the crime rates over the distinct boroughs grouped by type of offense. 
    
2. [Y/N] [List] Any interaction available on the graph? List them (enable click on numbers, drag on lines, change time/variables

    (N) Other than visualazig the data there is no other interaction.
    
Interaction Form:

1. [Y/N] [List] Any information output? list them. (text field, text area, label, plain HTML ...) 
    Y - div id ='info-box' a box that shows the different names of the districts in new york.
2. [Y/N] [List] Any operation option (filters)? List them. (search markets, search vegetables, filter based on price, sort based on convenience ...)

    (N)
    
3. [Y/N] [List] Any information input? List them. (comments, markers, user preference ...)

    (Y) The marker that show the location of the districts that are top rate according to the chosen parameter
    
4. [Y/N] [List] Interaction with Map? List them. (filter on price will affect map markers, sort on price will affect map markers, ...)

    (Y) - The nearest districts are displayed with markers that are displayed on the map and the district visualization with an specific color.
    
5. [Y/N] [List] Interaction with data visualization? List them. (filter, sort, set variables ...)

    (N)


##  5. Build Case

Nothing to build just four files .html,.css and .js.

## 6.Test Case Which browsers did you test your project on?

The web page was tested on Mozilla Firefox and Google Chrome.

