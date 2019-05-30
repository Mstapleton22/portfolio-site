import React from 'react'

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
  
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    height: 400,
  }
  return <div className="slide col-6" style={styles}></div>
}

export default Slide