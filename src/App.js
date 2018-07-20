import React, { Component } from 'react';
import { Button  } from 'reactstrap';

import Form from './Component/Forms/Forms';
import AddQTYSku from './Component/Forms/AddSkuInputField';
import {Input} from 'reactstrap';
import {CSVLink} from 'react-csv';
import './App.css';
import { parse } from 'uri-js';

class App extends Component {

  state = {
    headers:[
      {label:'Company', key: 'company'},
      {label:'Facility', key:'facility'},
      {label:'PO Number', key:'PONumber'},
      {label:'BOL/Tracking Number', key:'bol'},
      {label:'Freight Contact', key: 'freightcontact'},
      {label:'SKU', key: 'sku'},
      {label:'QTY', key: 'qty'},
      {label:'Pallet/Carton # Notes', key: 'pallet'},
      {label:'Arrival Date', key: 'arrivaldate'},
      {label:'Total Containers', key: 'totalcontainers'},
      {label:'Total Pallets', key: 'totalpallets'},
      {label:'Total Cartons', key: 'totalcartons'},
      {label:'PO Notes', key: 'ponotes'},
      {label:'Priority Level', key:'priorityLevel'}
      
    ],
    POForms:[
      {company:'',facility:'RHNY',PONumber:'',
      bol:'', freightcontact:'', sku:'',qty: 0,
      pallet:'', arrivaldate:'',totalcontainers:'',
      totalpallets:'',totalcartons:'', ponotes:'',
      priorityLevel:'1'    
      },
      {company:'',facility:'',PONumber:'',
      bol:'', freightcontact:'', sku:'',qty:'',
      pallet:'', arrivaldate:'',totalcontainers:'',
      totalpallets:'',totalcartons:'', ponotes:'',
      priorityLevel:''    
      },
      {company:'',facility:'',PONumber:'',
      bol:'', freightcontact:'', sku:'',qty:'',
      pallet:'', arrivaldate:'',totalcontainers:'',
      totalpallets:'',totalcartons:'', ponotes:'',
      priorityLevel:''    
      },
      {company:'',facility:'',PONumber:'',
      bol:'', freightcontact:'', sku:'',qty:'',
      pallet:'', arrivaldate:'',totalcontainers:'',
      totalpallets:'',totalcartons:'', ponotes:'',
      priorityLevel:''    
      },
      {company:'',facility:'',PONumber:'',
      bol:'', freightcontact:'', sku:'',qty:'',
      pallet:'', arrivaldate:'',totalcontainers:'',
      totalpallets:'',totalcartons:'', ponotes:'',
      priorityLevel:''    
      },
      {company:'',facility:'',PONumber:'',
      bol:'', freightcontact:'', sku:'',qty:'',
      pallet:'', arrivaldate:'',totalcontainers:'',
      totalpallets:'',totalcartons:'', ponotes:'',
      priorityLevel:''    
      },
      {company:'',facility:'',PONumber:'',
      bol:'', freightcontact:'', sku:'',qty:'',
      pallet:'', arrivaldate:'',totalcontainers:'',
      totalpallets:'',totalcartons:'', ponotes:'',
      priorityLevel:''    
      },
      {company:'',facility:'',PONumber:'',
      bol:'', freightcontact:'', sku:'',qty:'',
      pallet:'', arrivaldate:'',totalcontainers:'',
      totalpallets:'',totalcartons:'', ponotes:'',
      priorityLevel:''    
      },
      {company:'',facility:'',PONumber:'',
      bol:'', freightcontact:'', sku:'',qty:'',
      pallet:'', arrivaldate:'',totalcontainers:'',
      totalpallets:'',totalcartons:'', ponotes:'',
      priorityLevel:''    
      },
      {company:'',facility:'',PONumber:'',
      bol:'', freightcontact:'', sku:'',qty:'',
      pallet:'', arrivaldate:'',totalcontainers:'',
      totalpallets:'',totalcartons:'', ponotes:'',
      priorityLevel:''    
      },
      {company:'',facility:'',PONumber:'',
      bol:'', freightcontact:'', sku:'',qty:'',
      pallet:'', arrivaldate:'',totalcontainers:'',
      totalpallets:'',totalcartons:'', ponotes:'',
      priorityLevel:''    
      }
    ],
      rowCounter:1,
      addSKU: 0
    
 
  }
  addingRow =(event)=>{
    let rowCounterCopy = JSON.parse(JSON.stringify(this.state.rowCounter));
  this.setState({
    rowCounter: rowCounterCopy + 1
  });
  }
  
