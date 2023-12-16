var elt = document.getElementById("calculator");
var calculator = Desmos.GraphingCalculator(elt, {
  keypad: false,
  settingsMenu: false,
  expressions: false,
  expressionsTopbar: false,
});
function calculate() {
  var y2 = parseFloat(document.getElementById("inputY2").value);
  var y1 = parseFloat(document.getElementById("inputY1").value);
  var x2 = parseFloat(document.getElementById("inputX2").value);
  var x1 = parseFloat(document.getElementById("inputX1").value);

  var y = y2 - y1;
  var x = x2 - x1;

  var slope = y / x;
  var origin = y1 - slope * x1;

  var result = document.getElementById("result");
  var rule = `y = ${slope === 1 ? "" : slope}x + ${origin === 0 ? "" : origin}`;
  result.innerHTML = `La fonction est : ${rule}`;
  calculator.setExpression({ id: "graph1", latex: rule });
}
