/*   მეორე დავალგება */ 
function numJewelsInStones(jewels, stones) {
    const haveJew = [];
    const splitJew = jewels.split('');
    const splitSto = stones.split('');
    
    for (let i = 0; i < splitSto.length; i++) {
        if (splitJew.indexOf(stones[i]) !== -1 ) {
            haveJew.push(stones[i]);
        }
    }
    return haveJew.length;
  }
  
  console.log(numJewelsInStones("aA", "aAAbbbb"));
  console.log(numJewelsInStones("x", "XX"));

  /*   მესამე დავალგება */

  var isValid = function(s) {
    const filter = /\[[^\]]*\]|\([^\(]*\)|\{[^\{}]*\}/g;

    if (s.match(filter)){
        return true;
    } else {
        return false;
    }
    };

    console.log(isValid("()"));
    console.log(isValid("{}"));
    console.log(isValid("[]"));
    console.log(isValid("(]"));
    console.log(isValid("()[]{}"));