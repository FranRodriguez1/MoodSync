import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000110', // Very dark grey
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  logo: {
    width: 300,
    height: 250,
    marginBottom: 40,
    marginTop: -80,
  },
  accountLogo: {
    position: 'absolute',
    top: 12,
    right: 20,
    width: 25,
    height: 40,
    zIndex: 100,
  },
  prompt: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#333344', // Grey background for buttons
    padding: 20,
    borderRadius: 10,
    width: '45%',
    margin: '2.5%',
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#6A0DAD',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center', // Centers the content inside the button
    alignSelf: 'center', // Centers the button itself
  },
  nextButton: {
    backgroundColor: '#6A0DAD',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    marginTop: 20,
    alignItems: 'center', // Centers the content inside the button
    alignSelf: 'center', // Centers the button itself
  },
  newWorkoutButton: {
    backgroundColor: '#6A0DAD',
    padding: 15,
    borderRadius: 8,
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center', // Centers the content inside the button
    alignSelf: 'center', // Centers the button itself
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  muscleGroupContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  muscleGroupButton: {
    padding: 15,
    borderRadius: 5,
    margin: 5,
    width: '45%', // For 2x3 grid
    backgroundColor: '#333344', // Consistent grey button background
  },
  muscleGroupText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  durationContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  durationText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  scrollView: {
    flex: 1,
  },
  workoutBox: {
    backgroundColor: '#333344', // Dark grey background for boxes
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    minHeight: 200,
    borderRadius: 10,
  },
  promptText: {
    fontSize: 16,
    color: '#CF9FFF',
    marginBottom: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  exerciseList: {
    width: '100%',
  },
  exerciseItem: {
    marginBottom: 10,
  },
  workoutText: {
    fontSize: 18,
    color: 'white', // Updated to match the dark theme
    textAlign: 'left',
  },
  exerciseDetails: {
    fontSize: 14,
    color: '#B0B0B0', // Light grey for secondary text
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 20,
  },
});
