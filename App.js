import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import MoodScreen from './screens/MoodScreen';
import MuscleGroupScreen from './screens/MuscleGroupScreen';
import DurationScreen from './screens/DurationScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import { Image } from 'react-native'; // Import Image for the logo
import { styles } from './styles'; // Import your styles if needed

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6A0DAD',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center', // Center the title
          headerRight: () => (
            <Image
              source={require('./assets/accountLogo.png')} // Use the account logo
              style={styles.accountLogo} // Apply the accountLogo style
              resizeMode="contain"
            />
          ),
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'MoodSync Fitness' }}
        />
        <Stack.Screen 
          name="Mood" 
          component={MoodScreen}
          options={{ title: 'Mood' }} // Example title for the Mood screen
        />
        <Stack.Screen 
          name="MuscleGroups" 
          component={MuscleGroupScreen}
          options={{ title: 'Muscle Groups' }}
        />
        <Stack.Screen 
          name="Duration" 
          component={DurationScreen}
          options={{ title: 'Duration' }}
        />
        <Stack.Screen 
          name="Workout" 
          component={WorkoutScreen}
          options={{ title: 'Workout' }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
