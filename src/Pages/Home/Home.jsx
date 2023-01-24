import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

const Home = () => {
  const [cities,setCities] = useState([])
  const [skip,setSkip] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/allCities/${skip}`)
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, [skip]);
   
  const handlePage = (page) => {
   setSkip(page);
  }

    return (
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
          {cities.map((city) => {
            return (
              <div key={city._id}>
                <Card city={city} key={city._id}></Card>
              </div>
            );
          })}
        </div>
        <div className="pagination text-center mb-4">
          <div className="btn-group">
            <button
              className="btn"
              onClick={() => {
                handlePage(0);
              }}
            >
              1
            </button>
            <button
              className="btn"
              onClick={() => {
                handlePage(10);
              }}
            >
              2
            </button>
            <button
              className="btn"
              onClick={() => {
                handlePage(20);
              }}
            >
              3
            </button>
          </div>
        </div>
      </div>
    );
};

export default Home;