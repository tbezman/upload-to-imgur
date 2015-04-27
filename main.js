var imageSelected;

var imageClicked = function (info) {

    var uploadImage;

    uploadImage = info.srcUrl ? info.srcUrl : imageSelected;

    console.log(uploadImage);

    if(uploadImage) {
        $.ajax({
            url: "https://api.imgur.com/3/image",
            headers: {
                'Authorization': 'Client-ID 2fd973a2668bfcf'
            },
            type: "POST",
            data: {
                image: uploadImage
            },
            success: function (data) {
                console.log(data);
                imageSelected = null;
                chrome.tabs.create({url: data.data.link});
            }
        });
    }
};

chrome.contextMenus.create({title: "Upload to Imgur", contexts: ["all"], onclick: imageClicked}, function () {

});

chrome.runtime.onMessage.addListener(function (message) {
    console.log(message);
    imageSelected = message;
});


