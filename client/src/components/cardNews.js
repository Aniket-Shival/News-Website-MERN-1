import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const cardNews = (newsThis) => {
    return (

        <Card className=' w-100 my-5' style={{ backgroundColor:'whitesmoke'}}>
            <Card.Title className='mt-5 mb-3 mx-2 d-flex justify-content-center'><h1>{newsThis.newsThis.title}</h1></Card.Title>
            <Card.Img className='my-3' variant="top" src={newsThis.newsThis.urlToImage} />
            <Card.Body>
                <h3> - by {newsThis.newsThis.author}</h3>
                <h3> {newsThis.newsThis.source.name} </h3>
                <div className='mt-3 mx-2' style={{ fontSize:'25px' }}>{newsThis.newsThis.description}</div>
                <Button href={newsThis.newsThis.url} className='my-4' variant='outline-primary'>Read more</Button>
                <h5>Published on {newsThis.newsThis.publishedAt.substring(0, newsThis.newsThis.publishedAt.indexOf('T'))}</h5>
                <Card.Text>
                </Card.Text>
               
            </Card.Body>
        </Card>
    )
}

export default cardNews