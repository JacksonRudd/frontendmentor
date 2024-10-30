button = document.getElementById("share-button");

button.addEventListener("click", function () {
  allShare = document.getElementsByClassName("share-to-socials")[0];
  allShare.classList.toggle("show");
});

document.addEventListener("click", function (e) {
  //   see if the target is the button or contained in the button

  is_contained = button.contains(e.target);

  if (!is_contained) {
    console.log("clicked outside");
    allShare = document.getElementsByClassName("share-to-socials")[0];
    allShare.classList.remove("show");
  }
});
