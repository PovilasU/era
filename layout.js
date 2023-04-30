const header = document.querySelector('header');

const footer = document.querySelector("footer");

// async functions will not block the main thread
// async functions are like their own single-threaded environments
// fetch() returns a promise
// promises are javascript objects which represent a task which has not yet resolved
// when promises resolve, the return a response object

// fetch("")
//     .then(component => component.text())
//     .then(html => {element.innerHTML = html})

const loadComponent = async (element, path) => {
    const component = await fetch(path)
    const html = await component.text()
    element.innerHTML = html
}

const components = [
    [header, '/components/header.html'],
    [footer, '/components/footer.html'],
]

const loadDOM = async () => {
    await loadComponent(header, '/components/header.html');
    await loadComponent(footer, '/components/footer.html');
}

loadDOM()
