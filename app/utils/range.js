/**
 * Return array of numbers starting and ending at specified numbers
 * @source http://stackoverflow.com/a/3746752
 */
export default function range(start, end) {
  var foo = [];
  for (var i = start; i <= end; i++) {
    foo.push(i);
  }
  return foo;
}
