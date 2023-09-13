/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const isWeekend = (day: DaysOfWeek): boolean => {
  if (day === DaysOfWeek.Sunday || day === DaysOfWeek.Saturday) {
    return true
  }
  return false
}