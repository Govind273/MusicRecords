import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {

	const {title, artist, thumbnail_image} = album;
	const {headerTextStyle, 
		headerTitleStyle,
		thumbnail_imageStyle,
		thumbnail_imageContainerStyle
    } = styles;

	return (
		<Card>
		  <CardSection>
		   <View style ={thumbnail_imageContainerStyle}>
            <Image 
            	style ={thumbnail_imageStyle}
            	source={{uri: thumbnail_image}}
            />
		   </View>
		   <View style = {headerTextStyle}>
		     <Text style={headerTitleStyle}>{title}</Text>
		     <Text>{artist}</Text>
		   </View>
		 </CardSection>
		</Card>
	);

};
	
   const styles = {
   		headerTextStyle: {
   			flexDirection: 'column',
   			justifyContent: 'space-around'
   		},
   		headerTitleStyle: {
   			fontSize: 18
   		},

   		thumbnail_imageStyle: {
   			height: 50,
   			width: 50
   		},
   		thumbnail_imageContainerStyle: {
   			justifyContent: 'center',
   			alignItems: 'center',
   			marginLeft: 10,
   			marginRight: 10,
   		}

   };

export default AlbumDetail;