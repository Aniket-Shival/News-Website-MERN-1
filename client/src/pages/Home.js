import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios'
import CardNews from '../components/cardNews';

const Home = () => {

  const [getNews, setNews] = useState([])
  const [getNewsName, setNewsName] = useState('NaN')
  const [CnnToggle, setCnnToggle] = useState(0)

  useEffect(() => {
    const getNewsItems = async () => {
      try {
        const params = new URLSearchParams({
          author: getNewsName
        }).toString().split('%23')
        const res = await axios.get(`http://localhost:5000/api?${params}`)
        await console.log(res.data)
        await setNews(res.data)
      }
      catch (error) {
        console.log("error react get news useEffect ", error)
      }
    }
    getNewsItems()
  }, [getNewsName])

  const toggler = (e) => {
    console.log(e, "hhh")
    setNewsName(getNewsName.concat(',', e))
    console.log(getNewsName, " low val")
  }
  const Empty = () => {
    setNewsName('NaN')
  }
  return (
    <div >
      <>
        {['xxl'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#">News House</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Sources
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link > <Button variant="outline-secondary" value={'ABC News'} onClick={(e) => toggler(e.target.value)}>ABC NEWS</Button></Nav.Link>
                    <Nav.Link > <Button variant="outline-secondary" value={'BBC Sport'} onClick={(e) => toggler(e.target.value)}>BBC Sport</Button></Nav.Link>
                    <Nav.Link > <Button variant="outline-secondary" value={'BBC News'} onClick={(e) => toggler(e.target.value)}>BBC News</Button></Nav.Link>
                    <Nav.Link > <Button variant="outline-secondary" value={'ESPN'} onClick={(e) => toggler(e.target.value)}>ESPN</Button></Nav.Link>
                    <Nav.Link > <Button variant="outline-secondary" value={'Business Insider'} onClick={(e) => toggler(e.target.value)}>Business Insider</Button></Nav.Link>
                    <Nav.Link > <Button variant="outline-secondary" value={'Buzzfeed'} onClick={(e) => toggler(e.target.value)}>Buzzfeed</Button></Nav.Link>
                    <Nav.Link > <Button variant="outline-secondary" value={'CNBC'} onClick={(e) => toggler(e.target.value)}>CNBC</Button></Nav.Link>
                    <Nav.Link > <Button variant="outline-secondary" value={'CNN'} onClick={(e) => toggler(e.target.value)}>CNN</Button></Nav.Link>
                    <Nav.Link > <Button variant="outline-danger" onClick={() => Empty()}>Empty</Button></Nav.Link>

                  </Nav>
                 
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>

      <div>
        {getNews.map(x => (
          <CardNews key={x._id} newsThis={x} />
        ))}
      </div>
      <h1>
        search news and select your preferred sources
      </h1>
    </div>
  )
}

export default Home