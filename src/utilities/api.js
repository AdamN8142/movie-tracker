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
  return fetch('http://localhost:3000/api/users/', {
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
  .catch(error => console.log(error))
}

export const addFavorites = (movie_id, user_id, title, poster_path, release_date, vote_average, overview) => {
  fetch('http://localhost:3000/api/users/favorites/new', {
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

export const deleteFavorites = (movie_id, user_id) => {
  const url = `http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`
  fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({
      user_id,
      movie_id
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(results => console.log(results))
  .catch(error => console.log(error))
}