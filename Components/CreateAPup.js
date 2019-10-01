import React, { Component } from 'react';
import {Button, Text, View, ScrollView, TextInput, Image, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import CreateADog from "./CreateADog.js"
import CreateAPuppy from "./CreateAPuppy.js"

const CreateAPup = (props) => (
    <View style={styles.mainView}>
      <View style={styles.bottomView}>
        <View style={styles.buttonView}>
            <View style={styles.padding}>
                <TouchableOpacity onPress={() => {props.toggle("cDT")}} style={styles.buttonBorder}>
                    <Text style={styles.buttonText}> Create A Dog </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.padding}>
                <TouchableOpacity onPress={() => {props.toggle("cPT")}} style={styles.buttonBorder}>
                    <Text style={styles.buttonText}> Create A Puppy </Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
      {props.cDT && <CreateADog
        creationOfDog= {props.creationOfDog} 
        handleInputChange={props.handleInputChange}
        chooseBreed={props.chooseBreed}
        creationOfDog={props.creationOfDog}
        creationOfPuppy={props.creationOfPuppy}
      />}
      {props.cPT && <CreateAPuppy
        handleInputChange={props.handleInputChange}
        creationOfPuppy={props.creationOfPuppy}
        parentStore={props.parentStore}
        pups={props.pups}
      />}
    </View>
    );
    const styles = StyleSheet.create({
        mainView:{
          backgroundColor:'#A1C3D1',
          height:575
        },
        padding:{
          padding:5
        },
        bottomView:{
            alignItems: 'center',
            justifyContent:'center',
            marginTop:15
          },
          buttonView:{
            height: 50,
            flexDirection: 'row',
          },
          buttonText:{
            color:'white',
            fontWeight: 'bold',
            fontSize: 15,
            padding: 10
          },
          buttonBorder:{
            borderWidth: 1,
            borderColor: '#F172A1',
            borderRadius: 10,
            backgroundColor: "#F172A1",
          }
    });

export default CreateAPup;