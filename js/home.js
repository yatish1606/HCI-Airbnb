const $header = document.querySelector('.home-header')
const $searchBar = document.querySelector('.home-searchbar')
const $menu = document.querySelector('.menu')
const $logo = document.querySelector('.home-logo-content')
const $logoImage = document.getElementById('logo')
const $languageSelectImage = document.getElementById('language-select-image')
const $languageDropdownArrow = document.getElementById('language-select')
const $locations = document.querySelector('.locations')
const $exploreButton = document.querySelector('.explore-btn')
//const $languageSelect = document.getElementById('language-select')

const locations = [
    {
        name : 'London',
        country : 'United Kingdom',
        image :'images/london.jpg'
    },
    {
        name : 'New York',
        country : 'United States',
        image :'images/new_york.jpg'
    },
    {
        name : 'Bali',
        country : 'Thailand',
        image :'images/bali.jpg'
    },
    {
        name : 'Agra',
        country : 'India',
        image :'images/agra.jpg'
    },
]  


const availableCurrencies = [
    {
        symbol : '$',
        name : 'USD',
    },
    {
        symbol : '€',
        name : 'EUR',
    },
    {
        symbol : '₹',
        name : 'INR',
    },
    {
        symbol : '£',
        name : 'GBP',
    },
    {
        symbol : '¥',
        name : 'YEN',
    },
]

const hotelsList = [
    {
        id:0,
        image : '../images/sheraton_grand.jpg',
        name : 'Sheraton Grand Dubai',
        rating : 4.5,
        reviewsNumber : 1135,
        features : [
            'Good cleanliness',
            'Pets allowed'
        ],
        amenities : [
            {
                image : '../images/icons/wifi_black.png',
                description : 'WiFi'
            },
            {
                image : '../images/icons/air_conditioned_black.png',
                description : 'Air Conditioned'
            },
            {
                image : '../images/icons/parking_black.png',
                description : 'Parking'
            },
            {
                image : '../images/icons/pool_black.png',
                description : 'Swimming pool'
            },
        ],
        prices : [
            {
                name : 'Booking.com',
                price : '16,350',
            },
            {
                name : 'MakeMyTrip',
                price : '17,250',
            },
            {
                name : 'Agoda',
                price : '18,020',
            },
        ]
    },
    {
        id:1,
        image : '../images/the_palm.jpg',
        name : 'The Palm',
        rating : 4.8,
        reviewsNumber : 5605,
        features : [
            'Good cleanliness',
            'Pets allowed',
            "Breakfast included"
        ],
        amenities : [
            {
                image : '../images/icons/wifi_black.png',
                description : 'WiFi'
            },
            {
                image : '../images/icons/air_conditioned_black.png',
                description : 'Air Conditioned'
            },
            {
                image : '../images/icons/gym_black.png',
                description : 'Gym'
            },
        ],
        prices : [
            {
                name : 'Agoda',
                price : '21,050',
            },
            {
                name : 'MakeMyTrip',
                price : '23,250',
            },
            {
                name : 'Booking.com',
                price : '25,920',
            },
        ]
    },
    {
        id:2,
        image : '../images/al_bandar.jpg',
        name : 'Al Bandar Rotana - Dubai Creek',
        rating : 4.4,
        reviewsNumber : 2435,
        features : [
            'Popular',
            "Breakfast included"
        ],
        amenities : [
            {
                image : '../images/icons/wifi_black.png',
                description : 'WiFi'
            },
            {
                image : '../images/icons/air_conditioned_black.png',
                description : 'Air Conditioned'
            },
            {
                image : '../images/icons/pool_black.png',
                description : 'Swimming pool'
            },
            {
                image : '../images/icons/gym_black.png',
                description : 'Gym'
            },
        ],
        prices : [
            {
                name : 'MakeMyTrip',
                price : '20,250',
            },
            {
                name : 'Agoda',
                price : '21,050',
            },
            {
                name : 'Booking.com',
                price : '28,120',
            },
        ]
    },
    {
        id:3,
        image : '../images/taj.jpg',
        name : 'Taj Dubai',
        rating : 4.9,
        reviewsNumber : 8435,
        features : [
            'Popular',
            'Pets allowed',
            'Top Rated'
        ],
        amenities : [
            {
                image : '../images/icons/wifi_black.png',
                description : 'WiFi'
            },
            {
                image : '../images/icons/air_conditioned_black.png',
                description : 'Air Conditioned'
            },
            {
                image : '../images/icons/gym_black.png',
                description : 'Gym'
            },
            {
                image : '../images/icons/fork_black.png',
                description : 'Restaurant'
            },
            {
                image : '../images/icons/pool_black.png',
                description : 'Swimming pool'
            },
            
        ],
        prices : [
            {
                name : 'MakeMyTrip',
                price : '24,850',
            },
            {
                name : 'Agoda',
                price : '25,050',
            },
            {
                name : 'Booking.com',
                price : '30,820',
            },
        ]
    }
]




