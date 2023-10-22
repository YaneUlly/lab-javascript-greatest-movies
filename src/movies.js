// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const sumOfScores = moviesArray.reduce((acc, movie) => {
    if (typeof movie.score === 'number') {
      return acc + movie.score;
    }
    return acc;
  }, 0);

  const scoresAvg = sumOfScores / moviesArray.length;

  return Math.round(scoresAvg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie =>
    movie.genre.includes('Drama')
  );

  if (dramaMovies.length === 0) {
    return 0;
  }

  const sumOfDramaScore = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  const avScore = sumOfDramaScore / dramaMovies.length;

  return Math.round(avScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesCopy = [...moviesArray];

  moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesTitles = moviesArray.map(movie => {
    return movie.title;
  });

  moviesTitles.sort();

  if (moviesTitles.length > moviesTitles.indexOf(20)) {
    return moviesTitles.splice(0, 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // copy movies array and transform into a string
  let moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));

  // map the movies array to turn hour into minutes
  let moviesArraynew = moviesArrayCopy.map(movie => {
    // store the number of hours and minutes
    let movieHours = 0;
    let movieMinutes = 0;

    // loop through the array
    if (movie.duration.include('h') && movie.duration.includes('min')) {
      let durationSplitted = movie.duration.split('', 2);
      movieHours = parseInt(durationSplitted[0].replace('h', ''), 10);
      movieMinutes = parseInt(durationSplitted[1].replace('min', ''), 10);
    } else if (movie.duration.includes('h')) {
      movieHours = parseInt(movie.durantion.replace('h', ''), 10);
    } else if (movie.duration.includes('min')) {
      movieMinutes = parseInt(movie.duration.replace('min', ''), 10);
    }

    movie.duration = movieHours * 60 + movieMinutes;
    return movie;
  });

  return moviesArraynew;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  // store the average scores for each year.
  const averageScoresByYear = {};

  // loop through the movies array and calculate the total score
  for (const movie of moviesArray) {
    const year = movie.year;
    const score = movie.score;

    if (!averageScoresByYear[year]) {
      averageScoresByYear[year] = { totalScore: 0, movieCount: 0 };
    }
    averageScoresByYear[year].totalScore += score;
    averageScoresByYear[year].movieCount += 1;
  }

  for (const year in averageScoresByYear) {
    const { totalScore, movieCount } = averageScoresByYear[year];
    averageScoresByYear[year].averageScore = totalScore / movieCount;
  }

  let bestYear = '';
  let bestAverageScore = 0;

  for (const year in averageScoresByYear) {
    if (averageScoresByYear[year].averageScore > bestAverageScore) {
      bestYear = year;
      bestAverageScore = averageScoresByYear[year].averageScore;
    }
  }
  return `The best year was ${bestYear} with an average score of ${bestAverageScore}`;
}
