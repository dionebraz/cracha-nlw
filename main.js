const changeLinks = {
  github: 'diihrox',
  instagram: 'dione__braz',
  twitter: 'Diihrox2',
  facebook: 'rocketseat'
}

function createSocialMedia() {
  for (let li of socialMidias.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${changeLinks[social]}/`
  }
}


createSocialMedia()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${changeLinks.github}`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userBio.textContent = data.bio
    userImage.src = data.avatar_url
    userName.textContent = data.name
    userLink.href = data.html_url
    userLogin.textContent = data.login
  })
}

getGitHubProfilesInfos()

