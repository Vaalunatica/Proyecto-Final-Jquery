var uri = window.location.href;
var img = 'img/product/shoes/1.jpeg';
if (uri.indexOf("#") > 0) {
img = uri.substring(uri.indexOf('#') + 1);
//dynamically load other similar type of product
//get the type like shoes , jeans etc
var type = img.substring(img.indexOf('product/') + 8).split('/')[0];
//get current image name

var numb = parseInt(img.substring(img.indexOf('product/') + 8).split('/')[1]);
var out = '';
for(var i = 1; i <= 5; i++) {
  if (i == numb) continue;
  out += '<div class="product"> <h3>Some ' + type + ' ' + i + '</h3> <img src="img/product/' + type + '/' + i + '.jpg" /> </div>';
}
document.getElementById('other').innerHTML += out;
}
document.getElementById('price').innerHTML ="Rs: <strong>" + Math.round(Math.random() * 1000) + "</strong>";
document.getElementById('demo-img').src = img;
document.getElementById('demo-img').style.display = 'block';
