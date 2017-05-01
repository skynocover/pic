var i = 1;
var body = document.querySelector("body");

while (i < 100) {
    i = i + 1;
    var img = document.createElement("img");
    img.src = "image/" + i + ".jpeg";
    img.title = "範例圖片";
    img.height = "1000";
    body.appendChild(img);
        
}