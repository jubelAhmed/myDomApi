


// ***************** window method ***************


window.create = function(){
    /* 
    create div element
    ex: create() */
    if(arguments.length === 0){
        return document.createElement('div');
    }

    /* 
    create p or another element 
    ex: create(p) */

    if(arguments.length === 1 && typeof arguments[0] != 'object'){
        return document.createElement(arguments[0]);
    }

    /* create elements and attribute object
    ex 1: create({
        "class": "className",
        "id": "idName",
        another attribute with attribute value 
    })

    ex 2: create("p",{
        "class": "className",
        "id": "idName",
        another attribute with attribute value 
    }) 
    */

    let tag = arguments[0];
    let attributes = arguments[1] || arguments[0];

    if(arguments.length === 1 && typeof arguments[0] === 'object'){
        tag = 'div'
    }

    var element = document.createElement(tag);

    for(var attr in attributes){
        element.setAttribute(attr,attributes[attr]);
    }
    return element;
}

/* create text node by given data. it can be html or text
    var tn = textNode("hello mr jubel")
*/

window.textNode = function(data){
       return document.createTextNode(data);
}

/* select any element by given selecor
    as example : var p1 = select(".myP");
*/

window.select = function(selector){
        return document.querySelector(selector);
}
// select all element by given selector
window.selectAll = function(selector){
    return document.querySelectorAll(selector);
}

// ***************** window method finish***************

// ################# HTMLElement method start ############



/* append all child with one function
    example : 
    var mainContainer = document.querySelector(".container");
    var div1 = create();
    var div2 = create();
    var div3 = create();
    mainContainer.append(div1,div2,div3);
*/
HTMLElement.prototype.append = function(){
    for(var i in arguments){
        this.appendChild(arguments[i]);
    }
    return this;
}

/* html content create
    var p1 = create('p');
    p.content("hello this dom api will work every where in venila js") 

*/

HTMLElement.prototype.content = function(data){
    this.innerHTML = data;
    return this;
}

/* element style change
    ex: var p = create("p");
        p.setStyle({
            "background": "blue",
            "color": "yellow",
            "height": "30px"
        })
*/

HTMLElement.prototype.setStyle = function(styles){
    for(var i in styles){
        this.style[i] = styles[i];
    }
    return this;
}

/*  css class toggle
    ex: <p class="myP"> </p>
       in css file or js file you create another class design. as example if you create in css file
       .myNewP{
           color: "red"
       }  

       in js file
       you can just toggle it
       var p1 = select(".myP")
       p1.toggle("myNewP")

 */

HTMLElement.prototype.toggle = function(className){
     this.classList.toggle(className);
     return this;
}

/*  
        you can add all attributes together
       ex: var p = create('p');
       p.attrs({
           'class': "myP",
           'id': "firstPelement"
       })
    
*/

HTMLElement.prototype.attrs = function(attributes){
        for(var attr in attributes){
            this.setAttribute(attr,attributes[attr]);
        }
        return this;
}

/* add event listener
    let button = create('button');
    button.events({
        "click": functionName/createfunction,
        "another event": another functionName
    })    
 */
HTMLElement.prototype.events = function(events){
        for(let e in events){
            this.addEventListener(e,events[e]);
        }
        return this;
} 

//get parentElement
    

HTMLElement.prototype.getParent = function(){
    return this.parentElement;
}

/* get child element*/

HTMLElement.prototype.getChild = function(){
    // show all child element
    if(arguments.length === 0){
        return this.children;
    }
    // show all given type children element as an argument
    return this.querySelectorAll(arguments[0]);
}








 

