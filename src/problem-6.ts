// solution to problem 6

type Profile = { name: string; age: number; email: string };
function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
  return { ...profile, ...updates };
}