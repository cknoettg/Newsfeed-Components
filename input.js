let articleArray = [];

let h1 = document.querySelector("h1")
h1.style.color = "red";
h1.style.display = "flex";
h1.style.justifyContent = "center";
h1.style.padding = "5%";

let form = document.createElement("form");
form.style.display = "flex";
form.style.flexDirection = "column";
//create a div for input/label combinations - title
let titleDiv = document.createElement("div");
titleDiv.style.display = "flex";
titleDiv.style.justifyContent = "center";
titleDiv.style.width = "100%";
titleDiv.style.padding = "5%";
titleDiv.style.border = "2px solid blue";
let title = document.createElement("input");
title.style.border = "2px solid red";
title.style.width = "25%";
title.id = "title";
title.type = "text";
let label1 = document.createElement("label");
label1.for = "title";
label1.textContent = "Title";

//separate div for paragraphs
let paraDiv = document.createElement("div");
paraDiv.style.display = "flex";
paraDiv.style.flexDirection = "row";
paraDiv.style.justifyContent = "space-around";
paraDiv.style.padding = "5%";

//first paragraph
let p1Div = document.createElement("div");
p1Div.style.width = "30%";
p1Div.style.border = "2px solid blue";
let p1 = document.createElement("textarea");
p1.style.border = "2px solid red";
p1.style.width = "25%";
p1.id = "para1";
let label2 = document.createElement("label");
label2.for = "para1";
label2.textContent = "First Paragraph: ";

//second paragraph
let p2Div = document.createElement("div");
p2Div.style.width = "30%";
p2Div.style.border = "2px solid blue";
let p2 = document.createElement("textarea");
p2.style.border = "2px solid red";
p2.style.width = "25%";
p2.id = "para2";
let label3 = document.createElement("label");
label3.for = "para2";
label3.textContent = "Second Paragraph: ";

//third paragraph
let p3Div = document.createElement("div");
p3Div.style.width = "30%";
p3Div.style.border = "2px solid blue";
let p3 = document.createElement("textarea");
p3.style.border = "2px solid red";
p3.style.width = "25%";
p3.id = "para3";
let label4 = document.createElement("label");
label4.for = "para3";
label4.textContent = "Third Paragraph: ";


form.appendChild(titleDiv);
titleDiv.appendChild(label1);
titleDiv.appendChild(title);

paraDiv.appendChild(p1Div);
paraDiv.appendChild(p2Div);
paraDiv.appendChild(p3Div);

form.appendChild(paraDiv);
p1Div.appendChild(label2);
p1Div.appendChild(p1);

p2Div.appendChild(label3);
p2Div.appendChild(p2);

p3Div.appendChild(label4);
p3Div.appendChild(p3);



let body = document.querySelector("body");
body.appendChild(form);

let articles = document.createElement("div");
articles.classList.add("articles");
body.appendChild(articles);

//article creator function
// since we reference article.js in our html, 
// we can just reuse that function
// actually - the reference broke the code - try importing just the function

//articleArray.map((component) => {
//    articles.appendChild(articleCreator(component.title,component.date,component.firstParagraph,component.secondParagraph,component.thirdParagraph));
//});