import personSvg from '../assets/images/icon-person.svg'
import cogSvg from '../assets/images/icon-cog.svg'
import chartSvg from '../assets/images/icon-chart.svg'

export const appService = {

    getReviewCard,
    getReviewCards,
    getArticel,
    getArticels,
}


function getReviewCards() {
    return [
        getReviewCard('https://res.cloudinary.com/drpqhjyvk/image/upload/v1654767351/samples/avatar-kady_zwmqoo.jpg',
            ' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”'
            , 'Kady Baker',
            'Product Manager at Bookmark'),
        getReviewCard('https://res.cloudinary.com/drpqhjyvk/image/upload/v1654767352/samples/avatar-aiysha_abxl5h.jpg',
            '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
            'Aiysha Reese',
            'Founder of Manage'),
        getReviewCard('https://res.cloudinary.com/drpqhjyvk/image/upload/v1654767351/samples/avatar-arthur_wyfbyo.jpg',
            '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
            'Arthur Clarke',
            'Co-founder of MyPhysio')
    ]
}

function getReviewCard(img, review, fullname, role) {
    return {
        img,
        review,
        fullname,
        role

    }
}
function getArticels() {
    return [
        getArticel('Experienced Individuals',
        'Our network is made up of highly experienced professionals who are passionate about what they do.',
        personSvg),
        getArticel('Easy to Implement',
        'Our processes have been refined over years of implementation meaning our teams always deliver.',
        cogSvg),
        getArticel('Enhanced Productivity',
        'Our customized platform with in-built analytics helps you manage your distributed teams.',
        chartSvg),
    ]
}
function getArticel(title, subtitle, img) {
    return {
        title,
        subtitle,
        img
    }
}