workers = [
  { name: "paul", alive: true, salary: 5000 },
  { name: "rob", alive: false, salary: 3000 },
  { name: "anton", alive: false, salary: 5000 },
  { name: "steven", alive: true, salary: 2000 },
  { name: "tom", alive: true, salary: 10000 },
 ]

 // send a card to every dead workers family
 function sendCards(workers) {
  for (var i = 0; i < workers.length; i++) {
    var worker = workers[i];
    if (worker.alive == false) {
      console.log("sending card to the beloved family of", worker.name)
    }
  }
 }

 // totale loonkost per maand
 function loonkost(workers) {
  var total = 0
  for (var i = 0; i < workers.length; i++) {
    var worker = workers[i];
    if (worker.alive) {
      total = total + worker.salary
    }
  }
  return total
 }