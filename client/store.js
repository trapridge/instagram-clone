import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import { rootReducer } from './reducers/index'

import posts from './data/posts'
import comments from './data/comments'

const defaultState = { posts, comments }

export const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension())
export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').rootReducer
    store.replaceReducer(nextRootReducer)
  })
}
