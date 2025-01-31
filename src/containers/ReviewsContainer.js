import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews restaurantId={this.props.restaurant.id} reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => {dispatch({type:'ADD_REVIEW', review})},
    deleteReview: restId => {dispatch({type:'DELETE_REVIEW', id: restId})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
