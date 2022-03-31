import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefits from '../Benefits/Benefits';


const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefits benefit={benefit}></Benefits>)
                }
            </div>
            <button className='bg-green-500 flex justify-center w-full items-center py-2 rounded text-white hover:text-yellow-500 font-bold'>Buy Now<ArrowRightIcon className='w-4 h-4 ml-2'></ArrowRightIcon></button>
        </div>
    );
};

export default PricingOption;