import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

const PupList = (props) => (
      <View>
        <View>
        <Text>List Of Your Dogs</Text>
            {props.pups.map((oneP) => (
                <Text onPress = {(pup) => {props.pupClick(oneP)}}> {oneP.name}</Text>
            ))}
        </View>
      </View>
    );

export default PupList;