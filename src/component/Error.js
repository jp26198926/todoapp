import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Error = () => {
    const errorMsg = useSelector(state => state.errorMsg);

    return (
        <div>
            <Alert variant="danger" className="my-2">{errorMsg}</Alert>
        </div>
    )
}

export default Error
