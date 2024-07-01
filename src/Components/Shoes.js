import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import shoe1 from '../Components/Images/Shoes/01_03_2023-amazon_sale_on_nike_shoes_for_men_23344098.jpg'
import shoe2 from '../Components/Images/Shoes/01_1_699e3a3a-ba7c-439e-b258-6e57413834be.webp'
import shoe3 from '../Components/Images/Shoes/14_01_2024-best_formal_shoes_for_men_23628808.jpg'
import shoe4 from '../Components/Images/Shoes/20230510-9ad1d24574e90f50-409989715305-mp4-264-hd-taobao-mp4.webp'
import shoe5 from '../Components/Images/Shoes/2103032022_NB_HP.webp'
import shoe6 from '../Components/Images/Shoes/228781-full_product.jpg'
import shoe7 from '../Components/Images/Shoes/51f02a41-ff82-4110-a983-2e99d455ce461688196182745RedTapeMenWhiteTexturedSneakers1.jpg'
import shoe8 from '../Components/Images/Shoes/538-5384488_womens-casual-slipon-ballerina-shoe-ballet-flat-hd.png'
import shoe9 from '../Components/Images/Shoes/584-5840254_sport-men-shoes-china-hd-png-download.png'
import shoe10 from '../Components/Images/Shoes/610BRfE099L._AC_UY1000_.jpg'
import shoe11 from '../Components/Images/Shoes/61aTIKFfqoL._AC_UY1000_.jpg'
import shoe12 from '../Components/Images/Shoes/620-6208105_the-achiever-brown-formal-shoes-for-men-hd.png'
import shoe13 from '../Components/Images/Shoes/635bc1e3491b375d3338c674-casual-shoes-spring-summer-boy.jpg'
import shoe14 from '../Components/Images/Shoes/636768b3d973fd4656000fc0-adidas-mens-pulseboost-hd-winter-running.jpg'
import shoe15 from '../Components/Images/Shoes/69-693598_women-shoes-png-image-ladies-shoes-png.png'
import shoe16 from '../Components/Images/Shoes/Fb_cover_photo.webp'
import shoe17 from '../Components/Images/Shoes/HD-wallpaper-fuchsia-women-shoes-shoes-fuchsia-sparkly-women.jpg'
import shoe18 from '../Components/Images/Shoes/Main_GMA_SpringShoes_030724_v01_ks_1709841096232_hpMain_16x9_1600.jpg'
import shoe19 from '../Components/Images/Shoes/Men-Shoes-PNG-HD-Image.png'
import shoe20 from '../Components/Images/Shoes/PC-4002-LIMITED-EDITION-NAVY-1-scaled-2.jpg'
import shoe21 from '../Components/Images/Shoes/Speedbl-PhotoRoom.webp'



import '../Components/Css/Shoes.css'

const Shoes = () => {
  const shoeData = [
    {
      id: 1,
      name: "Running Shoes",
      description: "Comfortable running shoes",
      image: shoe1,
      price: 79.99
    },
    {
      id: 2,
      name: "Casual Sneakers",
      description: "Stylish casual sneakers",
      image: shoe2,
      price: 59.99
    },
    {
      id: 3,
      name: "Formal Oxfords",
      description: "Classic formal oxfords",
      image: shoe3,
      price: 89.99
    },
    {
        id: 4,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe4,
        price: 89.99
      },
      {
        id: 5,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe5,
        price: 89.99
      },
      {
        id: 6,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe6,
        price: 89.99
      },
      {
        id: 7,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe7,
        price: 89.99
      },
      {
        id: 8,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe8,
        price: 89.99
      },
      {
        id: 9,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe9,
        price: 89.99
      },
      {
        id: 10,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe10,
        price: 89.99
      },
      {
        id: 11,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe11,
        price: 89.99
      },
      {
        id: 12,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe12,
        price: 89.99
      },
      {
        id: 13,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe13,
        price: 89.99
      },
      {
        id: 14,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe14,
        price: 89.99
      },
      {
        id: 15,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe15,
        price: 89.99
      },
      {
        id: 16,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe16,
        price: 89.99
      },
      {
        id: 17,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe17,
        price: 89.99
      },
      {
        id: 18,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe18,
        price: 89.99
      },
      {
        id: 19,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe19,
        price: 89.99
      },
      {
        id:20,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe20,
        price: 89.99
      },
      {
        id:21,
        name: "Formal Oxfords",
        description: "Classic formal oxfords",
        image: shoe21,
        price: 89.99
      },

  ];

  const [quantities, setQuantities] = useState(shoeData.reduce((acc, shoe) => ({ ...acc, [shoe.id]: 20 }), {}));
  const [showTooltip, setShowTooltip] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(20, Math.min(100, parseInt(value) || 0))
    }));
  };

  const handleAddToCart = (shoe) => {
    if (quantities[shoe.id] < 20) {
      setShowTooltip(prev => ({ ...prev, [shoe.id]: true }));
      setTimeout(() => setShowTooltip(prev => ({ ...prev, [shoe.id]: false })), 3000);
    } else {
      console.log(`Added ${quantities[shoe.id]} of ${shoe.name} to cart`);
      // Add your actual cart logic here
    }
  };

  return (
    <div className='shoes_section'>
      <Container>
        <h1 className="my-4" id='headshoes'>Explore Our Shoe Collection</h1>
        <Row>
          {shoeData.map((shoe) => (
            <Col key={shoe.id} xs={12} sm={6} md={4} className="mb-4">
              <Card className="shoe-card">
                <Card.Img variant="top" src={shoe.image} className="shoe-image" />
                <Card.Body>
                  <Card.Title>{shoe.name}</Card.Title>
                  <Card.Text>{shoe.description}</Card.Text>
                  <Card.Text className="price">Price: ${shoe.price}</Card.Text>
                  <div className="quantity-selector">
                    <button className="quantity-btn" onClick={() => handleQuantityChange(shoe.id, quantities[shoe.id] - 1)}>-</button>
                    <input
                      type="number"
                      value={quantities[shoe.id]}
                      onChange={(e) => handleQuantityChange(shoe.id, e.target.value)}
                      className="quantity-input"
                    />
                    <button className="quantity-btn" onClick={() => handleQuantityChange(shoe.id, quantities[shoe.id] + 1)}>+</button>
                  </div>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-${shoe.id}`}>Minimum order quantity is 20</Tooltip>}
                    show={showTooltip[shoe.id]}
                  >
                    <Button 
                      variant="primary" 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(shoe)}
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
  );
}

export default Shoes;