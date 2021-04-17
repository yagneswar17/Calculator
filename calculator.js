var input_box = document.getElementById("calculation");
var historyData = [];
var expressionData = "";
var expressionHistory = [];
var resultData = "";
var i=0;
var j;
var count=1;
input_box.onkeydown = function () {
  console.log(input_box.value);
};

function UserClickButton(input) {
  var oldinput = input_box.value;
  var newinput = oldinput + input;
  expressionData = newinput;
  input_box.value = newinput;
}
function CalculateValue() {
  console.log("Click");
  var input = input_box.value;
  input = input.replace('"', "").replace("'", "");
  var result = eval(input);
  resultData = result;
  historyData.push({ expression: expressionData, result: resultData });
  showLogdata();
  resultData = "";
  expressionHistory[i]=expressionData;
  i=i+1;
  expressionData = "";
  input_box.value = result;
  count=1;
}
function ClearData() {
  input_box.value = "";
}

function ClearDigit() {
  expressionData = expressionData.substring(0,expressionData.length-1);
  input_box.value = expressionData;
}
function GoBack() {
  j=i-count;
  expressionData = expressionHistory[j];
  input_box.value = expressionData;
  count=count+1;
}

function showLogdata() {
  var log = document.getElementById("history_log");
  var string = "";
  for (var key in historyData) {
    string +=
      "" +
      historyData[key]["expression"] +
      " = " +
      historyData[key]["result"] +
      "<br>";
  }
  log.innerHTML = string;
}