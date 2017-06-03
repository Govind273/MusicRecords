import React from 'react';
import { Text, View} from 'react-native';


import AlbumList from './AlbumsList';
import Header from './header';

// Create the component
const Album =() =>{
	const {container,header,body}=styles;
	return (
		<View style={container}>
			<View style={header}>
			<Header headerText={'Albumwa'}/>
			</View>
			<View style={body}>
			<AlbumList />
			</View>
		</View>

		);
};

const styles = {

	conatiner: {
		backgroundColor: "red"
	},

	header: {
		height: 60
	},

	body: {
		height:100
	}
};

export default Album;