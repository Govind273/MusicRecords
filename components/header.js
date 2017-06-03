//Import some files from React and React-native
import React from 'react';
import { Text, View} from 'react-native';



// Create the component
const Header =(props) =>	{

	const {textStyle,container} =styles;

	return (
		<View style = {container}>
		<Text style ={textStyle}>{props.headerText}</Text>
		<Text style = {textStyle}>{props.name}</Text>
		</View>
	);
};

const styles ={

		textStyle: {
		fontSize: 20,
	},
	container: {
		flex:1,
		backgroundColor:'#AAF1BE',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		elevation: 2,
		position: 'relative'
		
	}
};

//Export it to the other part of the Applications

export default Header;