/**
 * @param {string} element - nesse parametro é definido o elemento a ser criado 
 * @param {{}} attrs - Recebe os atributos do elemento a ser criado
 * @param {} children - 
 * @example {id: "0", class: "open close"}
 * @param {string} children - e possivel passar um texto ou um array de elementos criados.
 * @example createElement("p", null, "Meu Texto") || createElement("div", null, (div, div))
 */
function createElement(element, attrs, children) {
    const elementToCreate = document.createElement(element);
    if(attrs != null) { 
        const attrsArray = Object.entries(attrs);
        for (let i = 0; i <attrsArray.length; i++) {
            elementToCreate.setAttribute(attrsArray[i][0], attrsArray[i][1]);
        }
       }
       if(typeof children == "string") {
        elementToCreate.innerText = children;
       }else {
        children.forEach((child)=> {
            elementToCreate.appendChild(child);
        });
        
       }
       return elementToCreate
}

const storage = {
    //string
    get(key) {
        return localStorage.getItem(key)
    },
    set(key, value) {
        localStorage.setItem(key, value);
    },
}

export {storage, createElement};
// local storage = permanente
// local section = permanece na aba até que ela seja fechada