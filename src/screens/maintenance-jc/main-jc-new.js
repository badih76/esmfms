import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MainJCNew = (({ navigation }) => {
    const [name, setName] = useState('');
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     let d = [{id: "1", name: "One"}, {id: "2", name: "Two"}, {id: "3", name: "Three"}];
    //     setData(d);
        
    //     console.log("Starting the app");
    //   }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Create New Maintenance Job Card</Text>
            
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
      );
})

export default MainJCNew;