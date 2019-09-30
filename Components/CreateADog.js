import React, { Component } from 'react';
import {Button, Text, View, ScrollView, TextInput, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import data from '../App Logic/PupImages.js'

const CreateADog = (props) => (
    <View>
        <TextInput placeholder="Dogs Name"  onChangeText={text => props.handleInputChange('dogName', text)}/>
        <TextInput placeholder="Dogs Personality" onChangeText={text => props.handleInputChange('dogPersonality', text)}/>
        <Text>Choose a Breed</Text>
        {console.log(data.images.labDog)}
        <TouchableOpacity onPress ={() =>{props.chooseBreed('labDog', 'labPuppy')}}>
          <Image source={data.images.labDog}/>
        </TouchableOpacity>
        <TouchableOpacity onPress ={() =>{props.chooseBreed('aussieDog', 'aussiePuppy')}}>
          <Image source={data.images.aussieDog}/>
        </TouchableOpacity>
        <TouchableOpacity onPress ={() =>{props.chooseBreed('huskyDog', 'huskyPuppy')}}>
          <Image source={data.images.huskyDog}/>
        </TouchableOpacity>
        <TouchableOpacity onPress ={() =>{props.chooseBreed('corgieDog', 'corgiePuppy')}}>
          <Image source={data.images.corgieDog}/>
        </TouchableOpacity>
        <Button title="Create a dog" onPress={props.creationOfDog}/>
    </View>
    );

export default CreateADog;