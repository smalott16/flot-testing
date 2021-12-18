/*import the dataset that you are working with I have assumed this dataset is equivalent to what ever is 
being displayed in your scatter plot graph
*/
import { generateData } from './example-data.js';

let displayData = [{
  data: generateData(),
  points: {show: true}
}]

$(function() {
  let rawData = generateData();
  $.plot($("#placeholder"), displayData);

  //some jquery action to turn the external functions on and off
});

