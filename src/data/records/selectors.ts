import _ from 'lodash';
import * as fp from 'lodash/fp';

const getRecords = fp.get('records');
const getArtistSort = fp.get('basic_information.artists_sort');

function sanitizeRelease(release) {
  return {
    ...release,
    basic_information: {
      ...release.basic_information,
      artists_sort: getArtistSort(release).replace(/['"]+/g, ''),
    },
  };
}

export const getReleases = _.flow(
  getRecords,
  fp.map(sanitizeRelease),
  fp.sortBy(getArtistSort),
);
