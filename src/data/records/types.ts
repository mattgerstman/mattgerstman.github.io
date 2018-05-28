export const enum Format {
  CD = 'CD',
  LP = 'LP',
  EP = 'EP',
  SevenInch = 'SevenInch',
}

export interface Release {
  artist: string;
  collectionIds: number[];
  discogsLink: string;
  format: Format;
  quantity: number;
  releaseId: number;
  title: string;
  thumb: string;
  value: string;
}
