export const enum ActionTypes {
  RECORDS_FETCH = 'RECORDS_FETCH',
  RECORDS_SUCCESS = 'RECORDS_SUCCESS',
}

function getRecordsFetch() {
  return {
    type: ActionTypes.RECORDS_FETCH,
  };
}

function getRecordsSuccess(payload) {
  return {
    payload,
    type: ActionTypes.RECORDS_SUCCESS,
  };
}

export function getRecords(
  url = 'https://api.discogs.com/users/matthew.gerstman/collection?token=UUgLZcnyrvffWzsCrnHoZSQunKzxJFlbluYzGKqp&sort=artist',
) {
  return dispatch => {
    dispatch(getRecordsFetch());
    fetch(url).then(response => {
      response.json().then(data => {
        const next = data.pagination.urls.next;
        if (next) {
          dispatch(getRecords(next));
        }
        dispatch(getRecordsSuccess(data.releases));
      });
    });
  };
}
