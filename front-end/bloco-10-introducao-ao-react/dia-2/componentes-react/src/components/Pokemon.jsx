import React, { Component } from "react";
import PropType from 'prop-types'

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.data
    const {value, measurementUnit} = averageWeight
    return(
      <div className='pokemom'>
        <h2>{name}</h2>
        <p>{type}</p>
        <p>Average weight: {`${value} ${measurementUnit}`}</p>
        <img src={image} alt={moreInfo}></img>
      </div>
    )
  }
}

Pokemon.propType = {
  name: PropType.string.isRequired,
  type: PropType.string.isRequired,
  value: PropType.number.isRequired,
  measurementUnit: PropType.string.isRequired
}

export default Pokemon