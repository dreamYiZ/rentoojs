exports.sum = function (a, b) {
  return a + b;
};

exports.clg_line = function () {
  console.log("%c " + "-".repeat(100), "background: #F00; color: #bada55");
};

exports.clg_line_arrow = function () {
  console.log("%c " + ">".repeat(100), "background: #0F0; color: #bada55");
};

exports.clg_line_arrow_back = function () {
  console.log("%c " + "<".repeat(100), "background: #00F; color: #bada55");
};

exports.isNullUndefinedEmptyStringArrayObject = function (x) {
  return (
    x === null ||
    x === undefined ||
    x === "" ||
    (typeof x === "string" && x.trim() === "") ||
    (Array.isArray(x) && !x.length) ||
    (Object.keys(x).length === 0 && x.constructor === Object)
  );
};
