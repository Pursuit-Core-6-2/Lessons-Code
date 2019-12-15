import React from 'react';

const Dog = (props) => {
  const handleImgLoad = (e) => {
    console.log('image loaded')
    props.stopSpinner();

    console.log(e.target)
  }
  console.log('DOG PROPS', props.url)
  return (
    <img src={props.url} alt="dog" onLoad={handleImgLoad} />
  )
}

export default Dog
