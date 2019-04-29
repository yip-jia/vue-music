export function addClass(el, className) {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ');
    newClass.push(className);
    el.className = newClass.join(' ')

}

export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' +className+ '(\\s|$)')
    return reg.test(el.className)
}

export function getData(el, name, val) {
    const prefix = 'data-'
    name = prefix + name
    if(val) {
        return el.setAttribute(name, val)
    }else{
        return el.getAttribute(name)
    }
}


/* 自动添加css样式前缀 */
let elementStyle = document.createElement('div').style

let  vendor = (() => {
    let transformNames = {
       'webkit' : 'webkitTransform',
       'moz' : 'mozTransform',
       'ms' : 'msTransform',
       'o' : 'oTransform',
       'standard' : 'transform'
    }
    for (let key in transformNames) {
        if(elementStyle[transformNames[key]] !== undefined) {
            return key
        }
        
     }
     return false
})()


export  function prefixStyle(style) {
    if(vendor === false) {
        return false
    }
    if(vendor === 'standard') {
        return style
    }

    return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
