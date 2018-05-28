import * as React from 'react';

import * as classNames from 'classnames';
import * as styles from './release.css';

interface ReleaseProps {
  artist: string;
  className?: string;
  discogsLink: string;
  quantity: number;
  thumb: string;
  title: string;
}

export default function Release({
  artist,
  className,
  discogsLink,
  quantity,
  thumb,
  title,
}: ReleaseProps) {
  return (
    <a
      className={classNames(styles.container, className)}
      href={discogsLink}
      target="_blank"
    >
      <img alt={title} className={styles.thumb} src={thumb} />
      <div className={styles.datapoints}>
        <DataPoint name="Artist" value={artist} />
        <DataPoint name="Title" value={title} />
        {quantity !== 1 && <DataPoint name="Quantity" value={quantity} />}
      </div>
    </a>
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
