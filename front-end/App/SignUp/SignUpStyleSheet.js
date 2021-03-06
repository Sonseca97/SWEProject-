//
//  SignUpStyleSheet.js
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	signUpView: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "center",
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 667,
		width: null,
	},
	titleText: {
		color: "white",
		fontFamily: "Avenir-Medium",
		fontSize: 26,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 42,
		backgroundColor: "transparent",
		marginLeft: 24,
		marginTop: 92,
		alignSelf: "stretch",
	},
	fullNameView: {
		backgroundColor: "rgba(255, 255, 255, 0.35)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.08)",
		shadowRadius: 17.5,
		shadowOpacity: 1,
		marginTop: 66,
		width: 325,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	personMaterialImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		marginLeft: 24,
		width: 10,
		height: 10,
	},
	fullNameTextInput: {
		color: "white",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		marginLeft: 9,
	},
	emailView: {
		backgroundColor: "rgba(255, 255, 255, 0.35)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.08)",
		shadowRadius: 17.5,
		shadowOpacity: 1,
		marginTop: 25,
		width: 325,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	icon24pxThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		marginLeft: 23,
		width: 11,
		height: 11,
	},
	emailAddressTextInput: {
		color: "white",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		marginLeft: 9,
	},
	dobView: {
		backgroundColor: "rgba(255, 255, 255, 0.35)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.08)",
		shadowRadius: 17.5,
		shadowOpacity: 1,
		marginTop: 25,
		width: 325,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	icon24pxTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		marginLeft: 23,
		width: 11.5,
		height: 12,
	},
	dateOfBirthTextInput: {
		color: "white",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		marginLeft: 9,
	},
	mobileView: {
		backgroundColor: "rgba(255, 255, 255, 0.35)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.08)",
		shadowRadius: 17.5,
		shadowOpacity: 1,
		marginTop: 25,
		width: 325,
		height: 50,
		flexDirection: "row",
		alignItems: "center",
	},
	icon24pxImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		marginLeft: 22,
		width: 11.5,
		height: 11.5,
	},
	mobileNumberTextInput: {
		color: "white",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		marginLeft: 10,
	},
	signUpButtonButton: {
		backgroundColor: "rgb(0, 188, 212)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.07)",
		shadowRadius: 7.5,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		marginBottom: 34,
		width: 325,
		height: 50,
	},
	signUpButtonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	signUpButtonButtonText: {
		color: "white",
		fontFamily: "Avenir-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	signInInsteadButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		marginLeft: 25,
		marginBottom: 62,
		width: 87,
		height: 21,
	},
	signInInsteadButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	signInInsteadButtonText: {
		color: "white",
		fontFamily: "Avenir-Medium",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	continueText: {
		color: "white",
		fontFamily: "Avenir-Medium",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 21,
		backgroundColor: "transparent",
		marginRight: 24,
		marginBottom: 62,
	},
})

export default styles
