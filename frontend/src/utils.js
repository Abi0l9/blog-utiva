export const handleTime = (time) => {
  const res = time.split(" ").slice(0, 5);
  return `${res[0]}, ${res[1]} ${res[2]}, ${res[3]}. ${res[4].slice(0, -3)} `;
};
