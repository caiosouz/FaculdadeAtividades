import React from 'react'
import apiFilmes from '../services/apiFilmes'

const index = () => {
  return (
    <div>
      
    </div>
  )
}

export default index

export async function getServerSideProps(context) {
  
  const resultado = await apiFilmes.get('/movie/popular/?language=pt-BR')
  const filmes = resultado.data.results
  console.log(filmes)

  return {
    props: {filmes}, // will be passed to the page component as props
  }
}