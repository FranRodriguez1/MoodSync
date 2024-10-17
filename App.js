import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  // State to hold the generated workout
  const [workout, setWorkout] = useState('');

  // State to hold the button states
  const [buttonStates, setButtonStates] = useState({
    happy: false,
    energised: false,
    stressed: false,
    sad: false,
  });

  // Function to generate the workout and update state
  const createWorkout = () => {
    const newWorkout = ["30 mins cardio", "15 mins strength training", "10 mins flexibility"]; // List format output
    setWorkout(newWorkout); // Update the state with the new workout
  };

  // Function to toggle button states
  const toggleButton = (button) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [button]: !prevStates[button],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Purple band at the top */}
      <View style={styles.headerBand}>
        <Text style={styles.title}>MOODSYNC Fitness</Text>
        
        {/* Settings button */}
        <Pressable style={styles.settingsButton} onPress={() => { /* Nothing for now */ }}>
          <Text style={styles.settingsText}>⚙️</Text>
        </Pressable>
      </View>

      <Text style={styles.subtitle}>Generate Your Optimal Workout with AI</Text>

      <Text style={styles.prompt}>How are you feeling today?</Text>

      {/* Buttons for emotions in a 2x2 grid */}
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          {Object.keys(buttonStates).slice(0, 2).map((button) => (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                { backgroundColor: buttonStates[button] ? '#6A0DAD' : 'gray' }, // Darker purple when selected
              ]}
              onPress={() => toggleButton(button)}
            >
              <Text style={styles.buttonText}>{button.charAt(0).toUpperCase() + button.slice(1)}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {Object.keys(buttonStates).slice(2).map((button) => (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                { backgroundColor: buttonStates[button] ? '#6A0DAD' : 'gray' }, // Darker purple when selected
              ]}
              onPress={() => toggleButton(button)}
            >
              <Text style={styles.buttonText}>{button.charAt(0).toUpperCase() + button.slice(1)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Button title="GENERATE WORKOUT" onPress={createWorkout} />

      {/* White box for workout output */}
      <View style={styles.workoutBox}>
        {workout.length > 0 ? (
          workout.map((exercise, index) => (
            <Text key={index} style={styles.workoutText}>{exercise}</Text>
          ))
        ) : (
          <Text style={[styles.workoutText, { color: '#b3b3b3' }]}>Your workout will appear here</Text>
        )}
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  headerBand: {
    width: '100%',
    backgroundColor: '#6A0DAD', // Darker purple
    padding: 10,
    alignItems: 'center',
    position: 'absolute',
    top: 40, // Lowered to avoid interfering with status bar icons
  },
  settingsButton: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
  settingsText: {
    color: 'white',
    fontSize: 24,
  },
  title: {
    fontFamily: 'System',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'System',
    fontSize: 22,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 120, // Positioned higher to fill the space
  },
  prompt: {
    fontFamily: 'System',
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10, // Space between rows
  },
  button: {
    padding: 21,
    borderRadius: 5,
    margin: 10,
    width: 150, // Fixed width for the buttons
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'system',
    fontSize: 22,
    fontWeight: 'bold',
  },
  workoutBox: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'left',
  },
  workoutText: {
    fontFamily: 'system',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});
