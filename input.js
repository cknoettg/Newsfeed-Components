let h1 = document.querySelector("h1")
h1.style.color = "red";
h1.style.display = "flex";
h1.style.justifyContent = "center";
h1.style.padding = "5%";

let form = document.createElement("form");
//create a div for input/label combinations
let titleDiv = document.createElement("div");
titleDiv.style.width = "50%";
titleDiv.style.border = "2px solid blue";
let title = document.createElement("input");
title.style.border = "2px solid red";
title.style.width = "25%";
title.id = "title";
title.type = "text";
let label1 = document.createElement("label");
label1.for = "title";
label1.textContent = "Title";

form.appendChild(titleDiv);
titleDiv.appendChild(label1);
titleDiv.appendChild(title);


let body = document.querySelector("body");
body.appendChild(form);
