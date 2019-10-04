import React, { Component } from 'react';
import {Button, Text, View, ScrollView, TextInput, Image, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import data from '../App Logic/PupImages.js'

const CreateADog = (props) => (
    <View style={styles.mainView}>
        <TextInput placeholder="Dogs Name"  onChangeText={text => props.handleInputChange('dogName', text)}/>
        <TextInput placeholder="Dogs Personality" onChangeText={text => props.handleInputChange('dogPersonality', text)}/>
        <Text style={styles.text}>Choose a Breed</Text>
        <View style={styles.dogPics}>
            <TouchableOpacity style={styles.borderPad}  onPress ={() =>{props.chooseBreed('labDog', 'labPuppy')}}>
              <Image style={styles.image} source={data.images.labDog}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.borderPad} onPress ={() =>{props.chooseBreed('aussieDog', 'aussiePuppy')}}>
              <Image style={styles.image} source={data.images.aussieDog}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.borderPad} onPress ={() =>{props.chooseBreed('huskyDog', 'huskyPuppy')}}>
              <Image style={styles.image} source={data.images.huskyDog}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.borderPad}  onPress ={() =>{props.chooseBreed('corgieDog', 'corgiePuppy')}}>
              <Image style={styles.image} source={data.images.corgieDog}/>
            </TouchableOpacity>
        </View>
          <TouchableOpacity style={styles.button} onPress={props.creationOfDog}>
            <Text style={styles.buttonText}> Create your dog </Text>
          </TouchableOpacity>
    </View>
    );

const styles = StyleSheet.create({
    text:{
      color:'#2D4159',
      fontSize: 20,
      fontWeight: 'bold',
    },
    button:{
      height:50,
      justifyContent: "center",
      backgroundColor: "#F172A1",
      borderWidth: 1,
      borderColor: '#F172A1',
      borderRadius: 10,
    },
    mainView:{
      alignItems:'center',
      backgroundColor:'#A1C3D1'
    },
    dogPics:{
      height:300,
      width:300,
      flexWrap:'wrap'
    },
    borderPad:{
      padding:10
    },
    image: {
      width: 125,
      height: 125,
      borderRadius: 10,
      overflow: "hidden",
      borderWidth: 3,
    },
    buttonText:{
      color:'white',
      fontWeight: 'bold',
      fontSize: 15,
      padding: 10
    },
      
});
export default CreateADog;