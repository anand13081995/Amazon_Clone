import { useEffect, useState } from "react";
import "../Css/Home.css";
import homeImage from "../assets/home.jpg";
import himg2 from "../assets/himg2.jpg";
import himg3 from "../assets/himg3.jpg";
import himg4 from "../assets/himg4.jpg";
import Products from "../Pages/Products";

const productData = [
  {
    id: "123456",
    title: "Apple iPhone 13",
    price: 799,
    rating: 5,
    image: "https://images.unsplash.com/photo-1637329508332-0e051501373c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QXBwbGUlMjBpUGhvbmUlMjAxM3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "123457",
    title: "Samsung Galaxy S21",
    price: 699,
    rating: 4,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNhbXN1bmclMjBHYWxheHklMjBTMjF8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "123458",
    title: "Sony WH-1000XM4 Wireless Headphones",
    price: 349,
    rating: 5,
    image: "https://plus.unsplash.com/premium_photo-1679913796054-fc4e44f35b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U29ueSUyMFdIJTIwMTAwMFhNNCUyMFdpcmVsZXNzJTIwSGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "123459",
    title: "MacBook Pro 16-inch",
    price: 2399,
    rating: 5,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "123460",
    title: "Dell XPS 13",
    price: 999,
    rating: 3,
    image: "https://plus.unsplash.com/premium_photo-1675538078410-2cec60aa046c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVsbCUyMFhQUyUyMDEzJTIwbGFwdG9wfGVufDB8fDB8fHww"
  },
  {
    id: "123461",
    title: "Nintendo Switch",
    price: 299,
    rating: 2,
    image: "https://images.unsplash.com/photo-1612036781124-847f8939b154?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TmludGVuZG8lMjBTd2l0Y2h8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "123462",
    title: "PlayStation 5",
    price: 499,
    rating: 4,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGxheVN0YXRpb24lMjA1fGVufDB8fDB8fHww"
  },
  {
    id: "123463",
    title: "Xbox Series X",
    price: 499,
    rating: 3,
    image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFhib3glMjBTZXJpZXMlMjBYfGVufDB8fDB8fHww"
  },
  {
    id: "123464",
    title: "GoPro HERO9 Black",
    price: 399,
    rating: 2,
    image: "https://images.unsplash.com/photo-1690176483540-421999eea5dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29wcm8lMjBoZXJvJTIwOSUyMGJsYWNrfGVufDB8fDB8fHww"
  },
  {
    id: "123465",
    title: "Canon EOS R5",
    price: 3899,
    rating: 3,
    image: "https://images.unsplash.com/photo-1648781329670-5f00c1b37404?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2Fub24lMjBFT1MlMjBSNXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "123466",
    title: "Bose QuietComfort 35 II",
    price: 299,
    rating: 3,
    image: "https://images.unsplash.com/photo-1618414074972-723c8314d3db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJvc2UlMjBRdWlldENvbWZvcnQlMjAzNSUyMElJfGVufDB8fDB8fHww"
  },
  {
    id: "123467",
    title: "Google Pixel 5",
    price: 699,
    rating: 4,
    image: "https://images.unsplash.com/photo-1612442443556-09b5b309e637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R29vZ2xlJTIwUGl4ZWwlMjA1fGVufDB8fDB8fHww"
  },
  {
    id: "123468",
    title: "Amazon Echo Dot (4th Gen)",
    price: 49,
    rating: 3,
    image: "https://images.unsplash.com/photo-1621274147744-cfb5694bb233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QW1hem9uJTIwRWNobyUyMERvdCUyMCg0dGglMjBHZW4pfGVufDB8fDB8fHww"
  },
  {
    id: "123469",
    title: "Kindle Paperwhite",
    price: 129,
    rating: 4,
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "123470",
    title: "Fitbit Charge 4",
    price: 149,
    rating: 2,
    image: "https://plus.unsplash.com/premium_photo-1712848346375-3d6cc9842dad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZpdGJpdCUyMENoYXJnZSUyMDQlMjBzbWFydCUyMHdhdGNofGVufDB8fDB8fHww"
  },
  {
    id: "123471",
    title: "Samsung QLED TV",
    price: 1199,
    rating: 4,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2Ftc3VuZyUyMFFMRUQlMjBUVnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "123472",
    title: "Dyson V11 Torque Drive",
    price: 699,
    rating: 3,
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjY3VtJTIwY2xlYW5lcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "123473",
    title: "Apple Watch Series 6",
    price: 399,
    rating: 5,
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXBwbGUlMjBXYXRjaCUyMFNlcmllcyUyMDZ8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "123474",
    title: "JBL Flip 5 Bluetooth Speaker",
    price: 119,
    rating: 4,
    image: "https://images.unsplash.com/photo-1645537335722-01e6205ca0a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fEpCTCUyMEZsaXAlMjA1JTIwQmx1ZXRvb3RoJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "123475",
    title: "Oculus Quest 2",
    price: 299,
    rating: 3,
    image: "https://plus.unsplash.com/premium_photo-1710294630278-73e721580a9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8T2N1bHVzJTIwUXVlc3QlMjAyfGVufDB8fDB8fHww"
  },
  {
    id: "123476",
    title: "Roku Streaming Stick+",
    price: 49,
    rating: 2,
    image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVtb3RlfGVufDB8fDB8fHww"
  },
  {
    id: "123477",
    title: "HP Envy 13 Laptop",
    price: 899,
    rating: 4,
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SFAlMjBFbnZ5JTIwMTMlMjBMYXB0b3B8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "123478",
    title: "Anker PowerCore 10000",
    price: 29,
    rating: 2,
    image: "https://images.unsplash.com/photo-1632156752206-f6dac15dd37d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QW5rZXIlMjBQb3dlckNvcmUlMjAxMDAwMHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "123479",
    title: "Sony Alpha a6400 Mirrorless Camera",
    price: 899,
    rating: 4,
    image: "https://images.unsplash.com/photo-1560217930-ed5820aea22a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNvbnklMjBBbHBoYSUyMGE2NDAwJTIwTWlycm9ybGVzcyUyMENhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "123480",
    title: "LG Ultrawide Monitor",
    price: 499,
    rating: 3,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TEclMjBVbHRyYXdpZGUlMjBNb25pdG9yfGVufDB8fDB8fHww"
  },
  {
    id: "123481",
    title: "Nest Learning Thermostat",
    price: 249,
    rating: 3,
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGhlcm1vc3RhdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "123482",
    title: "Arlo Pro 3 Security Camera",
    price: 499,
    rating: 4,
    image: "https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJsbyUyMFBybyUyMDMlMjBTZWN1cml0eSUyMENhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "123483",
    title: "Sonos One Smart Speaker",
    price: 199,
    rating: 2,
    image: "https://plus.unsplash.com/premium_photo-1677093905921-617951e10e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U29ub3MlMjBPbmUlMjBTbWFydCUyMFNwZWFrZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "123484",
    title: "Nespresso Vertuo Coffee Maker",
    price: 159,
    rating: 3,
    image: "https://images.unsplash.com/photo-1522726336270-3a0053210f06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE5lc3ByZXNzbyUyMFZlcnR1byUyMENvZmZlZSUyME1ha2VyfGVufDB8fDB8fHww"
  },
  {
    id: "123485",
    title: "Instant Pot Duo 7-in-1",
    price: 99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1588279102567-67db026f11c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJlc3N1cmUlMjBjb29rZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "123486",
    title: "Breville Smart Oven Air Fryer",
    price: 349,
    rating: 4,
    image: "https://images.unsplash.com/photo-1565357253897-79d691886a73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnJldmlsbGUlMjBTbWFydCUyME92ZW4lMjBBaXIlMjBGcnllcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "123487",
    title: "Dyson Airwrap Complete",
    price: 549,
    rating: 3,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fER5c29uJTIwQWlyd3JhcCUyMENvbXBsZXRlJTIwY29tYnxlbnwwfHwwfHx8MA%3D%3D"
  }
];

const images = [homeImage, himg2, himg3, himg4];

function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    console.log("prev clicked");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    console.log("next clicked");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="homeBox">
      <div className="slider">
        <img src={images[currentIndex]} alt="sliderImage" className="himg" />
        <button className="sliderButton prevButton" onClick={prevSlide}>{"<"}</button>
        <button className="sliderButton nextButton" onClick={nextSlide}>{">"}</button>
      </div>
      {productData.map((product) => (
        <Products
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Home;
