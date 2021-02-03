
var backgroundCount = 1;
var basePath="/images";

function imgRandom() {
    for (var i = 0; i < 18; i++) {
        var rand = Math.floor(Math.random() * backgroundCount);
        var image = new Image();
        image.src = basePath+'/bg/'+rand+'.png';
        document.body.appendChild(image);
    }
}

imgRandom();