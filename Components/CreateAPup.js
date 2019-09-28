import React, { Component } from 'react';
import {Button, Text, View, ScrollView, TextInput, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import CreateADog from "./CreateADog.js"
import CreateAPuppy from "./CreateAPuppy.js"

const CreateAPup = (props) => (
    <View>
      <CreateADog
        creationOfDog= {props.creationOfDog} 
        handleInputChange={props.handleInputChange}
        chooseBreed={props.chooseBreed}
        creationOfDog={props.creationOfDog}
        creationOfPuppy={props.creationOfPuppy}
      />
      <CreateAPuppy
        handleInputChange={props.handleInputChange}
        creationOfPuppy={props.creationOfPuppy}
        parentStore={props.parentStore}
        pups={props.pups}
      />
    </View>
    );

export default CreateAPup;