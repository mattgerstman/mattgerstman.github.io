export const enum APIClientStatus {
  FETCH = 'FETCH',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface FluxStandardAction {
  type: string;
  payload: any;
  meta: any;
  error: any;
}
