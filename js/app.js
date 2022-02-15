'use strict';
const addbtn = document.querySelector('#plus');
const btns = document.querySelectorAll('.add-menu > i.hidden');
const addmenu = document.querySelector('.add-menu');
const createBtn = document.querySelector('.create-btn');
const bookNameI = document.querySelector('#book-name');
const frontCoverI = document.querySelector('#front-cover');
const backCoverI = document.querySelector('#back-cover');
const sideCoverI = document.querySelector('#side-cover');
const heightI = document.querySelector('#height');
const widthI = document.querySelector('#widht');
const depthI = document.querySelector('#depth');
// ------------------------------------------------------
const viewbtns = function () {
    btns.forEach((element) => {
        element.classList.toggle('hidden');
    });
};
addbtn.addEventListener('click', viewbtns);

// class Book {
//   constructor(id, name, dimensions, images) {
//     this.id = id;
//     this.name = name;
//     this.dimensions = dimensions;
//     this.images = images;
//   }
// }
// // ------------------------------------------------------
// const showMenu = function () {
//   addmenu.classList.toggle('hidden');
// };

// const createBook = function () {
//   let html = `<div class="book">
//   <div class="side"></div>
//   <div class="side"></div>
//   <div class="side"></div>
//   <div class="side"></div>
//   <div class="side"></div>
//   <div class="side"></div>
// </div>`;
//   let height = heightI.textContent;
//   let width = widthI.textContent;
//   let depth = depthI.textContent;
// };

// dragElement(document.getElementById("book"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

// addbtn.addEventListener('click', showMenu);
// createBtn.addEventListener('click', createBook);
// {
//   /* <div class="book">
//   <div class="side"></div>
//   <div class="side"></div>
//   <div class="side"></div>
//   <div class="side"></div>
//   <div class="side"></div>
//   <div class="side"></div>
// </div>; */
// }
