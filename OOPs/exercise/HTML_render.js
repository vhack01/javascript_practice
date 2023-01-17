function HtmlElement() {
    this.click = function() {
        console.log('Clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('Focused');
}

// const e = new HtmlElement();


function HtmlSelectElement(item = []) {
    this.items = item;
    this.render = function() {
        return `<select> ${this.items.map(val => `
                    <option>${val}</option>`).join('')}
                </select>`;
    }
}


function HtmlImageElement(src) {
    this.src = src;
    this.render = function() {
        if (this.src !== 'undefined')
            return `<img src="${this.src}" />`;
        return undefined;
    }
}

HtmlImageElement.prototype = new HtmlElement();

const img = new HtmlImageElement();


const elements = [
    new HtmlSelectElement([1, 2, 3, 4 , 5]),
    new HtmlImageElement('D:/img/1.png')
];

for (let element of elements)
    console.log(element.render());

