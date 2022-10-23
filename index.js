// Write your code here!
const get = document.querySelector("#main");
get.parentNode.removeChild(get);



const newHeader = document.createElement("h1");
const nodeText = document.createTextNode("YOUR-NAME is the champion");
newHeader.appendChild(nodeText);
newHeader.setAttribute("id","victory");

