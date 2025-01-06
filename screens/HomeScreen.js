import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { styles } from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    

      <View style={styles.content}>
        {/* Purple band with MoodSync is assumed to already be part of the layout */}
        
        {/* Main Logo */}
        <Image 
          source={require('../assets/purpleLogo.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        
        {/* Title */}
        <Text style={styles.title}>Generate Your Optimal Workout with AI</Text>
        
        {/* Button */}
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Mood')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
