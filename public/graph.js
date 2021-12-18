/*import the dataset that you are working with I have assumed this dataset is equivalent to what ever is 
being displayed in your scatter plot graph
*/
import { generateData } from './example-data.js';
import { linearRegression, logRegression } from './regression.js';

//invoke function that executes once page is ready
$(function() {
  
  //set up a data structure to hold the raw data and eventually the regression lines
  //initialize the dataset with just the raw data
  let displayData = [{
    data: generateData(),
    points: {show: true}
  }]
  renderPlot(displayData);

  //refactor this since it doesn't work properly when using both lines
  $('#lin-reg').on('click', function() {
    if ($(this).attr('checked')) {
      $(this).removeAttr('checked');
      displayData.pop();
    } else {
      $(this).attr('checked', 'checked');
      //the data that you pass in here will need to be processed to produce the regression of your choice
      displayData.push({data: linearRegression(displayData[0].data)});
    }
    //re-render the plot each time it's clicked
    renderPlot(displayData);
  })
  
  $('#log-reg').on('click', function() {
    if ($(this).attr('checked')) {
      $(this).removeAttr('checked');
      displayData.pop();
    } else {
      $(this).attr('checked', 'checked');
      //the data that you pass in here will need to be processed to produce the regression of your choice
      displayData.push({data: logRegression(displayData[0].data)});
    }
    //re-render the plot each time it's clicked
    renderPlot(displayData);
  })

});

const renderPlot = function(displayData) {
  $.plot($("#placeholder"), displayData);
}


