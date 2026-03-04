const totalImages = 78

const galleryWall = document.getElementById("galleryWall")

function startSurprise(){

document.getElementById("startScreen").style.display="none"

document.getElementById("mainSite").style.display="block"

document.getElementById("music").play()

loadGallery()

}



function loadGallery(){

for(let i=1;i<=totalImages;i++){

let img=document.createElement("img")

img.src=`images/img${i}.jpeg`

img.loading="lazy"

galleryWall.appendChild(img)

}

}