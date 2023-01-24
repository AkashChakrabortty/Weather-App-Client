import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

const Home = () => {
  const [cities,setCities] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/allCities/${0}`)
      .then((res) => res.json())
      .then((data) => setCities(data));
  },[])
   

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        {cities.map((city) => {
          return (
            <div key={city._id}>
              <Card city={city} key={city._id}></Card>
            </div>
          );
        })}
      </div>
    );
};

export default Home;