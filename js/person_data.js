class Contact 
{
    get id() 
    {
        return this._id;
    }
    set id(value) 
    {
        this._id = value;
    }
    get name() 
    {
        return this._name;
    }
    set name(value) 
    {
        const NAME_REGEX = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
        if(NAME_REGEX.test(value)){
            this._name = value;
        }else {
            throw "Name is incorrect";
        }
    }

    get phoneNumber() 
    {
        return this._phoneNumber;
    }
    set phoneNumber(value) 
    {
        const PHONE_NUMBER_REGEX = RegExp("^[0-9]{2}\\s{1}[7-9]{1}[0-9]{9}$");
        if (PHONE_NUMBER_REGEX.test(value)) 
        {
            this._phoneNumber = value;
        }
        else throw "Phone Number is incorrect";
    }
    get address() 
    {
        return this._address;
    }
    set address(value) 
    {
        const ADDRESS_REGEX = RegExp('^[a-zA-Z0-9#@,&]{3,}$');
        if (ADDRESS_REGEX.test(value)) 
        {
            this._address = value;
        }
        else throw "Address is incorrect";
    }
    get city() 
    {
        return this._city;
    }
    set city(value) 
    {
        this._city = value;
    }
    get state() 
    {
        return this._state;
    }
    set state(value) 
    {
        this._state = value;
    }
    get zip() 
    {
        return this._zip;
    }
    set zip(value) 
    {
        const ZIP_REGEX = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
        if (ZIP_REGEX.test(value)) 
        {
            this._zip = value;
        }
        else throw "Zip code is incorrect";        
    }

    toString() 
    {
        return 'name=' + this._name + 
        ', phone number=' + this._phoneNumber + ', address=' + this._address + ', city=' + this._city + 
        ', state=' + this._state + ', zip code=' + this._zip;
    }
}