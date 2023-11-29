import React, {FC} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {PostImage, RootStackParams} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Detail'
>;

const PostImages: FC<PostImage> = ({title, date, hdurl, explanation}) => {
  const handleViewMorePress = () => {
    navigate('Detail', {title, date, hdurl, explanation});
  };
  const {navigate} = useNavigation<PostImageNavigationProps>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleViewMorePress}>
        <Image
          style={styles.image}
          source={hdurl ? {uri: hdurl} : require('../../assets/logo-nasa.png')}
        />
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 180,
    height: 220,
    borderWidth: 2,
    marginHorizontal: 3,
    // alignItems: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(0, 51, 160, 0.4)',
  },
  date: {
    textAlign: 'right',
    fontSize: 12,
    color: '#fff',
    marginRight: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginHorizontal: 2,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
export default PostImages;
