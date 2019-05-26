import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    render() {
        if(this.props.dish != null) 
        return(
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                    { this.renderDish(this.props.dish) }
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        { this.renderComments(this.props.dish.comments) }
                    </div>
                </div>
            </div>
            );
        else
            return(
                <div></div>
            );

    }

    renderDish(dish) {
        return  (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>)
    }

    renderComments(comments) {
        if(comments && comments.length > 0) { 

            return (
                <ul className="list-unstyled mb-4"> {
                comments.map( comment => {
                const date = new Date(comment.date);
                return (
                        <li key={comment.id}>
                            <p className="mb-3">{comment.comment}</p>
                            <p className="mb-3">-- {comment.author}, {date.toLocaleDateString('en-US', {
                                day: 'numeric', month: 'short', year: 'numeric'
                                })}
                            </p>
                        </li>  
                )
            }) 
            }
            </ul>
            )
        }
        else {
            return (<div></div>)
        }
    }
   
}


export default DishDetail;  