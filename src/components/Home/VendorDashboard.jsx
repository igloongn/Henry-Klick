import React, { useState, useEffect } from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView,
	Pressable,
} from "react-native";
import SHomeCubes from "./SHomeCubes";
import SRecentOrders from "./SRecentOrders";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import axios from "axios";
import { useBuyerSwitchVendorContext } from "../BuyerSwitchVendor";

import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";
import CustomHeader from "./SellerHomeContent";

const getLoginData = async (navigation, alternative = () => null) => {
	try {
		const value = await AsyncStorage.getItem("isLoggedIn");
		//   console.log(value)
		if (value == null) {
			navigation.navigate("login");
		} else {
			alternative();
		}
	} catch (e) {
		// error reading value
	}
};

const VendorDashboard = () => {
	const navigation = useNavigation();

	const [buysell, setBuySell] = useState(true);
	const mode_data = useBuyerSwitchVendorContext();
	const [store, setStore] = useState(null);
	const [user, setUser] = useState(null);
	// console.log(mode_data)
	const focused = useIsFocused();

	const getShopData = async () => {
		try {
			const token = await AsyncStorage.getItem("token");
			console.log("Token");
			console.log(token);
			const userresponse = await fetch(
				`https://klick-api.onrender.com/auth/user`,
				{
					method: "GET",
					mode: "no-cors",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			// const userdata = await userresponse.text();
			      const userdata = await userresponse.json();
;
			// Set the User state using use state
			setUser(userdata);
			// Set the User state in the Async Storage context
			await AsyncStorage.setItem("userdata", JSON.stringify(userdata));
			console.log('!!!!This is the user data!!!');
			// console.log(userdata["user"]);
			console.log(userdata.user);


			// const response = await fetch(`https://klick-api.onrender.com/brand/${id}`, {
			//     method: "GET",
			//     mode: 'no-cors',
			//     headers: {
			//
			//       'Authorization': `Bearer ${token}`
			//     },
			// })
		} catch (e) {
			console.log(e);
		}
	};

	if (mode_data?.mode === "buyer") {
		navigation.navigate({ name: "hometab" });
	}
	useEffect(() => {
		axios
			.get("https://klick-api.onrender.com/product/")
			.then((res) => setData(res.data.data))
			.catch((err) => console.log(res.err));
		//  .finally(item =>  setLoading(false))
	}, []);

	console.log("focused", focused);

	useEffect(() => {
		getShopData();
		() => console.log("out");
	}, [focused]);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				{/* Header */}

				<CustomHeader />

				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-around",
					}}
				>
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("productView")}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								height: 52,
								width: 52,
								backgroundColor: "#0485E8",
								borderRadius: 50,
							}}
						>
							<SimpleLineIcons name="handbag" size={24} color="white" />
						</TouchableOpacity>
						<Text style={{ marginLeft: -10 }}>Add Product</Text>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("discounts")}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								height: 52,
								width: 52,
								backgroundColor: "#1BB519",
								borderRadius: 50,
							}}
						>
							<Feather name="percent" size={24} color="white" />
						</TouchableOpacity>
						<Text style={{ marginLeft: 0 }}>Run Sales</Text>
					</View>
					<View>
						<TouchableOpacity
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								height: 52,
								width: 52,
								backgroundColor: "#EB270B",
								borderRadius: 50,
							}}
						>
							<Octicons name="comment-discussion" size={24} color="white" />
						</TouchableOpacity>
						<Text style={{ marginLeft: 3 }}>Support</Text>
					</View>
				</View>

				<View
					style={{
						display: "flex",
						flexDirection: "row",
						marginLeft: 0,
						marginTop: 60,
					}}
				>
					<SHomeCubes name={"Income"} />
					<SHomeCubes name={"Total Orders"} />
				</View>

				<View
					style={{
						display: "flex",
						flexDirection: "row",
						marginLeft: 0,
						marginTop: 20,
					}}
				>
					<SHomeCubes name={"Average sales"} />
					<SHomeCubes name={"Impressions"} />
				</View>

				<Text
					style={{
						color: "#98999A",
						fontSize: 12,
						fontWeight: "400",
						marginTop: 20,
					}}
				>
					Overall sales
				</Text>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						marginLeft: 0,
						marginTop: 0,
					}}
				>
					<Text
						style={{
							color: "#0B0B0E",
							fontSize: 20,
							fontWeight: "500",
							marginTop: 0,
						}}
					>
						N2,768,058
					</Text>
					<View
						onPress={(buysell) => setBuySell(!buysell)}
						style={{
							height: 23,
							width: 58,
							borderRadius: 20,
							backgroundColor: "#FEDD00",
							position: "absolute",
							alignItems: "center",
							marginTop: 0,
							marginLeft: 120,
							justifyContent: "center",
						}}
					>
						<Text style={{ fontSize: 11 }}>23.5%</Text>
					</View>
				</View>

				<Text
					style={{
						color: "#0B0B0E",
						fontSize: 20,
						fontWeight: "500",
						marginTop: 30,
					}}
				>
					Recent Orders
				</Text>
				<SRecentOrders />

				{/* <View style={{ marginTop: 1000 }}></View> */}
			</ScrollView>
			{/* <TouchableOpacity
				onPress={() => {
					getLoginData(navigation, () => navigation.navigate("selleronboard"));
				}}
				style={{
					height: 42,
					width: 120,
					borderRadius: 20,
					backgroundColor: "#FEDD00",
					position: "absolute",
					alignItems: "center",
					justifyContent: "center",
					top: 150,
					left: 0,
				}}
			>
				<Text style={{ fontSize: 11 }}>Create Store</Text>
			</TouchableOpacity> */}
			<TouchableOpacity
				onPress={() => {
					mode_data?.switchMode("buyer");
					console.log("hello");
				}}
				style={{
					height: 42,
					width: 120,
					borderRadius: 20,
					backgroundColor: "#FEDD00",
					position: "absolute",
					alignItems: "center",
					justifyContent: "center",
					bottom: 10,
					right: 0,
				}}
			>
				<Text style={{ fontSize: 11 }}>Switch to Buyer</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
	},
});

export default VendorDashboard;
