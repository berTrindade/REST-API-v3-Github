class RepositoryView
{
    constructor(element)
    {
        this._element = element;
    }

    _template(model)
    {
        return `<table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>URL</th>
                            <th>DESCRIPTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${model.repositories.map(repository => 
                        {
                            return `<tr>
                                        <td>${repository.name}</td>
                                        <td>${repository.url}</td>
                                        <td>${repository.description}</td>
                                    </tr>`       
                        }).join('')}
                    </tbody>
                </table>`;
    }

    update(model)
    {
        this._element.innerHTML = this._template(model);
    }
}