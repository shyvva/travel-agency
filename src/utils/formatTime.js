export const formatTime = seconds => {
  if (typeof seconds === 'undefined') {
    return null;
  } else if (typeof seconds === 'string') {
    return null;
  } else if (typeof seconds === 'function') {
    return null;
  } else if ( seconds < 0) {
    return null;
  } else {
    const sec = Math.floor(seconds%60).toString().padStart(2, '0');
    const min = Math.floor((seconds/60)%60).toString().padStart(2, '0');
    const hour = Math.floor(seconds/3600).toString().padStart(2, '0');
    return `${hour}:${min}:${sec}`;
  }
};
