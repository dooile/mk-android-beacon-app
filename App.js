// @ts-check

import React, {Component} from 'react';
import {
  Button,
  DeviceEventEmitter,
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PromoCard from './app/components/PromoCard';
import { Header } from 'native-base';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    DeviceEventEmitter.addListener('EventReminder', event => {
      console.log({event});
      // Add your Business Logic over here
    });
    this.disable();
  }

  show() {
    console.log({NativeModules});
    NativeModules.ToastExample.show(
      'awesome',
      NativeModules.ToastExample.SHORT,
    );
  }
  enable() {
    NativeModules.ToastExample.enable();
  }
  disable() {
    NativeModules.ToastExample.disable();
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <Header />
              {/* <View style={styles.sectionContainer}>
                <View style={styles.sectionDescription}>
                  <Button title="Press me" onPress={this.show} />
                </View>
                <Text style={styles.sectionTitle}>Botão do amor</Text>
                <View style={styles.sectionDescription}>
                  <Button title="enable me" onPress={this.enable} />
                </View>
                <View style={styles.sectionDescription}>
                  <Button title="disable me" onPress={this.disable} />
                </View>
              </View> */}
              <View style={styles.sectionContainer}>
                <PromoCard />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
