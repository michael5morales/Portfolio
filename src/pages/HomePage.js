
import React from 'react';

import Hero from '../components/Hero';
//import {Card, Button} from 'react-bootstrap';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );

}

export default HomePage;