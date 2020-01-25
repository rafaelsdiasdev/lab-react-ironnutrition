import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'
import FoodBox from './component/FoodBox'
import AddFood from './component/addFood'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: this.getData(),
      name: ''
    }
  }

  getData() {
    const result = foods
    return result
  }

  addFoodHandler = (theFood) => {
    const foodCopy = [...this.state.list];
    foodCopy.push(theFood);
    this.setState({
      list: foodCopy
    })
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value })
  }


  render() {

    let input = this.state.name

    // transform first capital lettler
    const titleize = text => {
      if (text !== '') {
        var words = text.toLowerCase().split(" ");
        for (var a = 0; a < words.length; a++) {
          var w = words[a];
          if (w[0] !== undefined) {
            words[a] = w[0].toUpperCase() + w.slice(1);
          }
        }
        return words.join(" ");

      }
      return ""
    }

    return (
      <div className="App">
        <div className="has-text-centered content">
          <h1 className="title">Iron Nutrition</h1>
          <hr />
          <div className="field">
            <label className="label">Search:</label>
            <div className="control">
              <input className="input" type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
        </div>
        <AddFood addTheFood={this.addFoodHandler} />
        {}
        {this.state.list.filter((el) => el.name.includes(titleize(input))).map((el, idx) => (
          <FoodBox
            key={idx}
            name={el.name}
            calories={el.calories}
            image={el.image}
            quantify={() => el.quantify}
          />
        ))}
      </div>
    );
  }
}

export default App;
