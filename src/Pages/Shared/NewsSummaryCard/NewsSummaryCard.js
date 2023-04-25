
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex justify-content align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='px-2 pt-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small> {author?.published_date}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 150 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                   
                    <span> {rating?.number}</span> <FaStar className='text-warning'></FaStar>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;