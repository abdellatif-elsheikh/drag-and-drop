function addElementToTheDom(element, text, length, place, ...attributes) {
    if (length) {
        const fragment = document.createDocumentFragment()
        for (let i = 0; i < length; i++) {

            const newElementLoop = document.createElement(element);
            newElementLoop.textContent = text;
            place.appendChild(newElementLoop)
            if (attributes) {
                for (let j = 0; j < attributes.length; j++) {
                    newElementLoop.setAttribute(attributes[j][0], attributes[j][1])
                }
            }
        }

        place.appendChild(fragment)
    } else {
        const newElement = document.createElement(element);
        newElement.textContent = text;
        if (attributes) {
            for (j = 0; j < attributes.length; j++) {
                newElement.setAttribute(attributes[j][0], attributes[j][1])
            }
        }
        place.appendChild(newElement)
    }
}