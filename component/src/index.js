import {formObj} from './form.js'
import {Form} from './classForm.js'; 
let style=document.createElement("link");
style.setAttribute("rel","stylesheet");
style.setAttribute("href","./component/css/form.css");
document.querySelector("head").append(style);
let myForm=new Form(formObj);
myForm.createFormHTML();