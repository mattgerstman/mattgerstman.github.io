import * as _ from 'lodash';
import {ActionTypes} from './actions';
import {Release} from './types';

interface StateShape {
  [releaseId: number]: Release;
}
const defaultState: StateShape = {};

function parseRelease(apiRelease: any): Release {
  const basicInformation = _.get(apiRelease, 'basic_information', {});
  const {
    artists_sort,
    formats,
    huge_thumb,
    sales_history,
    title,
    url,
  } = basicInformation;

  return {
    artist: artists_sort,
    collectionIds: [apiRelease.collection_id],
    discogsLink: `https://discogs.com/${url}`,
    format: formats,
    quantity: 1,
    releaseId: apiRelease.release_id,
    thumb: huge_thumb,
    title,
    value: sales_history,
  };
}

function mergeRecordSuccess(state: StateShape, payload): StateShape {
  const newState = {...state};
  payload.forEach(release => {
    const releaseId = release.release_id;
    const formattedRelease = parseRelease(release);

    const inStateRelease = newState[releaseId];
    if (inStateRelease == null) {
      newState[releaseId] = formattedRelease;
      return;
    }

    const collectionId = formattedRelease.collectionIds[0];
    if (inStateRelease.collectionIds.indexOf(collectionId) === -1) {
      newState[releaseId] = {
        ...inStateRelease,
        collectionIds: [...inStateRelease.collectionIds, collectionId],
        quantity: ++inStateRelease.quantity,
      };
    }
  });
  return newState;
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.RECORDS_SUCCESS:
      return mergeRecordSuccess(state, action.payload);
    default:
      return state;
  }
}
