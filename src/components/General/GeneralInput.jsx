import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

const GeneralInput = ({
	name,
	placeholder,
	value,
	onChangeValue,
	requestAmount,
	password,
	height,
	width,
	marginLeft,
	onPressOut,
	error,
	inputMode,
}) => {
	// console.log(requestAmount)
	return (
		<View style={styles.container}>
			<View style={{ width: "85%" }}>
				<Text style={styles.text}>{name}</Text>
			</View>
			<TextInput
				style={{
					...styles.input,
					height: height,
					width: width,
					marginLeft: marginLeft,
				}}
				onChangeText={(text) => onChangeValue(text)}
				placeholder={placeholder}
				secureTextEntry={password}
				value={value}
				leftIcon={<AntDesign name="user" size={24} color="black" />}
				onPressOut={onPressOut}
				inputMode={inputMode}
				error={error}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 25,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	text: {
		fontSize: 13,
		marginBottom: 10,
		fontWeight: "500",
		fontSize: 16,
	},
	input: {
		height: 32,
		padding: 2,
		backgroundColor: "#F8F8F8",
		//borderColor: '#BABABA',
		borderRadius: 10,
		width: 333,
		borderWidth: 1,
		borderColor: "#C4C4C4",
	},
	desc: {
		height: 135,
	},
});

export default GeneralInput;
