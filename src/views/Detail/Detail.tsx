import React, {FC} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import {PostImage, RootStackParams} from '../../types';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '../../components/Header';

const Detail = () => {
  const {
    params: {date, title, hdurl, explanation},
  } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();
  return (
    <View style={[styles.container, styles.os]}>
      <ScrollView>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Image source={{uri: hdurl}} style={styles.image} />
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.explanation}>{explanation}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 1,
    paddingBottom: 2,
    backgroundColor: '#262626',
    // backgroundColor: 'green',
  },
  header: {
    marginTop: 4,
  },
  content: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    paddingHorizontal: 4,
  },
  image: {
    marginTop: 5,
    width: '100%',
    height: 240,
  },
  date: {
    marginBottom: 5,
    color: 'white',
    textAlign: 'right',
  },
  explanation: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  os: {
    ...(Platform.OS === 'android' && {
      paddingTop: 2,
      flex: 1,
    }),
  },
});

export default Detail;
