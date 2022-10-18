import camelcase from "camelcase";
import camelcaseKeys from "camelcase-keys";

console.log(camelcase("--..fooBAR"));

const person = {
    first_name: "Jimmy",
    last_name: "McGill",
    phone_number: "(505) 503-4455",
};

console.log(camelcaseKeys(person));