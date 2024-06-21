import React from 'react'
import './TagTemplate.css'
import ProductDisplay from '../ProductDisplay/ProductDisplay'

const TagTemplate = ({tag}) => {
 
  return (
    <div className="TagTemplate">
        <h2>{tag}</h2>
        <ProductDisplay tag={tag} />

    </div>
  )
}

export default TagTemplate;