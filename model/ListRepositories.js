class ListRepositories
{
    constructor()
    {
        this._repositories = [];
    }

    add(repository)
    {
        this._repositories.push(repository);
    }

    get repositories()
    {
        return [].concat(this._repositories);
    }
}