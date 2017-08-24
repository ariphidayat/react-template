import React from 'react';

export const Media = (props) => (
      <div className="media">
        <img className="d-flex mr-3" src={props.img} width="64" alt="Image placeholder"/>
        <div className="media-body">
          <h5 className="mt-0 mb-1">{props.subject}</h5>
          <p>{props.body}</p>
        </div>
      </div>
)
