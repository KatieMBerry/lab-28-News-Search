import React from 'react';
import ArticleList from '../../components/presentational/ArticleList';

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
          </Switch>
        </Router>
      </>
    );
  }
}
