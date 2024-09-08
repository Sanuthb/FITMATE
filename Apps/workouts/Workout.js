const workout_musclebuilding_data = [
    {
        Title:'PUSH EXERCISE',
        workout1:{
            Name: 'Bench Press', 
            sets:'3',
            reps:'8'           
        },
        workout2:{
            Name: 'Seated Dumbbell Shoulder Press', 
            sets:'3',
            reps:'8'           
        },
        workout3:{
            Name: 'Incline Dumbbell Press ', 
            sets:'3',
            reps:'8'           
        },
        workout4:{
            Name: 'Side Lateral Raises', 
            sets:'2',
            reps:'10-12'           
        },
        workout5:{
            Name: 'Triceps Pressdowns', 
            sets:'2',
            reps:'8-10'           
        },
        workout6:{
            Name: 'Overhead Triceps Extension', 
            sets:'2',
            reps:'8-10'           
        }

    },
    {
        Title:'PULL EXERCISE',
        workout1:{
            Name: 'Bent-over Row', 
            sets:'3',
            reps:'8'           
        },
        workout2:{
            Name: 'Pull Ups ', 
            sets:'3',
            reps:'8'           
        },
        workout3:{
            Name: 'Barbell Shrugs', 
            sets:'3',
            reps:'8'           
        },
        workout4:{
            Name: 'Face Pulls', 
            sets:'2',
            reps:'10-12'           
        },
        workout5:{
            Name: 'Barbell Curl', 
            sets:'2',
            reps:'8-10'           
        },
        workout6:{
            Name: 'Dumbbell Hammer Curl', 
            sets:'2',
            reps:'8-10'           
        }

    },
    {
        Title:'LEG/ABS EXERCISE',
        workout1:{
            Name: 'Squats', 
            sets:'3',
            reps:'8'           
        },
        workout2:{
            Name: 'Romanian Deadlifts ', 
            sets:'3',
            reps:'8'           
        },
        workout3:{
            Name: 'Leg Press', 
            sets:'3',
            reps:'8'           
        },
        workout4:{
            Name: 'Leg Curl', 
            sets:'2',
            reps:'10-12'           
        },
        workout5:{
            Name: 'Calf Raise', 
            sets:'2',
            reps:'8-10'           
        },
        workout6:{
            Name: 'Hanging Leg Raise', 
            sets:'2',
            reps:'8-10'           
        }

    },
]
const workout_fatloss_data = [
    {
        Title:'UPPER BODY EXERCISE',
        workout1:{
            Name: 'Incline Dumbbell Press', 
            sets:'3',
            reps:'8'           
        },
        workout2:{
            Name: 'Bent Over Row', 
            sets:'3',
            reps:'8'           
        },
        workout3:{
            Name: 'Smith Machine Shoulder Press', 
            sets:'3',
            reps:'8'           
        },
        workout4:{
            Name: 'Alternating Seated Dumbbell', 
            sets:'3',
            reps:'10-12'           
        },
        workout5:{
            Name: 'Lying Tricep Extension', 
            sets:'3',
            reps:'8-10'           
        },
        workout6:{
            Name: 'Floor Leg Raise', 
            sets:'3',
            reps:'12'           
        }

    },
    {
        Title:'LOWER BODY',
        workout1:{
            Name: 'Dumbbell Squats', 
            sets:'3',
            reps:'8'           
        },
        workout2:{
            Name: 'Romanian Deadlifts', 
            sets:'3',
            reps:'8'           
        },
        workout3:{
            Name: 'Leg press', 
            sets:'3',
            reps:'8'           
        },
        workout4:{
            Name: 'walking Lunges', 
            sets:'3',
            reps:'8'           
        },
        workout5:{
            Name: 'Seated Calf Raises', 
            sets:'3',
            reps:'8'           
        },
        workout6:{
            Name: 'Crunches', 
            sets:'3',
            reps:'12'           
        }

    },
    {
        Title:'UPPER BODY',
        workout1:{
            Name: 'Wide Grip Lat Pull Down', 
            sets:'3',
            reps:'8'           
        },
        workout2:{
            Name: 'Flat Bench Press', 
            sets:'3',
            reps:'8'           
        },
        workout3:{
            Name: 'Lateral Raises', 
            sets:'3',
            reps:'8'           
        },
        workout4:{
            Name: 'Hammer Dumbbell Curl', 
            sets:'3',
            reps:'8'           
        },
        workout5:{
            Name: 'Straight Bar triceps Extension', 
            sets:'2',
            reps:'8-10'           
        },
        workout6:{
            Name: 'Bicycle Crunches', 
            sets:'3',
            reps:'12'           
        }

    },
    {
        Title:'LOWER BODY',
        workout1:{
            Name: 'Squats', 
            sets:'3',
            reps:'8'           
        },
        workout2:{
            Name: 'Deadlifts', 
            sets:'3',
            reps:'8'           
        },
        workout3:{
            Name: 'Dumbbell Step Up', 
            sets:'3',
            reps:'8'           
        },
        workout4:{
            Name: 'Leg Press', 
            sets:'3',
            reps:'8'           
        },
        workout5:{
            Name: 'Seated Calf Raises', 
            sets:'3',
            reps:'8'           
        },
        workout6:{
            Name: 'Ball Crunches', 
            sets:'3',
            reps:'12'           
        }

    },
]

