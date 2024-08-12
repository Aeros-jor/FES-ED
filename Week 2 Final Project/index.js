function openMenu() {
  const element = document.getElementById("nav-div");  // Get the DIV element
  element.classList.remove("menu--close"); // Remove mystyle class from DIV
  element.classList.add("menu--open"); // Add newone class to DIV
}
function closeMenu() {
  const element = document.getElementById("nav-div");  // Get the DIV element
  element.classList.remove("menu--open"); // Remove mystyle class from DIV
  element.classList.add("menu--close"); // Add newone class to DIV
}

