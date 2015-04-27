/**
 * Created by Terence on 2/26/2015.
 */
var imageSelected;

document.body.oncontextmenu = function (e) {
    if(e.target.style.backgroundImage)
    {
        imageSelected = e.target.style.backgroundImage.substring(4, e.target.style.backgroundImage.length - 1);
        console.log(imageSelected);
        chrome.runtime.sendMessage(null, imageSelected, {}, function () {
            console.log("Callback");
        });
    }
}