class RepositoryService
{
    getRepositories(callback)
    {
        // É responsável por fazer requisições HTTP assíncronas com Javascript
        var xhr = new XMLHttpRequest();

        // Configura nossa requisição para dizer para qual servidor queremos enviá-la e também qual método HTTP devemos usar.
        xhr.open("GET", "https://api.github.com/users/bertrindade/repos");

        // Defines a function to be executed when the readyState changes
        xhr.onreadystatechange = () => 
        {
            /* Each time the state changes, an onreadystatechange event occurs:

             * A new XMLHttpRequest object starts in state 0
             * When you successfully call .open() on the obect, the status changes to 1
             * When you successfully call .send() on the object, an HTTP request goes off to the server defined in .open(). Once the HTTP response headers have been received and processed the status changes to 2
             * Eventually, the actual content of the request will start coming in. When this begins, the status changes to 3
             * Finally, once all of the content is downloaded and is ready to be used, the status changes to 4
            */
           if(xhr.readyState == 4)
           {
                if(xhr.status == 200)
                {
                    console.log('Getting server response...') 
                    callback(JSON.parse(xhr.responseText).map(repository => new Repository(repository.name, repository.url, repository.description)));
                } else
                {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                    console.log('Unable to receive server information!');
                }   
           }
        };

        xhr.send();
    }
}