//This page is a wrapper for the Pricing component
import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';
function PricingPanel() {
    return ( 
        <>
        <Hero/>
        <OpenAccount/>
        <Brokerage/>
        </>
     );
}

export default PricingPanel;