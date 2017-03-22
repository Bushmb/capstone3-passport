import React, { Component } from 'react';
import fetch from 'better-fetch';
import { Button, ButtonGroup, Card, CardImg, CardTitle, CardText, CardColumns, CardBlock } from 'reactstrap';
import './App.css';

// function getRandomImage(imgAr, path) {
//     path = path || './public/images/'; // default path here
//     var num = Math.floor( Math.random() * imgAr.length );
//     var img = imgAr[ num ];
//     const imgStr = path + img;
//     return imgStr;
// }


// Card component
function MakeCard (props) {
  // const random_images_array = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg",
  // 							   "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg",
  // 							   "img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg",
  // 							   "img13.jpg", "img14.jpg", "img15.jpg", "img16.jpg",
  // 							   "img17.jpg", "img18.jpg", "img19.jpg", "img20.jpg" ];

  // const img = getRandomImage(random_images_array);							   
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
      scrapedData: [],
      hasErrored: false,
      isLoading: false
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
    	return (
    		<p>Hold tight...the data is incoming</p>
    	)
    }
  }

  fetchData(url) {
      this.setState({ isLoading: true });
      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              this.setState({ isLoading: false });
              return response;
          })
          .then((response) => response.json())
          .then((scrapedData) => this.setState({ scrapedData }))
          .catch(() => this.setState({ hasErrored: true }));
  }


  componentDidMount () {
  	this.fetchData('/hacker');
  //   fetch('/hacker').then((response) => {
  //     console.log(response);
  //    response.json().then((data) => {
  //    	// console.log("Data", data);
  //      this.setState({
  //        scrapedData: data
  //      });
  //    });
  // });
  }
    
  render() {
  	if (this.state.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.state.isLoading) {
        return <p>Loading…</p>;
    }

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