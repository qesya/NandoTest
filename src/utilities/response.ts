export interface Address {
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
}

export interface Geo {
  address: Address;
}

export interface Restaurant {
  name: string;
  url: string;
  geo: Geo;
}
