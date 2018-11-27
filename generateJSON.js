var fs = require('fs')

tags = (() => {
    let array = []
    for (let i = 0; i <= 10; i++) {
        array.push('Tag' + i)
    }
    return array
})()

sdks = (() => {
    let array = []
    for (let i = 1; i <= 100; i++) {
        array.push('SDK ' + i)
    }
    return array
})()

getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

getRandomTags = (quantity, tags) => {
    tagsArray = []
    while (quantity) {
        let randomInt = getRandomInt(1, 10)
        if (tagsArray.includes(tags[randomInt])) {
            randomInt = getRandomInt(1, 10)
        } else {
            tagsArray.push(tags[randomInt])
            quantity--
        }
    }
    return tagsArray
}

objects = ((tags, sdks) => {
    resultArray = []
    sdks.forEach(element => {
        quantityTags = getRandomInt(1, 4)
        // console.log(quantityTags)
        resultArray.push({ [element]: getRandomTags(quantityTags, tags) })
    })
    return resultArray
})(tags, sdks)

fs.writeFile('./public/json/sdks.json', JSON.stringify(objects), err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('File has been created')
})
