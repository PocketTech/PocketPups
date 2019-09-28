import React, { Component } from 'react';
import { Button, Text, View, ScrollView} from 'react-native';
import CreateAPup from './Components/CreateAPup';
import CurrentPup from './Components/CurrentPup';
import PupList from './Components/PupList';
import dogData from './data/examplePupData.js';
import Pupfunctions from './App Logic/PupFunctions';
import CreateAPupfunctions from './App Logic/CreateAPupFunctions';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPup: dogData[0],
      pupList: dogData,
      cpOn: true,
      plOn: false,
      capOn: false,
      breedDogStore:'',
      breedPuppyStore:'',
      dogName: '',
      dogPersonality:''
    }
    this.toggle = this.toggle.bind(this);
    this.pupClick = this.pupClick.bind(this);
    this.pupInteractions = this.pupInteractions.bind(this)
    this.creationOfDog = this.creationOfDog.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.chooseBreed = this.chooseBreed.bind(this)
    this.creationOfDog = this.creationOfDog.bind(this)
  }


  chooseBreed(dog, puppy){
    this.setState({
      breedDogStore: dog,
      breedPuppyStore: puppy
    })
    console.log(this.state.breedDogStore)
  }

  pupInteractions(action, pup){
    if(action === 'feed'){
      Pupfunctions.feed(pup);
      Pupfunctions.getOlder(pup);
    } else if (action === 'nap'){
      Pupfunctions.nap(pup);
      Pupfunctions.getOlder(pup);
    } else if (action === 'play'){
      Pupfunctions.play(pup);
      Pupfunctions.getOlder(pup);
    }
    this.setState(
      {currentPup: pup}
    )
  }

  handleInputChange(name, text) {
    this.setState({
      [name]: text
    });
  }

  agechecker(pup){
   if(pup.age >= 5){
    
   }
  }

  creationOfDog(){
    const name = CreateAPupfunctions.Dog(this.state.dogName, this.state.dogPersonality, this.state.breedDogStore, this.state.breedPuppyStore);
    const listOfPups = this.state.pupList
    console.log(name)
    listOfPups.push(name)
    this.setState({
      pupList: listOfPups,
      currentPup: name
    })
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
       <ScrollView>
        <View>
          <Text>Pocket Pups</Text>
        </View>
        <View>
          {this.state.capOn && 
            <CreateAPup 
            creationOfDog= {this.creationOfDog} 
            handleInputChange={this.handleInputChange}
            chooseBreed={this.chooseBreed}
            creationOfDog={this.creationOfDog}
            />
          }
          {this.state.cpOn && <CurrentPup pup={this.state.currentPup} pupInteractions={this.pupInteractions}/>}
          {this.state.plOn && <PupList pups={this.state.pupList} pupClick={this.pupClick}/>}
        </View>
        <View>
          <Button title="Current Pup" className="cpOn" onPress={ () => {this.toggle("cpOn")}} />
          <Button title="Pup List" className="plOn" onPress={() => {this.toggle("plOn")}}/>
          <Button title="Create a Pup" className="capOn" onPress={() => {this.toggle("capOn")}}/>
        </View>
        </ScrollView>
      </View>
    );
  }
};

export default App;
