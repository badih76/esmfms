import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MainJCEdit = (({ navigation }) => {
    const [name, setName] = useState('');
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     let d = [{id: "1", name: "One"}, {id: "2", name: "Two"}, {id: "3", name: "Three"}];
    //     setData(d);
        
    //     console.log("Starting the app");
    //   }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is Maintenance JC Screen</Text>
            <Picker selectedValue={name}
                    onValueChange={(itemValue, itemIndex) => {
                        setName(itemValue);
                }}
                style={{width: 100, border: 'solid 1px red'}}
            >
                {/* <Picker.Item label='One' value="1" /> */}
                <Picker.Item label="One" value="1"  />
                <Picker.Item label="Two" value="2"  />
                <Picker.Item label="Three" value="3"  />
                <Picker.Item label="Four" value="5"  />
                {/* {
                    data.map(d => {
                        console.log('Picker -> name: ', d.id);
                        return (<Picker.item label={d.name} value={d.id} key={d.id} />)
                    })
                } */}
            </Picker>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
      );
})

export default MainJCEdit;