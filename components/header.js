//Import some files from React and React-native
import React from 'react';
import { Text, View} from 'react-native';



// Create the component
const Header =() =>	{

	const {textStyle,container} =styles;

	return (
		<View style = {container}>
		<Text style ={textStyle}>MusicAlbums</Text>
		</View>
	);
};

const styles ={

		textStyle: {
		fontSize: 20,
	},
	container: {
		flex:1,
		backgroundColor:'#AAF1BE'
	}
};

//Export it to the other part of the Applications

export default Header;