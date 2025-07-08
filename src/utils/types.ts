// export interface Airport {
//   iata: string;
//   city: string;
//   name: string;
// }

export interface TravelersType {
  adults: number;
  child: number;
  infant: number;
  rooms: number;
}

export interface InitialDataType {
  iata: string;
  city: string;
  name: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  [category: string]: FAQItem[];
}

interface GeoCode {
  latitude: number;
  longitude: number;
}

interface TravelersAnalytics {
  score: number;
}

interface Address {
  cityCode: string;
  cityName: string;
  countryCode: string;
  countryName: string;
  regionCode: string;
}

export interface Airport {
  id: string;
  iataCode: string;
  name: string;
  detailedName: string;
  address: Address;
  geoCode: GeoCode;
  analytics: {
    travelers: TravelersAnalytics;
  };
  createdAt: string;
  updatedAt: string;
  timeZoneOffset: string;
  self: {
    href: string;
    methods: string[];
  };
  subType: string;
  type: string;
  __v: number;
  _id: string;
}

type PaymentRequirements = {
  currency: string;
  price: string;
};

type Offer = {
  total_emissions_kg: string;
  allowed_passenger_identity_document_types: string[];
  payment_requirements: PaymentRequirements;
  supported_passenger_identity_document_types: string[];
  passenger_identity_documents_required: boolean;
};

type Passenger = {
  age: number;
  family_name: string | null;
  fare_type: string | null;
  given_name: string | null;
  id: string;
  loyalty_programme_accounts: any[]; // Placeholder for the actual structure
  type: string | null;
};

export type ApiResponse = {
  cabin_class: string;
  client_key: string;
  created_at: string;
  id: string;
  live_mode: boolean;
  offers: Offer[];
  passengers: Passenger[];
};

export interface FlightSearchData {
  flightType: string | null;
  adults: string | null;
  child: string | null;
  infant: string | null;
  depAirport: string | null;
  arrAirport: string | null;
  depDate: string | null;
  returnDate: string | null;
  flightClass: string | null;
}

export interface CheckOutPassengerInfo {
  type: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  cityzenShip: string;
  documentNumber: string;
  dateOfExpiry: string;
}
export interface CheckOutUserInfo {
  mobileNumber: string;
  email: string;
}

export interface User {
  accessToken: string;
  email: string;
  fullName: string;
  _id: string;
}

export type UserDataKeys =
  | "name"
  | "email"
  | "birthDay"
  | "phoneNumber"
  | "dialCode"
  | "title"
  | "cityzenship"
  | "gender";
