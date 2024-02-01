import React, { useState } from 'react'
import Catogories from './Catogories'

const Category = () => {
    const [data,setdata] = useState(Catogories);

    const filterResults = (cat) =>{
       const result = Catogories.filter((currData) =>{
        return currData.category===cat;
       });
       setdata(result);
    }

  return (
    <div>
          <h1 className='text-center text-info'>Let's Shop</h1>
          <div className='container-fluid mx-2'></div>
          <div className='row mt-5 mx-2'>
            <div className='col-md-3'>
                 <button className='btn btn-dark w-100 mb-3' onClick={() => filterResults('Men')}>Men</button>
                 <button className='btn btn-dark w-100 mb-3' onClick={() => filterResults('Women')}>Women</button>
                 <button className='btn btn-dark w-100 mb-3'onClick={() => filterResults('Children')}>Children</button>
                 <button className='btn btn-dark w-100 mb-3'onClick={() => filterResults('Bags')}>Bags</button>
                 <button className='btn btn-dark w-100 mb-3'onClick={() => setdata(Catogories)}>All</button>
            </div>
            <div className='col-md-9'>
                 <div className='row'>
                    {data.map((values)=>{
                        const {id,title,price,images}=values;
                        return (
                            <>
                             <div className='col-md-4 mb-4' key={id}>
                               <div className="card" >
                               <img className="card-img-top" src={images} alt="Card image cap"/>
                              <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p>Price: ${price}</p>

                                <p className="card-text">Amazing product with durability and comfort</p>
                             <a href="#" className="btn btn-warning">Buy Now</a>
                           </div>
                            </div>
                           </div>
                            </>
                            
                        )
                    })}
                    
                 </div>
            </div>
          </div>
    
        
        </div>
  )
}

export default Category