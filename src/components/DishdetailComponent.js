import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    const  DishDetail = (props) => {

        if(props.dish != null) 
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
            );
        else
            return(
                <div></div>
            );

    }

    function RenderDish({dish})  {
        return  (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>)
    }

    function RenderComments({comments}) {
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


export default DishDetail;  