const workout_weightloss_data = [
    {
        Title:'UPPER BODY EXERCISE',
        workout1:{
            Name: 'Incline Bench Press', 
            sets:'3',
            reps:'8',
            min:'-'         
        },
        workout2:{
            Name: 'One Arm Dumbbell Row', 
            sets:'3',
            reps:'8',
            min:'-'         
        },
        workout3:{
            Name: 'Seated Barbell Press', 
            sets:'3',
            reps:'8',
            min:'-'         
        },
        workout4:{
            Name: 'Pull Ups', 
            sets:'3',
            reps:'10-12',
            min:'-'         
        },
        workout5:{
            Name: 'Skullcrushers', 
            sets:'3',
            reps:'12' ,
            min:'-'         
        },
        workout6:{
            Name: 'Dumbbell Curl', 
            sets:'3',
            reps:'12' ,
            min:'-'         
        },
        workout7:{
            Name: 'Cardio', 
            sets:'-',
            reps:'-' ,
            min:'10min'         
        }

    },
    {
        Title:'LOWER BODY EXERCISE',
        workout1:{
            Name: 'Squats', 
            sets:'3',
            reps:'8',
            min:'-'         
        },
        workout2:{
            Name: 'Leg Curl', 
            sets:'3',
            reps:'8',
            min:'-'         
        },
        workout3:{
            Name: 'Leg Extension', 
            sets:'3',
            reps:'8',
            min:'-'         
        },
        workout4:{
            Name: 'Leg Press Calf Raise', 
            sets:'3',
            reps:'10-12',
            min:'-'         
        },
        workout5:{
            Name: 'Plank', 
            sets:'3',
            reps:'8-10',
            min:'-'         
        },
        workout6:{
            Name: 'Twisting Hanging Knee Raise', 
            sets:'3',
            reps:'12' ,
            min:'-'         
        },
        workout7:{
            Name: 'Cardio', 
            sets:'-',
            reps:'-' ,
            min:'10min'         
        }

    },
    {
        Title:'UPPER BODY EXERCISE',
        workout1:{
            Name: 'Dumbbell Bench Press', 
            sets:'3',
            reps:'8',
            min:'-'         
        },
        workout2:{
            Name: 'Barbell Row', 
            sets:'3',
            reps:'8',
            min:'-'         
        },
        workout3:{
            Name: 'Dumbbell Lateral Raise', 
            sets:'3',
            reps:'8',
            min:'-'         
        },
        workout4:{
            Name: 'Lat Pull Down', 
            sets:'3',
            reps:'10-12',
            min:'-'         
        },
        workout5:{
            Name: 'Cable Tricep Extensions', 
            sets:'3',
            reps:'8-10',
            min:'-'         
        },
        workout6:{
            Name: 'Skullcrushers', 
            sets:'3',
            reps:'12' ,
            min:'-'         
        },
        workout7:{
            Name: 'EZ Bar Preacher Curl', 
            sets:'3',
            reps:'12' ,
            min:'-'         
        },
        workout7:{
            Name: 'Cardio', 
            sets:'-',
            reps:'-' ,
            min:'10min'         
        }

    },
    {
        Title:'LOWER BODY EXERCISE',
        workout1:{
            Name: 'Leg Press', 
            sets:'3',
            reps:'8',
            min:'-'         
        },
        workout2:{
            Name: 'Stiff Leg Deadlift', 
            sets:'3',
            reps:'8',
            min:'-'         
        },
        workout3:{
            Name: 'Walking Dumbbell Lunge', 
            sets:'3',
            reps:'8',
            min:'-'         
        },
        workout4:{
            Name: 'Seated Calf Raise', 
            sets:'3',
            reps:'10-12',
            min:'-'         
        },
        workout5:{
            Name: 'Cable Crunch', 
            sets:'3',
            reps:'8-10',
            min:'-'         
        },
        workout6:{
            Name: 'Russian Twist', 
            sets:'3',
            reps:'12' ,
            min:'-'         
        },
        workout7:{
            Name: 'Cardio', 
            sets:'-',
            reps:'-' ,
            min:'10min'         
        }

    },
   
]

export {workout_musclebuilding_data,workout_fatloss_data,workout_weightloss_data}