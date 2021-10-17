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
        const NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
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
        const PHONE_NUMBER_REGEX = RegExp("^[1-9]{1}[0-9]{9}$");
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
        this._address = value;
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
        this._zip = value;
    }

    toString() 
    {
        return 'name=' + this._name + 
        ', phone number=' + this._phoneNumber + ', address=' + this._address + ', city=' + this._city + 
        ', state=' + this._state + ', zip code=' + this._zip;
    }
}