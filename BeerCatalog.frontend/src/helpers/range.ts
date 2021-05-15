const range = (start: number, end: number | void, step: number = 1): number[] => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 1;
  }
  for (let i = start; i <= end; i += step) {
    output.push(i);
  }
  return output;
};

export default range;
