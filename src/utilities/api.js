export const postNewUser = (name, email, password) => {
  fetch('http://localhost:3000/api/users/new', {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      password
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(results => console.log(results))
  .catch(error => console.log(error))
}

export const signInUser = (email, password) => {
  fetch('http://localhost:3000/api/users/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(results => console.log(results))
  .catch(error => console.log(error))
}

export const addFavorites = (movie_id, user_id, title, poster_path, release_date, vote_average, overview) => {
  fetch('http://localhost:3000/api/users/1', {
    method: 'POST',
    body: JSON.stringify({
      movie_id, 
      user_id, 
      title, 
      poster_path, 
      release_date, 
      vote_average, 
      overview
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(results => console.log(results))
  .catch(error => console.log(error))
}
