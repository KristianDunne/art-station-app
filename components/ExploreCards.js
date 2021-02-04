import * as React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';

const images = [
  {
    source: require('../assets/allan-lee-splatterella-ingame.jpg'),
    text: 'All Channels',
    count: 348,
  },
  {
    source: require('../assets/alejandro-burdisio-garden-artstation.jpg'),
    text: 'Concept Art',
    count: 13,
  },
  {
    source: require('../assets/bryan-adams-unreal-engine-demo-super-resolution-2020-10-20-23-52-18-34.jpg'),
    text: 'Animation',
    count: 95,
  },
];

export default class HighlightCards extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView decelerationRate="fast" horizontal>
          {images.map((image) => {
            return (
              <View>
                <ImageBackground
                  source={image.source}
                  style={styles.imageBackground}></ImageBackground>
                <View style={styles.thumbnailText}>
                  <Text style={styles.text}>{image.text}</Text>
                  <Text style={styles.count}>{image.count} new</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 200,
    width: 160,
    marginHorizontal: 15,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 10,
  },
  thumbnailText: {
    marginVertical: 10,
    marginLeft: 20,
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  count: {
    color: '#14AFF1',
  },
});
