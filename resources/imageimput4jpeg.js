var i = 1;
var body = document.querySelector("body");

while (i < 500) {
    
    var img = document.createElement("img");
    img.src = "image/" + i + ".jpeg";
    img.title = "圖片";
    
    if (img.height > img.width) {
        img.height = "850";
    } else {
        img.width = "1250";
    }
    
    body.appendChild(img);
    i = i + 1;
        
}