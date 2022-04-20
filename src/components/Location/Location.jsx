import React from 'react'
import './Location.css'

const Location = ({location = []}) => {
  return (
    <div className="card-holder">
    {location.map((item, index) =>(
        <div key='index'>
            <div className="card-loc">
                <div className="card-body">
                  <img className="card-img" src="https://i0.wp.com/overmental.com/wp-content/uploads/2015/10/rick-and-morty-dimension-35c.jpg?ssl=1" alt=""/> 
                  <h2 className="card-title">{item.name}</h2>
                  <hr/>
                  <p>Type: {item.type} </p>
                  <p>Dimension: {item.dimension} </p>
                </div>
            </div>
        </div>
    ))}
</div>   
  )
}

export default Location;