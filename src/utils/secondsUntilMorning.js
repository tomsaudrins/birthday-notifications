const secondsUntilMorning = () => {
 /*
 * Calculates the difference between now
 * and 8 am next morning and returns the
 * time in ms.
 */
  const dateNow = new Date();
  const dateNight = new Date(
    dateNow.getFullYear(),
    dateNow.getMonth(),
    dateNow.getDate() + 1,
    8,
    0,
    0
  );
  return dateNight.getTime() - dateNow.getTime();
};

module.exports = secondsUntilMorning;
