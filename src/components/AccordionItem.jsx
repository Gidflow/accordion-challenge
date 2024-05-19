
//import React from 'react'
import PropTypes from "prop-types"

const AccordionItem = ({item}) => {
  return (
    <li>
       {item.question}
    </li>
  )
}

AccordionItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default AccordionItem