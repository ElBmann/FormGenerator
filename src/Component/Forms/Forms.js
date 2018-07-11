import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Forms/Forms.css';
import { Form, FormGroup, Label, Input, FormFeedback,FormText } from 'reactstrap';

const forms = (props) =>{
/**TODO: Make sure to refractor and make this component reusable **/
return (
  <div className = 'POTempForm'>
    <Form >
      <FormGroup >
      <Label for="templateForm">Company</Label>
          <Input  type = 'text' bsSize="lg" name = 'company' value ={props.companyVal} onChange={props.changed} />
          <FormFeedback >You will not be able to see this</FormFeedback>
          <FormText>Company name as stated in portal </FormText>
         
            <div className = 'inBtwnInput'/>
           <Label for="templateForm">Facility</Label>
           <Input type="select" name="facility" id="facilityCode" bsSize="lg" onChange ={props.changed}>
            <option>RHNY</option>
            <option>RHNJ</option>
            <option>RHNV</option>
          </Input>
          
          <FormText>Select your facility</FormText>

           <div className = 'inBtwnInput'/>
          <Label for="templateForm">PO Number</Label>
          <Input  maxLength = '10'  type ='text' bsSize="lg" value ={props.PONumVal} name = 'PONumber' onChange={props.changed} />
          <FormText>Min 4 characters - Max 10 characters</FormText>

          <div className = 'inBtwnInput'/>
          <Label for="templateForm">BOL/Tracking Number</Label>
          <Input type = 'text' bsSize="lg" value ={props.BolTrackVal} name = 'bol' onChange={props.changed}/>
          
          <div className = 'inBtwnInput'/>
          <Label for="templateForm">Freight Contact</Label>
          <Input type = 'textarea' bsSize="lg" value ={props.freightContVal} name ='freightcontact' onChange={props.changed}/>
          <FormText>Ex: Phone Number, Email, Freight Name  </FormText>

          <div className = 'inBtwnInput'/>
          <Label for="templateForm">SKU</Label>
          <Input maxLength = '10' type ='text' bsSize="lg" value ={props.SKUVal} name = 'sku' onChange={props.changed}/>
          <FormText>Min 4 characters - Max 10 characters</FormText>

          <div className = 'inBtwnInput'/>
          <Label for="templateForm">Quantity</Label>
          <Input  type = 'number' bsSize="lg" value ={props.QTYVal} name ='qty' onChange={props.changed}/>
         

          <div className = 'inBtwnInput'/>  
          <Label for="templateForm">Pallet/Carton # Notes</Label>
          <Input type ='textarea' bsSize ='lg' value ={props.palletCartonVal} name = 'pallet' onChange={props.changed} />
          <FormText></FormText>

          <div className = 'inBtwnInput'/>
          <Label for="templateForm">Arrival Date</Label>
          <Input type = 'date' bsSize ='lg' value ={props.arrivalDateVal} name = 'arrivaldate' onChange={props.changed}/>
          <FormText>Estimated time and arrival</FormText>

          <div className = 'inBtwnInput'/>
          <Label for="templateForm">Total  Containers</Label>
          <Input type = 'text' bsSize ='lg' value ={props.totalContainersVal} name = 'totalcontainers' onChange={props.changed}/>
          <FormText></FormText>

          <div className = 'inBtwnInput'/>
          <Label for="templateForm">Total Pallets</Label>
          <Input type = 'text' bsSize ='lg' value ={props.totalPalletsVal} name = 'totalpallets' onChange={props.changed}/>
          <FormText></FormText>

          <div className = 'inBtwnInput'/>
          <Label for="templateForm">Total Cartons</Label>
          <Input type = 'text' bsSize ='lg' value ={props.totalCartonsVal} name = 'totalcartons' onChange={props.changed}/>
          <FormText></FormText>

          <div className = 'inBtwnInput'/>
          <Label for="templateForm">PO Notes</Label>
          <Input type = 'textarea' bsSize ='lg' value ={props.PONotesVal} name = 'ponotes' onChange={props.changed}/>
          <FormText>Anything else you would like us to know?</FormText>

          <div className = 'inBtwnInput'/>
          <Label for="exampleSelect">Priority Level</Label>
          <Input type="select" name='priorityLevel' id="PLevel" bsSize ='lg' onInput  ={props.changed}>
            <option>1</option>
            
           
          </Input>

        </FormGroup>
        
      
    </Form>
  </div>
  );
};

export default forms;