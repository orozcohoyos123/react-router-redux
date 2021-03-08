import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const [videos, categories] = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />
      {/* ///MI FORMA
       {categories.map((category) => {
        if (videos[category].length > 0) {
          return (
            <Categories key={Object.keys(category)} title={category}>
              <Carousel>
                {videos[category].map((item) => { return (<CarouselItem key={item.id} {...item} />)})}
                <CarouselItem />
              </Carousel>
            </Categories>
          );
        }
      })} */}

      {categories.map(
        (category) => videos[category].length > 0 && (
          <Categories key={Object.keys(category)} title={category}>
            <Carousel>
              {videos[category].map((item) => (
                <CarouselItem key={item.id} {...item} />
              ))}
              <CarouselItem />
            </Carousel>
          </Categories>
        ),
      )}
      <Footer />
    </div>
  );
};
export default Home;
