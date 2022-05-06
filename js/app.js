
const token = "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"

function createCard(repo){
    console.log('repo', repo)
    const card = document.createElement('article');
    const {
        name
    } = repo

    const appContainer = document.getElementById('app')

    card.innerHTML = name 

    appContainer.appendChild(card)
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