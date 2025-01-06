import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from '../styles';

export default function DurationScreen({ navigation, route }) {
  const [duration, setDuration] = useState(60);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.prompt}>How long would you like to work out?</Text>
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{duration} minutes</Text>
        <Slider
          style={styles.slider}
          minimumValue={20}
          maximumValue={120}
          step={5}
          value={duration}
          onValueChange={setDuration}
          minimumTrackTintColor="#9A80C1"
          maximumTrackTintColor="#333344"
          thumbTintColor="#9A80C1"
        />
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Workout', {
          moods: route.params.moods,
          muscleGroups: route.params.muscleGroups,
          duration: duration,
        })}
      >
        <Text style={styles.buttonText}>Generate Workout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
