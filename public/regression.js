//uses regression-js as cdn package - see index.html file

export function linearRegression (data) {
  const regParams = regression.linear(data);
  let m = regParams.equation[0];
  let b = regParams.equation[1];
  //do something more clever to plot this model
  let x1 = 1;
  let x2 = 29
  return [[x1,(m*x1+b)], [x2,(m*x2+b)]];
}

export function logRegression (data) {
  const regParams = regression.logarithmic(data)
  let a = regParams.equation[0]
  let b = regParams.equation[1]
  //again, do something more clever...but you get the idea
  let x1 = 1;
  let x2 = 15;
  let x3 = 29;
  return [[x1,(a+b*Math.log(x1))], [x2,(a+b*Math.log(x2))], [x3,(a+b*Math.log(x3))]];
}

/*function polyRegression(data) {
  write another function for polynomaial regression
  see https://www.npmjs.com/package/regression
  or write from scratch
}
*/





