import React, { Component } from 'react';
import { Button, Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import CreateAPup from './Components/CreateAPup';
import CurrentPup from './Components/CurrentPup';
import PupList from './Components/PupList';
import dogData from './data/examplePupData.js';
import Pupfunctions from './App Logic/PupFunctions';
import CreateAPupfunctions from './App Logic/CreateAPupFunctions';
import axios from 'axios'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPup:{},
      pupList: [],
      cpOn: false,
      plOn: false,
      capOn: false,
      cDT: false,
      cPT:false,
      breedDogStore:'',
      breedPuppyStore:'',
      dogName: '',
      dogPersonality:'',
      parentOne: undefined,
      parentTwo: undefined
    }
    this.toggle = this.toggle.bind(this);
    this.pupClick = this.pupClick.bind(this);
    this.pupInteractions = this.pupInteractions.bind(this)
    this.creationOfDog = this.creationOfDog.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.chooseBreed = this.chooseBreed.bind(this)
    this.creationOfDog = this.creationOfDog.bind(this)
    this.parentStore = this.parentStore.bind(this)
    this.creationOfPuppy = this.creationOfPuppy.bind(this)
    this.getPups = this.getPups.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.creationCall = this.creationCall.bind(this)
  }

  parentStore(parent){
    if(this.state.parentOne !== undefined){
      this.setState({parentTwo: parent})
    } else{
      this.setState({parentOne: parent})
    }
  }

  chooseBreed(dog, puppy){
    this.setState({
      breedDogStore: dog,
      breedPuppyStore: puppy
    })
  }

  pupInteractions(action, pup){
    if(action === 'feed'){
      Pupfunctions.feed(pup);
      Pupfunctions.getOlder(pup);
      this.agechecker(pup)
    } else if (action === 'nap'){
      Pupfunctions.nap(pup);
      Pupfunctions.getOlder(pup);
      this.agechecker(pup)
    } else if (action === 'play'){
      Pupfunctions.play(pup);
      Pupfunctions.getOlder(pup);
      this.agechecker(pup)
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
   if(pup.age >= 5 && pup.isPup === true){
    pup.image = pup.breedDog
   }
  }

  getPups(){
    axios.get('http://172.17.237.17:3000/pups')
      .then((response) => {
        this.setState({
          currentPup: response.data[0],
          pupList: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  componentDidMount(){
    this.getPups()
  }

  creationCall(pup){
     pup.id = CreateAPupfunctions.pupCounter
     CreateAPupfunctions.pupCounter++
    axios.post('http://172.17.237.17:3000/pups', pup)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    this.getPups()
  }

  creationOfPuppy(){
    const puppy = CreateAPupfunctions.Puppy(this.state.dogName, this.state.parentOne, this.state.parentTwo);
    this.creationCall(puppy)
    this.setState({
      parentOne: undefined,
      parentTwo: undefined
    })
    this.toggle('cpOn')
    this.toggle('capOn')
  }

  creationOfDog(){
    const dog = CreateAPupfunctions.Dog(this.state.dogName, this.state.dogPersonality, this.state.breedDogStore, this.state.breedPuppyStore);
    this.creationCall(dog)
  }

  pupClick(pup) {
    this.setState({
      currentPup: pup
    })
    this.toggle('cpOn')
    this.toggle('plOn')
  }

  toggle(name){
    this.setState({
      [name]: !this.state[name]
    })
  }

  render(){
    return (
      <View>
       <ScrollView>
        <View style={styles.center}>
          <Text style={styles.white}>Pocket Pups</Text>
        </View>
        <View style={styles.main}>
          {this.state.capOn && 
            <CreateAPup 
            creationOfDog= {this.creationOfDog} 
            handleInputChange={this.handleInputChange}
            chooseBreed={this.chooseBreed}
            creationOfDog={this.creationOfDog}
            creationOfPuppy={this.creationOfPuppy}
            parentStore={this.parentStore}
            pups={this.state.pupList}
            toggle={this.toggle}
            cDT={this.state.cDT}
            cPT={this.state.cPT}
            />
          }
          {this.state.cpOn && <CurrentPup pup={this.state.currentPup} pupInteractions={this.pupInteractions}/>}
          {this.state.plOn && <PupList pups={this.state.pupList} pupClick={this.pupClick}/>}
        </View>
        <View style={styles.bottomView}>
          <View style={styles.buttonView}>
            <TouchableOpacity  onPress={() => {this.toggle("cpOn")}} style={styles.buttonBorder}>
              <Text style={styles.buttonText}> Current Pup </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {this.toggle("plOn")}} style={styles.buttonBorder}>
              <Text style={styles.buttonText}> Pup List </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {this.toggle("capOn")}} style={styles.buttonBorder}>
              <Text style={styles.buttonText}> Create a Pup </Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  white: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  main:{
    height: 560,
    flex: 3
  },
  center: {
    alignItems: 'center',
    backgroundColor: "#80aaff"
  },
  bottomView:{
    backgroundColor: "#80aaff",
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonView:{
    height: 60,
    flexDirection: 'row',
  },
  buttonText:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15
  },
  buttonBorder:{
    borderWidth: 1,
    borderColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 3,
  },

});

export default App;
