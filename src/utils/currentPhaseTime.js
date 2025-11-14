export function currentTime(currentPhase, fun, time) {
  if (currentPhase === 'work') {
    fun(time);
  }

  if (currentPhase === 'shortBreak') {
    fun(time);
  }

  if (currentPhase === 'longBreak') {
    fun(time);
  }
}