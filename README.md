# flot-testing
An example for how flot works and how a regression line may be added using jQuery. 

This code was developed for demonstration purposes for a colleague. 

## Getting started
- This project requires Node.js to be installed
- run `$ npm install` from the command line 
- run `$ npm start` to start the express server
- visit http://localhost:8080 in your browser

## Dependencies
- Node.js
- express
- body-parser
- flot
- nodemon (for development server)

## CDN packages
- jQuery 
- regression-js 

### Considerations
- all regression functions fire on page load, it may be smarted to fire them as needed on click
- jQuery could use some refactor
- test with larger datasets
- regression functions to be refactored based on the bounds of the incomming data
- display regression function equations and R^2 value on the graph
