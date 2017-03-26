import React from 'react';
import { Button, ButtonGroup, Card, CardImg, CardTitle, CardText, CardBlock } from 'reactstrap';
import './App.css';

// function getRandomImage(imgAr, path) {
//     path = path || './public/images/'; // default path here
//     var num = Math.floor( Math.random() * imgAr.length );
//     var img = imgAr[ num ];
//     const imgStr = path + img;
//     return imgStr;
// }

// Card component
export default function MakeCard (props) {
  // const random_images_array = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg",
  // 							   "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg",
  // 							   "img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg",
  // 							   "img13.jpg", "img14.jpg", "img15.jpg", "img16.jpg",
  // 							   "img17.jpg", "img18.jpg", "img19.jpg", "img20.jpg" ];

  // const placeholderImg = getRandomImage(random_images_array);							   
  const img = props.img ? props.img : "https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180";
  return (
  	<Card inverse style={{ backgroundColor: '#333' }}>
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
	      		<Button className="link-buttons" style={{ float: 'left' }}>&#x1F499; {props.points}</Button>
	           	<a className="link-buttons" style={{ float: 'right' }} href="https://twitter.com/share" class="twitter-share-button" data-show-count="false"><Button>Tweet</Button></a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
	    </CardBlock>
	</Card>
  )
}