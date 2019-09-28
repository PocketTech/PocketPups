import React, { Component } from 'react';
import { Button, Text, View, ScrollView} from 'react-native';
import CreateAPup from './Components/CreateAPup';
import CurrentPup from './Components/CurrentPup';
import PupList from './Components/PupList';
import dogData from './data/examplePupData.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPup: dogData[0],
      pupList:dogData,
      cpOn: true,
      plOn: false,
      capOn: false
    }
    this.toggle = this.toggle.bind(this);
    this.pupClick = this.pupClick.bind(this);
  }
  pupClick(pup) {
    this.setState({currentPup: pup})
    this.toggle('cpOn')
  }

  toggle(name){
    console.log(name)
    this.setState({
      [name]: !this.state[name]
    })
  }
  render(){
    return (
      <View>
        <View>
          <Text>Pocket Pups</Text>
        </View>
        <View>
          {this.state.capOn && <CreateAPup/>}
          {this.state.cpOn && <CurrentPup pup={this.state.currentPup}/>}
          {this.state.plOn && <PupList pups={this.state.pupList} pupClick={this.pupClick}/>}
        </View>
        <View>
          <Button title="Current Pup" className="cpOn" onPress={ () => {this.toggle("cpOn")}} />
          <Button title="Pup List" className="plOn" onPress={() => {this.toggle("plOn")}}/>
          <Button title="Create a Pup" className="capOn" onPress={() => {this.toggle("capOn")}}/>
        </View>
      </View>
    );
  }
};

export default App;
