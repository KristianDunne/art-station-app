import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Navigation from './Navigation';
import HighlightCards from './HighlightCards';
import ExploreCards from './ExploreCards';
import TopBar from './TopBar';
import Podcasts from './Podcasts';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="light-content"></StatusBar>
          <View style={styles.section}>
            <TopBar />
          </View>
          <View style={styles.sectionEven}>
            <Text style={styles.sectionTitle}> Explore </Text>
            <ExploreCards />
          </View>
          <View style={styles.sectionOdd}>
            <Text style={styles.sectionTitle}> Highlights </Text>
            <HighlightCards navigation={this.props.navigation}/>
          </View>
          <View style={styles.sectionEven}>
            <Text style={styles.sectionTitle}> Podcasts </Text>
            <Podcasts></Podcasts>
          </View>
        </ScrollView>
        <View>
          <Navigation />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#090B22',
  },
  sectionEven: {
    paddingVertical: 10,
    backgroundColor: '#090B22',
  },
  sectionOdd: {
    paddingVertical: 10,
    backgroundColor: '#07112C',
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 25,
    marginLeft: 10,
    marginVertical: 20,
    fontWeight: 'bold',
  },
});
