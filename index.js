function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  let rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}

function deepestChild(){
  let current = document.getElementById('grand-node').querySelectorAll('div')

  for (var i = 0; i < current.length; i++) {
    if(current.length - 1 === i){
      return current[i]
    }
  }
}
