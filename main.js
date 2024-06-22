document.querySelector(".up").onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = () => {
  if (this.scrollY > document.querySelector(".offers").offsetTop) {
    document.querySelector(".up").classList.add("show");
  } else if (this.scrollY < document.querySelector(".offers").offsetTop) {
    document.querySelector(".up").classList.remove("show");
  }
};
