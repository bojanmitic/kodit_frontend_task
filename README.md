kodit.io frontend developer task:

Implement a user interface providing the data-input functionality found in the current website valuation form and extend it by displaying not only an estimated price but also a data visualisation widget providing related insight. Data to populate the visualisation can be fetched from the endpoint provided below. The widget should be interactive and offer at least 1 level of drill-down information.
Note: returning an accurate estimation is not relevant and can be mocked up.





Instructions for running the app:

 - First install Node modules with "npm install" or "yarn"
 - Second run command "npm start" or "yarn start"

 Here I'm using "Recharts" library, that is designed for react applications,
 for a few reasons it's simple, customizable, good documentation, and it looks great.

 App will open in the new browser tab, it will fetch all data from API, 
 and it will display them in the Scatter Chart. 

 At first app will show 3 types of apartments: 
    -With balconies,
    -Without balconies,
    -No data about balconies, ("balcony": null) => This is coming from the data that are fetched from API

 By hovering over the dots (apartments), it will come out tooltip with other information like: value of the apartment, square meters and others, which will be one level of drill down information. 

 By typing name of the street in the input field, app will filter all apartments that have these letters in the name of the street and display only them.  
