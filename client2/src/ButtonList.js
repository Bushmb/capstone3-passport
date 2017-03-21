import React, { Component } from 'react';
import { Button } from 'reactstrap';
import "./App.css";

class ButtonList extends Component {
	render() {
		return(
			<div className="button-list">
		       <Button color="info">Javascript</Button>{' '}
		       <Button color="info">Redux</Button>{' '}
		       <Button color="info">Perl</Button>{' '}
		       <Button color="info">Pyton</Button>{' '}
		       <Button color="info">C#</Button>{' '}
		       <Button color="info">Ruby</Button>{' '}
		       <Button color="info">Angular</Button>
		    </div>
		)
	}

}

export default ButtonList;