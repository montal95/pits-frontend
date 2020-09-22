export const checkToken = (props, history) => {
  const token = JSON.parse(localStorage.getItem("state"));
  if (!token) {
    history.push("/login");
  }
};

export const calcDaysUntil = (date, interval) => {
  const timeElapsedMilliseconds = Date.now() - date;
  const timeElapsedDays = Math.floor(
    timeElapsedMilliseconds / (1000 * 60 * 60 * 24)
  );
  return interval - timeElapsedDays;
};
