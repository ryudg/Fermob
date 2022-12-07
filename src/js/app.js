let bestSubItems = document.querySelectorAll(
  ".best-selling-item .best-selling-items a img"
);
let bestSubItems2 = document.querySelectorAll(
  ".best-selling-item2 .best-selling-items a img"
);
let bestSubItems3 = document.querySelectorAll(
  ".best-selling-item3 .best-selling-items a img"
);
let bestSubItems4 = document.querySelectorAll(
  ".best-selling-item4 .best-selling-items a img"
);

for (let i = 0; i < bestSubItems.length; i++) {
  bestSubItems[i].addEventListener("mouseover", function (e) {
    e.target.src = `./src/images/chairBest0${i + 1}-1.png`;
  });
  bestSubItems[i].addEventListener("mouseout", function (e) {
    e.target.src = `./src/images/chairBest0${i + 1}.png`;
  });
}
for (let i = 0; i < bestSubItems2.length; i++) {
  bestSubItems2[i].addEventListener("mouseover", function (e) {
    e.target.src = `./src/images/tableBest0${i + 1}-1.png`;
  });
  bestSubItems2[i].addEventListener("mouseout", function (e) {
    e.target.src = `./src/images/tableBest0${i + 1}.png`;
  });
}
for (let i = 0; i < bestSubItems3.length; i++) {
  bestSubItems3[i].addEventListener("mouseover", function (e) {
    e.target.src = `./src/images/childeBest0${i + 1}-1.png`;
  });
  bestSubItems3[i].addEventListener("mouseout", function (e) {
    e.target.src = `./src/images/childeBest0${i + 1}.png`;
  });
}
for (let i = 0; i < bestSubItems4.length; i++) {
  bestSubItems4[i].addEventListener("mouseover", function (e) {
    e.target.src = `./src/images/acceBest0${i + 1}-1.png`;
  });
  bestSubItems4[i].addEventListener("mouseout", function (e) {
    e.target.src = `./src/images/acceBest0${i + 1}.png`;
  });
}
