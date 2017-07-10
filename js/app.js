function addCompliment() {
    document.getElementById('complimentHolder').innerHTML += '<div class="text-center col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 ">  <div class="card animated flip">  <h1 class="">Hello World</h1>  </div>  </div>';
}
var myVar = setInterval(addCompliment, 1000);
