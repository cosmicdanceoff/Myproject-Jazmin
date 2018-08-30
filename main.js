var cows = [
  { breed: "mlkmlkmlk", origin: "mlkjmlkmlk" },
]

function renderCows(cows) {
  // return <tbody>
  var tr = document.createElement("tr")
  var td = document.createElement("td") 

  div.appendChild(tr)
  div.appendChild(td)
}

function renderCow(cow) {
       // return <tr>
       var newElement = document.createElement(cow.orgin)
       var textNode = document.createTextNode(cow.breed)
       newElement.appendChild(textNode)
  
       return newElement
}



/*
console.log(renderCow(cow[0]))
console.log(renderCows(cows))
*/











function init() {
    Tabletop.init({
      //key: 'https://docs.google.com/spreadsheets/d/14GTxRdrZgGe2sLrxX-KErQnWuNR2St25qgJHZXLNrhk/pubhtml',
      key: 'https://docs.google.com/spreadsheets/d/1hg4e7Tmwuec9D733FZ_iqSKFlLVKx9z9jyvSf5NtkD4/pubhtml',
      callback: function (tabletopData, tabletop) {
        console.log(tabletopData)
   
        var app4 = new Vue({
          el: '#app-4',
          data: {
            list: tabletopData,
          }
        })
      },
      simpleSheet: true
    })
   }
   
   window.addEventListener('DOMContentLoaded', init)