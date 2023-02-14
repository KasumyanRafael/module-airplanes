var airplanes=document.querySelectorAll('.planecard');
var gallery=document.querySelector('.gallery');
var galleryExtended=document.querySelector('.gallery-extended');
var mainPhoto=galleryExtended.querySelector('.main-photo');
var bottom=galleryExtended.querySelector('.bottom-gallery');
var picture=bottom.querySelector('.planecard');
gallery.classList.add('grid');
var show=function(item,preitem,postitem){
    item.addEventListener('click',function(){
        galleryExtended.classList.add('block');
        gallery.classList.add('none');
        mainPhoto.src=item.src;
        var bottomItems=galleryExtended.querySelectorAll('.planecard')
        bottomItems[0].src=preitem.src;
        bottomItems[1].src=item.src;
        bottomItems[2].src=postitem.src;
    })
}
var cross=galleryExtended.querySelector('.cross');
cross.addEventListener('click',function(){
    galleryExtended.classList.remove('block');
    gallery.classList.remove('none');
})
picture.addEventListener('click',function(){
    mainPhoto.src=picture.src
})
for(var i=0;i<airplanes.length;i++){
    show(airplanes[i],airplanes[i-1],airplanes[i+1]);
}