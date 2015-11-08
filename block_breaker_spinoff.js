var xPos = 20;
var yPos = 400;

var aPos = 20;
var bPos = 20;



draw = function() {
    background(73, 88, 191);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    fill(217, 165, 217);
    ellipse(aPos, bPos, 10, 10);
    
    
    
    fill(230, 49, 49);
rect(180,200, 50, 20);


xPos+=3;
yPos-=3;

aPos+=3;
bPos+=3;

if (yPos<200) { yPos+=3;}
if (bPos>200) { bPos-=3;}

};

