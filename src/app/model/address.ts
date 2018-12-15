import { Geo } from "./geo";

export interface Address {
    street?;
    suite?;
    city?;
    zipcode?;
    geo: Geo;
}