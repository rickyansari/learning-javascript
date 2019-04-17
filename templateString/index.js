function upper(strings, ...values) {
  let outputString = "";
  for (i = 0; i < values.length; i++) {
    outputString += `${strings[i]}${values[i].toUpperCase()}`;
  }
  outputString += `${strings[i]}`;
  return outputString;
}

var name = "kyle",
  twitter = "getify",
  topic = "JS Recent Parts";

console.log(
  upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
    "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
