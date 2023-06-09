import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn= ()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user= result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
    }


    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-info"> <FaGoogle></FaGoogle> SignIn With Google</Button>
                <Button variant="outline-dark"><FaFacebook></FaFacebook> SignIn With Facebook</Button>
            </ButtonGroup>
            <h3 className='my-4'>Find us on</h3>
            <ListGroup>
                <ListGroup.Item className='mb-2'>Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'>Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'>LinkedIn</ListGroup.Item>
                <ListGroup.Item className='mb-2'>WhatsApp</ListGroup.Item>
                <ListGroup.Item className='mb-2'>Telegram</ListGroup.Item>
            </ListGroup>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;