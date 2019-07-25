class RepositoryView
{
    constructor(element) 
    {    
        this._element = element;
    }

    template(model)
    {
        return `<table>
                    <thead>
                        <tr>
                            <th>NAMES</th>
                            <th>URL</th>
                            <th>DESCRIPTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${model.repositories.map(repository => 
                            `<tr>
                                <td>${repository.name}</td>
                                <td>${repository.url}</td>
                                <td>${repository.description}</td>
                            </tr>`   
                        ).join('')}
                    </tbody>
                </table>`;
    }

    update(model) 
    {
        this._element.innerHTML = this.template(model);
    }
}