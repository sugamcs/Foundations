const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

document.body.append(paragraph);


const heading3 = document.createElement("h3");
heading3.style.color = "blue";
heading3.textContent = "I'm a blue h3!";

document.body.append(heading3)



const div = document.createElement("div");

div.style.border = "black";
div.style.backgroundColor = "pink"

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div!";

const newPara = document.createElement("p");
newPara.textContent = "ME TOO!";

div.append(heading1,newPara)
document.body.append(div)