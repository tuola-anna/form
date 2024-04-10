'use strict'
export class Form{
    constructor(anyForm){
        this.thisForm=anyForm;

    }
    createFormHTML(){
        let form=document.createElement("form");
        form.setAttribute("action","http://127.0.0.1:5500/");
        form.setAttribute("method","POST");
        document.body.append(form);
        let tag;
        for (let [key,value] of Object.entries(this.thisForm))
        {
            for (let [keyElemForm,valueElemForm] of Object.entries(value))
            {
                if (keyElemForm=="tagName") 
                    tag=document.createElement(`${valueElemForm}`);
                else
                    tag.setAttribute(`${keyElemForm}`,`${valueElemForm}`);
            }
            form.append(tag);
            
        }
        let submit=document.createElement("button");
            submit.setAttribute("type","submit");
            submit.textContent="send";
            submit.setAttribute("id","send");
            form.append(submit);
    }
}