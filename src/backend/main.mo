import Map "mo:core/Map";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Order "mo:core/Order";

actor {
  type Enquiry = {
    name : Text;
    email : Text;
    phone : Text;
    serviceType : Text;
    message : Text;
    suburb : Text;
    preferredDate : Text;
    timestamp : Time.Time;
  };

  module Enquiry {
    public func compare(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Int.compare(enquiry1.timestamp, enquiry2.timestamp);
    };
  };

  var nextId = 0;
  let enquiries = Map.empty<Nat, Enquiry>();

  public shared ({ caller }) func submitEnquiry(
    name : Text,
    email : Text,
    phone : Text,
    serviceType : Text,
    message : Text,
    suburb : Text,
    preferredDate : Text,
  ) : async Nat {
    let enquiry : Enquiry = {
      name;
      email;
      phone;
      serviceType;
      message;
      suburb;
      preferredDate;
      timestamp = Time.now();
    };
    enquiries.add(nextId, enquiry);
    let currentId = nextId;
    nextId += 1;
    currentId;
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.values().toArray().sort();
  };
};
