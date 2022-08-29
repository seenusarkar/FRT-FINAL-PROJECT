const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

const scrollSmoothToBottom = (id) => {
  const element = $(`#${id}`);
  element.animate(
    {
      scrollTop: element.prop("scrollHeight"),
    },
    500
  );
};
