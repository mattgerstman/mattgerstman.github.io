import * as React from 'react';
import * as styles from './App.css';
import {Release} from './components/release/';

class App extends React.Component<any, any> {
  public state: {releases: any} = {releases: []};
  componentDidMount() {
    this.loadData();
  }
  loadData(
    url = 'https://api.discogs.com/users/matthew.gerstman/collection?token=UUgLZcnyrvffWzsCrnHoZSQunKzxJFlbluYzGKqp&sort=artist',
  ) {
    fetch(url).then(response => {
      response.json().then(data => {
        const next = data.pagination.urls.next;
        if (next) {
          this.loadData(next);
        }
        this.setState(prevState => {
          return {releases: [...prevState.releases, ...data.releases]};
        });
      });
    });
  }
  render() {
    if (!this.state.releases.length) {
      return <div>Loading...</div>;
    }

    const {releases} = this.state;
    return (
      <div className={styles.container}>
        {releases.map(({basic_information}) => (
          <Release
            key={basic_information.title}
            {...basic_information}
            artist={basic_information.artists_sort}
            thumb={basic_information.huge_thumb}
          />
        ))}
      </div>
    );
  }
}

export default App;
