import * as React from 'react';

import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const podcasts = [
  {
    image: require('../assets/episode-6.jpg'),
    creator: 'Episode 6',
    caption: 'Artstation',
  },
  {
    image: require('../assets/episode-5.jpg'),
    creator: 'Episode 5',
    caption: 'Artstation',
  },
  {
    image: require('../assets/episode-4.jpg'),
    creator: 'Episode 4',
    caption: 'Artstation',
  },
  {
    image: require('../assets/episode-3.jpg'),
    creator: 'Episode 3',
    caption: 'Artstation',
  },
];

export default class Comments extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView decelerationRate="fast" horizontal>
          {podcasts.map((item) => {
            return (
              <View>
                <ImageBackground
                  source={item.image}
                  style={styles.imageBackground}>
                  <View style={styles.playContainer}>
                    <FontAwesome5
                      name="play"
                      size={12}
                      color="#ffffff"
                      style={styles.playIcon}
                    />
                  </View>
                </ImageBackground>

                <View style={styles.info}>
                  <Text style={styles.creator}>{item.creator}</Text>
                  <Text style={styles.caption}>{item.caption}</Text>
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
    height: 150,
    width: 150,
    marginHorizontal: 15,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    padding: 10,
  },
  playContainer: {
    alignSelf: 'flex-end',
    borderRadius: 50,
    borderColor: "rgba(71, 74, 81, 0.5)",
    borderWidth: 10,
    backgroundColor: "rgba(71, 74, 81, 0.5)",
  },
  playIcon: {
    paddingLeft: 2,
  },
  info: {
    marginTop: 10,
  },
  creator: {
    color: '#606F81',
    fontSize: 16,
    textAlign: 'center',
  },
  caption: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
