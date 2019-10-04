import React, { Component } from 'react';
import { Button, Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import data from '../App Logic/PupImages.js'

const CurrentPup = (props) => (
      <View style={styles.backgroundColor}>
        <View style={styles.mainView}>
            <View style={styles.padding}>
                <Text style={styles.dogName}>{props.pup.name}</Text>
            </View>
            <View style={styles.padding}>
                <Image source={data.images[props.pup.image]} style={styles.image}/>
            </View>
            <View>
                <Text style={styles.descriptionText}>Age: {props.pup.age}</Text>
                <Text style={styles.descriptionText}>Hunger: {props.pup.hunger}</Text>
                <Text style={styles.descriptionText}>Happiness: {props.pup.happiness}</Text>
                <Text style={styles.descriptionText}>Energy: {props.pup.energy}</Text>
            </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.buttonDesign} onPress={() =>{props.pupInteractions("play", props.pup)}}>
                <Text style={styles.buttonText}> Play </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDesign} onPress={() =>{props.pupInteractions("feed", props.pup)}}>
                <Text style={styles.buttonText}> Feed </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDesign} onPress={() =>{props.pupInteractions("nap", props.pup)}}>
                <Text style={styles.buttonText}> Nap </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );

const styles = StyleSheet.create({
    backgroundColor:{
        backgroundColor:'#EDC7B7',
    },
    image: {
        width: 225,
        height: 225,
        borderRadius: 10,
        overflow: "hidden",
        borderWidth: 3,
      },
    dogName:{
     fontSize: 30,
     fontWeight: 'bold',
     color: '#123C69'
    },
    padding:{
      padding: 15
    },
    mainView:{
      height: 400,
      alignItems: 'center',
      marginTop: 40
    },
    descriptionText:{
      color: '#123C69',
      fontSize: 15,
      fontWeight: 'bold'
    },
    bottomView:{
      alignItems: 'center',
      padding:30
    },
    buttonView: {
      height: 60,
      flexDirection: 'row'
    },
    buttonDesign:{
      backgroundColor:'#123C69',
      justifyContent:'center',
      padding:30,
      borderWidth: 1,
      borderColor: 'pink',
      borderRadius:10,
    },
    buttonText:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20
    }
})

export default CurrentPup;