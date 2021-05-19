import React from "react"
import Navbar from '../components/Navbar'
import {Link, graphql } from 'gatsby'

export default function Home( { data }) {
  console.log(data)
  const pages = data.allWpPage.nodes

  return (

  <section>
     <Navbar />
     
    <h1>Portafolio Web Dev</h1>
  
      <h3>oishadoahsd</h3>


 
  
  </section>

  )
}



export const query = graphql`
query MyQuery {
  allWpPage {
    nodes {
      title
      slug
      author {
        node {
          firstName
        }
      }
    }
  }
}

`
