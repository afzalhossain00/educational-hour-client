import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Accordion>
            <h2 className='my-4'> Frequently Asked Questions </h2>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is online learning like?</Accordion.Header>
                <Accordion.Body>
                    Many aspects of online learning look a lot like what you're used to in a traditional classroom, with the added benefit of learning some cool technology and typically conducting your schoolwork on a much more flexible schedule. And, the best part, you'll be supported through every step of your academic journey.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How long does each course take?</Accordion.Header>
                <Accordion.Body>
                    We have various length of course. Some can be completed in as little as three weeks, while others take longer. On average, Our courses last eight to nine weeks.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
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
        </Accordion>
    );
};

export default FAQ;