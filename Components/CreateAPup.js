import React, { Component } from 'react';
import {Button, Text, View, ScrollView, TextInput, Image, SafeAreaView} from 'react-native';


const CreateAPup = (props) => (
    <View>
        <TextInput placeholder="Dogs Name"/>
        <TextInput placeholder="Dogs Personality"/>
        <Text>Choose a Breed</Text>
        <Image source={require("../Images/adorable-animal-breed-1490908.jpg")}/>
        <Image source={require("../Images/animal-australian-collie-canine-2612844.jpg")}/>
        <Image source={require("../Images/adorable-animal-blur-245035.jpg")}/>
        <Button title="Create a dog"/>

    </View>
    );

export default CreateAPup;