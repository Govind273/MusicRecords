import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

  const { title, artist, thumbnail_image, image } = album;
  const { headerTextStyle, 
    headerTitleStyle,
    imageStyle,
    thumbnail_imageStyle,
    thumbnail_imageContainerStyle
  } = styles;

	return (
	  <Card>
        <CardSection>
          <View style={ thumbnail_imageContainerStyle }>
            <Image 
               style={thumbnail_imageStyle}
               source={{ uri: thumbnail_image }}
            />
		   </View>
		   <View style = {headerTextStyle}>
		     <Text style={headerTitleStyle}>{title}</Text>
		     <Text>{artist}</Text>
		   </View>
		 </CardSection>
		 <CardSection>
		 	
		 	<Image 
		 		style ={imageStyle}
		 		source={{uri: image}} />
		 	
		</CardSection>

		<CardSection>
		  <Button />
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
   		},
   		imageStyle: {
   			height: 300,
   			flex: 1,
   			width: null
   		}

   };

export default AlbumDetail;