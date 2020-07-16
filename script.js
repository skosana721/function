let nums = [24,8,23,32,5,62];

function arrange(a, b) {
  if (a > b) return 1;
  if (b > a) return -1;

  return 0;
}

nums.sort(arrange);