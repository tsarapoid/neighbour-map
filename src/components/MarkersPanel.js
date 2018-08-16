import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import SearchBar from './SearchBar';
import MarkersList from './MarkersList';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';


class MarkersPanel extends Component {
  constructor(props) {
    super(props);
  }
  state={
    value: '',
    places: []
  }


  handleChange = (event, props) => {
    this.setState({
      value: event.target.value.substr(0, 20)
    })
  }
  onClearInput = () => {
    this.setState({
      value: ''
    })
  }


  render() {
    // console.log(this.props.openInfoWindow);
    let foundedPlaces
    if (this.state.value) {
      const match = new RegExp(escapeRegExp(this.state.value, 'i'))
      foundedPlaces = this.props.listOfMarkers.filter((place) => match.test(place.name))

    } else {
      foundedPlaces = this.props.listOfMarkers
    }
    foundedPlaces.sort(sortBy('name'))

    return (
      <div>
                
                <Alert color="secondary">
                
                    <SearchBar
      value={this.state.value}
      onHandleChange={this.handleChange}
      onClearInput={this.onClearInput}

      />
                    <MarkersList
      showWindow = {this.props.openInfoWindow}
      {...[foundedPlaces]}
      />
                </Alert>
            </div>
    )
  }
}
export default MarkersPanel;