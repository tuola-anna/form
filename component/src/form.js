'use strict'
export let formObj={
    login:{
        tagName:"input",
        type:"text",
        id:"log",
        placeholder:"login",
        reg:"[a-zA-Z]{6,}",
        required:"",
        class:"input"
    },
    pwd:{
        tagName:"input",
        type:"text",
        id:"pwd",
        placeholder:"password",
        reg:"\w{6,}",
        required:"",
        class:"input"
    },
    politika:{
        tagName:"input",
        type:"checkbox",
        id:"politika",
        placeholder:"password",
        class:"checkbox"
    }
}