import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
		</View>
	);
};

const ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Profile Screen</Text>
		</View>
	);
};

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerText}>My App</Text>
		</View>
	);
};

const Sidebar = () => {
	return (
		<View style={styles.sidebarContainer}>
			<Text>Sidebar Content</Text>
		</View>
	);
};

const CustomHeader = () => {
	return (
		<Drawer.Navigator initialRouteName="Home" drawerContent={() => <Sidebar />}>
			<Drawer.Screen
				name="Home"
				component={HomeScreen}
				options={{ title: "HomeScrsssseen" }}
			/>
			<Drawer.Screen name="Profile" component={ProfileScreen} />
		</Drawer.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	headerContainer: {
		height: 50,
		backgroundColor: "#f1f1f1",
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	sidebarContainer: {
		flex: 1,
		backgroundColor: "#f9f9f9",
		padding: 20,
	},
});

export default CustomHeader;
