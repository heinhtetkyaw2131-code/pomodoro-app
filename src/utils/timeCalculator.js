export function countSeconds(totalSeconds) {
  const seconds = totalSeconds % 60;

  return seconds;
}

export function countMinutes(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);

  return minutes;
}