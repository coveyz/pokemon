

var calPoints = function(ops) {
    let 
        scoreList = [];
    for (let index = 0; index < ops.length; index++) {
      let 
          length = scoreList.length,
          score;
      switch (ops[index]) {
        case 'C':
          scoreList.pop()
          break;
       case 'D':
          score = scoreList[length - 1] * 2
          scoreList.push(score)
          break;
       case '+':
          score = Number(scoreList[length - 1]) + Number(scoreList[length -2])
          scoreList.push(score)
          break;
        default:
          scoreList.push(Number(ops[index]))
          break;
      }
    }

    const he = scoreList.reduce((acc,cur) => {
      return acc + cur
    },0)
    
    return he
};

console.log(calPoints(["5","2","C","D","+"]));
