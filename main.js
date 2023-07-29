const btn = document.getElementById("button1");
const pnda = document.getElementById("pimg");

pnda.width = 1;
pnda.height = 1;

let count = 0;
let qw1 = document.getElementById("qwe");

btn.onclick = function () {
  pnda.width += 30;
  pnda.height += 30;
  console.dir(pnda);
  count += 1;
  if (count >= 15) {
    qw1.textContent = "あなたのおすすめの曲を教えてください！";
    console.log(qw1);
  }
};
