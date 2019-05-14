import React from 'react'
import { shallow } from 'enzyme'
import {CardContainer} from './CardContainer'

describe('CardContainer', () => {
  let wrapper;
  let mockMovies = [{
    "vote_count": 4354,
    "id": 299534,
    "video": false,
    "vote_average": 8.6,
    "title": "Avengers: Endgame",
    "popularity": 395.542,
    "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    "original_language": "en",
    "original_title": "Avengers: Endgame",
    "genre_ids": [
      12,
      878,
      28
    ],
    "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    "adult": false,
    "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    "release_date": "2019-04-24"
  }, {
    "vote_count": 4354,
    "id": 299534,
    "video": false,
    "vote_average": 8.6,
    "title": "Avengers: Endgame",
    "popularity": 395.542,
    "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    "original_language": "en",
    "original_title": "Avengers: Endgame",
    "genre_ids": [
      12,
      878,
      28
    ],
    "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    "adult": false,
    "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    "release_date": "2019-04-24"
  }]

  let mockUser = {id: 1, name:'dude'}

  let moviesToShow

  beforeEach(() => {
    wrapper = shallow(<CardContainer user={mockUser} movies={mockMovies}/>)
  })
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match default state', () => {
    expect(wrapper.state()).toEqual({favorites: false})
  })

  
})