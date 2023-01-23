function Like(names){
  // 5 случаев
  // first
  let k = names.length - 2;
  if(names.length == 0){
      return('no one likes this');
  }
  // second
  if(names.length == 1){
      return(names[0] + " " + 'likes this');
  }
  // 3
  if(names.length == 2){
      return(names[0] + " "+ 'and' + " " + names[1]+ ' ' + 'like this');
  }
  // 4
  if(names.length == 3){
      return(names[0] +", " + names[1] + " " + 'and'+' ' + names[2]+ ' ' + 'like this');
  }
  // 5
  if(names.length > 3){
      return(names[0]+ ', ' + names[1] + ' ' + 'and'+ " " + k + ' others like this');
  }
}