import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Success = () => {
    const successMsg = useSelector(state => state.successMsg);

    return (
        <div>
            <Alert variant="success" className="my-2">
                Successfully Save! <br/>
                {successMsg}
            </Alert>
        </div>
    )
}

export default Success
