import React from 'react';
import Dog from './Dog'

const DogList = (props) => {
  return (
    <ul>{
      props.urls.map(url => <Dog url={url} stopSpinner={props.stopSpinner} />)
    }</ul>
  )
}

export default DogList;
