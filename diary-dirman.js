// drag and drop functions for stickers
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    var boxes = document.getElementsByClassName("sticker-drop");
    // make dashed outline of targets when user drags a sticker
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.border = "2px dashed #adb5bd";
    }
} 

var counter = 0; // this counter is set up to give each sticker clone a unique id
// function for the events that occur when the user drops the sticker
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    const draggableSticker = document.getElementById(data);
    // check if the user is dropping the sticker onto the garbage,
    // and make sure they aren't trying to drop the sticker template.
    // if they're dropping a cloned sticker onto the garbage,
    // the sticker gets removed
    if (event.target.id == "garbage" && 
        draggableSticker.id != "sticker1" &&
        draggableSticker.id != "sticker2" &&
        draggableSticker.id != "sticker3" &&
        draggableSticker.id != "sticker4" &&
        draggableSticker.id != "sticker5" &&
        draggableSticker.id != "sticker6" &&
        draggableSticker.id != "sticker7" &&
        draggableSticker.id != "sticker8" ) {
        draggableSticker.style.display = "none"; 
    // checking if the user is dragging a sticker template 
    // into a sticker drop area, which clones the sticker
    // template and inserts the clone into the drop area
    } else if (event.target.id != "garbage" && 
        (draggableSticker.id == "sticker1" ||
        draggableSticker.id == "sticker2" ||
        draggableSticker.id == "sticker3" ||
        draggableSticker.id == "sticker4" ||
        draggableSticker.id == "sticker5" ||
        draggableSticker.id == "sticker6" ||
        draggableSticker.id == "sticker7" ||
        draggableSticker.id == "sticker8" )) {
        // creating the clone and giving it a unique id
        let clone = draggableSticker.cloneNode(true);
        clone.id = 'clone' + (++counter);
        event.target.appendChild(clone);
    }
    // remove dotted borders once the sticker is dropped
    var boxes = document.getElementsByClassName("sticker-drop");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.border = "none";
    }
}

// toggle edit mode by making all edit options visible/editable
const garb = document.getElementById("garbage");
const garbImg = document.getElementById("garbage-image");
const editNotes1 = document.getElementById("notes1");
const editNotes2 = document.getElementById("notes2");
const stickerContainer =  document.getElementById("sticker-container");
const btn = document.getElementById("toggle");
btn.onclick = function() {
    if (stickerContainer.style.display !== "block")
    {
        editNotes1.contentEditable = true; 
        editNotes2.contentEditable = true;
        stickerContainer.style.display = "block";
        garb.style.display = "block";
        garbImg.style.display = "block";
    } else {
        editNotes1.contentEditable = false;
        editNotes2.contentEditable = false;
        stickerContainer.style.display = "none";
        garb.style.display = "none";
        garbImg.style.display = "none";
    }
};
