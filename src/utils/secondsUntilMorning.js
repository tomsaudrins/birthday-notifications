const secondsUntilMorning = () => {
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
