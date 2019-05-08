class RepositoryController
{
    constructor()
    {
        let $ = document.querySelector.bind(document);

        this._listRepositories = new ListRepositories();
        this._repositoriesView = new RepositoryView($('#repositoriesView'));
        this._repositoriesView.update(this._listRepositories);
    }

    listRepositories()
    {
        let service = new RepositoryService();

        service.getRepositories(repositories => 
        {
            repositories.forEach(repository => this._listRepositories.add(repository.name));
            console.log('Negociações importadas com sucesso');
        });
    }
}