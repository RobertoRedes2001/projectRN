/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TextInput, Button, Appbar, Switch, Surface, Chip } from 'react-native-paper';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [select1, setSelect1] = React.useState(false);
  const [select2, setSelect2] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [chipPress, setIsChipOn] = React.useState(false);

  function cambiarColor(){
      if(value=false){
        color="green";
        setIsChipOn(true);
      }else{
        color="red";
        setIsChipOn(false);
      }

  }

  return (

    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Section title="TextInput (mail)"/>
        <TextInput
          style={{paddingTop:"3%"}}
          placeholder='email'
          label="email"
          mode='outlined'
        />
        <Section title="Button (amb Text i Icona)"/>
         <Button icon="alien" mode="contained">
          Alien
        </Button>
        <Button icon="alien" mode="contained" textColor='black'>
          ALIEN
        </Button>
        <Button icon="alien" mode="outlined" 
        textColor='#6750A4' buttonColor='black'>
          ALIEN
        </Button>
        <Button icon="alien" mode="contained"
         textColor='#6750A4' buttonColor='black'>
          ALIEN
        </Button>
        <Section title="Switch ¿Necesites un descans?"/>
        <Switch color='red' value={isSwitchOn} onValueChange={onToggleSwitch}/>
        <Section title="Boto dins d'un component surface"/>
        <Surface>
        <Button icon="alien" mode="contained"
         textColor='#6750A4' buttonColor='white'>
          Alien
        </Button>
        </Surface>
        <Section title="Provant Chips"/>
        <Chip width={125}            
            icon={select1 ? "web" : "web"}
            style={styles.closeChip}
            selected={select1}
            selectedColor={select1 ? 'red' : 'gray'}
            onPress={() => setSelect1(!select1)}>
            Internet</Chip>
        <Chip width={125}            
            icon={select2 ? "web" : "web"}
            style={styles.closeChip}
            selected={select2}
            selectedColor={select2 ? 'red' : 'gray'}
            onPress={() => setSelect2(!select2)}>
            WiFi</Chip>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
