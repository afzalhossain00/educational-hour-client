import React from 'react';

const Blog = () => {
    return (
        <div className='w-75 mx-auto'>
            <h3 className='text-xl text-center'>Question And Answer:</h3>
            <div className='border rounded my-4 p-4'>
                <h4 className='fw-semibold'>1. what is cors??</h4> <br />
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                </p>
            </div>
            <div className='border rounded my-4 p-4'>
                <h4 className='fw-semibold'>2. Why are you using firebase? What other options do you have to implement authentication?</h4> <br />
                <p>I use firebase for many purposes that can help us to develop apps, grow and make it a quality app. Firebase manages all data real-time in the database. So, the exchange of data to and from the database is easy and quick. Google Analytics for Firebase allows you to track your user's journey through realtime and custom reporting. Also authentication feature that is necessary to identify the user. <br />
                    <strong>Other option to implement authentication</strong>
                    <li>Okta</li>
                    <li>Auth0</li>
                    <li>Amazon Cognito</li>
                    <li>OneLogin</li>

                </p>
            </div>
            <div className='border rounded my-4 p-4'>
                <h4 className='fw-semibold'>3. How does the private route work? </h4> <br />
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.
                </p>
            </div>
            <div className='border rounded my-4 p-4'>
                <h4 className='fw-semibold'>3. What is Node? How does Node work? </h4> <br />
                <p>Node is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (V8 engine) and executes JavaScript.
                    <br />
                    Node accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                </p>
            </div>
        </div>
    );
};

export default Blog;