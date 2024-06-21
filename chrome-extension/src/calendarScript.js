document.addEventListener("DOMContentLoaded", function () {
  // Select the sidebar div using its class
  var sidebar = document.querySelector(".hEtGGf.HDIIVe.sBn5T");

  if (sidebar) {
    // Create a new element to add
    var newElement = document.createElement("div");
    newElement.textContent = "New Calendar Entry";
    newElement.style.padding = "10px";
    newElement.style.marginTop = "10px";
    newElement.style.backgroundColor = "#f0f0f0";

    // Append the new element to the sidebar
    sidebar.appendChild(newElement);
  } else {
    console.log("Sidebar not found");
  }
});
