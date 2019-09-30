import React, { Component } from 'react';
import { Button, Text, View, Image} from 'react-native';
import data from '../App Logic/PupImages.js'

const CurrentPup = (props) => (
      <View>
        <View>
            <Text>{props.pup.name}</Text>
        </View>
        <View>
          <Image source={data.images['labDog']}/>
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