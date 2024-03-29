const headerImg = document.querySelectorAll(".header-slider ul img");


let num = 0;
const imgSlider = () => {
    for(i = 0; i < headerImg.length ; i++){
        headerImg[i].style.display = "none"
    }
    headerImg[num].style.display = "block";
}

const controlPre = document.querySelector(".control-pre");
const controlNext = document.querySelector(".control-next");

const preBtn = () => {
    if(num > 0){
        num--
    }else{
        num = headerImg.length -1;
    }
    imgSlider()
}

const nextbutton = () => {
    if(num < headerImg.length -1){
        num++;
    }else{
        num = 0;
    }
    imgSlider()
}

controlNext.addEventListener("click" , () => {
    nextbutton();
})

controlPre.addEventListener("click" , () => {
    preBtn();
})

imgSlider()


const products = document.querySelectorAll(".products");

for (item of products){
item.addEventListener("wheel", (e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY;
        item.scrollRight -= e.deltaY;

    })
}


const productsCon = document.querySelector(".products-con");

let proObj = [
    {
        img : "assets/product2-1.jpg",
        headline : "Hot Whether costume..."
    },
    {
        img : "assets/product2-2.jpg",
        headline : "Sunshine costume..."
    },
    {
        img : "assets/product2-3.jpg",
        headline : "Girls costume.."
    },
    {
        img : "assets/product2-4.jpg",
        headline : "Baby costume..."
    },
    {
        img : "assets/product2-5.jpg",
        headline : "Boy costume..."
    },
    {
        img : "assets/product2-6.jpg",
        headline : "Movie cassed"
    },
    {
        img : "assets/product2-7.jpg",
        headline : "Baby night dress"
    },
    {
        img : "assets/product2-8.jpg",
        headline : "Baby wheet srilacks"
    },
   
]


const PrintProd = () => {

    let clutter = "";
    proObj.forEach((val , idx) => {
        
        clutter += ` <div class="products-item">
        <div class="product-img">
            <img src="${val.img}" alt="">
        </div>
        <div class="payment-det">
            <p><span class="dis-tag">45% OFF</span>  Deal</p>
            <h3><span>$25</span> List Price <strike> $80</strike></h3>
            <h5>${val.headline}</h5>
        </div>
    </div>`;
    
    });

    productsCon.innerHTML = clutter;
}

PrintProd()