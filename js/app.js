function createCard(repo){
    console.log('repo', repo)
    const card = document.createElement('article');
  
}

fetch('https://api.github.com/users/rbreva/repos')
    .then(function (result) {
        return result.json()
    }).then(function(repos) {
        //console.log('repos', repos)
        repos.forEach(repo =>{
            //console.log('repo', repo)
            createCard(repo)
        })
    }).catch(function(error) {
        console.log('error', error)
    })