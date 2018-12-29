let string1 = "ashfaq";
let string2 = "ansari";

function lcs({ str1 = "", sl1, str2 = "", sl2 }) {
  if (!sl1 || !sl2) {
    return 0;
  }
  let lcs = 0;
  for (var i = 0; i < str1.length; i++) {
    let commonLength = 0;
    let topIndex = i;
    if (!str2.includes(str1[i])) continue;
    for (var j = 0; j < str2.length; j++) {
      if (str1[topIndex] === str2[j]) {
        commonLength++;
        topIndex++;
      } else {
        continue;
      }
    }
    lcs = lcs < commonLength ? commonLength : lcs;
  }
  return lcs;
}

console.log(
  "lcs",
  lcs({
    str1: string1,
    sl1: string1.length - 1,
    str2: string2,
    sl2: string2.length - 1
  })
);
function LCS(S, n, T, m) {
  if (n === -1 || m === -1) return 0;
  let result;
  if (S[n] === T[m]) {
    result = 1 + LCS(S, n - 1, T, m - 1);
  } else {
    result = max(LCS(S, n - 1, T, m), LCS(S, n, T, m - 1));
  }
  return result;
}

function max(a, b) {
  return a > b ? a : b;
}

console.log(
  "LCS",
  LCS(string1, string1.length - 1, string2, string2.length - 1)
);

let TDArray = string1.split("").map(element => {
  let row = [];
  string2.split("").map(item => row.push(null));
  return row;
});

function LCSMemoization(S, n, T, m) {
  if (n === -1 || m === -1) return 0;
  if (TDArray[n][m] !== null) return TDArray[n][m];
  let result;
  if (S[n] === T[m]) {
    result = 1 + LCSMemoization(S, n - 1, T, m - 1);
  } else {
    result = max(
      LCSMemoization(S, n - 1, T, m),
      LCSMemoization(S, n, T, m - 1)
    );
  }
  TDArray[n][m] = result;
  return result;
}

console.log(
  "LCSMemoization: ",
  LCSMemoization(string1, string1.length - 1, string2, string2.length - 1)
);
