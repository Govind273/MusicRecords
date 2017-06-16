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
            <Image source={{uri: thumbnail_image}}/>
		   </View>
		   <View>
		     <Text>{title}</Text>
		     <Text>{artist}</Text>
		   </View>
		 </CardSection>
		</Card>
	);

};
	
   const styles = {
   		headerTextStyle: {
   			flexDirection: 'row',
   			justifyContent: 'space-around'
   		},
   		thumbnail_imageStyle: {
   			
   		}

   };

export default AlbumDetail;