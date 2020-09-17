const b = document.querySelector('.book')
const $overview = document.querySelector('.overview')
const $location = document.querySelector('.location')
const $reviews = document.querySelector('.reviews')
const $faq = document.querySelector('.faq')
const $more = document.querySelector('.more')
const $hotelBar = document.querySelector('.hotel-bar')
const $hotelContentRight = document.querySelector('.hotel-content-right')
var acc = document.getElementsByClassName("accordion");
const $otherHotelsList = document.querySelector('.hotel-content-others-list')
const $hotelName = document.querySelector('.hotel-name')
const $hotelRatingValue = document.querySelector('.hotel-rating-value')
const $numberOfReviews = document.querySelector('.noofreviews')
const $prices = document.querySelector('.prices')
const $finalPrice = document.querySelector('.final-price')
const $mainImage = document.querySelector('.main-image')
const $features = document.querySelector('.features')

const colors = ['#1094C34a', '#0BB02E3a', '#ED8A0E4a', '#460EED2a', '#0E83ED3a', '#eee', '#EBB0054a', '#0AB88E3a', '#E117082a', '#B0D50B3a']

const activeStyle = "color: #FF5A5F;border-bottom: 4px solid #FF5A5F;transition: 0.3s;"
const inactiveStyle = "color: #2a2b2b;border-bottom: 4px solid transparent;transition: 0.3s;"

const bookHotel = function(index) {
    localStorage.setItem('hotelData', JSON.stringify(JSON.parse(localStorage.getItem('hotelList'))[index]))
    console.log(JSON.parse(localStorage.getItem('hotelData')))
    location.href="hotelInfo.html"
}

const getBG = function() {
    return colors[Math.floor(Math.random() * colors.length)].toString()
}

window.onload = function runOnLoad() {

    setStyle($overview)

    const hotelInfo = JSON.parse(localStorage.getItem('hotelData'))
    console.log(hotelInfo)

    const allHotelsInfo = JSON.parse(localStorage.getItem('hotelList'))
    console.log(allHotelsInfo)
    
    const suggestionHotels = allHotelsInfo.filter(hotel => hotel.name !== hotelInfo.name)
    console.log(suggestionHotels)

    
    $hotelName.innerHTML = hotelInfo.name
    $hotelRatingValue.innerHTML = hotelInfo.rating
    $numberOfReviews.innerHTML = hotelInfo.reviewsNumber

    hotelInfo.prices.map(price => {
        const priceContent = `
        <div class="price-box">
            <p>${price.name}</p>
            <h3>&#8377; ${price.price}</h3>
        </div>
        <div class="vertical-separator" style="margin: 0 5px; height: 40px; vertical-align: middle;"></div>
        `
        $prices.innerHTML += priceContent
    })
    $prices.removeChild($prices.lastChild.previousSibling)

    $finalPrice.innerHTML = `
    <div class="final-price-left">
        <h4>${hotelInfo.prices[0].name}</h4>
        <h1>&#8377; ${hotelInfo.prices[0].price}</h1>
        <h3>a night</h3>
        <p>taxes and fees not included</p>
    </div>
    <button class="book-button">Book</button>
    `
    
    $mainImage.style.background = `url('../images/${hotelInfo.image}')  no-repeat,` + 'linear-gradient(to right top, #000000aa 15%, #00000000 25%)' + 'no-repeat'
    $mainImage.style.backgroundSize = 'cover'
    // ,  + "linear-gradient(to right top, #000000aa 15%, #00000000 25%) "
    
    hotelInfo.features.map(item => {
        const content = `
        <div style="display:inline-block;"><p class="feature" style=" background-color:${getBG()};">${item}</p></div>
        `
        $features.innerHTML += content
    })

    $overview.addEventListener('click', function () {
        $overview.style.cssText = activeStyle
        $location.style.cssText = inactiveStyle
        $reviews.style.cssText = inactiveStyle
        $faq.style.cssText = inactiveStyle
        $more.style.cssText = inactiveStyle
        window.scrollTo(0,500)
    })

    
    $location.onclick = function() {
        $location.style.cssText = activeStyle
        $overview.style.cssText = inactiveStyle
        $reviews.style.cssText = inactiveStyle
        $faq.style.cssText = inactiveStyle
        $more.style.cssText = inactiveStyle
        window.scrollTo(0,1010)
    }

    $reviews.addEventListener('click', function () {
        $reviews.style.cssText = activeStyle
        $location.style.cssText = inactiveStyle
        $overview.style.cssText = inactiveStyle
        $faq.style.cssText = inactiveStyle
        $more.style.cssText = inactiveStyle
        window.scrollTo(0,1510)
    })

    $faq.addEventListener('click', function () {
        $faq.style.cssText = activeStyle
        $location.style.cssText = inactiveStyle
        $reviews.style.cssText = inactiveStyle
        $overview.style.cssText = inactiveStyle
        $more.style.cssText = inactiveStyle
        window.scrollTo(0,2500)
    })

    $more.addEventListener('click', function () {
        $more.style.cssText = activeStyle
        $location.style.cssText = inactiveStyle
        $reviews.style.cssText = inactiveStyle
        $faq.style.cssText = inactiveStyle
        $overview.style.cssText = inactiveStyle
        window.scrollTo(0,2800)
    })

    suggestionHotels.map(hotel => {
        console.log($otherHotelsList)
        const content = `
            <div class="suggestion-hotel-item" onclick="bookHotel(${hotel.id})">
                <div class="suggestion-hotel-item-left">
                    <img src="${hotel.image}"/>
                </div>
                <div class="suggestion-hotel-info">
                    <h3>${hotel.name}</h3>
                    <span>
                        <img src="../images/icons/star.png" style="width:13px; height:13px"/>
                        <p>${hotel.rating}</p>
                    </span>
                    <div style="display:flex; flex-direction:row;">
                        <div class="suggestion-hotel-info-amenities">
                            ${hotel.features.map(f => `<h6 class="suggestion-amenity">${f}</h6>`).join('')}
                        </div>
                        <div class="suggestion-hotel-info-price">
                            <div class="best-price">Best price</div>
                            <div class="best-price-price">&#8377; ${hotel.prices[0].price}</div>
                            <div class="best-price-name">${hotel.prices[0].name}</div>
                        </div>
                    </div>
                </div>
            </div>
        `

        $otherHotelsList.innerHTML += content
    })

}

const options = [$overview,$location,$reviews,$faq,$more]

const setStyle = (node) => {
    node.style.cssText = activeStyle
    options.filter(option => option !== node).forEach(otherNode => otherNode.style.cssText = inactiveStyle)
}

window.addEventListener('scroll', event => {
    
    if(this.scrollY > window.innerHeight - 90){
        $hotelBar.style.cssText = "position: fixed;top:0px; left:0;margin-top:0;padding-top:50px;padding-right:15px"
        $hotelContentRight.style.cssText = "position: fixed;top:100px; right:10%; width:28% "
        if(this.scrollY > 2800) {
            $hotelContentRight.style.cssText = "display: none;background-color:green"
        }
    } else {
        $hotelBar.style.cssText = "position:none"
        $hotelContentRight.style.cssText = "position: none "
    }
    if(this.scrollY > 500){
        setStyle($overview)
    }
    if(this.scrollY > 1000){
        setStyle($location)
    }
    if(this.scrollY > 1500){
        setStyle($reviews)
    }
    if(this.scrollY > 2000){
        setStyle($faq)
    }
    if(this.scrollY > 2500){
        setStyle($more)
    }
})

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
