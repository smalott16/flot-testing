//uses regression-js as cdn package - see index.html file
//data comes in the form of an array of x,y arrays [[x1,y1], [x2,y2],...[xn, yn]]

export function linearRegression (data) {
  const regParams = regression.linear(data);
  let m = regParams.equation[0];
  let b = regParams.equation[1];
  
  //sort the array to find the max and min values
  data.sort((a, b) => (a[0] - b[0]));
  let x1 = data[0][0];
  let x2 = data[data.length - 1][0];
  return [[x1,(m*x1+b)], [x2,(m*x2+b)]];
}

export function logRegression (data) {
  const regParams = regression.logarithmic(data)
  let a = regParams.equation[0]
  let b = regParams.equation[1]
  let regressionArray = []

  data.sort((a, b) => (a[0] - b[0]));

  const n = 10 //adjust this number based on how smooth you want your regression curve
  data[0][0] === 0 ? data[0][0] = 1 : data = data; //can't be zero
  const increment = (data[data.length - 1][0] - data[0][0])/ n;
  
  let x = data[0][0];
  for (let i = 0; i <= n; i++) {
    let y = a + b * Math.log(x);
    regressionArray.push([x,y]);
    x += increment;
  }
  
  return regressionArray;
}

/*function polyRegression(data) {
  write another function for polynomaial regression
  see https://www.npmjs.com/package/regression
  or write from scratch
}
*/







