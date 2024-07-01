import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import bag1 from '../Components/Images/Bag/009-blue.webp';
import bag2 from '../Components/Images/Bag/02E9C5AB-FB18-458C-B432-11699700FD80.webp';
import bag3 from '../Components/Images/Bag/0_MBZcYlc1gQ_1afk6.jpg';
import bag4 from '../Components/Images/Bag/1.webp';
import bag5 from '../Components/Images/Bag/1_88806ae3-a44d-42f8-9591-c0f51afc6a53.webp';
import bag6 from '../Components/Images/Bag/1_c3176ae4-15ae-48bb-afde-06b9403fa6e1.webp';
import bag7 from '../Components/Images/Bag/3_1024x_6a925e20-3e81-4fed-9d03-f128662fe220.webp';
import bag8 from '../Components/Images/Bag/94BB4628-E522-47ED-ADB9-A7BF3FE89096.webp';
import bag9 from '../Components/Images/Bag/9c14f3a2e3cdf77d42db8c2f70e0cd84.jpg';
import bag10 from '../Components/Images/Bag/Fashion-4-Colors-Ladies-Luxury-Brand-Handbags-Replicas-Wholesale-Designer-Top-Handle-Chain-Bags-Tote-Women-Crossbody-Shoulder-Bag.webp';
import bag11 from '../Components/Images/Bag/KennethCole._V301891816_.jpg';
import bag12 from '../Components/Images/Bag/M364VL-MINT_2P_grande.webp';
import bag13 from '../Components/Images/Bag/New-Design-Astronaut-School-Bag-for-Primary-School-Students-with-Cute-Cartoon-Pattern-One-Piece-Full-Open-Children-s-Trolley-Backpack.webp';
import bag14 from '../Components/Images/Bag/backpack-SNM-shoot_8.webp';
import bag15 from '../Components/Images/Bag/best handbags brands in India1694606362022.jpg';
import bag16 from '../Components/Images/Bag/best-luxury-handbags.jpg';
import bag17 from '../Components/Images/Bag/e566560ce7951dda477bece857468713.jpg';
import bag18 from '../Components/Images/Bag/pexels-bertellifotografia-2905238.jpg';
import bag19 from '../Components/Images/Bag/image_edb94a47-db9d-443c-b5b5-77daaafa9fa5.webp';
import bag20 from '../Components/Images/Bag/istockphoto-846435940-612x612.jpg';
import bag21 from '../Components/Images/Bag/photo-1509762774605-f07235a08f1f.jpg';
import bag22 from '../Components/Images/Bag/royal-blue-tic-tac-movable-trinkets-backpacklittle-surprise-box-390406.webp';
import bag23 from '../Components/Images/Bag/waterproof-school-bag-red-30-l-bgt0154-backpack-hd-original-imaf6v78euyxk5qs.webp';
import bag24 from '../Components/Images/Bag/waterproof-school-bag-red-30-l-bgt0154-backpack-hd-original-imaf6v78mdhvb6gx.webp';
import '../Components/Css/Bag.css';

const Bag = () => {
  const bagData = [
    { id: 1, name: "Bag 1", description: "A stylish leather bag", image: bag1, price: 199.99 },
    { id: 2, name: "Bag 2", description: "A trendy backpack", image: bag2, price: 99.99 },
    { id: 3, name: "Bag 3", description: "A spacious travel bag", image: bag3, price: 149.99 },
    { id: 4, name: "Bag 4", description: "A classic handbag", image: bag4, price: 89.99 },
    { id: 5, name: "Bag 5", description: "A modern laptop bag", image: bag5, price: 249.99 },
    { id: 6, name: "Bag 6", description: "A convenient tote bag", image: bag6, price: 59.99 },
    { id: 7, name: "Bag 7", description: "A sporty gym bag", image: bag7, price: 129.99 },
    { id: 8, name: "Bag 8", description: "A fashionable clutch", image: bag8, price: 179.99 },
    { id: 9, name: "Bag 9", description: "A versatile duffel bag", image: bag9, price: 199.99 },
    { id: 10, name: "Bag 10", description: "A rugged hiking bag", image: bag10, price: 139.99 },
    { id: 11, name: "Bag 11", description: "A compact sling bag", image: bag11, price: 109.99 },
    { id: 12, name: "Bag 12", description: "A chic crossbody bag", image: bag12, price: 229.99 },
    { id: 13, name: "Bag 13", description: "A roomy shoulder bag", image: bag13, price: 199.99 },
    { id: 14, name: "Bag 14", description: "An eco-friendly reusable bag", image: bag14, price: 189.99 },
    { id: 15, name: "Bag 15", description: "A sleek messenger bag", image: bag15, price: 79.99 },
    { id: 16, name: "Bag 16", description: "A compact carry-on bag", image: bag16, price: 99.99 },
    { id: 17, name: "Bag 17", description: "A stylish diaper bag", image: bag17, price: 149.99 },
    { id: 18, name: "Bag 18", description: "A professional briefcase", image: bag18, price: 199.99 },
    { id: 19, name: "Bag 19", description: "A multipurpose utility bag", image: bag19, price: 129.99 },
    { id: 20, name: "Bag 20", description: "A waterproof beach bag", image: bag20, price: 119.99 },
    { id: 21, name: "Bag 21", description: "A large capacity tote bag", image: bag21, price: 139.99 },
    { id: 22, name: "Bag 22", description: "A durable canvas bag", image: bag22, price: 159.99 },
    { id: 23, name: "Bag 23", description: "A fashionable satchel", image: bag23, price: 169.99 },
    { id: 24, name: "Bag 24", description: "A convertible backpack", image: bag24, price: 179.99 },
    
  ];

  const [quantities, setQuantities] = useState(bagData.reduce((acc, bag) => ({ ...acc, [bag.id]: 1 }), {}));

  const [showTooltip, setShowTooltip] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(20, parseInt(value) || 0)
    }));
  };

  const handleAddToCart = (bag) => {
    if (quantities[bag.id] < 20) {
      setShowTooltip(prev => ({ ...prev, [bag.id]: true }));
      setTimeout(() => setShowTooltip(prev => ({ ...prev, [bag.id]: false })), 3000);
    } else {
      // Add to cart logic here
      console.log(`Added ${quantities[bag.id]} of ${bag.name} to cart`);
      // You can add your actual cart logic here
    }
  };

  return (
    <div className='bags_section'>
      <Container>
        <h1 className="my-4" id='headbags'>Discover Our Bag Collection</h1>
        <Row>
          {bagData.map((bag) => (
            <Col key={bag.id} xs={12} sm={6} md={3} className="mb-4">
              <Card className="bag-card">
                <Card.Img variant="top" src={bag.image} className="bag-image" />
                <Card.Body>
                  <Card.Title>{bag.name}</Card.Title>
                  <Card.Text>{bag.description}</Card.Text>
                  <Card.Text className="price">Price: ${bag.price}</Card.Text>
                  <div className="quantity-selector">
                    <button className="quantity-btn" onClick={() => handleQuantityChange(bag.id, quantities[bag.id] - 1)}>-</button>
                    <input
                      type="number"
                      value={quantities[bag.id]}
                      onChange={(e) => handleQuantityChange(bag.id, e.target.value)}
                      className="quantity-input"
                    />
                    <button className="quantity-btn" onClick={() => handleQuantityChange(bag.id, quantities[bag.id] + 1)}>+</button>
                  </div>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-${bag.id}`}>Minimum order quantity is 20</Tooltip>}
                    show={showTooltip[bag.id]}
                  >
                    <Button id='ctab'
                      variant="primary" 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(bag)}
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

export default Bag;
