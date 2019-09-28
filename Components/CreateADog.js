import React, { Component } from 'react';
import {Button, Text, View, ScrollView, TextInput, Image, SafeAreaView, TouchableOpacity} from 'react-native';


const CreateADog = (props) => (
    <View>
        <TextInput placeholder="Dogs Name"  onChangeText={text => props.handleInputChange('dogName', text)}/>
        <TextInput placeholder="Dogs Personality" onChangeText={text => props.handleInputChange('dogPersonality', text)}/>
        <Text>Choose a Breed</Text>
        <TouchableOpacity onPress ={() =>{props.chooseBreed("adorable-animal-breed-1490908.jpg", "berkay-gumustekin-ngqyo2AYYnE-unsplash.jpg")}}>
          <Image source={require("../Images/adorable-animal-breed-1490908.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress ={() =>{props.chooseBreed("animal-australian-collie-canine-2612844.jpg", "adorable-animal-bernedoodle-1458925.jpg")}}>
          <Image source={require("../Images/animal-australian-collie-canine-2612844.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress ={() =>{props.chooseBreed("adorable-animal-blur-245035.jpg", "cody-board-tnNVJd_nrw8-unsplash.jpg")}}>
          <Image source={require("../Images/adorable-animal-blur-245035.jpg")}/>
        </TouchableOpacity>
        <Button title="Create a dog" onPress={props.creationOfDog}/>
    </View>
    );

export default CreateADog;