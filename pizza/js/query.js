
class JQuery {
    constructor (arrOfElem){
        this.items = Array.from(arrOfElem);
    }
    css(cssObj){
        this.items = [...this.items].map(item => {
            //item.style = {...item.style, ...cssObj};
            for(let key in cssObj){
                item.style[key] = cssObj[key];
            }
            return item;
        })
        return this;
    }
    innerText(text){
        this.items = [...this.items].map(item => {
            item.innerText = text;
            return item;
        })
        return this;
    }
    toggle(className){
        this.items.forEach(item => {
            item.classList.toggle(className);
            })
        return this;
    }
    slideToggle(){
        this.items.forEach(el => {
            if(el.style.display === 'block'){
                el.style.display = 'none';
            }else{el.style.display = 'block';
                     }
        })
    }
    click(callBckFunc){
            this.items.forEach(item => {
             item.addEventListener('click', function(e){
                callBckFunc(e);
             })
            })
            return this;
        
    }
}

// let main = $('main').css({background:'black'})


//живая и неживая коллекция
//window.$ = selector => {
    window.$ = (selector, isNotLiveCollection = false) => {
    const identify = selector[0];
    if(selector instanceof HTMLCollection){
        if(selector instanceof JQuery){
            return selector;
        }
        return new JQuery(selector);
    }
    if(isNotLiveCollection){
        return document.querySelectorAll(selector)
    }
    switch (identify) {
        case '.' : 
            return new JQuery(document.getElementsByClassName(selector.slice(1)));
        case '#' :
            return document.getElementsById(selector.slice(1));
        default:
            return new JQuery(document.getElementsByTagName(selector));
    }
}

