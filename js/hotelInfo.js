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



const activeStyle = "color: #FF5A5F;border-bottom: 4px solid #FF5A5F;transition: 0.3s;"
const inactiveStyle = "color: #2a2b2b;border-bottom: 4px solid transparent;transition: 0.3s;"


window.onload = function runOnLoad() {

    setStyle($overview)

    const hotelInfo = JSON.parse(localStorage.getItem('hotelData'))
    console.log(hotelInfo)

    const allHotelsInfo = JSON.parse(localStorage.getItem('hotelList'))
    console.log(allHotelsInfo)
    
    const suggestionHotels = allHotelsInfo.filter(hotel => hotel.name !== hotelInfo.name)
    console.log(suggestionHotels)

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
            <div class="suggestion-hotel-item">
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
