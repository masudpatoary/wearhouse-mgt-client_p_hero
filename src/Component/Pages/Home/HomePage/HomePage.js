import React from 'react';
import OutOfStockInventory from '../OutOfStockInventory/OutOfStockInventory';
import Banner from './../Banner/Banner';
import { Row,  Container } from 'react-bootstrap';
import InventoriesForHome from './../InventoriesForHome/InventoriesForHome';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Container className='d-flex justify-content-center mt-3'>
                <Row className='mx-auto'>
                    <Row className='mb-3'>
                        <OutOfStockInventory></OutOfStockInventory>
                    </Row>
                    <Row >
                        <InventoriesForHome></InventoriesForHome>
                    </Row>
                </Row>
            </Container>
        </div>

    );
};

export default HomePage;