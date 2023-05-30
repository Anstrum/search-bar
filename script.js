let input = document.querySelector('.search-input')
let resultContainer = document.querySelector('#search-result-container')
let content = document.querySelector(".title-list-container")
let searchButton = document.querySelector('#search-button')
let searchSection = document.querySelector('.search-section')

searchButton.addEventListener('click', function () {
    searchSection.classList.toggle('visible')
    input.focus()
    input.value = ''
    resultContainer.innerHTML = ''
})


titleList.forEach(title => {
    let h2 = document.createElement('h2')
    h2.innerText = title
    h2.classList.add('title')
    h2.setAttribute('id', title.replace(/ /g, "-"))
    content.appendChild(h2)
});


input.addEventListener("input", function () {
    if(input.value.length === 0) return resultContainer.innerHTML = ''
    resultContainer.innerHTML = ''

    // algoResult must have 5 elements of titleList
    let algoResult = titleList.filter(item => item.toLowerCase().includes(input.value.toLowerCase())).slice(0, 5)

    // l'algo de recherche ici

    algoResult.forEach(item => {
        let span = document.createElement('a')
        span.addEventListener('click', function () {
            input.value = ''
            resultContainer.innerHTML = ''
        })
        span.innerText = item
        span.classList.add('search-result')
        span.setAttribute('href', `#${item.replace(/ /g, "-")}`)
        resultContainer.appendChild(span)

    });
})

