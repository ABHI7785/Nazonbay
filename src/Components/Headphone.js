import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import headphone1 from '../Components/Images/Headphone/0x0.webp';
import headphone2 from '../Components/Images/Headphone/61iHqwwIoAL._AC_UF1000,1000_QL80_.jpg';
import headphone3 from '../Components/Images/Headphone/65211ae3436016124d2cab1c-beribes-upgraded-hybrid-active-noise.jpg';
import headphone4 from '../Components/Images/Headphone/71XQikbWADL._AC_SL1500_1200x.webp';
import headphone5 from '../Components/Images/Headphone/Best-Gaming-Headset-Update-(June-2024)-collage-SOURCE-Eric-Ravenscraft.webp';
import headphone6 from '../Components/Images/Headphone/JcTkkafu6X9GPCiZ28k7RV-1200-80.jpg';
import headphone7 from '../Components/Images/Headphone/best-gaming-headphones-in-india-under-rs-2500-for-crystal-clear-sound.webp';
import headphone8 from '../Components/Images/Headphone/JcTkkafu6X9GPCiZ28k7RV-1200-80.jpg';
import headphone9 from '../Components/Images/Headphone/best-gaming-headphones-in-india-under-rs-2500-for-crystal-clear-sound.webp';
import headphone10 from '../Components/Images/Headphone/best-headsets-for-xbox-series-xs-20230619-medium.jpg';
import headphone11 from '../Components/Images/Headphone/design-medium.jpg';
import headphone12 from '../Components/Images/Headphone/focal-bathys-2.webp';
import headphone13 from '../Components/Images/Headphone/fsDKHB3ZyNJK6zMpDDBenB-1200-80.jpg';
import headphone14 from '../Components/Images/Headphone/images (1).jpg';
import headphone15 from '../Components/Images/Headphone/images (2).jpg';
import headphone16 from '../Components/Images/Headphone/images (3).jpg';
import headphone17 from '../Components/Images/Headphone/images.jpg';
import headphone18 from '../Components/Images/Headphone/logitech-gaming-headphones-.webp';
import headphone19 from '../Components/Images/Headphone/main3.webp';
import headphone20 from '../Components/Images/Headphone/ply_headphones_review_2019_lead.jpg';
import headphone21 from '../Components/Images/Headphone/steelseries-arctis-7p.webp';
import headphone22 from '../Components/Images/Headphone/steelseries-arctis-7p.webp';
import '../Components/Css/Headphone.css';

const Headphone = () => {
  const headphoneData = [
    { id: 1, name: "Headphone 1", description: "High quality over-ear headphones", image: headphone1, price: 99.99 },
    { id: 2, name: "Headphone 2", description: "Noise cancelling headphones", image: headphone2, price: 129.99 },
    { id: 3, name: "Headphone 3", description: "Wireless Bluetooth headphones", image: headphone3, price: 149.99 },
    { id: 4, name: "Headphone 4", description: "Gaming headphones with mic", image: headphone4, price: 199.99 },
    { id: 5, name: "Headphone 5", description: "In-ear noise isolating headphones", image: headphone5, price: 179.99 },
    { id: 6, name: "Headphone 6", description: "Sports headphones with secure fit", image: headphone6, price: 119.99 },
    { id: 7, name: "Headphone 7", description: "Studio monitor headphones", image: headphone7, price: 139.99 },
    { id: 8, name: "Headphone 8", description: "Wireless earbuds with charging case", image: headphone8, price: 159.99 },
    { id: 9, name: "Headphone 9", description: "Bluetooth headphones with deep bass", image: headphone9, price: 109.99 },
    { id: 10, name: "Headphone 10", description: "Headphones with detachable cable", image: headphone10, price: 149.99 },
    { id: 11, name: "Headphone 11", description: "ANC headphones with long battery life", image: headphone11, price: 139.99 },
    { id: 12, name: "Headphone 12", description: "Premium leather headphones", image: headphone12, price: 129.99 },
    { id: 13, name: "Headphone 13", description: "Foldable travel headphones", image: headphone13, price: 99.99 },
    { id: 14, name: "Headphone 14", description: "Headphones with voice assistant", image: headphone14, price: 119.99 },
    { id: 15, name: "Headphone 15", description: "Over-ear Bluetooth headphones", image: headphone15, price: 149.99 },
    { id: 16, name: "Headphone 16", description: "Lightweight on-ear headphones", image: headphone16, price: 179.99 },
    { id: 17, name: "Headphone 17", description: "Water-resistant sports earbuds", image: headphone17, price: 199.99 },
    { id: 18, name: "Headphone 18", description: "Headphones with customizable EQ", image: headphone18, price: 109.99 },
    { id: 19, name: "Headphone 19", description: "Wired headphones with volume control", image: headphone19, price: 129.99 },
    { id: 20, name: "Headphone 20", description: "Headphones with touch controls", image: headphone20, price: 139.99 },
    { id: 21, name: "Headphone 21", description: "Wireless gaming headset", image: headphone21, price: 149.99 },
    { id: 22, name: "Headphone 22", description: "Hi-Fi headphones with balanced sound", image: headphone22, price: 159.99 },
  ];

  const [quantities, setQuantities] = useState(headphoneData.reduce((acc, headphone) => ({ ...acc, [headphone.id]: 1 }), {}));

  const [showTooltip, setShowTooltip] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(20, parseInt(value) || 0)
    }));
  };

  const handleAddToCart = (headphone) => {
    if (quantities[headphone.id] < 20) {
      setShowTooltip(prev => ({ ...prev, [headphone.id]: true }));
      setTimeout(() => setShowTooltip(prev => ({ ...prev, [headphone.id]: false })), 3000);
    } else {
      // Add to cart logic here
      console.log(`Added ${quantities[headphone.id]} of ${headphone.name} to cart`);
      // You can add your actual cart logic here
    }
  };

  return (
    <div className='headphones_section'>
      <Container>
        <h1 className="my-4" id='headheadphones'>Discover Our Headphone Collection</h1>
        <Row>
          {headphoneData.map((headphone) => (
            <Col key={headphone.id} xs={12} sm={6} md={4} className="mb-4">
              <Card className="headphone-card">
                <Card.Img variant="top" src={headphone.image} className="headphone-image" />
                <Card.Body>
                  <Card.Title>{headphone.name}</Card.Title>
                  <Card.Text>{headphone.description}</Card.Text>
                  <Card.Text className="price">Price: ${headphone.price}</Card.Text>
                  <div className="quantity-selector">
                    <button className="quantity-btn" onClick={() => handleQuantityChange(headphone.id, quantities[headphone.id] - 1)}>-</button>
                    <input
                      type="number"
                      value={quantities[headphone.id]}
                      onChange={(e) => handleQuantityChange(headphone.id, e.target.value)}
                      className="quantity-input"
                    />
                    <button className="quantity-btn" onClick={() => handleQuantityChange(headphone.id, quantities[headphone.id] + 1)}>+</button>
                  </div>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-${headphone.id}`}>Minimum order quantity is 20</Tooltip>}
                    show={showTooltip[headphone.id]}
                  >
                    <Button id='ctah'
                      variant="primary" 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(headphone)}
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

export default Headphone;
