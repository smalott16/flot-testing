
$(function() {
  let data = generateData();
  console.log(data)
  $.plot($("#placeholder"), [{
    data: data,
    points: {show: true}
  }]);

  //some jquery action to turn the external functions on and off
});

//make polynomial regression function


//make logrithmic regression function

//etc.

const generateData = function() {
  let x, y;
  let step = 1
  let dataArray = []
  do {
    x = Math.ceil(Math.random() * 30);
    y = Math.ceil(x * Math.random() + 0.5);
    dataArray.push([x,y]);
    step ++
  } while (step <= 100)
  return dataArray;
}
