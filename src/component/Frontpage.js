import React from 'react';
import {Col, Row, Image} from 'react-bootstrap';
import banner_img from './../images/banner.png';

const Frontpage = () => {
    return (
        <>
            <Row className="d-flex justiy-content-center mx-auto" >
                <Col className="text-center">
                    <h1>Welcome!</h1>
                    <h6 className="pb-2">Easy Todo App</h6>
                    <Image src={banner_img} fluid className="rounded shadow p-sm-4  p-md-5  img-fluid w-50"  />
                </Col>  
            </Row>
        </>
    )
}

export default Frontpage
