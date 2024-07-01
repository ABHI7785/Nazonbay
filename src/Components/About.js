import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Components/Css/About.css';
import companyImage from '../Components/Images/Carousel/pexels-karolina-grabowska-5632397.jpg';

const About = () => {
  return (
    <>
    <div className='about_sec'>
    <h2>About Nazonbay</h2>
    <Container className="about-container">
      <Row>
        <Col md={6} className="about-image">
          <img src={companyImage} alt="Company" />
        </Col>
        <Col md={6} className="about-details">
         
          <p>
          Nazonbay is a premier online e-commerce platform specializing in bulk sales across the globe. As a leader in the industry, we have established ourselves as a trusted source for businesses and large-scale buyers seeking to purchase products in large quantities. Our mission is to provide these clients with a seamless purchasing experience, characterized by efficiency, reliability, and top-notch customer service. We offer a wide range of high-quality products at competitive prices, ensuring that our customers receive the best value for their investments.

Our extensive product catalog is a testament to our commitment to variety and quality. Whether you are looking for bags, watches, shoes, toys, spectacles, dresses, cosmetics, or any other products, Nazonbay has you covered. We continuously update our inventory to include the latest trends and the most sought-after items, catering to the diverse needs of our clientele.

At Nazonbay, we understand the unique needs of our clients and strive to meet them with exceptional service and tailored solutions. We offer flexible shipping options that accommodate the specific requirements of each order, ensuring timely and safe delivery to any destination worldwide. Our dedicated customer support team is always ready to assist with inquiries, provide guidance, and resolve any issues that may arise, making your shopping experience as smooth as possible.

Our user-friendly platform is designed to make bulk purchasing straightforward and convenient. With easy navigation, detailed product descriptions, and secure payment options, our website ensures a hassle-free shopping experience. Our commitment to quality and customer satisfaction has made us a trusted partner for businesses worldwide, and we continue to work tirelessly to maintain and exceed these standards.

Choosing Nazonbay means partnering with a company that values your business and is dedicated to helping you succeed. We are proud to serve as a reliable source for bulk products, and we look forward to building lasting relationships with our clients based on trust, quality, and mutual success.
          </p>
        </Col>
      </Row>
    </Container>

    </div>
    </>
   
  );
};

export default About;
