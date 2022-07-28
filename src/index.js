module.exports = function toReadable (number) {
  let edinici = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];
  let numTeens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
  let desatki = ['_', '_', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
  
  if (number >= 0 && number < 10) {
    return edinici[number];
  } else if (number >= 10 && number < 20) {
    let i = Number(number.toString()[1]);
    return numTeens[i];
  } else if (number >= 20 && number < 100) {
    let a = Number(number.toString()[0]);
    let b = Number(number.toString()[1]);

    if(b===0) {
      return `${desatki[a]}`
    } else {
      return `${desatki[a]} ${edinici[b]}`
    }
  } else if (number >= 100 && number < 1000) {
    let a = Number(number.toString()[0]);
    let b = Number(number.toString()[1]);
    let c = Number(number.toString()[2]);
    
    if (b===1) {
      return `${edinici[a]} hundred ${numTeens[c]}`;
    }
    else if (b===0 && c===0) {
      return `${edinici[a]} hundred`;
    }
    else if (b===0) {
      return `${edinici[a]} hundred ${edinici[c]}`;
    }
    else if (c===0) {
      return `${edinici[a]} hundred ${desatki[b]}`;
    } else {
      return `${edinici[a]} hundred ${desatki[b]} ${edinici[c]}`;
    }
  }
}
