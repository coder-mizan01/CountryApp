import React from 'react'
import Country from './Country'
import Style from './countries.module.css'

const Countries = (props) => {
   console.log(props);
  return (
    <section className={Style.countries}>
     { props.countries.map((country , index)=> {
       return <Country key={index}   country={country}  
       OnDeleteCountryfun={props.onDeleteCountryfun}  />
     })}
    </section>
  )
}

export default Countries