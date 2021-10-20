let isUpdate = false;
let contactObj = {};

window.addEventListener("DOMContentLoaded", (event) => {
    const name = document.querySelector("#name");
    name.addEventListener("input", function () {
      if (name.value.length == 0) {
        setTextValue(".text-error", "");
        return;
      }
      try {
        new Contact().name = name.value;
        setTextValue(".text-error", "");
      } catch (error) {
        setTextValue(".text-error", error);
      }
    });


    const phoneNumber = document.querySelector("#phonenumber");
    phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.length == 0) {
      setTextValue(".tel-error", "");
      return;
    }
    try {
      new Contact().phoneNumber = phoneNumber.value;
      setTextValue(".tel-error", "");
    } catch (error) {
      setTextValue(".tel-error", error);
    }
  });
  
  const address = document.querySelector("#address");
  address.addEventListener("input", function () {
    if (address.value.length == 0) {
      setTextValue(".address-error", "");
      return;
    }
    try {
      new Contact().address = address.value;
      setTextValue(".address-error", "");
    } catch (error) {
      setTextValue(".address-error", error);
    }
  });
 
  const zip = document.querySelector("#zip");
  zip.addEventListener("input", function () {
    if (zip.value.length == 0) {
      setTextValue(".zip-error", "");
      return;
    }
    try {
      new Contact().zip = zip.value;
      setTextValue(".zip-error", "");
    } catch (error) {
      setTextValue(".zip-error", error);
    }
  });

  checkForUpdate();
  localStorage.removeItem('contactEdit');
});

const checkForUpdate = () => {
    const contactJson = localStorage.getItem('contactEdit');
    isUpdate = contactJson ? true : false;
    if (!isUpdate) {
      return;
    }
    contactObj = JSON.parse(contactJson);
    setForm();
  };

const save = () => {
  try 
  {
    setContactObject();
    createAndUpdateLocalStorage();
    resetForm();
    window.location.replace(site_properties.home_page);
  } 
  catch (error) {
    console.log(error);
  }
};

const setContactObject = () => {
  
    contactObj._name = getInputValueById("#name");
    contactObj._phoneNumber = getInputValueById("#phonenumber");
    contactObj._address = getInputValueById("#address");
    contactObj._city = getInputValueById("#city");
    contactObj._state = getInputValueById("#state");
    contactObj._zip = getInputValueById("#zip");
  }
  
const createAndUpdateLocalStorage = () => {
  let contactList = JSON.parse(localStorage.getItem("ContactList"));
  if (contactList != undefined) {
    let contactData = contactList.find(contact => contact._id == contactObj._id);
    if (!contactData) {
      contactList.push(createContact());
    } else {
      const index = contactList
                    .map(contact => contact._id)
                    .indexOf(contactData._id);
      contactList.splice(index, 1, createContact(contactData._id));
    }
  } else {
    contactList = [createContact()];
  }
  localStorage.setItem("ContactList", JSON.stringify(contactList));
  window.location.replace(site_properties.home_page);
};

const createContact = (id) => {
  let contact = new Contact();
  if (!id) {
    contact._id = generateId();
  }
  else {
    contact._id = id;
  }
  setContactData(contact);
  return contact;
};

const setContactData = (contact) => {
    contact.name = getInputValueById("#name");
  

 
    contact.phoneNumber = getInputValueById("#phonenumber");
  


    contact.address = getInputValueById("#address");
  

  let city = getInputValueById("#city");
  if (city != "Select City") {
    contact.city = city;
  } else {
    throw "Please select city";
  }

  let state = getInputValueById("#state");
  if (state != "Select State") {
    contact.state = state;
  } else {
    throw "Please select state";
  }

 
    contact.zip = getInputValueById("#zip");
  

  console.log(contact.toString());
  return contact;
};

const generateId = () => {
  let contactId = localStorage.getItem("ContactID");
  contactId = !contactId ? 1 : (parseInt(contactId) + 1).toString();
  localStorage.setItem("ContactID", contactId);
  return contactId;
};


const resetForm = () => {
  setValue("#name", "");
  setValue("#phonenumber", "");
  setValue("#address", "");
  setSelectedIndex('#city', 0);
  setSelectedIndex('#state', 0);
  setValue("#zip", "");
  setTextValue(".name-error", "");
  setTextValue(".tel-error", "");
  setTextValue(".address-error", "");
  setTextValue(".zip-error", "");
};



const setForm = () => {
  setValue("#name", contactObj._name);
  setValue("#phonenumber", contactObj._phoneNumber);
  setValue("#address", contactObj._address);
  setValue("#city", contactObj._city);
  setValue("#state", contactObj._state);
  setValue("#zip", contactObj._zip);
};

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
};

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};

const setSelectedIndex = (id, index) => {
  const element = document.querySelector(id);
  element.selectedIndex = index;
};

const getInputValueById = (property) => {
  let value = document.querySelector(property).value;
  return value;
};