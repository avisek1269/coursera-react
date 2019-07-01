import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';    
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    const  DishDetail = (props) => {

        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if(props.dish != null) 
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
                        <RenderComments comments={props.comments}
                            postComment={props.postComment}
                            dishId={props.dish.id}/>
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
        return (
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>    
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>)
    }

    function RenderComments({comments, postComment, dishId}) {
        if(comments && comments.length > 0) { 

            return (
                <ul className="list-unstyled mb-4">
                    <Stagger in>
                    { comments.map( comment => {
                        const date = new Date(comment.date);
                        return (
                            <Fade in key={comment.id}>
                                <li key={comment.id}>
                                    <p className="mb-3">{comment.comment}</p>
                                    <p className="mb-3">-- {comment.author}, {date.toLocaleDateString('en-US', {
                                        day: 'numeric', month: 'short', year: 'numeric'
                                        })}
                                    </p>
                                </li>
                            </Fade> 
                                )
                            }) 
                    }
                    </Stagger>
                    <li><CommentForm dishId={dishId} postComment={postComment}/></li>
                </ul>
            )
        }
        else {
            return (<div></div>)
        }
    
   
}

export default DishDetail;  