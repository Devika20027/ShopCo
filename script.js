document.addEventListener('DOMContentLoaded', function () {
    const newArrivalsSection = document.getElementById('new-arrivals');
    const topSellingSection = document.getElementById('top-selling');

    const viewAllNewArrivals = document.getElementById('view-all-new-arrivals');
    const viewAllTopSelling = document.getElementById('view-all-top-selling');

    viewAllNewArrivals.addEventListener('click', function () {
        // Hide New Arrivals and show Top Selling
        newArrivalsSection.classList.add('hidden');
        topSellingSection.classList.remove('hidden');
    });

    viewAllTopSelling.addEventListener('click', function () {
        // Hide Top Selling and show New Arrivals
        topSellingSection.classList.add('hidden');
        newArrivalsSection.classList.remove('hidden');
    });
});

const productList = [
    {
        id: 1,
        name: "T-shirt with Tape Details",
        newPrice: 120,
        oldPrice: "",
        oldDiv: "hidden", 
        discount: "",
        discountdiv: "hidden", 
        rating: 4.5,
        star1: "images/assets/Star.png",
        star2: "images/assets/Star.png",
        star3: "images/assets/Star.png",
        star4: "images/assets/Star.png",
        star5: "images/assets/Halfstar.png",
        image: "images/assets/Frame 32.jpg",
        category: "T-shirt",
    },
    {
        id: 2,
        name: "Skinny Fit Jeans",
        newPrice: 240,
        oldPrice: 260,
        oldDiv: "",
        discount: 20,
        discountdiv: "",
        rating: 3.5,
        star1: "images/assets/Star.png",
        star2: "images/assets/Star.png",
        star3: "images/assets/Star.png",
        star4: "images/assets/Halfstar.png",
        star5: "",
        image: "images/assets/Frame Jeans.png",
        category: "Jeans",
    },
    {
        id: 3,
        name: "Checkered Shirt",
        newPrice: 180,
        oldPrice: "",
        oldDiv: "hidden",
        discount: "",
        discountdiv: "hidden",
        rating: 4.5,
        star1: "images/assets/Star.png",
        star2: "images/assets/Star.png",
        star3: "images/assets/Star.png",
        star4: "images/assets/Star.png",
        star5: "images/assets/Halfstar.png",
        image: "images/assets/Shirt.png",
        category: "Shirt",
    },
    {
        id: 4,
        name: "Sleeve Striped T-shirt",
        newPrice: 130,
        oldPrice: 160,
        oldDiv: "",
        discount: 30,
        discountdiv: "",
        rating: 4.5,
        star1: "images/assets/Star.png",
        star2: "images/assets/Star.png",
        star3: "images/assets/Star.png",
        star4: "images/assets/Star.png",
        star5: "images/assets/Halfstar.png",
        image: "images/assets/image 10.png",
        category: "T-Shirt",
    }
];

const topSelling = [
    {
        id: 1,
        name: "Vertically Sleeve Shirt",
        newPrice: 212,
        oldPrice: 232,
        oldDiv: "",
        discount: 20,
        discountdiv: "",
        rating: 4.5,
        star1: "images/assets/Star.png",
        star2: "images/assets/Star.png",
        star3: "images/assets/Star.png",
        star4: "images/assets/Star.png",
        star5: "images/assets/Halfstar.png",
        image: "images/assets/Frame shirt.png",
        category: "Shirt",
    },
    {
    id: 2,
    name: "Courage Graphic T-shirt",
    newPrice: 145,
    oldPrice: "",
    oldDiv: "hidden",
    discount: "",
    discountdiv: "hidden",
    rating: 3.5,
    star1: "images/assets/Star.png",
    star2: "images/assets/Star.png",
    star3: "images/assets/Star.png",
    star5: "images/assets/Halfstar.png",
    image: "images/assets/Frame 33.jpg",
    category: "T-Shirt", 
    },
    {
        id: 3,
        name: "Loose Fit Bermuda Shorts",
        newPrice: 80,
        oldPrice: "",
        oldDiv: "hidden",
        discount: "",
        discountdiv: "hidden",
        rating: 4.5,
        star1: "images/assets/Star.png",
        star2: "images/assets/Star.png",
        star3: "images/assets/Star.png",
        star4: "images/assets/Star.png",
        star5: "images/assets/Halfstar.png",
        image: "images/assets/Frame 34.jpg",
        category: "Shorts", 
    },
    {
        id: 4,
        name: "Faded Skinny Jeans",
        newPrice: 210,
        oldPrice: "",
        oldDiv: "hidden",
        discount: "",
        discountdiv: "hidden",
        rating: 4.5,
        star1: "images/assets/Star.png",
        star2: "images/assets/Star.png",
        star3: "images/assets/Star.png",
        star4: "images/assets/Star.png",
        star5: "images/assets/Halfstar.png",
        image: "images/assets/Frame 38.jpg",
        category: "Skinny jeans", 
    },
]
    let productMap = productList.map((product) => {
        return `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-details">
                    <h4>${product.name}</h4>
                    <div class="rating">
                        <img src="${product.star1}" alt="Star">
                        <img src="${product.star2}" alt="Star">
                        <img src="${product.star3}" alt="Star">
                        <img src="${product.star4}" alt="Star">
                        <img src="${product.star5}" >
                        <p>${product.rating}</p>
                    </div>
                    <p class="price">
                        $${product.newPrice} 
                        <span class="old-price" ${product.oldDiv}>$${product.oldPrice}</span>
                        <span class="btn-discount" ${product.discountdiv}>-${product.discount}%</span>
                    </p>
                </div>
            </div>
        `
    }).join('');

    let listDiv = document.querySelector('.product-grid');
    listDiv.innerHTML = productMap;

    let topSellingMap = topSelling.map((product) => {
        return `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-details">
                    <h4>${product.name}</h4>
                    <div class="rating">
                        <img src="${product.star1}" alt="Star">
                        <img src="${product.star2}" alt="Star">
                        <img src="${product.star3}" alt="Star">
                        <img src="${product.star4}" alt="">
                        <img src="${product.star5}" >
                        <p>${product.rating}</p>
                    </div>
                    <p class="price">
                        $${product.newPrice} 
                        <span class="old-price" ${product.oldDiv}>$${product.oldPrice}</span>
                        <span class="btn-discount" ${product.discountdiv}>-${product.discount}%</span>
                    </p>
                </div>
            </div>
        `
    }).join('');

    let sellDiv = document.querySelector('.selling-grid');
    sellDiv.innerHTML = topSellingMap;
let btn = document.getElementById('view-all-new-arrivals');
function viewAllArrivals() {
    let card=document.querySelector('.card-outer')
    let add = document.createElement('div');
    add.classList.add("view-all-inner");
    add.innerHTML = sellDiv.innerHTML;
    card.appendChild(add);
}
btn.addEventListener('click', viewAllArrivals);

let productDiv = document.querySelector('.new-grid')
let btns = document.getElementById('view-all-top-selling');

function viewAllTop() {
    let card=document.querySelector('.card-display')
    let add = document.createElement('div');
    add.classList.add("view-all-inside");
    add.innerHTML = productDiv.innerHTML;
    card.appendChild(add);
}
btns.addEventListener('click', viewAllTop);


// slider
const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const carouselContainer = document.querySelector('.carousel-container');
    const cards = document.querySelectorAll('.review-card');
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = cards[0].clientWidth + 20; // Add margin width
        carouselContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    rightArrow.addEventListener('click', () => {
        if (currentIndex < cards.length - 3) { // Prevent overflow
            currentIndex++;
            updateCarousel();
        }
    });

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);

