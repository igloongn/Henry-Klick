import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNav from "./src/navigation/MainNav";
import { BuyerSwitchVendor } from "./src/components/BuyerSwitchVendor";
import { PaperProvider } from 'react-native-paper';

import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		// <View style={styles.container}>
		//   <Text>Open up App.js to start working on your app!</Text>
		//   <StatusBar style="auto" />
		// </View>
		<PaperProvider>
			<BuyerSwitchVendor>
				<NavigationContainer>
					<MainNav />
					<StatusBar style="auto" />
				</NavigationContainer>
			</BuyerSwitchVendor>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
