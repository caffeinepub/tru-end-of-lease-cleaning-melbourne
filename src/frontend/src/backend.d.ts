import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    serviceType: string;
    name: string;
    email: string;
    suburb: string;
    message: string;
    preferredDate: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    submitEnquiry(name: string, email: string, phone: string, serviceType: string, message: string, suburb: string, preferredDate: string): Promise<bigint>;
}
