
import tourImgOne from './images/tour-1.jpeg'
import tourImgTwo from './images/tour-2.jpeg'
import tourImgThree from './images/tour-3.jpeg'
import tourImgFour from './images/tour-4.jpeg'
export const pageLinks = [{
    id: 1,
    link: '#home',
    text: 'home'
}, {
    id: 2,
    link: '#about',
    text: 'about'
},
{
    id: 3,
    link: '#services',
    text: 'services'
}, {
    id: 4,
    link: '#tours',
    text: 'tours'
}]
export const socialLinks = [{
    id: 1,
    link: 'https://www.twitter.com',
    icon: 'fab fa-facebook'
}, {
    id: 2,
    link: 'https://www.twitter.com',
    icon: 'fab fa-twitter'
}, {
    id: 3,
    link: 'https://www.twitter.com',
    icon: 'fab fa-squarespace'

}]

export const servicesData = [
    {
        id: 1,
        title: 'saving money',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit .Asperiores, officia.",
        icon: 'fas fa-wallet fa-fw'
    }
    , {
        id: 2,
        title: 'endless hiking',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit .Asperiores, officia.",
        icon: 'fas fa-tree fa-fw'
    }
    , {
        id: 3,
        title: 'amazing comfort',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit .Asperiores, officia.",
        icon: 'fas fa-socks fa-fw'
    }
]

export const tourData = [
    {
        imgSrc: tourImgOne,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque' +
            ' vitae tempore voluptatum maxime reprehenderit eum quod' +
            'exercitationem fugit, qui corporis.',
        icon: 'fas fa-map',
        days: '6 days',
        amount: 'from $2100'

    },
    {
        imgSrc: tourImgTwo,
        date: 'october 11th, 2020',
        title: 'best of java',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque' +
            ' vitae tempore voluptatum maxime reprehenderit eum quod' +
            'exercitationem fugit, qui corporis.',
        icon: 'fas fa-map',
        days: '11 days',
        amount: 'from $1400'

    },
    {
        imgSrc: tourImgThree,
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque' +
            ' vitae tempore voluptatum maxime reprehenderit eum quod' +
            'exercitationem fugit, qui corporis.',
        icon: 'fas fa-map',
        days: '8 days',
        amount: 'from $5000'

    },
    {
        imgSrc: tourImgFour,
        date: 'december 5th, 2019',
        title: 'kenya highlights',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque' +
            ' vitae tempore voluptatum maxime reprehenderit eum quod' +
            'exercitationem fugit, qui corporis.',
        icon: 'fas fa-map',
        days: '20 days',
        amount: 'from $3300'

    },

]