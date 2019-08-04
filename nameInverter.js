const nameInverter = function(name) {
  let result = [];
  let tempName = "";
  if (name === undefined) { //throws error for 'undefined'
    return "Error";
  };
  
  if (name === "") {
    return tempName;
  }
  tempName = (name.trim()).split(' ');
  // const lastIndex = tempName[0].length -1;
  // if (tempName[lastIndex] === '.') {
  //   console.log(lastIndex);
  //   return '';
  // }
  
  switch (tempName.length) {
    case 1:
      if (tempName[0].indexOf('.') > 0) {
        return '';
      } else {
        return tempName[0];
      }
      break;
    case 2:
      if (tempName[0].indexOf('.') > 0) {
        return tempName;
      } else {
        return tempName.reverse();
      }
      break;
    case 3:
      result.push(tempName[0]);
      result.push(tempName[2]);
      result.push(tempName[1]);
      break;
  }
  return result;
}

module.exports = nameInverter;