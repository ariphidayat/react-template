import React, {Component} from 'react';
import arip from '../images/arip.jpg';

export default class MediaContainer extends Component {
  render() {
    return (
      <section className="col-md-7">
        <div className="media-container">
          <div className="media">
            <img className="d-flex mr-3" src={arip} width="64" alt="Image placeholder"/>
            <div className="media-body">
              <h5 className="mt-0 mb-1">Subject</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </div>
        </div>
      </section>
    )
  }
}
