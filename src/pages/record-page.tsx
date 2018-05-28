import * as React from 'react';
import {connect} from 'react-redux';
import {Release} from '../components/release/';
import {getRecords} from '../data/records/actions';
import {getReleases} from '../data/records/selectors';
import * as styles from './record-page.css';

class RecordPage extends React.Component {
  componentDidMount() {
    this.props.getRecords();
  }
  render() {
    const {releases} = this.props;
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

export default connect(
  state => ({
    releases: getReleases(state),
  }),
  {getRecords},
)(RecordPage);
