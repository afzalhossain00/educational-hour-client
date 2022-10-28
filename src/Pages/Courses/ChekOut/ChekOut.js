import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChekOut = () => {
    const checkOut = useLoaderData();
    const { title, price, id } = checkOut;
    return (
        <div class="card text-center">
            <div class="card-header fs-3 fw-bold">
                Check Out
            </div>
            <div class="card-body">
                <h6 class="">Course Id: {id}</h6>
                <h6 class="card-title">{title}</h6>
                <p class="card-title fw-semibold">Price: ${price}</p>
                <ButtonGroup horizontal>
                    <Button className='me-2 rounded btn btn-outline-info' variant="light">Confirm</Button>
                    <Button className='rounded btn btn-outline-info' variant="light">Cancel</Button>
                </ButtonGroup>
            </div>

        </div>
    );
};

export default ChekOut;