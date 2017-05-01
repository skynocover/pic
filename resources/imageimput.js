var i = 1;
var body = document.querySelector("body");

while (i < 500) {
    
    var img = document.createElement("img");
    img.src = "image/" + i + ".jpg";
    img.title = "圖片";
    img.height = "1000";
    body.appendChild(img);
    i = i + 1;
        
}
