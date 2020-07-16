var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for (var x = 2; x < str.length; x++) {
  if (str[x - 1] % 1 === 0 && str[x] % 1 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(''));