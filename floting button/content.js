
createSection();
dragElement(document.getElementById("mydiv"));
console.log(1);

function createSection(){

  let style = document.createElement("style");
  style.innerHTML = `#mydiv {
                          position: absolute;
                          z-index: 9000;
                          text-align: center;
                          border: 1px solid #d3d3d3;
                          background-color: #f1f1f1;
                      }
                      
                      #mydivheader {
                          position:relative;
                          padding: 10px;
                          z-index: 9001;
                          cursor: move;
                          background-color: #2196F3;
                          color: #fff;
                      }
                      body #mydiv #myheader p{
                          position:relative;
                          padding: 10px;
                          z-index: 9001;
                          color: #fff;
                          background-color: #2196F3;
                      }`;

  document.head.append(style);

  let sectionContainer = document.createElement('div');
  sectionContainer.innerHTML = `<div id="mydivheader">Click here to move</div>
                              <p>Move</p>
                              <p>this</p>
                              <p>DIV</p>`;

  sectionContainer.id = 'mydiv';
  document.body.prepend(sectionContainer);

}



function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("mydivheader")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("mydivheader").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

}