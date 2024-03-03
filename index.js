class Telephone {
    constructor() {
        this.phoneNumbers = []; // Array to store phone numbers
        this.observers = []; // Array to store observers
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber); // Add a phone number to the array
    }

    removePhoneNumber(phoneNumber) {
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1); // Remove a phone number from the array
        }
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) { // Check if the phone number exists in the array
            this.notifyObservers(phoneNumber); // Notify all observers about the dialed phone number
        } else {
            console.log("Phone number not found"); // Print a message if the phone number is not found
        }
    }

    addObserver(observer) {
        this.observers.push(observer); // Add an observer to the array
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1); // Remove an observer from the array
        }
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.notify(phoneNumber)); // Notify all observers about the dialed phone number
    }
}

class PhoneNumberObserver {
    notify(phoneNumber) {
        console.log(`Phone number dialed: ${phoneNumber}`); // Print a message when a phone number is dialed
    }
}

class DialingObserver {
    notify(phoneNumber) {
        console.log(`Now Dialing ${phoneNumber}`); // Print a message when a phone number is being dialed
    }
}

// Usage example
const telephone = new Telephone();

const phoneNumberObserver = new PhoneNumberObserver();
const dialingObserver = new DialingObserver();

telephone.addObserver(phoneNumberObserver);
telephone.addObserver(dialingObserver);

telephone.addPhoneNumber("07042267778"); // Add a phone number to the telephone
telephone.dialPhoneNumber("07042267778"); // Dial a phone number
