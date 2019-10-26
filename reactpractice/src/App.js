import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    allFriends: friends,
    selectedFriends: {},
    score: 0
  };

  checkIfIsSelected = id => {
    //take the id, get the info from allFriends
    // if id is in {}

    if (!this.state.selectedFriends[id]) {
      // throw error
      // game over// update top score..
      const newSelectedFriends = this.state.selectedFriends;
      const friend = this.state.allFriends.filter(friend => {
        return friend.id === id;
      });
      newSelectedFriends[id] = friend[0];
      this.setState({ selectedFriends: newSelectedFriends });
      console.log("xxxxxx", this.state.selectedFriends);
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>THE ARSENAL</Title>
        {this.state.allFriends.map(friend => (
          <FriendCard {...friend} checkFriends={this.checkIfIsSelected} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
