const dekiSecret = document.querySelector(".deki--transform");

const setFlag = function () {
  document.querySelector("pre").style.color = "white";
  document.querySelector("pre").style.backgroundImage =
    "url('serbian-flag.png')";
};

const removeFlag = function () {
  document.querySelector("pre").style.backgroundImage = "none";
  document.querySelector("pre").style.color = "black";
};

dekiSecret.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".wrap-google").style.display = "none";
  document.querySelector("pre").style.display = "block";
});

document.addEventListener("keypress", function (event) {
  if (
    event.key !== "k" &&
    event.key !== "e" &&
    event.key !== "к" &&
    event.key !== "е"
  ) {
    document.querySelector(".wrap-google").style.display = "block";
    document.querySelector("pre").style.display = "none";
    document.querySelector("pre").style.color = "black";
    setFlag();
  } else if (event.key === "k" || event.key === "к") {
    removeFlag();
  } else if (event.key === "e" || event.key === "е") {
    setFlag();
  }
});
