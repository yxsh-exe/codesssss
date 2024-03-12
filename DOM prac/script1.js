var istatus = document.querySelector("h5");
var btn = document.querySelector("#addF");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    btn.innerHTML = "Remove friend";
    btn.style.backgroundColor = "#dadada";
    btn.style.color = "black";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    btn.innerHTML = "Add friend";
    btn.style.backgroundColor = "cadetblue";
    check = 0;
  }
});
