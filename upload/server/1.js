var name = "spring";
(function () {
  console.log(name)
  if (typeof name === 'undefined') {
    console.log('if', name)
  } else {
    console.log(name)
  }
})()