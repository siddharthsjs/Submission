import React from "react";
 
function MyForm(props) {

  return <form>{props.children}</form>;

}
 
MyForm.Input = function Input() {

  return <input id="in" placeholder="Enter the Name" />;

};
 
MyForm.Button = function Button() {

  return <button>Send</button>;

};
 
function Form() {

  return (
<div>
<h2>Custom Form Example</h2>
<MyForm>
<MyForm.Input />
<MyForm.Button />
</MyForm>
</div>

  );

}
 
export default Form;

 