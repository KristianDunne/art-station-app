import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
const logo = require('../assets/27_Artstation_logo_logos-512.webp');

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo}></Image>
        <View>
          <View style={styles.menuRight}>
            <View style={styles.notifications}>
              <FontAwesome5 name="bolt" size={12} color="#14AFF1" />
              <Text style={styles.notificationCount}>34</Text>
            </View>
            <View>
              <Image
                style={styles.profilePic}
                source={require('../assets/7ee08d687cc4a8d517cab6c8b93a2781.jpg')}></Image>
              <View style={styles.badge}></View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  logo: {
    height: 40,
    width: 40,
  },
  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notifications: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(20, 175, 241, 0.3)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  notificationCount: {
    color: '#ffffff',
    marginLeft: 10,
    fontWeight: "bold"
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 80,
    marginLeft: 10,
  },
  badge: {
    position: 'absolute',
    backgroundColor: '#F72586',
    width: 13,
    height: 13,
    right: -2,
    top: 1,
    borderRadius: 26,
  },
});
