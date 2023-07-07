// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) {}

// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) {}

// // Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {}

// // Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore(moviesArray) {}

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(moviesArray) {}

// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(moviesArray) {}

// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {}

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {}


//Iteration 1 : All Directors

function getAllDirectors(movies) {
    return movies.map(movie => movie.director)
    
  }
  
  const directors = getAllDirectors(movies)
  console.log(directors)
  
  
  
  // const directors = movies.map(movie => movie.director);
  // console.log(directors);
  
  //Iteration 1: Bonus [Clean the directors]
  
  function getAllDirectorsClean(movies) {
    const directorsSet = new Set()
  
    movies.forEach(movie => {
      directorsSet.add(movie.director)
    })
  
    return Array.from(directorsSet)
  }
  console.log(getAllDirectorsClean(movies))
  
  
  //Iteration 2: Drama movies by Steven Spielberg 
  
  function howManyMovies(movies) {
    const filteredMovies = movies.filter(movie => {
      return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
    })
  
    return filteredMovies.length
  }
  
  console.log(howManyMovies(movies))
  
  
  //Iteration 3: Average score of all movies rounded to 2 decimals 
  
  function scoresAverage(movies) {
    if (movies.length === 0) {
      return 0;
    }
  
    const totalScores = movies.reduce((sum, movie) => sum + movie.score, 0);
    const averageScore = totalScores / movies.length;
  
    return averageScore.toFixed(2);
  }
  
  console.log(scoresAverage(movies))
  
  
  //Iteration 4: Average score of all drama movies rounded to 2 decimals
  
  function dramaMoviesScore(movies) {
    let totalScore = 0
    let dramaCount = 0
  
    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i]
      if (movie.genre.includes('Drama')) {
        totalScore += movie.score;
        dramaCount++
      }
    }
  
    if (dramaCount === 0) {
      return 0 // if there is no drama in our lives, sorry in the 'array'. 
    }
  
    const averageScore = totalScore / dramaCount
    return averageScore.toFixed(2)
  }
  
  console.log(dramaMoviesScore(movies))
  
  //Iteration 5: sort the movies in ascending order by their release year
  
  function orderByYear(moviesArray) {
  
    // Shallow copy 
    const clonedArray = moviesArray.slice();
  
    // Array based on the year property in ascending order
    clonedArray.sort((a, b) => a.year - b.year);
  
    return clonedArray;
  }
  
  const sortedMovies = orderByYear(movies);
  console.log(sortedMovies);
  
  
  
  // Iteration 6: Alphabetic Order using title key
  
  function orderAlphabetically() {
    const clonedArray = [...movies];
    clonedArray.sort((a, b) => a.title.localeCompare(b.title));
    const movieTitles = clonedArray.map(movie => movie.title);
    return movieTitles.slice(0, 20);
  }
  
  const sortedTitles = orderAlphabetically();
  console.log(sortedTitles);
  
  
  // Iteration 7: Change Time Format 
  
  
  //I divided into little pieces to understand this madness xD
  
  // Copy of the movies array
  const moviesCopy = movies.slice();
  
  // Convert duration from hours to minutes
  
  function turnHoursToMinutes(movies) {
    return movies.map(movie => {
  
      // New object to avoid modifying the original array
      const newMovie = { ...movie };
  
      // Split the duration string into hours and minutes
      const durationParts = newMovie.duration.split(' ');
      if (durationParts.length === 2) {
  
        // Extract the hours and minutes from the duration string
        const hours = parseInt(durationParts[0].slice(0, -1));
        const minutes = parseInt(durationParts[1].slice(0, -3));
  
        // Calculate the total duration in minutes
        const totalMinutes = hours * 60 + minutes;
  
        // Update the duration property with the total minutes
        newMovie.duration = totalMinutes;
      } else {
        // Handle the case when duration is in minutes only
        const minutes = parseInt(durationParts[0].slice(0, -3));
  
        // Update the duration property with the minutes
        newMovie.duration = minutes;
      }
  
      return newMovie;
    });
  }
  
  const moviesWithMinutes = turnHoursToMinutes(moviesCopy);
  console.log(moviesWithMinutes);
  
  
  // Iteration 8: Best yearly score average 
  
  //I use a lot of help for this one.
  
  function bestYearAvg(movies) {
    // Create an object to store the total score and count of movies for each year
    const yearStats = {};
  
    // Iterate through each movie
    for (const movie of movies) {
      const year = movie.year;
      const score = movie.score;
  
      // If the year is not already in the yearStats object, initialize its stats
      if (!yearStats[year]) {
        yearStats[year] = {
          totalScore: 0,
          movieCount: 0
        };
      }
  
      // Add the score to the totalScore and increment the movie count for the year
      yearStats[year].totalScore += score;
      yearStats[year].movieCount++;
    }
  
    let bestYear = null;
    let bestAverage = 0;
  
    // Iterate through the years in yearStats object to find the best year with highest average score
    for (const year in yearStats) {
      const averageScore = yearStats[year].totalScore / yearStats[year].movieCount;
  
      // Update the bestYear and bestAverage if the current year has a higher average score
      if (averageScore > bestAverage) {
        bestYear = year;
        bestAverage = averageScore;
      }
    }
  
    return `The best year was ${bestYear} with an average score of ${bestAverage.toFixed(1)}`;
  }
  
  console.log(bestYearAvg(movies));
  
  
  
  