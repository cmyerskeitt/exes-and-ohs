function XO(str) {
    let newArray = str.split("")
    console.log(newArray)
    let x = 0
    let o = 0
    let other = 0
    for (let i = 0; i < newArray.length; i++){
      if(newArray[i].toLowerCase() == "x"){
        x += 1
      } else if (newArray[i].toLowerCase() == "o"){
        o += 1
      } else {
        other += 1
      }
    }
    if (x == o){
      return true
    } else {
      return false
    }
}