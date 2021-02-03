import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ArticleList from '../../components/presentational/ArticleList';
import Article from '../../components/presentational/Article';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              // render={(routerProps) => <CharacterList {...routerProps} />}
              component={ArticleList}
            />
            <Route
              exact
              path="/article/:id"
              // render={(routerProps) => <CharacterDetail {...routerProps} />}
              component={Article}
            />
          </Switch>
        </Router>
      </>
    );
  }
}
