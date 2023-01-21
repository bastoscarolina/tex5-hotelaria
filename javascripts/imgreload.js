//Banner

var imagens = ["../images/home_hotel.jpg", "../images/banner1.jpeg", "../images/banner2.jpeg" , "../images/banner3.jpeg" , "../images/banner4.jpeg"]
var img = Math.floor((Math.random() * imagens.length) );

document.getElementById("home").style.backgroundImage = `url(${imagens[img]})`