//lets just assume that this is where your back end does all the work and returns data
//assume array takes the form of [depth, velocity]

//generate a randomized quasi linear dataset
const generateData = function() {
  let x, y;
  let step = 1
  let dataArray = []
  do {
    x = Math.ceil(Math.random() * 31);
    y = Math.floor(x * Math.random() + 0.5);
    dataArray.push([x,y]);
    step ++
  } while (step <= 100)
  return dataArray;
}

export { generateData } ;