export const pong = t =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000 * t);
  });
