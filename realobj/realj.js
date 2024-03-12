var arr = [
  {
    dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwbW9kZWx8ZW58MHwxfDB8fHwy",
    story:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwbW9kZWx8ZW58MHwxfDB8fHwy",
  },
  {
    dp: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwbW9kZWx8ZW58MHwxfDB8fHwy",
    story:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwbW9kZWx8ZW58MHwxfDB8fHwy",
  },
  {
    dp: "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uJTIwbW9kZWx8ZW58MHwxfDB8fHwy",
    story:
      "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uJTIwbW9kZWx8ZW58MHwxfDB8fHwy",
  },
  {
    dp: "https://images.unsplash.com/photo-1512646605205-78422b7c7896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTIwbW9kZWx8ZW58MHwxfDB8fHwy",
    story:
      "https://images.unsplash.com/photo-1512646605205-78422b7c7896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTIwbW9kZWx8ZW58MHwxfDB8fHwy",
  },
];

var storiyan = document.querySelector("#storiyan");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">
</div>
`;
});

document.querySelector("#storiyan").innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
  document.querySelector("#full").style.display = "block";
  document.querySelector("#full").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full").style.display = "none";
  }, 2000);
});
