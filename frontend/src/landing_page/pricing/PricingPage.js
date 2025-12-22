//This page is a wrapper for the Pricing component
import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
function PricingPanel() {
    return ( 
        <>
        <h1>PricingPanel</h1>
        <Hero/>
        <Brokerage/>
        </>
     );
}

export default PricingPanel;