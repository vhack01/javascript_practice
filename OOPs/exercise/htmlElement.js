function HtmlElement() {
    this.click = function() {
        console.log('Clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('Focused');
}

const e = new HtmlElement();

function HtmlSelectElement() {
    this.items = [];
    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

//---------- Method - 1 -----------
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// HtmlSelectElement.prototype.click = e.click;

//---------- Method - 2 --------
HtmlSelectElement.prototype = new HtmlElement();

const s = new HtmlSelectElement();

