const $socialMediaBox = document.querySelector('.social-media-icons')

const icons = [
    {
        icon : "../images/icons/instagram.png",
        action : "/",
        name : 'Instagram',
        link : "https://www.instagram.com",
    },
    {
        icon : "../images/icons/youtube.png",
        action : "/",
        name : 'Youtube',
        link : "https://www.youtube.com",
    },
    {
        icon : "../images/icons/facebook.png",
        action : "/",
        name : 'Facebook',
        link : "https://www.facebook.com",
    },
    {
        icon : "../images/icons/linkedin.png",
        action : "/",
        name : 'LinkedIN',
        link : "https://www.linkedin.com",
    },
    {
        icon : "../images/icons/whatsapp.png",
        action : "/",
        name : 'WhatsApp',
        link : "https://www.whatsapp.com",
    },
    {
        icon : "../images/icons/twitter.png",
        action : "/",
        name : 'Twitter',
        link : "https://www.twitter.com",
    },
]

const goToSocialMedia = href => {
    console.log('go to social media')
    window.open(href, "_blank")
}

const loadIcons = () => {
    icons.forEach((item, index) => {
        const iconCard = document.createElement('div');

        const content = `
            <a href=${item.link} target="_blank">
            <div class="social-media-icons-card">
                <img src=${item.icon} class="social-media-icons-image"/>
                <p class="social-media-icons-p">${item.name}</p>
            </div>
            </a>
        `
        $socialMediaBox.innerHTML += content
    })
}

window.onload = function runOnLoad() {
    loadIcons()
    console.log('Loading icons')
}