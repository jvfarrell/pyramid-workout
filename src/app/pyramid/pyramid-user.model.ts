export interface pyramidUser {
  displayName?: string;
  email?: string[];
  firstName?: string;
  lastName?: string[];
  photoUrl?: string;
  uid?: string;
  workouts?: workout[];
}

export interface workout {
  uid: string;
  exercises?: string[];
  nickname?: string;
  repHigh: string;
  restSec?: string;
}
