import * as React from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const images = [
  {
    image: require('../assets/livia-prima-mountain-goat-final.jpg'),
    creator: 'Allan Lee',
    caption: 'Runeterra: Mountain Goat',
  },
  {
    image: require('../assets/nick-timofeev-red-scarves-flowing-in-the-wind-filter.jpg'),
    creator: 'NicK Timofeev',
    caption: 'Red scarves flowing in the wind',
  },
];

export default class HighlightCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView decelerationRate="fast" horizontal>
          {images.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigation('Comments')}>
                <ImageBackground
                  source={item.image}
                  style={styles.imageBackground}>
                  <Feather name="bookmark" size={24} color="white" />
                </ImageBackground>
                <View style={styles.info}>
                  <Text style={styles.creator}>{item.creator}</Text>
                  <Text style={styles.caption}>{item.caption}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 250,
    width: 350,
    marginHorizontal: 15,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 10,
  },
  info: {
    marginLeft: 20,
    marginVertical: 10,
  },
  creator: {
    color: '#606F81',
    fontSize: 16,
  },
  caption: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
