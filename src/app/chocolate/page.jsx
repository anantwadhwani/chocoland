import React from 'react'
import instagramLogo from '../../lib/image/brand/instagram.svg';
import Carousel from '../../component/Carousel';

const page = () => {
    const chocolateItems = [
        {
            image: instagramLogo,
            altText: 'Chocolate',
            productName: 'Sugar Free Hazelnut Chocolate',
            productInfo: 'Guilt free desert for every day',
            price: 120,
        },
        {
            image: instagramLogo,
            altText: 'Chocolate',
            productName: 'Sugar Free Caramel Popcorn Chocolate',
            productInfo: 'Guilt free desert for every day',
            price: 120,
        }
    ];
    return (
        <Carousel items={chocolateItems} />
    )
}

export default page
