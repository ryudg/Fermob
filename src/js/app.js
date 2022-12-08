/* 메뉴 open/close */
let titleBtn = document.querySelectorAll(".section-title");
let itemBox = document.querySelectorAll(".item-box");
let downIcon = document.querySelectorAll(".down");
for (let i = 0; i < titleBtn.length; i++) {
  titleBtn[i].addEventListener("click", () => {
    itemBox[i].classList.toggle("active");
    downIcon[i].classList.toggle("active");
  });
}

/* 이미지 변경 */
