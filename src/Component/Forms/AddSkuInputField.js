import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Forms/Forms.css';
import { Form, FormGroup, Label, Input, FormFeedback,FormText } from 'reactstrap';

const addSkuInputField = (props)=>{
return(
<div className = 'POTempForm'>
<Form >
    <FormGroup >
        <Label for="templateForm2">SKU</Label>
         <Input  type = 'text' bsSize="lg" name = 'sku' value ={props.sku2Val} onChange={props.changed2} />
            <FormFeedback >You will not be able to see this</FormFeedback>
                <FormText>Min 4 characters - Max 10 characters</FormText>

         <Label for="templateForm2">Quantity</Label>
        <Input  type = 'number' bsSize="lg" name = 'qty' value ={props.qty2Val} onChange={props.changed2} />
            <FormFeedback >You will not be able to see this</FormFeedback>
             <FormText>Company name as stated in portal </FormText>
    </FormGroup>
</Form>
</div>
); };

export default addSkuInputField;