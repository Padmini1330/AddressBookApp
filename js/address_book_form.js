window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) 
        {
            textError.textContent = "";
            document.getElementById('submitButton').disabled = false;
            return;
        }
        try 
        {
            (new Contact()).name = name.value;
            textError.textContent = "";
        } 
        catch (e) 
        {
            document.getElementById('submitButton').disabled = true;
            textError.textContent = e;
        }
    });
    const phoneNumber = document.querySelector('#phonenumber');
    const PhoneNumberError = document.querySelector('.tel-error');
    phoneNumber.addEventListener('input', function () {
        if (phoneNumber.value.length == 0) 
        {
            PhoneNumberError.textContent = "";
            document.getElementById('submitButton').disabled = true;
            return;
        }
        try 
        {
            (new Contact()).phoneNumber = phoneNumber.value;
            PhoneNumberError.textContent = "";
        } 
        catch (e) 
        {
            document.getElementById('submitButton').disabled = true;
            PhoneNumberError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) 
        {
            addressError.textContent = "";
            document.getElementById('submitButton').disabled = true;
            return;
        }
        try 
        {
            (new Contact()).address = address.value;
            addressError.textContent = "";
        } 
        catch (e) 
        {
            document.getElementById('submitButton').disabled = true;
            addressError.textContent = e;
        }
    });

    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener('input', function () {
        if (zip.value.length == 0) 
        {
            zipError.textContent = "";
            document.getElementById('submitButton').disabled = true;
            return;
        }
        try 
        {
            (new Contact()).zip = zip.value;
            zipError.textContent = "";
            if (zip.value && phoneNumber.value && name.value) 
            {
                document.getElementById('submitButton').disabled = false;
            } 
        } 
        catch (e) 
        {
            document.getElementById('submitButton').disabled = true;
            zipError.textContent = e;
        }
    });
});
const save = () => {
    try 
    {
        let contact = new Contact();
        createContact();
        createAndUpdateStorage(contact);
    } 
    catch (error) 
    {
        alert(error);
    }
}
function createContact() 
{
    let contact = new Contact();
    try 
    {
        contact.name = getInputValueById('#name');
        contact.id = Math.floor(Math.random() * 100);
        contact.phoneNumber = getInputValueById("#phonenumber");
        contact.address = getInputValueById('#address');
        contact.state = getInputValueById("#state");
        contact.city = getInputValueById("#city");
        contact.zip = getInputValueById("#zip");
    } 
    catch (error) 
    {
        console.log(error);
    }
    alert(contact);
}

const createAndUpdateStorage = (contact) => {
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
    if (contactList != undefined) 
    {
      contactList.push(contact);
    } 
    else 
    {
      contactList = [contact];
    }
    alert("Contact Added Sucessfully");
    localStorage.setItem("ContactList", JSON.stringify(contactList));
  }

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}