class Repositories
{
    obterRepositorios()
    {
        // É responsável por fazer requisições HTTP assíncronas com Javascript
        var xhr = new XMLHttpRequest();

        // Configura nossa requisição para dizer para qual servidor queremos enviá-la e também qual método HTTP devemos usar.
        xhr.open("GET", "https://api.github.com/users/bertrindade/repos");

        xhr.addEventListener("load", function()
        {
            if(xhr.status == 200)
            {
                var resposta = xhr.responseText;

                // Converte JSON para um objeto Javascript 
                var repositories = JSON.parse(resposta);
                
                // console.log(typeof pacientes);
                repositories.forEach(function(repository)
                {
                    adicionaPacienteNaTabela(paciente);
                });
            } else
            {
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        });

        xhr.send();
    }
}