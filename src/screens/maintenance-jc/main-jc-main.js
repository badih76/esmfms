import React, { useState, useEffect } from 'react';
import { Button, View, Text, PixelRatio, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faFileCirclePlus, faSwimmingPool } from '@fortawesome/free-solid-svg-icons'

const MaintenanceJC = (({ navigation }) => {
    const relFontSize = PixelRatio.get() * 42 * 0.5;
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: relFontSize, color: "teal"}}>This is Maintenance JC Screen</Text>

            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={viewStyle} onPress={() => navigation.navigate('MaintJCNew')} >
                    <FontAwesomeIcon icon={ faFileCirclePlus } size={48} color="teal" />
                    <Text style={{fontSize: relFontSize, color: "teal"}}>Add New Job Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={viewStyle} onPress={() => navigation.navigate('MaintJCEdit')}>
                    <FontAwesomeIcon icon={ faEdit } size={48} color="teal" />
                    <Text style={{fontSize: relFontSize, color: "teal"}}>Edit Existing Job Card</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity style={viewStyle} onPress={() => navigation.navigate('MainPoolReadings')} >
                    <FontAwesomeIcon icon={ faSwimmingPool } size={48} color="teal" />
                    <Text style={{fontSize: relFontSize, color: "teal"}}>Swimming Pool Readings</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
})

const viewStyle = {
    flex: 1, 
    flexDirection: "column", 
    justifyContent: "space-evenly", 
    alignItems: "center",
    height: "90%",
    backgroundColor: "lightgray",
    borderWidth: 3,
    borderColor: "teal",
    borderRadius: 10,
    margin: 25
}

export default MaintenanceJC;