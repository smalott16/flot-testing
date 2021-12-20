/*import the dataset that you are working with I have assumed this dataset is equivalent to what ever is 
being displayed in your scatter plot graph
*/
import { generateData } from './example-data.js';
import { linearRegression, logRegression } from './regression.js';

//invoke function that executes once page is ready
$(function() {
  
  //set up a data structure to hold the raw data and eventually the regression lines
  //initialize the dataset with just the raw data
  
  const rawData = generateData();
  
  let displayData = [
    {
      data: rawData,
      points: {show: true}
    },
  ];
  renderPlot(displayData);
  
  //object of possible regressions to include in the plot, custom properties can be added here based on flot API 
  const regressions = {
    linear: {
      data: linearRegression(rawData),
    },
    logrithmic: {
      data: logRegression(rawData),
    }  
  }
  
  //fire the following on click of any of the regression boxes
  $('input').on('click', function() { 
    
    //toggle checked attribute
    $(this).attr("checked", !$(this).attr('checked'));
    
    //reset the display array
    displayData.splice(1, displayData.length - 1);

    //build the array of included data - this needs to be refactored before it sees the light of day
    const displayedRegressions = []; 
    $('input').each(function(index) {
      if ($(this).attr("checked")) {
        displayedRegressions.push($(this).attr('id'));
      }
    })
    
    if (displayedRegressions.includes('lin-reg')) {
      displayData.push(regressions.linear);
    }
    if (displayedRegressions.includes('log-reg')) {
      displayData.push(regressions.logrithmic);
    }

    //re-render the entire plot whenever a button it clicked - should look into possibility of partial re-render of regression lines alone
    renderPlot(displayData);
    
  });
  
  
});

const renderPlot = function(displayData) {
  $.plot($("#placeholder"), displayData);
};



