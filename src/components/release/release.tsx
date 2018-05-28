import * as React from 'react';

import * as classNames from 'classnames';
import * as styles from './release.css';

interface ReleaseProps {
  artist: string;
  className?: string;
  thumb: string;
  title: string;
}

export default function Release({
  artist,
  className,
  thumb,
  title,
}: ReleaseProps) {
  return (
    <div className={classNames(styles.container, className)}>
      <img alt={title} className={styles.thumb} src={thumb} />
      <div className={styles.datapoints}>
        <DataPoint name="Artist" value={artist} />
        <DataPoint name="Title" value={title} />
      </div>
    </div>
  );
}

function DataPoint({name, value}) {
  return (
    <div className={styles.datapoint}>
      <span className={styles.datapoint_name}>{name}: </span>
      <span>{value}</span>
    </div>
  );
}
