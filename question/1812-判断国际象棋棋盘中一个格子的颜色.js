/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
  const xMap = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8
  }
  const [xP, yP] = coordinates.split('');
  const x = xMap[xP]
  return (x + Number(yP) - 1) % 2 === 0 
};