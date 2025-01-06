import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from '../styles';

export default function MoodScreen({ navigation }) {
  const [buttonStates, setButtonStates] = useState({
    happy: false,
    energised: false,
    stressed: false,
    sad: false,
  });

  const toggleButton = (button) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [button]: !prevStates[button],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.prompt}>How are you feeling today?</Text>
      <View style={styles.buttonContainer}>
        {Object.keys(buttonStates).map((button) => (
          <TouchableOpacity
            key={button}
            style={[
              styles.button,
              { backgroundColor: buttonStates[button] ? '#9A80C1' : '#333344' },
            ]}
            onPress={() => toggleButton(button)}
          >
            <Text style={styles.buttonText}>
              {button.charAt(0).toUpperCase() + button.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('MuscleGroups', { moods: buttonStates })}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}