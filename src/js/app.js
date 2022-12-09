/* 메뉴 title open/close */
let titleBtn = document.querySelectorAll(".section-title");
let itemBox = document.querySelectorAll(".item-box");
let downIcon = document.querySelectorAll(".down");
for (let i = 0; i < titleBtn.length; i++) {
  titleBtn[i].addEventListener("click", () => {
    itemBox[i].classList.toggle("active");
    downIcon[i].classList.toggle("active");
  });
}

/* site map open/close*/
let siteMapBtn = document.querySelector(".mobile-menu-btn");
let mobileSiteMap = document.querySelector(".mobile-header-sitemap");
siteMapBtn.addEventListener("click", (e) => {
  siteMapBtn.classList.toggle("active");
  mobileSiteMap.classList.toggle("active");
});

/* site map depth2 list btn */
let siteMapDepth2Btn = document.querySelectorAll(".depth2-open-btn");
let siteMapDepth2List = document.querySelectorAll(".sitemap-depth2");
let siteMapDepthPlus = document.querySelectorAll(
  ".depth2-open-btn .plus span:last-child"
);

siteMapDepth2Btn.forEach(function (e, i) {
  e.addEventListener("click", function (pre) {
    pre.preventDefault();
    siteMapDepth2List[i].classList.toggle("active");
    siteMapDepthPlus[i].classList.toggle("active");
    siteMapDepth2List.forEach(function (e2, i2) {
      if (i !== i2) {
        siteMapDepth2List[i2].classList.remove("active");
      }
    });
    siteMapDepthPlus.forEach(function (e3, i3) {
      if (i !== i3) {
        siteMapDepthPlus[i3].classList.remove("active");
      }
    });
  });
});
/* site map depth3 list btn */
let siteMapDepth3Btn = document.querySelectorAll(".depth3-open-btn");
let siteMapDepth3List = document.querySelectorAll(".sitemap-depth3");
let siteMapDepth3Plus = document.querySelectorAll(
  ".depth3-open-btn .plus span:last-child"
);

siteMapDepth3Btn.forEach(function (e, i) {
  e.addEventListener("click", function (pre) {
    pre.preventDefault();
    siteMapDepth3List[i].classList.toggle("active");
    siteMapDepth3Plus[i].classList.toggle("active");
    siteMapDepth3List.forEach(function (e2, i2) {
      if (i !== i2) {
        siteMapDepth3List[i2].classList.remove("active");
      }
    });
    siteMapDepth3Plus.forEach(function (e3, i3) {
      if (i !== i3) {
        siteMapDepth3Plus[i3].classList.remove("active");
      }
    });
  });
});

/* 메인 비주얼 이미지 변경 */
let imgArr = [
  "/src/images/main-bg01.png",
  "/src/images/main-bg02.png",
  "/src/images/main-bg03.png",
];
let mainVisual = document.querySelector(".main-visual");
let imgNum = 0;
setInterval(() => {
  imgNum++;
  if (imgNum == imgArr.length) {
    imgNum = 0;
  }
  mainVisual.style.backgroundImage = `linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ),url(${imgArr[imgNum]})`;
}, 3000);
