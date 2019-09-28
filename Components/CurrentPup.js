import React, { Component } from 'react';
import { Button, Text, View, Image} from 'react-native';

const imageNames = {
    cutepup: require('../Images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg'),
 };

const CurrentPup = (props) => (
      <View>
        <View>
            <Text>{props.pup.name}</Text>
        </View>
        <View>
          <Image source={imageNames[props.pup.image]}/>
        </View>
        <View>
            <Text>Age: {props.pup.age}</Text>
            <Text>Hunger: {props.pup.hunger}</Text>
            <Text>Happiness: {props.pup.happiness}</Text>
            <Text>Energy: {props.pup.energy}</Text>
        </View>
        <View>
            <Button title="Play" onPress={() =>{props.pupInteractions("play", props.pup)}}/>
            <Button title="Feed" onPress={() =>{props.pupInteractions("feed", props.pup)}}/>
            <Button title="Nap"  onPress={() =>{props.pupInteractions("nap", props.pup)}}/>
        </View>
      </View>
    );

export default CurrentPup;