import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import SHomeCubes from "./SHomeCubes";
import VendorDashboard from "./VendorDashboard";
import {
	DrawerContentScrollView,
	DrawerItem,
	createDrawerNavigator,
} from "@react-navigation/drawer";

const SellerHomeContent = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<VendorDashboard navigation={navigation} />
		</View>
	);
};

// export default SellerHomeContent

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
	return <SellerHomeContent />;
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

const CustomDrawerContent = ({ navigation }) => {
	return (
		<View style={styles.drawerContainer}>
			<View style={styles.headerContainer}>
				<View>
					{/* Image */}
					<Image
						source={{
							uri:
								"https://img.freepik.com/free-vector/hello-wording-comic-speech-bubble-pop-art-style_1150-39959.jpg?w=2000",
						}}
						style={{
							width: 100,
							height: 100,
							borderRadius: 100,
						}}
					/>
					{/* Title */}

					{/* Email */}
				</View>
			</View>
			<DrawerContentScrollView>
				<DrawerItem label="Home" onPress={() => navigation.navigate("Home")} />
				<DrawerItem
					label="Profile"
					onPress={() => navigation.navigate("Profile")}
				/>
			</DrawerContentScrollView>
		</View>
	);
};

const CustomHeader = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			// drawerContent={() => <Sidebar />}
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<Drawer.Screen
				name="Home"
				component={HomeScreen}
				options={{ title: "HomeScrxsxseen" }}
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
		marginTop: 20,
		// height: 50,
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
