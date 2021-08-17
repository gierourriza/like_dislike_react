import React, { Component } from "react";
import { connect } from "react-redux";
import "./like_dislike.css";
import {
  countLike,
  countDislike
} from "../actions/index";
import '../reducers/index'


class Quotation extends Component {
  constructor(props){
    super(props);
    this.state = {
      likes_value: 0,
      dislikes_value: 0
    };
  }
  
  render() {
    return (
      <div>
        <div className="container">
          
        <h1><i className="smile icon"/>Quotation of the Day<i className="smile icon"/></h1>
          <h2>"Failure is the opportunity to begin again more intelligently"</h2>
          
          <button  onClick={() => this.props.dispatch(countLike())}>{this.props.like_value}<i className="thumbs up icon"/></button>
          <button onClick={() => this.props.dispatch(countDislike())}>{this.props.dislike_value}<i className="thumbs down outline icon"/></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  console.log("Like:" + state.likes);
  console.log("DisLlike:" + state.dislikes);
  return {
     like_value: state.likes,
     dislike_value: state.dislikes
  };
};

export default connect(mapStateToProps)(Quotation);
