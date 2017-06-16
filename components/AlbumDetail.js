import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {

	const {title, artist, thumbnail_image} = album;
	const {headerTextStyle, thumbnail_imageStyle} = styles;

	return (
		<Card>
		  <CardSection>
		   <View>
            <Image 
            	style ={thumbnail_imageStyle}
            	source={{uri: thumbnail_image}}
            />
		   </View>
		   <View style = {headerTextStyle}>
		     <Text>{title}</Text>
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
   		thumbnail_imageStyle: {
   			height: 50,
   			width: 50
   		}

   };

export default AlbumDetail;