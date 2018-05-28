import _ from 'lodash';
import * as fp from 'lodash/fp';

const getRecords = fp.get('records');
const getRecordsArray = _.flow(getRecords, fp.map(value => value));
const getArtistSort = fp.get('artist');

function sanitizeRelease(release) {
  return {
    ...release,
    artist: getArtistSort(release).replace(/['"]+/g, ''),
  };
}

export const getReleases = _.flow(
  getRecordsArray,
  fp.map(sanitizeRelease),
  fp.sortBy(getArtistSort),
);
