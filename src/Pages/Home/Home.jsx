import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

const Home = () => {
  const [cities,setCities] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/allCities/${0}`)
      .then((res) => res.json())
      .then((data) => setCities(data));
  },[])
   
  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=Tongi,1710,+880&appid=dfddcdf016eccd19fad36794d34d98db`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
    return (
      <div>
        {
        cities.map(city => {return (
          <>
            <Card city={city} key={city._id}></Card>
          </>
        );})
        }
      </div>
    );
};

export default Home;