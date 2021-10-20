class Contact 
{
    id;
    
    get name() 
    {
        return this._name;
    }
    set name(value) 
    {
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