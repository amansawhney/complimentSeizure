
var myVar = setInterval(addCompliment, 1000);
var link = '';
const links = ["almost as good as Aman","amazing","balancing machine", "ur the bombdiggidy", "bang shabang", "ur skill is on fleek", "u dont kno ur beautiful", "this is amazeballs", "razzle dazzling job", "fantastic", "glorious", "bow chica bow wow", "nice as ice", "thats slammin", "hawt dayum", "\n\nSomeone almost got a\n tattoo of your name once,\n but their mom talked\n them out of it.", "great job man", "You are \"the one\nthat got away\".", "Strangers wanna sit\nnext to you on the bus.", "socks + sandals\n+ you = I'm into it.","\nYour principal would call\nyou to the office\njust to look cool.", "Einstein is \"mildly to\nmoderately\" intimidated.", "your photo is the star\nof your parent's mantle.","You are freakishly\n good at thumb wars.", "I will name my child\n and/or goldfish after you."];


function addCompliment() {
    link = links[Math.floor(Math.random() * links.length)];
    document.getElementById('complimentHolder').innerHTML += `<div class="text-center col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 ">  <div class="card">  <h1 class=""> ${link}</h1>  </div>  </div>`;
}