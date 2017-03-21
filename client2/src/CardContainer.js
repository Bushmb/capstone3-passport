import React, { Component } from 'react';
import fetch from 'better-fetch';
import { Button, ButtonGroup, Card, CardImg, CardTitle, CardText, CardColumns, CardBlock } from 'reactstrap';
import './App.css';


// Card component
function MakeCard (props) {
  const img = props.img ? props.img : "https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180";
  return (
  	<Card>
	    <CardImg className="img" top width="100%" src={img} alt="Card image cap" />
	    <CardBlock>
	      <a className="title-link" href={props.orig_url}>
	      	<CardTitle className="text-title">{ props.title }</CardTitle>
	      </a>
	      <hr />
	      <CardText>
	      	<small className="text-muted-date">{ props.date }</small>
	      	<small className="text-muted">{ props.mins_check }</small>
		  </CardText>
	      <CardText className="text-description">{ props.desc }</CardText>
	      <ButtonGroup>
	             <Button>&#x1F499; {props.points}</Button>{' '}
	             <Button>             </Button>{' '}
	             <Button>Post to Twitter</Button>
	           </ButtonGroup>
	    </CardBlock>
	</Card>
  )
}

// Container component
class CardContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // empty posts array in state
      scrapedData: []
    }
  }
  
  getData () {
    if (this.state.scrapedData.length > 0) {
      return this.state.scrapedData.map(function (article) {
        return (
        	<MakeCard key={article.story_id} {...article} />
       	);
      });
    } else {
      return (<h2>Loading Data....</h2>);
    }
  }
  
  componentDidMount () {
    fetch('/hacker').then((response) => {
      console.log(response);
     response.json().then((data) => {
     	// console.log("Data", data);
       this.setState({
         scrapedData: data
       });
     });
  });
  }
    
  render() {
    return (
      <div className='CardContainer'>
      	<CardColumns>
        {this.getData()}
        </CardColumns>
      </div>
    )
  }

}

export default CardContainer;