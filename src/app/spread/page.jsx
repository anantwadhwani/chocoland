import React from 'react'
import instagramLogo from '../../lib/image/brand/instagram.svg';
import Carousel from '../../component/Carousel';

const page = () => {
        const spreadItems = [
            {
                image: instagramLogo,
                altText: 'Spread',
                productName: 'Sugar Free Hazelnut Chocolate Spread',
                productInfo: 'Guilt free spread every day meal'
            },
            {
                image: instagramLogo,
                altText: 'Spread',
                productName: 'Sugar Free Caramel Popcorn Spread',
                productInfo: 'Guilt free spread every day meal'
            }
        ];
    return (
        <Carousel items={spreadItems} />
    )
}

export default page;
