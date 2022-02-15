'use strict';
const clusters = document.querySelectorAll('.cluster');
const items = document.querySelectorAll('.book');
document.addEventListener('DOMContentLoaded', (event) => {
    var dragSrcEl = null;
    var counter = 0;
    var x = 0;
    function handleDragStart(e) {
        this.style.opacity = '0.4';
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';
        counter = 0;
        clusters.forEach(function (item) {
            item.classList.remove('over');
        });
    }
    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }

    function handleDragEnter(e) {
        clusters.forEach((i) => {
            i.classList.remove('over');
        });
        counter++;
        console.log(counter);
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        counter--;
        x++;
        console.log(counter);
        console.log(x);
        if (counter === 0) {
            this.classList.remove('over');
        }
    }
    function handleDrop(e) {
        e.stopPropagation();
        counter = 0;
        if (dragSrcEl !== this) {
            let perentEl = dragSrcEl.parentElement;

            dragSrcEl.parentElement.removeChild(dragSrcEl);
            this.innerHTML +=
                "<div class='book' draggable='true'>" +
                e.dataTransfer.getData('text/html') +
                '</div>';
            if (perentEl.children.length == 0) {
                perentEl.parentElement.removeChild(perentEl);
            }
        }
        const items = document.querySelectorAll('.book');
        items.forEach(function (item) {
            item.addEventListener('dragstart', handleDragStart);
            item.addEventListener('dragend', handleDragEnd);
        });
        return false;
    }

    clusters.forEach((item) => {
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('drop', handleDrop);
    });
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });
});
