import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import watch1 from '../Components/Images/Watches/-original-imagrgwwgbxnfqfg.webp';
import watch2 from '../Components/Images/Watches/1657892771860_SKU-20355_0.jpg';
import watch3 from '../Components/Images/Watches/1692696267487_Screenshot_2023_0818_081607-xlgn400x400.webp';
import watch4 from '../Components/Images/Watches/51j2OFp+wNL._AC_UF1000,1000_QL80_.jpg';
import watch5 from '../Components/Images/Watches/5bd48a797e712-wallpaper-preview.jpg';
import watch6 from '../Components/Images/Watches/61K479toqYL._AC_UY1000_.jpg';
import watch7 from '../Components/Images/Watches/71zqXH3IhoL._AC_UY1000_.jpg';
import watch8 from '../Components/Images/Watches/81HsNedztRL._AC_UY1000_.jpg';
import watch9 from '../Components/Images/Watches/91zjxExgL4L._AC_UY1000_.jpg';
import watch10 from '../Components/Images/Watches/Artboard_3_a68759e3-547f-483a-b5cc-edd19048edb8.webp';
import watch11 from '../Components/Images/Watches/Omega-2-1-1.webp';
import watch12 from '../Components/Images/Watches/Rolex.jpg';
import watch13 from '../Components/Images/Watches/a2pr3_512.webp';
import watch14 from '../Components/Images/Watches/background-black-brand-clock-wallpaper-preview.jpg';
import watch15 from '../Components/Images/Watches/ccd6f616771a191648ca757b5b66966f.jpg';
import watch16 from '../Components/Images/Watches/hdc7f80064bb148e0b9784d8417f32dfcc-500x500.webp';
import watch17 from '../Components/Images/Watches/images (1).jpg';
import watch18 from '../Components/Images/Watches/images (2).jpg';
import watch19 from '../Components/Images/Watches/images (3).jpg';
import watch20 from '../Components/Images/Watches/images (4).jpg';
import watch21 from '../Components/Images/Watches/images.jpg';
import watch22 from '../Components/Images/Watches/main-image-1_600x.webp';
import watch23 from '../Components/Images/Watches/main-qimg-af81506fe90b295fd578875a859b28ee.webp';
import watch24 from '../Components/Images/Watches/mllrn_512.webp';
import watch25 from '../Components/Images/Watches/new-ladies-stainless-steel-silver-chain-watch-for-women-splazos-original-imafgg72ezbeywax.webp';
import watch26 from '../Components/Images/Watches/pexels-antony-trivet-9978785.webp';
import watch27 from '../Components/Images/Watches/punnkfunnk-unique-digital-smart-watch-d18-smart-watches-full-hd-bluetooth-calling-watch-product-images-orvvls8gkcx-p593561438-0-202312221915.jpg';
import watch28 from '../Components/Images/Watches/rw1wl_512.webp';
import watch29 from '../Components/Images/Watches/rw1wl_512.webp';
import watch30 from '../Components/Images/Watches/rwqua_512.webp';
import '../Components/Css/Watch.css';

