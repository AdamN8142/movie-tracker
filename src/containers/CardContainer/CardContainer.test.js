import React from 'react'
import { shallow } from 'enzyme'
import {CardContainer} from './CardContainer'

describe('CardContainer', () => {
  let wrapper;
  let mockFavorites = [{
    "vote_count": 4354,
    "id": 299534,
    "movie_id": 299534,
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
    "release_date": "2019-04-24",
    "favorite": true
  }]

  let mockFavoritesArray = [{
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
    "release_date": "2019-04-24",
    "favorite": true
  }]
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
    "release_date": "2019-04-24",
    "favorite": true
  }, {
    "vote_count": 4354,
    "id": 299535,
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
    "release_date": "2019-04-24",
      "favorite": false
  }]

  let mockUser = {id: 1, name:'dude'}

  let moviesToShow

  let mockToggleFavorite = jest.fn()
  
  let mockFetchFavorites = jest.fn()

  let mockUrl
  
  
  
  beforeEach(() => {
    wrapper = shallow(<CardContainer user={mockUser} movies={mockMovies} favorites={mockFavorites} toggleFavorite={mockToggleFavorite} />)
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMovies)
    }))
    mockUrl = 'adam.adam.adam.com'
  })
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match default state', () => {
    expect(wrapper.state()).toEqual({favorites: false})
  })

  it('should call toggleFavorite when matchFavorites is called', () => {
    wrapper.instance().matchFavorites()

    expect(mockToggleFavorite).toHaveBeenCalledWith(mockFavoritesArray)
  })

  it('should set favorites state to true when showAllFavorites is called', () => {
    const expected = {
      favorites: true
    }

    wrapper.instance().showAllFavorites()


    expect(wrapper.state()).toEqual(expected)
  })

  it('should call fetchFavorites in show all favorites', () => {
    const spy = jest.spyOn(wrapper.instance(), 'fetchFavorites')
    wrapper.instance().showAllFavorites()

    expect(spy).toHaveBeenCalled()
  })

  it('should change state to false when showAllMovies is called ', () => {
    wrapper.state({favorites: true})

    wrapper.instance().showAllMovies()

    expect(wrapper.state()).toEqual({favorites: false})
  })

  it.skip('should call fetchMovies with the correct URL', () => {
    wrapper.instance().fetchMovies();
    expect(wrapper.instance().fetchMovies()).toHaveBeenCalled()
  })

  it('should reassign movies to show to mock movies', () => {
    const expected =wrapper.instance().displayCards();

    expect(expected).toEqual(mockMovies)
  })

  it('should reassign movies to show to mock favorites', () => {
    wrapper.instance().showAllFavorites()
    const expected =wrapper.instance().displayCards();

    expect(expected).toEqual(mockFavoritesArray)
  })
})