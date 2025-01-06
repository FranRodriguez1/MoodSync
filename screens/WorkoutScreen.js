import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { styles } from '../styles';
import { generateWorkout } from '../utils/workoutGenerator';

export default function WorkoutScreen({ navigation, route }) {
  const [currentWorkout, setCurrentWorkout] = useState(
    generateWorkout(
      route.params.moods,
      route.params.muscleGroups,
      route.params.duration
    )
  );

  const regenerateWorkout = () => {
    const newWorkout = generateWorkout(
      route.params.moods,
      route.params.muscleGroups,
      route.params.duration
    );
    setCurrentWorkout(newWorkout);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.workoutBox}>
          {currentWorkout.prompts.map((prompt, index) => (
            <Text key={`prompt-${index}`} style={styles.promptText}>{prompt}</Text>
          ))}
          <View style={styles.exerciseList}>
            {currentWorkout.exercises.map((item, index) => (
              <View key={`exercise-${index}`} style={styles.exerciseItem}>
                <Text style={styles.workoutText}>
                  {index + 1}. {item.exercise}
                </Text>
                <Text style={styles.exerciseDetails}>
                  {item.muscleGroup} |{' '}
                  {item.sets !== undefined && item.reps !== undefined ? (
                    `${item.sets} sets x ${item.reps} reps | ${item.duration}`
                  ) : (
                    `${item.duration}`
                  )}
                </Text>
              </View>
            ))}
          </View>
        </View>
        
        <TouchableOpacity
          style={styles.regenerateButton}
          onPress={regenerateWorkout}
        >
          <Text style={styles.buttonText}>Regenerate Workout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.newWorkoutButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Create New Workout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}