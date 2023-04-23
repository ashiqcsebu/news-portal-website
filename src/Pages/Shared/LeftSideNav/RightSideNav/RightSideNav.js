import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-info">SignIn With Google</Button>
                <Button variant="outline-dark">SignIn With Facebook</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNav;