import vid1 from './videos/female-pt/female-personal-trainer.mp4';
import vid2 from './videos/female-treadmill/female-on-treadmill';
import vid3 from './videos/female-workout/workout-video.mp4';
import vid4 from './videos/male-skipping-rope/man-skipping-rope.mp4';

const constants = {
  OAUTH_CLIENT_ID: '46960929525-9o9i1qet32fio2ehgdn7eupno5rj9da5.apps.googleusercontent.com',
  GOOGLE_CALENDAR_CLIENT_ID: '389628340169-lgoq9a5am1k1e780cl38kd6h80n9kom5.apps.googleusercontent.com',
  // ----------------------------------- URL PATHS ----------------------------------- \\
  LOGIN_PATH: '/',
  HOME_PATH: '/home',
  GENERAL_PATH: '/general-muscle-gain',
  FLEXIBLE_PATH: '/flexibility',
  AEROBIC_PATH: '/aerobic-stamina',
  HIGHER_PATH: '/higher-energy',
  TARGETED_PATH: '/targeted-muscle-groups',
  // ----------------------------------- VIDEOS ----------------------------------- \\
  videos: {
    female_pt: vid1,
    female_treadmill: vid2,
    female_workout: vid3,
    male_jumprope: vid4
  },
};

export default constants;