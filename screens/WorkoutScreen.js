import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { styles } from '../styles';
import { generateWorkout } from '../utils/workoutGenerator';

export default function WorkoutScreen({ navigation, route }) {
  const workout = generateWorkout(
    route.params.moods,
    route.params.muscleGroups,
    route.params.duration
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.workoutBox}>
          {workout.prompts.map((prompt, index) => (
            <Text key={`prompt-${index}`} style={styles.promptText}>{prompt}</Text>
          ))}
          <View style={styles.exerciseList}>
            {workout.exercises.map((item, index) => (
              <View key={`exercise-${index}`} style={styles.exerciseItem}>
                <Text style={styles.workoutText}>
                  {index + 1}. {item.exercise}
                </Text>
                <Text style={styles.exerciseDetails}>
                  {item.muscleGroup} |{' '}
                  {item.sets !== undefined && item.reps !== undefined ? (
                    `${item.sets} sets x ${item.reps} reps | ${item.duration}` // Added space after '|'
                  ) : (
                    `${item.duration}` // For cardio exercises, just print the duration
                  )}
                </Text>
              </View>
            ))}
          </View>
        </View>
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
