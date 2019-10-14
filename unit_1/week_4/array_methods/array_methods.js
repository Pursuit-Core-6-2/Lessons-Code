function forEachElem(arr, callback) {
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // invoke our callback on each item of the array
     callback(arr[i])
  }
}
// forEachElem(arr, (elem) => {
//   console.log(elem)
// })
// Named ES5 function that will be used as callback
// function logVal(currentElem, index) {
//   console.log(index + " " +currentElem)  
// }
// arr.push(4) //Array method
// arr.forEach(logVal)
// With callback with side effect
// let arr = [1, 2, 3]
// let doubled = []
// arr.forEach((currentElem) => {
//   doubled.push(currentElem * 2)
// })
// console.log(doubled)
// #### Map #####
// let arr = [1, 2, 3]
// let result = arr.map((currentElem) => {
//   return currentElem * 2
// })
// console.log('original', arr)
// console.log(result)
let films = [
  {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
  },
  {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0
  },
  {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
  },
  {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
  }
]
let mappedFilms = films.map((movie) => {
  return { 
    title: movie.title,
    rating: movie.rating
  }
})
// console.log(mappedFilms)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let filteredArr = arr.filter((currentElem) => {
//   if (currentElem % 2 === 0) {
//     return true
//   } else {
//    return false
//  }
//   return currentElem % 2 === 0;
// })
// console.log(filteredArr)
let bestFilms = films.filter(film => {
  return film.rating === 5.0;
}).map(film => {
  return { title: film.title }
})
// let mappedBestFilms = bestFilms.map(film => {
//   return { title: film.title }
// })
// console.log(bestFilms)

// let nums = [1, 2, 3, 4] //10

// let sum = 0;
// nums.forEach(num => sum += num);
// console.log(sum)

function adder(total, currentElem) {
  return total + currentElem;
}

let nums = [1, 2, 6, 3, 4] //10

// let total = nums.reduce((total, currentElem) => {
//   return total * currentElem;
// }, 1)

// let largest = nums.reduce((acc, crrElem) => {
//   console.log(`acc: ${acc}, crr: ${crrElem}`)
//   if (crrElem > acc) {
//     return crrElem
//   } else {
//     return acc;
//   }
// })

const cities = [
  {
    city: "Chongqing",
    population: 30
  },
  {
    city: "Shanghai",
    population: 24
  },
  {
    city: "Beijing",
    population: 21
  },
  {
    city: "Lagos",
    population: 16
  }
]

// const totalPopulation = cities.reduce((sum, city) => {
//   console.log(typeof sum)
//   return sum + city.population
// });

// console.log(totalPopulation)

let arr = [1, 2, -1, 3]
let allPositive = arr.every(elem => {
  console.log(elem)
  if (elem > 0) {
    return true
  }
  return false
})

console.log(allPositive)