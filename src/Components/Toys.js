import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, InputGroup, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap';
import toy1 from '../Components/Images/Toys/03-77d45580-4c02-44a9-8bc4-d5795be47992-500x500.webp'
import toy2 from '../Components/Images/Toys/1641394367-57f27cd9-1b15-4a4a-9475-fa009cc3799a.fd845032e6d5c966baf7a5eb9d30f6ae.jpg'
import toy3 from '../Components/Images/Toys/3-dinosaur-soft-toy-for-kids-set-of-12pc-action-figure-animal-original-imagw2gwynkdvxgx.webp'
import toy4 from '../Components/Images/Toys/40670_alt1.png'
import toy5 from '../Components/Images/Toys/418P8fnkIHL._AC_UF1000,1000_QL80_.jpg'
import toy6 from '../Components/Images/Toys/41yEuM5IAPL._AC_UF1000,1000_QL80_.jpg'
import toy7 from '../Components/Images/Toys/516pOQI-jyL._AC_UF1000,1000_QL80_.jpg'
import toy8 from '../Components/Images/Toys/51IUPrTm-ES._AC_UF1000,1000_QL80_.jpg'
import toy9 from '../Components/Images/Toys/51PFwU4prbL.jpg'
import toy10 from '../Components/Images/Toys/51ReiU9GuEL._SL1080.webp'
import toy11 from '../Components/Images/Toys/51YegZCxLnL.jpg'
import toy12 from '../Components/Images/Toys/61Feqqtx+aL._AC_UF1000,1000_QL80_.jpg'
import toy13 from '../Components/Images/Toys/transparent-long-gear-train-toy-for-kids-with-360-degree-original-imagz4zdtregzhtx.webp'
import toy14 from '../Components/Images/Toys/toy-elephant.jpg'
import toy15 from '../Components/Images/Toys/t7fzo_512.webp'
import toy16 from '../Components/Images/Toys/super-soft-10-complete-pack-stuffed-soft-toy-combo-of-teddy-bear-original-imagwdf5marpgkfz.webp'
import toy17 from '../Components/Images/Toys/stuffed-toys-500x500.webp'
import toy18 from '../Components/Images/Toys/soft-natural-rubber-non-toxic-toddler-baby-bath-animal-shape-original-imafwyzqzfyxgfjn.webp'
import toy19 from '../Components/Images/Toys/prc5t_512.webp'
import toy20 from '../Components/Images/Toys/joint-moment-black-spider-man-toys-for-kids-to-play-marvel-original-imaft5zffjagyywe.webp'
import '../Components/Css/Toys.css'

const Toys = () => {
  const toyData = [
    {
      id: 1,
      name: "Teddy Bear",
      description: "A cuddly brown teddy ",
      image: toy1,
      price: 19.99
    },
    {
      id: 2,
      name: "Lego Set",
      description: "A 500-piece Lego set",
      image: toy2,
      price: 49.99
    },
    {
      id: 3,
      name: "Dinosaur Set",
      description: "A set of dinosaur figures",
      image: toy3,
      price: 29.99
    },
    {
      id: 4,
      name: "Spider-Man Lego",
      description: "Spider-Man Lego set",
      image: toy4,
      price: 39.99
    },
    {
        id: 5,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy5,
        price: 39.99
      },
      {
        id: 6,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy6,
        price: 39.99
      },
      {
        id: 7,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy7,
        price: 39.99
      },

      {
        id: 8,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy8,
        price: 39.99
      },
      {
        id: 9,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy9,
        price: 39.99
      },

      {
        id: 10,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy10,
        price: 39.99
      },

      {
        id: 11,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy11,
        price: 39.99
      },
      {
        id: 12,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy12,
        price: 39.99
      },
      {
        id: 13,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy13,
        price: 39.99
      },
      {
        id: 14,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy14,
        price: 39.99
      },
      {
        id: 15,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy15,
        price: 39.99
      },

      {
        id: 16,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy16,
        price: 39.99
      },

      {
        id: 17,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy17,
        price: 39.99
      },

      {
        id: 18,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy18,
        price: 39.99
      },

      {
        id: 19,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy19,
        price: 39.99
      },

      {
        id: 20,
        name: "Spider-Man Lego",
        description: "Spider-Man Lego set",
        image: toy20,
        price: 39.99
      },
  ];

  const [quantities, setQuantities] = useState(toyData.reduce((acc, toy) => ({ ...acc, [toy.id]: 1 }), {}));

  const [showTooltip, setShowTooltip] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(20, parseInt(value) || 0)
    }));
  };

  const handleAddToCart = (toy) => {
    if (quantities[toy.id] < 20) {
      setShowTooltip(prev => ({ ...prev, [toy.id]: true }));
      setTimeout(() => setShowTooltip(prev => ({ ...prev, [toy.id]: false })), 3000);
    } else {
      // Add to cart logic here
      console.log(`Added ${quantities[toy.id]} of ${toy.name} to cart`);
      // You can add your actual cart logic here
    }
  };

  return (
    <>
    <div className='toys_section'>
    <Container>
      <h1 className="my-4" id='headtoys'>Discover Our Toy Collection</h1>
      <Row>
        {toyData.map((toy) => (
          <Col key={toy.id} xs={12} sm={6} md={3} className="mb-4">
            <Card className="toy-card">
              <Card.Img variant="top" src={toy.image} className="toy-image" />
              <Card.Body>
                <Card.Title>{toy.name}</Card.Title>
                <Card.Text>{toy.description}</Card.Text>
                <Card.Text className="price">Price: ${toy.price}</Card.Text>
                <div className="quantity-selector">
                  <button className="quantity-btn" onClick={() => handleQuantityChange(toy.id, quantities[toy.id] - 1)}>-</button>
                  <input
                    type="number"
                    value={quantities[toy.id]}
                    onChange={(e) => handleQuantityChange(toy.id, e.target.value)}
                    className="quantity-input"
                  />
                  <button className="quantity-btn" onClick={() => handleQuantityChange(toy.id, quantities[toy.id] + 1)}>+</button>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id={`tooltip-${toy.id}`}>Minimum order quantity is 20</Tooltip>}
                  show={showTooltip[toy.id]}
                >
                  <Button id='ctal'
                    variant="primary" 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(toy)}
                  >
                    Add to Cart
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
        </div>
    </>
  
  );
}

export default Toys;