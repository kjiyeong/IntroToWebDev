// if true, we're tracking the mouse.
var tracking = false;
// Grab DOM references to be used in all functions.
var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");

function toggle() {

    // 'this' here is the HTML element that triggered the event.
    // When we're done, it will be btnToggle.

    // classList is an array-like collection of CSS class names:
    // (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
    // It allows us to treat class names individually
    // instead of setting all classes at once:
    // element.className = "btn btn-default btn-lrg"

    if (tracking) {
        this.classList.remove("btn-danger");
        this.classList.add("btn-success")
        this.innerText = "Start mouse tracking.";

        mouseX.innerText = "Untracked";
        mouseY.innerText = "Untracked";
    } else {
        this.classList.remove("btn-success");
        this.classList.add("btn-danger");
        this.innerText = "Stop mouse tracking.";
    }

    tracking = !tracking;
}

function updateMousePosition(evt) {
    // If tracking is enabled, update the view.
    if (tracking) {
        // 'evt' is a JavaScript event object.
        // It contains different properties depending on the type of event:
        // click, submit, mouseover, even media playback
        // (https://developer.mozilla.org/en-US/docs/Web/Events).
        // Our mouse's position in X and Y coordinates is clientX, clientY.
        mouseX.innerText = evt.clientX;
        mouseY.innerText = evt.clientY;
    }
}

// Note that the functions toggle and updateMousePosition are not executed.
// Execution would be toggle() and updateMousePosition(event).
// Instead, a reference to the function (its name) is attached to the DOM.
document.getElementById("btnToggle").addEventListener("click", toggle);
document.addEventListener("mousemove", updateMousePosition);
