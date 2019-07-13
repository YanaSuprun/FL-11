const formatTime = sec => {
  let days = Math.floor(sec / 1440);
  let hours = Math.floor((sec % 1440) / 60);
  let minutes = sec % 1440 % 60;

  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));