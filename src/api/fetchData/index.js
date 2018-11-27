export default url => {
    return fetch(url).then(data => data.json())
}
