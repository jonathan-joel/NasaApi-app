import React, {FC} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {PostImage, RootStackParams} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Detail'
>;

const TodaysImage: FC<PostImage> = ({date, title, hdurl, explanation}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();

  const handleViewMorePress = () => {
    navigate('Detail', {title, date, hdurl, explanation});
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: hdurl}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>

      { <View style={styles.buttonContainer}>
        <Button title="View" color="#840b82" />
      </View> }

      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleViewMorePress}>
          <Text style={styles.button}>View more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(68, 68, 157, 0.6)',
    marginTop: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0)',
    borderRightColor: 'rgba(0, 0, 0, 0)',
    borderLeftColor: 'rgba(0, 0, 0, 0)',
    padding: 1,
    borderBottomColor: '#fff',
    paddingBottom: 10,
  },

  image: {
    width: '100%',
    height: 240,
    borderWidth: 2,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  date: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#721d71',
    width: 100,
    marginTop: 4,
  },
  button: {
    fontSize: 16,
    color: '#fff',
    padding: 3,
  },
});
export default TodaysImage;
