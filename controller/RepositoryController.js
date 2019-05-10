class RepositoryController
{
    constructor()
    {
        let $ = document.querySelector.bind(document);

        //this._listRepositorie = new ListRepositories(model => this._repositoriesView.update(model));
        //this._repositoriesView.update(this._listRepositorie);

        this._listRepositorie = new ListRepositories();
        this._repositoriesView = new RepositoryView($('#repositoriesView')); 
    }

    listRepositories()
    {
        let service = new RepositoryService();

        service.getRepositories(repositories => 
        {
            repositories.forEach(repository => this._listRepositorie.add(repository));
            this._repositoriesView.update(this._listRepositorie); 
        });
    }
}