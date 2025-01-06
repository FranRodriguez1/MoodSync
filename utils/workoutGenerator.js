const exerciseDatabase = {
    cardio: ['Run', 'Stationary Bike', 'Rowing', 'Elliptical Machine', 'Jump Rope'],
    legs: ['Barbell Hip Thrust', 'Dumbell Lunge', 'Dumbbell Squat', 'Leg Press', 'Calf Raise'],
    arms: ['Bicep Curl', 'Cable Tricep Pushdown', 'Hammer Curl', 'Preacher Curl', 'Dip'],
    shoulders: ['Dumbbell Lateral Raise', 'Arnold Press', 'Seated Shoulder Press', 'Barbell Military Press', 'Reverse Fly'],
    chest: ['Machine Fly', 'Bench Press', 'Incline Bench Press', 'Dumbbell Bench Press', 'Push-Up'],
    back: ['Cable Lat Pulldown', 'Cable Seated Row', 'Pull-Up', 'Barbell Bent-Over Row', 'Deadlift']
  };
  
  const emotionPrompts = {
    happy: [
      "Since you're in a great mood, we've added some fun and uplifting exercises to keep the energy flowing!",
      "Picked some lighthearted exercises to elevate that happy vibe. Keep the positivity going!"
    ],
    energised: [
      "Included some heavy lifting exercises to harness that energy and turn it into power!",
      "Packed in high-intensity exercises to channel your energy productively."
    ],
    stressed: [
      "Today's workout includes extra cardio. Getting your heart pumping is one of the best remedies for stress.",
      "Added some exercises to clear your mind and ease tension. Let's get that heart rate up to shake off the stress!"
    ],
    sad: [
      "Chose some high-energy exercises to help lift your spirits and turn that frown upside down.",
      "Picked intense moves to help keep your mind in the moment. Try taking shorter breaks than usual!"
    ]
  };
  
  export const generateWorkout = (activeEmotions, activeMuscleGroups, duration) => {
    const availableDurations = [8, 10, 12, 15];
  
    let selectedMuscleGroups = new Set(
      Object.entries(activeMuscleGroups)
        .filter(([_, isActive]) => isActive)
        .map(([group]) => group)
    );
  
    if (selectedMuscleGroups.size === 0) {
      selectedMuscleGroups = new Set(Object.keys(exerciseDatabase));
    }
  
    const prompts = Object.entries(activeEmotions)
      .filter(([_, isActive]) => isActive)
      .map(([emotion]) => emotionPrompts[emotion][Math.floor(Math.random() * emotionPrompts[emotion].length)]);
  
    if (prompts.length === 0) {
      prompts.push("Let's get this workout started! Ready to push your limits?");
    }
  
    const workout = [];
    const muscleGroups = Array.from(selectedMuscleGroups);
  
    let totalDuration = 0;
  
    // Helper function to calculate sets and reps for strength exercises
    const calculateSetsAndReps = (duration) => {
      const setDuration = 3.5; // Average time per set in minutes
      const numSets = Math.floor(duration / setDuration);
      const reps = [8, 10, 12, 14];
      const numReps = reps[Math.floor(Math.random() * reps.length)];
  
      return { sets: numSets, reps: numReps };
    };
  
    // Loop to build workout until the total duration is close to the target
    while (totalDuration < duration) {
      const muscleGroup = muscleGroups[workout.length % muscleGroups.length];
      const exercises = [...exerciseDatabase[muscleGroup]];
      const randomIndex = Math.floor(Math.random() * exercises.length);
  
      // Randomly choose a duration for the exercise
      let randomDuration = availableDurations[Math.floor(Math.random() * availableDurations.length)];
  
      // Check if adding this duration would exceed the total duration
      if (totalDuration + randomDuration > duration) {
        // Set the last exercise duration to whatever time is left
        randomDuration = duration - totalDuration;
      }
  
      // Add the exercise with sets and reps for strength exercises
      if (muscleGroup !== 'cardio') {
        const { sets, reps } = calculateSetsAndReps(randomDuration);
        workout.push({
          exercise: exercises[randomIndex],
          muscleGroup: muscleGroup,
          duration: `${randomDuration} min`,
          sets: sets,
          reps: reps
        });
      } else {
        workout.push({
          exercise: exercises[randomIndex],
          muscleGroup: muscleGroup,
          duration: `${randomDuration} min`
        });
      }
  
      totalDuration += randomDuration;
  
      // If the total duration matches the desired duration, break out of the loop
      if (totalDuration === duration) {
        break;
      }
    }
  
    return {
      prompts,
      exercises: workout
    };
  };
  