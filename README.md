# flot-testing
An example for how flot works and how a regression line may be added using jQuery. Data are randomly generated and two regression models are provided as options. Regression model is estimated using regression-js package using least squares method. Other methods could be employed manually. 

This code was developed for demonstration purposes for a colleague. 

## Getting started
- This project requires Node.js to be installed
- cd into root of the project directory
- run `$ npm install` from the command line 
- run `$ npm start` to start the express server
- visit http://localhost:8080 in your browser

## Screenshot
<img src='https://github.com/smalott16/flot-testing/blob/main/docs/Screen%20Shot%202021-12-20%20at%207.55.33%20PM.png?raw=true' alt='screenshot'
width='600px'>

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
- display regression function equations and R^2 value on the graph
