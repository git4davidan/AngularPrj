import { Address } from "./address";
import { Company } from "./company";

export interface User {
    id?;
    name?;
    email?;
    phone?;
    website?;
    address: Address;
    company: Company;
}