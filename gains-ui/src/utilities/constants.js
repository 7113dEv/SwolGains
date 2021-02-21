import vid1 from './videos/female-pt/female-personal-trainer.mp4';
import vid2 from './videos/female-treadmill/female-on-treadmill.mp4';
import vid3 from './videos/female-workout/workout-video.mp4';
import vid4 from './videos/male-skipping-rope/man-skipping-rope.mp4';

const constants = {
  OAUTH_CLIENT_ID: '46960929525-9o9i1qet32fio2ehgdn7eupno5rj9da5.apps.googleusercontent.com',
  GOOGLE_CALENDAR_CLIENT_ID: '389628340169-lgoq9a5am1k1e780cl38kd6h80n9kom5.apps.googleusercontent.com',
  // ----------------------------------- URL PATHS ----------------------------------- \\
  LOGIN_PATH: '/',
  HOME_PATH: '/home',
  EDUCATIONAL_PATH: '/educational',
  GENERAL_PATH: '/general-muscle-gain',
  FLEXIBLE_PATH: '/flexibility',
  AEROBIC_PATH: '/aerobic-stamina',
  HIGHER_PATH: '/higher-energy',
  GENERATE_PATH: '/generate',
  // ----------------------------------- VIDEOS ----------------------------------- \\
  videos: {
    female_pt: vid1,
    female_treadmill: vid2,
    female_workout: vid3,
    male_jumprope: vid4
  },
  // ----------------------------------- Workouts ----------------------------------- \\
  workouts: {
    chest: ['Bench Press', 'Dips', 'Incline Bench Press', 'Close-Grip Bench Press', 'Push Ups'],
    shoulder: ['Military Press', 'Side Lateral Raises', 'Front Raise', 'Arnold Press', 'Rear-Delt Fly'],
    tricep: ['Tricep Extensions', 'Overhead Extensions', 'Skull Crushers', 'Tricep Kick-Backs', 'Diamond Push Ups'],
    back: ['Pull Ups', 'Bent Over Row', 'Upright Row', 'Shrugs', 'Lower Back Hyper Extension'],
    bicep: ['Barbell Curls', 'Hammer Curls', 'Preacher Curls', 'Dumbell Curls', 'Drag Curls'],
    leg: ['Squats', 'Lunges', 'Reverse Lunges', 'Deadlifts', 'Hamstring Curls'],
    core: ['Lumber Jacks', 'Lemon Squeezes', 'Double Crunches', 'Planks', 'Hanging Knee Raises', 'Russian Twists', 'Weighted Twists', 'Crunches', 'Situps', 'Weighted Crunches']
  },
  push: ['chest', 'tricep', 'shoulder'],
  pull: ['back', 'bicep'],
  push_pull: ['chest', 'tricep', 'shoulder', 'back', 'bicep'],
  core_balance: ['core'],
  leg: ['leg'],
  chest_tri: ['chest', 'tricep'],
  back_bi: ['back', 'bicep'],
  shoulders_arms: ['shoulder', 'tricep', 'bicep'],
  three_day: ['push_pull', 'core_balance', 'leg'],
  five_day: ['push', 'leg', 'pull', 'core_balance', 'leg'],
  seven_day: ['chest_tri', 'leg', 'back_bi', 'core_balance', 'leg', 'shoulders_arms'],
};

export default constants;