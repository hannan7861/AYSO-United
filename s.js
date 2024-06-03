let text = "Outside: " 
document.getElementById("demo1").innerHTML = text;

function myFunction() {
  let carName = "civic";
  let text = "Inside: " + typeof carName + carName; 
  document.getElementById("demo2").innerHTML = text;
}
myFunction();