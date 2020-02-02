import React from 'react';
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT } from '../store/actionTypes';

const Counter = (props) => {

  const handleIncrement = (e) => {
    props.increment()
  }

  const handleDecrement = (e) => {
    props.decrement()
  }

  return (
    <div>
      <p>{props.counterState.counter}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counterState: state.counterState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      console.log('increment called')
      dispatch({
        type: INCREMENT
      })
    },
    decrement: () => {
      console.log('decrement called')
      dispatch({
        type: DECREMENT
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

// export default Counter
