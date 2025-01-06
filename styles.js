import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
    paddingHorizontal: 20, // Ensures title text stays away from the screen edges
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10, // Adds spacing between logo and title
  },
  accountLogo: {
    position: 'absolute',
    top: 12, // Adjust based on the band position
    right: 20, // Add spacing from the right edge
    width: 25, // Adjust size
    height: 40,
    zIndex: 100, // Ensure it overlays the purple band
  },
  prompt: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    width: '45%', // Ensures two buttons per row
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#6A0DAD',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  nextButton: {
    backgroundColor: '#6A0DAD',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginTop: 20,
  },
  newWorkoutButton: {
    backgroundColor: '#6A0DAD',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
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
    marginBottom: 20,
  },
  muscleGroupButton: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    minWidth: 100,
  },
  muscleGroupText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  durationContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
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
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 0,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    minHeight: 200,
    borderRadius: 10,
  },
  promptText: {
    fontSize: 16,
    color: '#6A0DAD',
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
    color: 'black',
    textAlign: 'left',
  },
  exerciseDetails: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 20,
  },
});