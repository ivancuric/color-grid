/* Fisher-Yates shuffle (https://bost.ocks.org/mike/shuffle/) */

export function shuffleArray(array: number[]) {
  let m = array.length,
    t: number,
    i: number;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
