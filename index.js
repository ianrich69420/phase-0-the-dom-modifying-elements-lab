// Write your code here!
document.querySelector("main").remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
const newHeaderText = document.createTextNode("Ian is the champion")
newHeader.appendChild(newHeaderText)
