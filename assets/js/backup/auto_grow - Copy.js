function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight)+"px";
  // if there is no text reset the height to default
  if (element.value.length == 0) {
    element.style.height = "20px";
  }
}

function auto_resize_inputs() {
  const name_input = document.getElementById("name");
  const email_input = document.getElementById("email");
  
  auto_grow(name_input);
  auto_grow(email_input);
}

window.addEventListener('DOMContentLoaded', (event) => {
  auto_resize_inputs();
});

window.addEventListener('resize', (event) => {
  auto_resize_inputs();
});
