
var myVar = setInterval(addCompliment, 1000);
var link = '';
const links = ["almost as good as Aman","amazing","balancing machine", "ur the bombdiggidy", "bang shabang", "ur skill is on fleek", "u dont kno ur beautiful", "this is amazeballs", "razzle dazzling job", "fantastic", "glorious", "bow chica bow wow", "nice as ice", "thats slammin", "hawt dayum", "\n\nSomeone almost got a\n tattoo of your name once,\n but their mom talked\n them out of it.", "great job man", "You are \"the one\nthat got away\".", "Strangers wanna sit\nnext to you on the bus.", "socks + sandals\n+ you = I'm into it.","\nYour principal would call\nyou to the office\njust to look cool.", "Einstein is \"mildly to\nmoderately\" intimidated.", "your photo is the star\nof your parent's mantle.","You are freakishly\n good at thumb wars.", "I will name my child\n and/or goldfish after you.", "Are you a magician? Because whenever I look at you, everyone else disappears!", "Did you sit in a pile of sugar? Cause you have a pretty sweet ass.",
"Do you know what my shirt is made of? Boyfriend material.", "Are you a camera? Because every time I look at you, I smile.", "Do you have a Band-Aid? Because I just scraped my knee falling for you.", "Do you work at Starbucks? Because I like you a latte.", "If you were a vegetable you'd be a cute-cumber.", "Are you African? Because you're a frican babe.", "Excuse me, is your name Earl Grey? Because you look like a hot-tea!", "I'm not a photographer, but I can picture me and you together."];


function addCompliment() {
    link = links[Math.floor(Math.random() * links.length)];
    window.scrollTo(0,document.body.scrollHeight);
    document.getElementById('complimentHolder').innerHTML += `<div class="text-center  col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 ">  <div class="card"> <div class="content" data-text="${link}">${link}</div> </div>`;
}


