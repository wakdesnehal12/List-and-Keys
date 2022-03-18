import React from 'react';
import Car from './Car';

export default function List() {

    const list = ['Ford', 'BMW', 'Audi'];

    return (
        <>
            <h1>Who Lives in my garage ?</h1>
            <ul>
                {
                
                    list.map((data) => <Car brand={data}/>)

                }
            </ul>
        </>
  )
}
