//functions used to create regression models
//the math should be simple enough that computing this on the front end shouldn't be too bad
//uses regression-js as cdn package - see index.html file

//note not sure why this needed an export default and an export below...
export default function linearRegression (data) {
  const regParams = regression.linear(data);
  let m = regParams.equation[0];
  let b = regParams.equation[1];
  //do something more clever to plot this model
  let x1 = 1;
  let x2 = 29
  return [[x1,(m*x1+b)], [x2,(m*x2+b)]];
}

function logRegression (data) {
  const regParams = regression.logarithmic(data)
  let a = regParams.equation[0]
  let b = regParams.equation[1]
  //again, do something more clever...but you get the idea
  let x1 = 1;
  let x2 = 15;
  let x3 = 29;
  console.log(Math.log(29));
  return [[x1,(a+b*Math.log(x1))], [x2,(a+b*Math.log(x2))], [x3,(a+b*Math.log(x3))]];
}

/*function polyRegression(data) {
  write another function for polynomaial regression
  see https://www.npmjs.com/package/regression
}
*/

export { linearRegression, logRegression };



