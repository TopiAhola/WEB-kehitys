/*
Open t2 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)
Add the following HTML code to the element with id="target"
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
Add class my-item to the second list item

 */
'use strict';

let new_li1 = document.createElement('li') ;
let new_li2 = document.createElement('li') ;
let new_li3 = document.createElement('li') ;
new_li1.innerText = "First item";
new_li2.innerText = "Second item";
new_li3.innerText = "Third item";
new_li2.setAttribute("class", "my-item");


document.querySelector("#target").appendChild(new_li1) ;
document.querySelector("#target").appendChild(new_li2) ;
document.querySelector("#target").appendChild(new_li3) ;