import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

class Dishdetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width='100%' src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
        return <div></div>;
    }
  }

  renderComments(comments) {
    if (comments != null) {
      let list = comments.map((comments) => {
        return (
          <li key={comments.id}>
            <div>
              <p>{comments.comment}</p>
              <p>
                --{comments.author},
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                }).format(new Date(Date.parse(comments.date)))}
              </p>
            </div>
          </li>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          <ul className='list-unstyled'>{list}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>
          {this.renderDish(this.props.dish)}
        </div>
        <div className='col-12 col-md-5 m-1'>
          {this.renderComments(this.props.dish.comments)}
        </div>
      </div>
    );
  }
}

export default Dishdetail;
