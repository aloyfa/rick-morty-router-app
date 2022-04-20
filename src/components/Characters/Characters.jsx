import React from 'react'
import './Characters.css'

const Characters = ({characters = []}) => {
  return (
    
    <div className="card-holder">
    {characters.map((item, index) =>(
        <div key='index'>
            <div className="card">
                <div className="card-body">
                  <img className="card-img" src={item.image} alt=""/> 
                  <h2 className="card-title">{item.name}</h2>
                  <hr/>
                  <p>Species: {item.species} </p>
                  <p>Location: {item.location.name} </p>
                </div>
            </div>
        </div>
    ))}
</div>   
  )
}

export default Characters;