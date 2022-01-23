import { React, Component } from "react";
import SearchBox from "../components/searchBox.js";
import Scroll from "../components/scroll.js";
import CardList from "../components/cardList.js";
import { cats } from "../cats";
import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchfield: "",
    }
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response => response.json())
    // .then(users => this.setState({cats: users}));

    this.setState({ cats: cats });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { cats, searchfield } = this.state;

    const filteredCats = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (!cats.length) {
      return <h1>Loading</h1>
    }

    return (
      <div>
        <h1 className="title"> Kitty Friends </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList cats={filteredCats} />
        </Scroll>
      </div>
    );
  }
}

export default App;
