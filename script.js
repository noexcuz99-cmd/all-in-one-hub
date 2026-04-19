function openApp(url){
window.location.href=url;
}

let imgs=[
"https://via.placeholder.com/300x150/ff0000",
"https://via.placeholder.com/300x150/00ff00",
"https://via.placeholder.com/300x150/0000ff"
];

let i=0;

setInterval(()=>{
i=(i+1)%imgs.length;
document.getElementById("slider").src=imgs[i];
},2000);
