const da = document.getElementById("nn");
const btn = document.getElementById("button1");
const pnda = document.getElementById("pimg");

pnda.width = 1;
pnda.height = 1;

btn.onclick = function () {
  pnda.width += 30;
  pnda.height += 30;
  console.dir(pnda);
};
