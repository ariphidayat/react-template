import React, {Component} from 'react';

export default class Media extends Component {
  render() {
    return (
      <div className="media">
        <img className="d-flex mr-3" src={this.props.img} width="64" alt="Image placeholder"/>
        <div className="media-body">
          <h5 className="mt-0 mb-1">{this.props.subject}</h5>
          <p>{this.props.body}</p>
        </div>
      </div>
    )
  }
}
