
const workers = [
    { name: "paul", alive: true, salary: 5000 },
    { name: "rob", alive: false, salary: 3000 },
    { name: "anton", alive: false, salary: 5000 },
    { name: "steven", alive: true, salary: 2000 },
    { name: "tom", alive: true, salary: 10000 },
   ]

   function highestEarner(workers) {
       if (workers.length == 0){
           return
       }
       var highestPaidWorker = workers [0]
// produce the name of the person who earns the most

for ( var i = 0; i < workers.length; i = i + 1) {
    var worker = workers[i]

    if (worker.salary > highestPaidWorker.salary) {
        highestPaidWorker = worker
    }
   
}

return highestPaidWorker.name
   } 
   console.log(highestEarner(workers))