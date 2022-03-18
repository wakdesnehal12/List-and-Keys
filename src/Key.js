import React from 'react';
import Car from './Car';

export default function Key() {

    const cars = [
        {
            id: 1,
            brand: "Ford"
        },
        {
            id: 2,
            brand: "BMW"
        },
        {
            id: 3,
            brand: "Audi"
        },
        {
            id: 4,
            brand: "Audiss"
        }
    ];
  return (
    <>
    
        <h1>Who Lives in my garage ?</h1>

        <ul>
            {
                cars.map((data) => <Car key={data.id} brand={data.brand}/>)
            }
        </ul>
    </>
  );
}
