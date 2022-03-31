import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'lifetime free',
                'unlimited deals', 'localized deals', 'fantastic deals',
                'crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'Everything on free',
                'unlimited deals', 'localized deals', 'fantastic deals',
                'crazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99,
            benefits: [
                'all is  free',
                'unlimited deals', 'localized deals', 'fantastic deals',
                'crazy deals'
            ]
        },
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor non eos repellendus blanditiis neque corporis dignissimos doloribus obcaecati praesentium ipsa!</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}>

                    </PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;