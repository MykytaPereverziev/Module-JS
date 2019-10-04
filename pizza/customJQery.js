class JQery {
  constructor (arrOfElems) {
    this.items = Array.from(arrOfElems);
  }
  css(cssObject) {
    this.items = [...this.items].map(item => {
      for (let key in cssObject) {
        item.style[key] = cssObject[key];
      }
      return item ;
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
  toggle(className) {
    this.items.forEach(item => {
      item.classList.toggle(className);
    })
    return this;
  }
  slideToggle() {
   this.items.forEach(el => {
     if (el.style.display === 'block') {
      el.style.display = 'none';
     } else {
      el.style.display = 'block';
     }
   })
  }

  click(callBackFunc) {
    this.items.forEach(item => {
      item.addEventListener('click', function(e) {
        callBackFunc(e);
      })
    })
    return this;
  }
  //$('element').on('click', function() {})
  on(e, callBackFunc){
    //this.items.forEach(item => {
    this.items.map(item => {
      item.addEventListener(e, () => {
        callBackFunc();
      })
    })
    return this;
  }
  //$('element').class('some-class')
  class(addClass){
    this.items.forEach(item => {
      item.classList.add(addClass);
    })
    return this;
  }
    //$('element').data()
  // $('element').data() /// {id: "132", name: "vasya"}
  //$('element').data('name') /// "vasya"
  data(atribut){
    this.items.forEach(item => {
    if(atribut){
      console.log(item.dataset[atribut])
    }else{
      //!atribut
      console.log({...item.dataset})
    }
    })
    return this;
  }
  //$('element').html() 
  html(text){
    this.items.forEach(item => {
      item.innerHtml = text;
    })
    return this;
  }
  //$('element').removeClass()
  removeClass(element){
    this.items.forEach(item => {
      item.classList.remove(element)
    })
    return this;
  }
  //$('#someElem') /// {items: [h1#someElem]}
  idColection(){
    this.items.forEach(item => {
      if(id || element){
        this.idColection //???
      }else{}
    })
    return this;
  }
}

window.$ = (selector, isNotLiveCollection = false) => {
  const identify = selector[0];
  if (selector instanceof HTMLCollection) {
    if (selector instanceof JQery) {
      return selector;
    }
    return new JQery(selector);
  }
  if (isNotLiveCollection) {
    return document.querySelectorAll(selector)
  }
  switch (identify) {
    case '.': 
    return new JQery(document.getElementsByClassName(selector.slice(1))); 
    case '#':
    return  document.getElementById(selector.slice(1));
    default: 
    return  new JQery(document.getElementsByTagName(selector));
  }
}


