class Repository
{
    constructor(name, url, description)
    {
        this._name = name;
        this._url = url;
        this._description = description;

        Object.freeze(this);
    }

    get name()
    {
        return this._name;
    }

    get url()
    {
        return this._url;
    }

    get description()
    {
        return this._description;
    }
}