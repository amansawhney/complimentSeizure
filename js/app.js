function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == -50) {
            clearInterval(id);
            elem.className += " animated fadeOut"
        } else {
            pos--;
            elem.style.top = pos + 'px';

        }
    }
}

myMove();