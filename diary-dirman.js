// drag and drop
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    var boxes = document.getElementsByClassName("sticker-drop");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.border = "2px dashed #adb5bd";
    }
} 

var counter = 0; // dynamically give clones a new id
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    const draggableSticker = document.getElementById(data);
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
    } else if (event.target.id != "garbage" && 
        (draggableSticker.id == "sticker1" ||
        draggableSticker.id == "sticker2" ||
        draggableSticker.id == "sticker3" ||
        draggableSticker.id == "sticker4" ||
        draggableSticker.id == "sticker5" ||
        draggableSticker.id == "sticker6" ||
        draggableSticker.id == "sticker7" ||
        draggableSticker.id == "sticker8" )) {
        let clone = draggableSticker.cloneNode(true);
        clone.id = 'clone' + (++counter);
        event.target.appendChild(clone);
    }
    // remove dotted borders
    var boxes = document.getElementsByClassName("sticker-drop");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.border = "none";
    }
}

// toggle edit mode
const garb = document.getElementById("garbage");
const garbImg = document.getElementById("garbage-image");
const editNotes = document.getElementById("notes");
const stickerContainer =  document.getElementById("sticker-container");
const btn = document.getElementById("toggle");
btn.onclick = function() {
    if (stickerContainer.style.display !== "block")
    {
        editNotes.contentEditable = true;
        stickerContainer.style.display = "block";
        garb.style.display = "block";
        garbImg.style.display = "block";
    } else {
        editNotes.contentEditable = false;
        stickerContainer.style.display = "none";
        garb.style.display = "none";
        garbImg.style.display = "none";
    }
};
