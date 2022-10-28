import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Accordion>
            <h2 className='my-4'> Frequently Asked Questions </h2>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is Education Hour?</Accordion.Header>
                <Accordion.Body>
                    Education hour is a online learning platform. Anyone can learn from our website. we have offer premium courses which is very good and easy to learn.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Can I download courses video?</Accordion.Header>
                <Accordion.Body>
                    No. You can not download courses video.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>How long does each course take?</Accordion.Header>
                <Accordion.Body>
                    We have various length of course. Some can be completed in as little as three weeks, while others take longer. On average, Our courses last eight to nine weeks.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What are the requirements?</Accordion.Header>
                <Accordion.Body>
                    <li>Time Management Skills.</li>
                    <li>Persistence & patience.</li>
                    <li>Computer.</li>
                    <li>Basic Technical Skills.</li>
                    <li>Good Internet Connection.</li>
                    <li>Hard working ability</li>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Can I get special offer for buy courses?</Accordion.Header>
                <Accordion.Body>
                    Yeah, Please subscribe our newsletter. We will let you know via email.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default FAQ;