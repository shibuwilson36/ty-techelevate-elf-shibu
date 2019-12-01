const image=document.getElementById("image")
const imageChange1=document.getElementById("image1")
const imageChange2=document.getElementById("image2")

const div=document.createElement("div")
const image2=document.createElement("img")
const image3=document.createElement("img")

div.classList="container container  col-md-8 mt-3 offset-md-4"

image2.classList="ml-0 card  card-body float-left"
image3.classList="ml-1 card card-body float-left"



image.addEventListener("mouseover",function () {
    imageChange1.src="image/image(4).jpg"
    imageChange2.src="image/image(2).jpg"
})
image.addEventListener("mouseout",function () {
    imageChange1.src="image/image2.jpg"
    imageChange2.src="image/card3.jpg"
})
image.addEventListener("click",function () {



    image2.src='image/image(3).jpg'
    image3.src='image/card2.jpg'
    div.appendChild(image2)
    div.appendChild(image3)
    document.body.appendChild(div)


})