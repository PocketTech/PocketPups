import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const PupList = (props) => (
      <View style={styles.backgroundColor}>
        <View>
          <View style={styles.textSpacer}>
            <Text style={styles.descriptionText}>Click on a Pup's name to interact with it! </Text>
          </View>
          <View>
            {props.pups.map((oneP) => (
              <View style={styles.spacer}>
                <View style={styles.boxSpace}>
                  <Text style={styles.white} onPress = {(pup) => {props.pupClick(oneP)}} > {oneP.name}</Text>
                </View>
              </View>
            ))}
            </View>
        </View>
      </View>
    );

const styles = StyleSheet.create({
    backgroundColor:{
      backgroundColor:'#1F2833',
      height:560,
      alignItems: 'center'
    },
    textSpacer:{
      marginTop:30,
    },
    spacer:{
      padding:30,
      justifyContent:'center'
    },
    boxSpace:{
      height:75,
      width: 300,
      padding: 40,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#66FCF1',
    },
    descriptionText:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    white: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
    }
 
});

export default PupList;