import * as React from "react";
import { connect } from "react-redux";
import { Release } from "../components/release/";
import { getRecords } from "../data/records/actions";
import { getReleases } from "../data/records/selectors";
import * as styles from "./record-page.css";

class RecordPage extends React.Component<any, any> {
  componentDidMount() {
    this.props.getRecords();
  }
  render() {
    const { releases } = this.props;
    if (!releases.length) {
      return <div>Loading Records...</div>;
    }
    return (
      <div className={styles.container}>
        {releases.map(release => (
          <Release key={release.releaseId} {...release} />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    releases: getReleases(state)
  }),
  { getRecords }
)(RecordPage);
