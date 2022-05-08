import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} aboutTxt={props.aboutTxt} />
            <Content>
                <p>Hello, my name is Mike Morales. I am a recent graduate of Stony Brook University, where I earned my B.S. in Computer Science.</p> 

                <p>During my time in undergrad, I worked as a Web Developer on the Stony Brook Campus Residencies Marketing Team.</p>

                <p> I was also blessed with the opportunity to work alongside Professor Cho as a research assistant at Konkuk University in Seoul South Korea. There I worked on AI applications for Mobile Environments, working closely with the Machine Learning API, TensorFlow.</p>

                <p>I'm constantly learning new things. currently those things include gaining experience with MongoDB, React, Express JS, and Node JS</p>

                <p>You can take a look at some of my current and past projects on <a href="https://github.com/michael5morales" target="_blank" rel="noopener noreferrer">Github</a>.</p>

            </Content>
        </div>
    );

}

export default AboutPage;