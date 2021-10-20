const NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}([ ][A-Z]{1}[a-z]{2,})?$");
const PHONE_NUMBER_REGEX = RegExp("^[+][0-9]{2}\\s{1}[7-9]{1}[0-9]{9}$");
const ADDRESS_REGEX = RegExp('^[a-zA-Z0-9#@*(),.&\\s]{3,}$');
const ZIP_REGEX = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

const checkName = (name) => {
  if (!NAME_REGEX.test(name)) {
      throw "NAME is Invalid!";
  }
};

const checkPhoneNumber = (phoneNumber) => {
    if (!PHONE_NUMBER_REGEX.test(phoneNumber)) {
      throw "PHONE NUMBER is Invalid!";
    }
};

const checkAddress = (address) => {
  if (!ADDRESS_REGEX.test(address)) {
    throw "ADDRESS is Invalid!";
  }
};

const checkZip = (zip) => {
    if (!ZIP_REGEX.test(zip)) {
      throw "ZIPCODE is Invalid!";
    }
};
