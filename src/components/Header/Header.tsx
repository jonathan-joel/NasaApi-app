import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity>
          <Text style={styles.title}>Explore</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onLongPress={() => {
            console.log('longpress');
          }}>
          <Image
            style={styles.image}
            source={require('../../assets/logo-nasa.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
});
export default Header;
