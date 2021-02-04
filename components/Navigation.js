import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navButton}>
          <Feather
            name="home"
            size={24}
            style={[
              this.state.active === 'home' ? styles.activeItem : styles.navItem,
              styles.icon,
            ]}
          />
          <Text
            style={
              this.state.active === 'home' ? styles.activeItem : styles.navItem
            }>
            Home
          </Text>
        </View>
        <View style={styles.navButton}>
          <Feather
            name="smile"
            size={24}
            style={[
              this.state.active === 'community'
                ? styles.activeItem
                : styles.navItem,
              styles.icon,
            ]}
          />
          <Text
            style={
              this.state.active === 'community'
                ? styles.activeItem
                : styles.navItem
            }>
            Community
          </Text>
        </View>
        <View style={styles.navButton}>
          <Feather
            name="search"
            size={24}
            style={[
              this.state.active === 'search'
                ? styles.activeItem
                : styles.navItem,
              styles.icon,
            ]}
          />
          <Text
            style={
              this.state.active === 'search'
                ? styles.activeItem
                : styles.navItem
            }>
            Search
          </Text>
        </View>
        <View style={styles.navButton}>
          <Feather
            name="more-horizontal"
            size={24}
            style={[
              this.state.active === 'more' ? styles.activeItem : styles.navItem,
              styles.icon,
            ]}
          />
          <Text
            style={
              this.state.active === 'more' ? styles.activeItem : styles.navItem
            }>
            More
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    paddingTop: 10,
    paddingBottom: 30,
    flexDirection: 'row',
    backgroundColor: '#07041B',
    borderTopColor: 'rgba(118, 135, 151, 0.2)',
    borderTopWidth: 1,
  },
  navButton: {
    alignItems: 'center',
  },
  navItem: {
    color: '#768797',
    fontWeight: "bold"
  },
  activeItem: {
    color: '#14AFF1',
        fontWeight: "bold"
  },
  icon: {
    marginBottom: 10  },
});
