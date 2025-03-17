import React from 'react'
import instagramLogo from '../../lib/image/brand/instagram.svg';
import Carousel from '../../component/Carousel';

const page = () => {
    const milkItems = [
        {
            image: instagramLogo,
            altText: 'Milk',
            productName: 'Sugar Free Chocolate Hazelnut Milk',
            productInfo: 'Guilt free glass of milk for every day',
            price: 150,
        },
        {
            image: instagramLogo,
            altText: 'Milk',
            productName: 'Sugar Free Caramel Popcorn Milk',
            productInfo: 'Guilt free glass of milk for every day',
            price: 150,
        },
        {
            image: instagramLogo,
            altText: 'Milk',
            productName: 'Sugar Free Pineapple Milk',
            productInfo: 'Guilt free glass of milk for every day',
            price: 150,
        },
        {
            image: instagramLogo,
            altText: 'Milk',
            productName: 'Sugar Free Eggnog Protein Rich Milk',
            productInfo: 'Guilt free glass of milk for every day',
            price: 150,
        }

    ]
    return (
        <Carousel items={milkItems} />
    )
}

export default page
