import React, { Component } from 'react';
import {Button, Text, View, ScrollView, TextInput, Image, SafeAreaView, TouchableOpacity} from 'react-native';


const CreateAPuppy = (props) => (
    <View>
        <TextInput placeholder="Puppy's Name"  onChangeText={text => props.handleInputChange('dogName', text)}/>
        <Text>Choose two parents</Text>
        {props.pups.map((oneP) => (
          <Text onPress = {(pup) => {props.parentStore(oneP)}}> {oneP.name}</Text>
        ))}
        <Button title="Create a puppy" onPress={props.creationOfPuppy}/>
    </View>
    );

export default CreateAPuppy;