const Watch = () => {
  const watchData = [
    { id: 1, name: "Smart Watch 1", description: "A sleek smart watch with various features", image: watch1, price: 99.99 },
    { id: 2, name: "Smart Watch 2", description: "A stylish smart watch with a leather band", image: watch2, price: 129.99 },
    { id: 3, name: "Smart Watch 3", description: "A durable smart watch for outdoor activities", image: watch3, price: 149.99 },
    { id: 4, name: "Smart Watch 4", description: "A smart watch with fitness tracking features", image: watch4, price: 199.99 },
    { id: 5, name: "Smart Watch 5", description: "A smart watch with a modern design", image: watch5, price: 179.99 },
    { id: 6, name: "Smart Watch 6", description: "A smart watch with customizable watch faces", image: watch6, price: 119.99 },
    { id: 7, name: "Smart Watch 7", description: "A water-resistant smart watch", image: watch7, price: 139.99 },
    { id: 8, name: "Smart Watch 8", description: "A smart watch with GPS tracking", image: watch8, price: 159.99 },
    { id: 9, name: "Smart Watch 9", description: "A smart watch with heart rate monitoring", image: watch9, price: 109.99 },
    { id: 10, name: "Smart Watch 10", description: "A smart watch with sleep tracking", image: watch10, price: 149.99 },
    { id: 11, name: "Smart Watch 11", description: "A smart watch with music control", image: watch11, price: 139.99 },
    { id: 12, name: "Smart Watch 12", description: "A smart watch with notifications", image: watch12, price: 129.99 },
    { id: 13, name: "Smart Watch 13", description: "A smart watch with step counter", image: watch13, price: 99.99 },
    { id: 14, name: "Smart Watch 14", description: "A smart watch with call alerts", image: watch14, price: 119.99 },
    { id: 15, name: "Smart Watch 15", description: "A smart watch with water resistance", image: watch15, price: 149.99 },
    { id: 16, name: "Smart Watch 16", description: "A smart watch with long battery life", image: watch16, price: 179.99 },
    { id: 17, name: "Smart Watch 17", description: "A smart watch with AMOLED display", image: watch17, price: 199.99 },
    { id: 18, name: "Smart Watch 18", description: "A smart watch with customizable bands", image: watch18, price: 109.99 },
    { id: 19, name: "Smart Watch 19", description: "A smart watch with fitness tracking", image: watch19, price: 129.99 },
    { id: 20, name: "Smart Watch 20", description: "A smart watch with NFC payments", image: watch20, price: 139.99 },
    { id: 21, name: "Smart Watch 21", description: "A smart watch with voice assistant", image: watch21, price: 149.99 },
    { id: 22, name: "Smart Watch 22", description: "A smart watch with stress monitoring", image: watch22, price: 159.99 },
    { id: 23, name: "Smart Watch 23", description: "A smart watch with menstrual tracking", image: watch23, price: 169.99 },
    { id: 24, name: "Smart Watch 24", description: "A smart watch with ECG monitoring", image: watch24, price: 179.99 },
    { id: 25, name: "Smart Watch 25", description: "A smart watch with SpO2 monitoring", image: watch25, price: 189.99 },
    { id: 26, name: "Smart Watch 26", description: "A smart watch with always-on display", image: watch26, price: 199.99 },
    { id: 27, name: "Smart Watch 27", description: "A smart watch with activity tracking", image: watch27, price: 109.99 },
    { id: 28, name: "Smart Watch 28", description: "A smart watch with calorie counting", image: watch28, price: 119.99 },
    { id: 29, name: "Smart Watch 29", description: "A smart watch with Bluetooth connectivity", image: watch29, price: 129.99 },
    { id: 30, name: "Smart Watch 30", description: "A smart watch with Wi-Fi connectivity", image: watch30, price: 139.99 },
  ];

  const [quantities, setQuantities] = useState(watchData.reduce((acc, watch) => ({ ...acc, [watch.id]: 1 }), {}));

  const [showTooltip, setShowTooltip] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(20, parseInt(value) || 0)
    }));
  };

  const handleAddToCart = (watch) => {
    if (quantities[watch.id] < 20) {
      setShowTooltip(prev => ({ ...prev, [watch.id]: true }));
      setTimeout(() => setShowTooltip(prev => ({ ...prev, [watch.id]: false })), 3000);
    } else {
      // Add to cart logic here
      console.log(`Added ${quantities[watch.id]} of ${watch.name} to cart`);
      // You can add your actual cart logic here
    }
  };

  return (
    <div className='watches_section'>
      <Container>
        <h1 className="my-4" id='headwatches'>Discover Our Smart Watch Collection</h1>
        <Row>
          {watchData.map((watch) => (
            <Col key={watch.id} xs={12} sm={6} md={4} className="mb-4">
              <Card className="watch-card">
                <Card.Img variant="top" src={watch.image} className="watch-image" />
                <Card.Body>
                  <Card.Title>{watch.name}</Card.Title>
                  <Card.Text>{watch.description}</Card.Text>
                  <Card.Text className="price">Price: ${watch.price}</Card.Text>
                  <div className="quantity-selector">
                    <button className="quantity-btn" onClick={() => handleQuantityChange(watch.id, quantities[watch.id] - 1)}>-</button>
                    <input
                      type="number"
                      value={quantities[watch.id]}
                      onChange={(e) => handleQuantityChange(watch.id, e.target.value)}
                      className="quantity-input"
                    />
                    <button className="quantity-btn" onClick={() => handleQuantityChange(watch.id, quantities[watch.id] + 1)}>+</button>
                  </div>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-${watch.id}`}>Minimum order quantity is 20</Tooltip>}
                    show={showTooltip[watch.id]}
                  >
                    <Button id='ctaw'
                      variant="primary" 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(watch)}
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

export default Watch;
