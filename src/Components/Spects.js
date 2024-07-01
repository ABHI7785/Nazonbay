import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import spect1 from '../Components/Images/Spects/0rb4165__601_71_890x445_3.jpg';
import spect2 from '../Components/Images/Spects/1_71f41b62-ff35-4f05-a175-a43afcaf8033.webp';
import spect3 from '../Components/Images/Spects/31RE-UtQQ5L._AC_UY1100_.jpg';
import spect4 from '../Components/Images/Spects/3_rozior_sunglasses_wf_rwp8200m4_main02_1.webp';
import spect5 from '../Components/Images/Spects/41WLM4fVaYL._AC_UY1100_.jpg';
import spect6 from '../Components/Images/Spects/41n33H-03kL._AC_UY1100_.jpg';
import spect7 from '../Components/Images/Spects/51e79Gd8kzL._AC_UY1100_.jpg';
import spect8 from '../Components/Images/Spects/51eH2tLJE1L._AC_UY1100_.jpg';
import spect9 from '../Components/Images/Spects/51eOUjzUh7L._AC_UY1100_.jpg';
import spect10 from '../Components/Images/Spects/51jlslMDPAL._AC_UY1100_.jpg';
import spect11 from '../Components/Images/Spects/51kAJXO-RWL._AC_UY1100_.jpg';
import spect12 from '../Components/Images/Spects/5910808058.webp';
import spect13 from '../Components/Images/Spects/61HOiI8J5AL_8cd859e1-8f78-4152-9ea4-4d5e7fb2f736.webp';
import spect14 from '../Components/Images/Spects/0rb4165__601_71_890x445_3.jpg';
import spect15 from '../Components/Images/Spects/61L0h3qxnTL.webp';
import spect16 from '../Components/Images/Spects/61bHCZI4wKL_e077aed1-52de-4508-9963-aa614402291f.webp';
import spect17 from '../Components/Images/Spects/8053672855821_1_4.jpg';
import spect18 from '../Components/Images/Spects/GKB-HomePage-Mobile-Banner-1.webp';
import spect19 from '../Components/Images/Spects/Ray-Ban-Guide-Hero.webp';
import spect20 from '../Components/Images/Spects/Titan-Eye-Plus-Sunglasses-brands-StartupTalky.jpg';
import spect21 from '../Components/Images/Spects/free-size-uv-protection-round-sunglass-free-size-black-gold-original-imafzgfttnrganvn.webp';
import spect22 from '../Components/Images/Spects/razmaz-mirror-polarized-sunglasses-men-square-sport-sun-glasses-women-uv-500x500.webp';
import spect23 from '../Components/Images/Spects/seethemon-1.avif';
import spect24 from '../Components/Images/Spects/this-product-is-sold-as-free-size-by-the-brand-sunglasses-half-original-imagt6cem458a2zg.webp';
import '../Components/Css/Spects.css';

const Spects = () => {
  const spectData = [
    { id: 1, name: "Spect 1", description: "Classic round spectacles", image: spect1, price: 99.99 },
    { id: 2, name: "Spect 2", description: "Stylish aviator glasses", image: spect2, price: 129.99 },
    { id: 3, name: "Spect 3", description: "Modern rectangle frames", image: spect3, price: 149.99 },
    { id: 4, name: "Spect 4", description: "Vintage cat-eye glasses", image: spect4, price: 89.99 },
    { id: 5, name: "Spect 5", description: "Trendy oval spectacles", image: spect5, price: 249.99 },
    { id: 6, name: "Spect 6", description: "Sleek metal frames", image: spect6, price: 59.99 },
    { id: 7, name: "Spect 7", description: "Rimless reading glasses", image: spect7, price: 129.99 },
    { id: 8, name: "Spect 8", description: "Colorful plastic frames", image: spect8, price: 179.99 },
    { id: 9, name: "Spect 9", description: "Sophisticated designer frames", image: spect9, price: 199.99 },
    { id: 10, name: "Spect 10", description: "Lightweight titanium glasses", image: spect10, price: 139.99 },
    { id: 11, name: "Spect 11", description: "Sports wrap-around glasses", image: spect11, price: 109.99 },
    { id: 12, name: "Spect 12", description: "Retro square frames", image: spect12, price: 229.99 },
    { id: 13, name: "Spect 13", description: "Polarized sunglasses", image: spect13, price: 199.99 },
    { id: 14, name: "Spect 14", description: "Blue light blocking glasses", image: spect14, price: 189.99 },
    { id: 15, name: "Spect 15", description: "Prescription safety glasses", image: spect15, price: 79.99 },
    { id: 16, name: "Spect 16", description: "Foldable pocket glasses", image: spect16, price: 99.99 },
    { id: 17, name: "Spect 17", description: "High fashion eyewear", image: spect17, price: 149.99 },
    { id: 18, name: "Spect 18", description: "Kids' durable frames", image: spect18, price: 199.99 },
    { id: 19, name: "Spect 19", description: "Eco-friendly bamboo frames", image: spect19, price: 129.99 },
    { id: 20, name: "Spect 20", description: "Luxury gold-plated frames", image: spect20, price: 119.99 },
    { id: 21, name: "Spect 21", description: "Antique spectacle replicas", image: spect21, price: 139.99 },
    { id: 22, name: "Spect 22", description: "Flexible memory metal frames", image: spect22, price: 159.99 },
    { id: 23, name: "Spect 23", description: "Photochromic lenses glasses", image: spect23, price: 169.99 },
    { id: 24, name: "Spect 24", description: "Gradient tint sunglasses", image: spect24, price: 179.99 },
   
  ];

  const [quantities, setQuantities] = useState(spectData.reduce((acc, spect) => ({ ...acc, [spect.id]: 1 }), {}));

  const [showTooltip, setShowTooltip] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(20, parseInt(value) || 0)
    }));
  };

  const handleAddToCart = (spect) => {
    if (quantities[spect.id] < 20) {
      setShowTooltip(prev => ({ ...prev, [spect.id]: true }));
      setTimeout(() => setShowTooltip(prev => ({ ...prev, [spect.id]: false })), 3000);
    } else {
      // Add to cart logic here
      console.log(`Added ${quantities[spect.id]} of ${spect.name} to cart`);
      // You can add your actual cart logic here
    }
  };

  return (
    <div className='spects_section'>
      <Container>
        <h1 className="my-4" id='headspects'>Discover Our Spectacles Collection</h1>
        <Row>
          {spectData.map((spect) => (
            <Col key={spect.id} xs={12} sm={6} md={3} className="mb-4">
              <Card className="spect-card">
                <Card.Img variant="top" src={spect.image} className="spect-image" />
                <Card.Body>
                  <Card.Title>{spect.name}</Card.Title>
                  <Card.Text>{spect.description}</Card.Text>
                  <Card.Text className="price">Price: ${spect.price}</Card.Text>
                  <div className="quantity-selector">
                    <button className="quantity-btn" onClick={() => handleQuantityChange(spect.id, quantities[spect.id] - 1)}>-</button>
                    <input
                      type="number"
                      value={quantities[spect.id]}
                      onChange={(e) => handleQuantityChange(spect.id, e.target.value)}
                      className="quantity-input"
                    />
                    <button className="quantity-btn" onClick={() => handleQuantityChange(spect.id, quantities[spect.id] + 1)}>+</button>
                  </div>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-${spect.id}`}>Minimum order quantity is 20</Tooltip>}
                    show={showTooltip[spect.id]}
                  >
                    <Button id='ctas'
                      variant="primary" 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(spect)}
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

export default Spects;
