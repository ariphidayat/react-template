import React, {Component} from 'react';
import arip from '../images/arip.jpg';

export default class MediaContainer extends Component {
  render() {
    return (
      <div className="col-md-7">
        <ul className="media-container">
          <li className="media">
            <img className="d-flex mr-3" src={arip} width="64" alt="Generic placeholder image"/>
            <div className="media-body">
              <h5 className="mt-0 mb-1">Media Object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
