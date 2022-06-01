import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaintenanceJC from "../screens/maintenance-jc/main-jc-main";
import MainJCNew from '../screens/maintenance-jc/main-jc-new';
import MainJCEdit from '../screens/maintenance-jc/main-jc-edit';
import MainPoolReadings from "../screens/maintenance-pr/main-poolreadings";

const Stack = createStackNavigator();

const MaintenanceStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MaintJCMain" component={MaintenanceJC} />
            <Stack.Screen name="MaintJCNew" component={MainJCNew} />
            <Stack.Screen name="MaintJCEdit" component={MainJCEdit} />
            <Stack.Screen name="MainPoolReadings" component={MainPoolReadings} />
        </Stack.Navigator>
    )
}

export default MaintenanceStackNavigator;