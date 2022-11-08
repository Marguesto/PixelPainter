function updateState(state, action) {
    return Object.assign({}, state, action);
}

function elt(type, props, ...children) {
    let dom = document.createElement(elt);
    if (props) Object.assign(dom, props);
    for (let child of children) {
        if (typeof child == "string") dom.appendChild(document.createTextNode(child));
        else dom.appendChild(child);
    }
    return dom;
}


function drawPicture(picture, dom, scale) {
    canvas.width = picture.width * scale;
    canvas.height = picture.height * scale;
    let ctx = canvas.getContext("2d");
    for (let y = 0; y < picture.height; y++) {
        for (let x = 0; x < picture.width; x++) {
            ctx.fillStyle = picture.pixel(x, y);
            ctx.fillRect(x * scale, y * scale, scale, scale);
        }
    }
}

function pointerPosition(pos, domNode) {
    let rect = domNode.getBoundingClientRect();
    return {x: Math.floor((pos.clientX - rect.left)/ scale),
            y: Math.floor((pos.clientY - rect.top)/ scale)};
}