  updateStateSKUQTY =() =>{
        //Create a copy of the current Forms State
        let AddSkuCopy = JSON.parse(JSON.stringify(this.state.addSKU));
  
        this.setState({
           addSKU:AddSkuCopy + 1
         });
  }
//TODO: Make sure to add recursion for multiple SKU/QTY, validation, update UI
//TODO: Add logic so that if add SKU is using index one on the template. If the add another PO is clicked it knows that index one is occupied. 
newSkuHandler = (e) =>{
  let AddSkuCopy = JSON.parse(JSON.stringify(this.state.addSKU));
  let POFormsCopy = JSON.parse(JSON.stringify(this.state.POForms));
  let addAnotherSku = this.state.addSKU;
  let rowCount = this.state.rowCounter;
    //Checks which input filed is being updated. This will also change the state with out mutating it
    if(addAnotherSku === 1 && rowCount === 1 ){
      console.log('counter',this.state.rowCounter);
      console.log('newSkuHandler');
      
      POFormsCopy[1][e.target.name] = e.target.value;
      //This allows for the client to add a SKU and it's Qty with out the redundency of adding the other attributes 
      POFormsCopy[1].company = POFormsCopy[0].company;
      POFormsCopy[1].facility = POFormsCopy[0].facility; 
      POFormsCopy[1].PONumber = POFormsCopy[0].PONumber; 
      POFormsCopy[1].bol = POFormsCopy[0].bol; 
      POFormsCopy[1].freightcontact = POFormsCopy[0].freightcontact; 
      POFormsCopy[1].pallet = POFormsCopy[0].pallet; 
      POFormsCopy[1].arrivaldate = POFormsCopy[0].arrivaldate;

      POFormsCopy[1].totalcontainers = POFormsCopy[0].totalcontainers; 
      POFormsCopy[1].totalpallets = POFormsCopy[0].totalpallets; 
      POFormsCopy[1].totalcartons = POFormsCopy[0].totalcartons; 
      POFormsCopy[1].ponotes = POFormsCopy[0].ponotes; 
      POFormsCopy[1].priorityLevel = POFormsCopy[0].priorityLevel; 
      // If there are 2 orders then add sku btn is clicked this else if is hit
      //this and the data is pulled from the second order not the first.
     } else if(addAnotherSku === 1 && rowCount === 2){
      POFormsCopy[2][e.target.name] = e.target.value;
      //This allows for the client to add a SKU and it's Qty with out the redundency of adding the other attributes 
      POFormsCopy[2].company = POFormsCopy[1].company;
      POFormsCopy[2].facility = POFormsCopy[1].facility; 
      POFormsCopy[2].PONumber = POFormsCopy[1].PONumber; 
      POFormsCopy[2].bol = POFormsCopy[1].bol; 
      POFormsCopy[2].freightcontact = POFormsCopy[1].freightcontact; 
      POFormsCopy[2].pallet = POFormsCopy[1].pallet; 
      POFormsCopy[2].arrivaldate = POFormsCopy[1].arrivaldate;

      POFormsCopy[2].totalcontainers = POFormsCopy[1].totalcontainers; 
      POFormsCopy[2].totalpallets = POFormsCopy[1].totalpallets; 
      POFormsCopy[2].totalcartons = POFormsCopy[1].totalcartons; 
      POFormsCopy[2].ponotes = POFormsCopy[1].ponotes; 
      POFormsCopy[2].priorityLevel = POFormsCopy[1].priorityLevel; 
      // if add row button is clicked add data to next array element in state

     }

     this.setState({
      POForms:POFormsCopy
      
    });

}//end exportCSVHandlerPO







exportCSVHandlerPO =  (event)=>{

    console.log('counter',this.state.rowCounter);
    console.log('Event.target.value = ',event.target.value);
    //console.log('RowCounter',this.state.AddARow.rowCounter);
    //Create a copy of the current Forms State
   let POFormsCopy = JSON.parse(JSON.stringify(this.state.POForms));

//Checks which input filed is being updated. This will also change the state with out mutating it
   if(this.state.rowCounter === 1 ){
    console.log('counter',this.state.rowCounter);
    console.log('Hellow1');
      POFormsCopy[0][event.target.name] = event.target.value;
// if add row button is clicked add data to next array element in state
   }
   if(this.state.rowCounter === 2){
     console.log('Hellow2');
     POFormsCopy[1][event.target.name] = event.target.value;
   }

  this.setState({
    POForms:POFormsCopy
    
  });
}//end exportCSVHandlerPO
  /**First Go: Updates everthing **/

 
  render() {
    console.log("In Render: ", this.state)
    let addPOForm2 = null;
    let skuQtyForm = null;

    if(this.state.addSKU >= 1){
      skuQtyForm = 
      <AddQTYSku 
      
      changed2={this.newSkuHandler.bind(this)}
      sku2Val={this.state.sku}
      qty2Val = {this.state.qty}
      />
      
      console.log('ADDSKU WORKS');
    }
    if(this.state.rowCounter === 2){
     
      addPOForm2 =
        <Form 
        
          changed={this.exportCSVHandlerPO.bind(this)}
       
          companyVal ={this.state.company}
          facilityVal ={this.state.facility}
          PONumVal ={this.state.PONumber}
          BolTrackVal ={this.state.bol}
          freightContVal ={this.state.freightcontact}
          SKUVal = {this.state.sku}
          QTYVal = {this.state.qty}
          palletCartonVal ={this.state.pallet}
          arrivalDateVal = {this.state.arrivaldate}
          totalContainersVal = {this.state.totalcontainers}
          totalPalletsVal = {this.state.totalpallets}
          totalCartonsVal = {this.state.totalcartons}
          PONotesVal = {this.state.ponotes}
          PLevel = {this.state.priorityLevel}
      />;
    }else{
      console.log('Halls');
    }
    return (
     <div>
       <p> Rows: {this.state.rowCounter} </p>
        <Form 
          changed={this.exportCSVHandlerPO.bind(this)}
          invalid
          companyVal ={this.state.company}
          facilityCode ={this.state.facility}
          PONumVal ={this.state.PONumber}
          BolTPONumValrackVal ={this.state.bol}
          freightContVal ={this.state.freightcontact}
          SKUVal = {this.state.sku}
          QTYVal = {this.state.qty}
          palletCartonVal ={this.state.pallet}
          arrivalDateVal = {this.state.arrivaldate}
          totalContainersVal = {this.state.totalcontainers}
          totalPalletsVal = {this.state.totalpallets}
          totalCartonsVal = {this.state.totalcartons}
          PONotesVal = {this.state.ponotes}
          PLevel = {this.state.priorityLevel}
        />
          <div>
            {addPOForm2}
            {skuQtyForm}
          </div>
       <CSVLink data={this.state.POForms} headers={this.state.headers}> <Button className ='GenerateBtn' >Generate</Button></CSVLink>
       <Button className ='AddRowBtn' onClick ={this.addingRow.bind(this)}> Add Another PO</Button>
       <Button onClick ={this.updateStateSKUQTY.bind(this)}>Add Sku</Button>
      </div>
      
    );
  }

  
}

export default App;
