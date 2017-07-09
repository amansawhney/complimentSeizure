function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 2);
    elem.classList.add("fadeOut");
    function frame() {
        if (pos == -50) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.top = pos + 'px';
        }
    }
}

myMove();