// <img src="${item.image}"  class="hotel-image" />
const loadLocations = function() {
    locations.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList = 'card-body';

    const content = `
        <div class="card-body" style="background-image:linear-gradient(to top, #000000ba 20%, #00000000 30%), url(${item.image}); background-size:cover">
            <div class="card-bottom">
                <span><h4>${item.name} ,</h4><p>${item.country}</p></span>
                <div class="get-hotels">
                    <h5><a href="/">Find Hotels</a></h5>
                    <img src="images/icons/down_salmon.png" class="get-hotels-img"/>
                </div>
            </div>
        </div>
    `
    $locations.innerHTML += content
})}


window.onload = function runOnLoad() {
    $searchBar.innerHTML = document.getElementById("searchbar-inside").innerHTML
    console.log('Homepage Loaded') 
    $logoImage.src = "images/icons/logo_white.png"
    $languageSelectImage.src = "images/icons/language_white.png"
    $languageDropdownArrow.src = "images/icons/down_white.png"
    $menu.classList.add("home-searchbar-menu-visible")
    $searchBar.classList.add("home-searchbar-inside");
    window.scrollTo(0,0)
    loadLocations()
    console.log('this is sampleinfo testing')
    localStorage.setItem('hotelList', JSON.stringify(hotelsList))
    console.log(JSON.parse(localStorage.getItem('hotelList')))
    console.log('testing')
}


window.addEventListener('scroll', event => {

    
    
    if(this.scrollY > 0){
        $header.classList.add('white-bg')
        $header.classList.remove('no-bg')
    } else {
        $header.classList.add('no-bg')
        $header.classList.remove('white-bg')
    }

    if(this.scrollY > 0){
        $searchBar.classList.add("home-searchbar-outside");
        $logo.classList.add("change");
        // $header.classList.add("fadeIn");
        $header.classList.remove("fadeOut");
        $searchBar.classList.remove("home-searchbar-inside");
        $menu.classList.add("home-searchbar-menu-not-visible")
        $menu.classList.remove("home-searchbar-menu-visible")
        $languageDropdownArrow.classList.add("change")
    } else {
        $searchBar.classList.add("home-searchbar-inside");
        $searchBar.classList.add("fadeIn");
        $searchBar.classList.remove("home-searchbar-outside");
        $menu.classList.add("home-searchbar-menu-visible");
        $menu.classList.remove("home-searchbar-menu-not-visible");
        $logo.classList.remove("change");
        $languageDropdownArrow.classList.remove("change")
    }

    if($searchBar.classList.contains("home-searchbar-inside")){
        $searchBar.innerHTML = document.getElementById("searchbar-inside").innerHTML
    } else if($searchBar.classList.contains("home-searchbar-outside")) {
        $searchBar.innerHTML = document.getElementById("searchbar-outside").innerHTML
    }

    if($logo.classList.contains("change")){
        $logoImage.src = "images/icons/logo_salmon.png"
        $languageSelectImage.src = "images/icons/language.png"
    } else {
        $logoImage.src = "images/icons/logo_white.png"
        $languageSelectImage.src = "images/icons/language_white.png"
    }
})

$exploreButton.addEventListener('click', () => {
    window.scrollTo(0,1200)
})

