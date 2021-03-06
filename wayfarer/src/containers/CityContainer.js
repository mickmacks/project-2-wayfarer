import React, {Component} from 'react'
import $ from 'jquery-ajax'
import CityList from '../components/CityList'
import City from '../components/City'

class CityContainer extends Component {
	constructor() {
		super();
		this.state = {
			cities: []
		}
		this.loadCitiesFromServer = this.loadCitiesFromServer.bind(this);

	}

	loadCitiesFromServer() {
		$.ajax({
			method: 'GET',
			url: 'http://localhost:3000/api/cities'
		})
		.then( res => this.setState({cities: res}))

	}

	componentDidMount(){
		this.loadCitiesFromServer();
	}
	
	render() {
		return(
			<CityList
				cities={this.state.cities}
			/>

		)
	}
}

export default CityContainer;
