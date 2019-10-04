import React, { Component } from 'react';
import {Button, Text, View, ScrollView, TextInput, Image, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';


const CreateAPuppy = (props) => (
    <View style={styles.mainView}>
        <TextInput placeholder="Puppy's Name"  onChangeText={text => props.handleInputChange('dogName', text)}/>
        <View style={styles.choiceView}>
          <Text style={styles.text}>Choose two parents</Text>
            {props.pups.map((oneP) => {
              if(!oneP.isPup){
                return (
                  <View key={oneP.id} style={styles.padding}>
                    <View style={styles.textView}>
                        <Text  style={styles.buttonText} onPress = {(pup) => {props.parentStore(oneP)}}> {oneP.name}</Text>
                    </View>
                  </View>
              )}
            })}
        </View>
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={props.creationOfPuppy}>
            <Text style={styles.buttonText}> Create a puppy </Text>
            </TouchableOpacity>
        </View>
    </View>
    );

const styles = StyleSheet.create({
    mainView:{
      height:500,
      alignItems:'center',
      backgroundColor:'#A1C3D1',
      marginTop: 20
    },
    padding:{
      padding:10
    },
    choiceView:{
      padding:30,
      backgroundColor:'#F5E6CC',
      width: 300,
      height: 300,
      borderRadius: 10,

    },
    textView:{
      backgroundColor:'#F172A1',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonView:{
      padding:20
    },
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
    buttonText:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10
      },

          
});

export default CreateAPuppy;