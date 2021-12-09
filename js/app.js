'use strict';
const addbtn = document.querySelector('.addbtn');
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
class Book {
  constructor(id, name, dimensions, images) {
    this.id = id;
    this.name = name;
    this.dimensions = dimensions;
    this.images = images;
  }
}
// ------------------------------------------------------
const showMenu = function () {
  addmenu.classList.toggle('hidden');
};

const createBook = function () {
  let html = `<div class="book">
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
</div>`;
  let height = heightI.textContent;
  let width = widthI.textContent;
  let depth = depthI.textContent;
};

addbtn.addEventListener('click', showMenu);
createBtn.addEventListener('click', createBook);
{
  /* <div class="book">
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
</div>; */
}
