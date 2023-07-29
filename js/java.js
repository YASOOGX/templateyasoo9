//....... varabiles
let bar = document.querySelector(".bar");
let links = document.querySelector(".links");
let page_bar = document.querySelector(".page-bar");
let closes = document.querySelector(".closes");
let link = document.querySelectorAll(".ulist > li");
let hide_links = document.querySelectorAll(".hide-link");
let angel = document.querySelectorAll(".links > ul >li >i");
let end_head = document.querySelector(".end-head");
let img_slide = document.querySelectorAll(".subject-slider > div");
let btn_slide_left = document.querySelector(".subject-slider .btn-left");
let btn_slide_right = document.querySelector(".subject-slider .btn-right");
// page_bar.appendChild(links)
bar.onclick = function (b) {
  page_bar.classList.add("block");
};
if (screen.width <= 992) {
  page_bar.appendChild(links);
  page_bar.appendChild(end_head);
}
// end page_bar.appendChild(links)
// start part click links
link.forEach((item, index) => {
  item.addEventListener("click", () => {
    hide_links.forEach((igem2, indexs) => {
      igem2.classList.remove("block");
      if (index == indexs) {
        igem2.classList.add("block");
      }
      angel.forEach((item3, indexo) => {
        if (index == indexo) {
          item3.style.transform = "rotateZ(270deg)";
        } else {
          item3.style.transform = "rotateZ(0deg)";
        }
      });
    });
  });
  // end part click links
  // part closes page bar
  closes.onclick = function (e) {
    page_bar.classList.remove("block");
  };
});
// end part closes page bar
// start part img slider
for (let i = 0; i < 1; i++) {
  i = 0;

  setInterval((s) => {
  i++
    img_slide.forEach((item, index) => {
      item.style.transform = `translatex(${i* 100}%)`;
    });
    if(i>=4){
      i=0
    }
  }, 3000);
  btn_slide_left.onclick = function (e) {
    i++;
    img_slide.forEach((item, index) => {
      item.style.transform = `translatex(${i * 100}%)`;
    });
    if (i >= 4) {
      i = 0;
    }
  };
  i = 1;
  btn_slide_right.onclick = function () {
    console.log(i);
    i--;
    img_slide.forEach((item, index) => {
      item.style.transform = `translatex(${i * 27}vw)`;
    });
    if (i <= 0) {
      i = 4;
    }
  };
}
// end part img slider
