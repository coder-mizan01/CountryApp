import React from 'react'
import Style from "./country.module.css"

const Country = (props) => {
    
  const {population , name , area , capital , flags} = props.country
 
  const handleDeletebtn = (name) =>{
      props.OnDeleteCountryfun(name)
  }
    
  return (
    <article className={Style.country}>
    <div>
    <img src={flags.png} alt={name.common}  className={Style.flag}/>
       <h3>Name :{name.common}</h3>
       <h3>population :{population}</h3>
        <h3>capital :{capital}</h3>
        <h3>Area :{area}</h3>
        <button className={Style.btn} onClick={()=>{handleDeletebtn(name.common)}}>delete</button>
    </div>
    </article>
  )
}

export default Country