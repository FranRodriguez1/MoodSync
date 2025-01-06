import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from '../styles';

export default function MuscleGroupScreen({ navigation, route }) {
  const [muscleGroupStates, setMuscleGroupStates] = useState({
    cardio: false,
    legs: false,
    arms: false,
    shoulders: false,
    chest: false,
    back: false,
  });

  const toggleMuscleGroup = (group) => {
    setMuscleGroupStates((prevStates) => ({
      ...prevStates,
      [group]: !prevStates[group],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.prompt}>Which muscle groups would you like to target?</Text>
      <View style={styles.muscleGroupContainer}>
        {Object.keys(muscleGroupStates).map((group) => (
          <TouchableOpacity
            key={group}
            style={[
              styles.muscleGroupButton,
              { backgroundColor: muscleGroupStates[group] ? '#6A0DAD' : 'gray' },
            ]}
            onPress={() => toggleMuscleGroup(group)}
          >
            <Text style={styles.muscleGroupText}>
              {group.charAt(0).toUpperCase() + group.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Duration', {
          moods: route.params.moods,
          muscleGroups: muscleGroupStates,
        })}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}