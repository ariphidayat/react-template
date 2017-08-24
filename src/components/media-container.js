import React, {Component} from 'react';
import {Media} from './media';
import arip from '../images/arip.jpg';

export default class MediaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '../images/arip.jpg',
      subject: 'Subject',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
    }
  }
  render() {
    return (
      <section className="col-md-7">
        <div className="media-container">
          <Media  img={this.state.img}
                  subject={this.state.subject}
                  body={this.state.body}/>
        </div>
      </section>
    )
  }
}
