/*
Open t1 folder in your IDE/editor. Add HTML by using innerHTML property (2p)
Add the following HTML code to the element with id="target"
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
Add class my-list to the element with id="target"
 */
'use strict';

let new_HTML = `<li>First item</li><li>Second item</li><li>Third item</li>`
document.querySelector(`#target`).innerHTML = new_HTML;

//document.querySelector(`#target`).class="my-list";
document.querySelector(`#target`).setAttribute("class", "my-list");