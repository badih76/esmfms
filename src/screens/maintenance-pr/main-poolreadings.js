import React, { useState, useEffect } from 'react';
import { Button, View, Text, TextInput, StyleSheet, PixelRatio } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const relFontSize = PixelRatio.get() * 42 * 0.5;

const MainPoolReadings = (({ navigation }) => {
    const [name, setName] = useState('');
    const [ clients, setClients ] = useState([]);
    const [ client, setClient ] = useState('');

    const [ projects, setProjects ] = useState([]);
    const [ project, setProject ] = useState('');

    const [ contracts, setContracts ] = useState([]);
    const [ contract, setContract ] = useState('');

    const [ pools, setPools ] = useState([]);
    const [ pool, setPool ] = useState('');

    useEffect(() => {
        axios({
            method: "get",
            url: "http://10.0.2.2:3000/clients"
        })
        .then((response) => {
            let clients = [...response.data.resultReturn];
            setClients(clients);
        })
        .catch(err => {
            console.log("Error: ", err);
        })
      }, []);

    const onClientChange = (cl) => {
        axios({
            method: "get",
            url: "http://10.0.2.2:3000/projects/projectsForClient/" + cl
        })
        .then((response) => {
            let projects = [...response.data.resultReturn];
            setProjects(projects);
        })
        .catch(err => {
            console.log("Error: ", err);
        })
    }

    const onProjectChange = (prj) => {
        console.log("Selected Project: ", prj);
        axios({
            method: "get",
            url: "http://10.0.2.2:3000/contracts/contractsForProject/" + prj
        })
        .then((response) => {
            let contracts = [...response.data.resultReturn];
            setContracts(contracts);
        })
        .catch(err => {
            console.log("Error: ", err);
        })
    }
    
    return (
        <View style={styles.containerView}>
            <Text style={{fontSize: relFontSize, color: "teal"}}>Pool Readings</Text>
            <View style={styles.inputBlockView}>
                <Text style={styles.inputElementLabel}>Client:</Text>
                <View style={styles.pickerView}>
                    <Picker selectedValue={client}
                        onValueChange={(itemValue, itemIndex) => {
                            setClient(itemValue);
                            onClientChange(itemValue);
                        }}
                        style={{width: "100%" }}
                        itemStyle={{backgroundColor: "lightblue"}}
                    >
                        {
                            clients.map(d => {
                                return (<Picker.Item label={d.clName} value={d.id} key={d.id} />)
                            })
                        }
                    </Picker>
                </View>
            </View>

            <View style={styles.inputBlockView}>
                <Text style={styles.inputElementLabel}>Project:</Text>
                <View style={styles.pickerView}>
                    <Picker selectedValue={project}
                        onValueChange={(itemValue, itemIndex) => {
                            setProject(itemValue);
                            onProjectChange(itemValue);
                        }}
                        style={{width: "100%" }}
                        itemStyle={{backgroundColor: "lightblue"}}
                    >
                        {
                            projects.map(d => {
                                return (<Picker.Item label={d.prjName} value={d.id} key={d.id} />)
                            })
                        }
                    </Picker>
                </View>
            </View>

            <View style={styles.inputBlockView}>
                <Text style={styles.inputElementLabel}>Contract:</Text>
                <View style={styles.pickerView}>
                    <Picker selectedValue={contract}
                        onValueChange={(itemValue, itemIndex) => {
                            setContract(itemValue);
                        }}
                        style={{width: "100%" }}
                        itemStyle={{backgroundColor: "lightblue"}}
                    >
                        {
                            contracts.map(d => {
                                return (<Picker.Item label={d.contName} value={d.id} key={d.id} />)
                            })
                        }
                    </Picker>
                </View>
            </View>

            <View style={styles.inputBlockView}>
                <Text style={styles.inputElementLabel}>Pool:</Text>
                <View style={styles.pickerView}>
                    <Picker selectedValue={name}
                        onValueChange={(itemValue, itemIndex) => {
                            setName(itemValue);
                        }}
                        style={{width: "100%" }}
                        itemStyle={{backgroundColor: "lightblue"}}
                    >
                        {
                            clients.map(d => {
                                return (<Picker.Item label={d.clName} value={d.id} key={d.id} />)
                            })
                        }
                    </Picker>
                </View>
            </View>
            
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
      );
})

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    inputBlockView: {
        width: "100%",
        marginBottom: 15
    },
    containerView: {
        flex: 1, 
        alignItems: 'center', 
        padding: 25
    },
    pickerView: {
        width: "100%", 
        backgroundColor: "white", 
        borderWidth: 1, 
        borderStyle: "solid", 
        borderColor: "lightgray",
        borderRadius: 10 
    },
    inputElementLabel: {
        fontSize: relFontSize * 0.50, 
        fontWeight: "bold",
        color: "teal"
    }
  });

export default MainPoolReadings;

{/* <TextInput 
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="useless placeholder"
                    //keyboardType="numeric"
                /> */}