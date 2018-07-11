import React, { Component } from 'react';
import { Button  } from 'reactstrap';

import Form from './Component/Forms/Forms';
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
      rowCounter:1
    
 
  }
  addingRow =(event)=>{
    let rowCounterCopy = JSON.parse(JSON.stringify(this.state.rowCounter));
  this.setState({
    rowCounter: rowCounterCopy + 1
  });
  }
  
  
//To Solve issue below https://forum.freecodecamp.org/t/reactjs-using-setstate-to-update-a-single-property-on-an-object/146772
exportCSVHandlerPO =  (event)=>{

    console.log('counter',this.state.rowCounter);
    console.log('Event.target.value = ',event.target.value);
    //console.log('RowCounter',this.state.AddARow.rowCounter);
    //Create a copy of the current Forms State
  let POFormsCopy = JSON.parse(JSON.stringify(this.state.POForms));

//Checks which input filed is being updated. This will also change the state with out mutating it
   if(this.state.rowCounter === 1){
    console.log('counter',this.state.rowCounter);
    console.log('Hellow2');
    if(event.target.name === 'company'){
        POFormsCopy[0].company = event.target.value;
      } else if(event.target.name ==='facility'){
        POFormsCopy[0].facility = event.target.value;
      }else if(event.target.name ==='PONumber'){
        //Validation for Po number
          if(event.target.value.length > 4)
            POFormsCopy[0].PONumber = event.target.value;
          else{
             
            console.log('Need more Balls');
          }
      }else if(event.target.name === 'bol'){
        POFormsCopy[0].bol = event.target.value;
      }else if(event.target.name === 'freightcontact'){
        POFormsCopy[0].freightcontact = event.target.value;
      }else if(event.target.name === 'sku'){
        POFormsCopy[0].sku = event.target.value;
      }else if(event.target.name === 'qty'){
        POFormsCopy[0].qty = event.target.value;
      }else if(event.target.name === 'pallet'){
        POFormsCopy[0].pallet = event.target.value;
      }else if(event.target.name === 'arrivaldate'){
        POFormsCopy[0].arrivaldate = event.target.value;
      }else if(event.target.name === 'totalcontainers'){
        POFormsCopy[0].totalcontainers = event.target.value;
      }else if(event.target.name === 'totalpallets'){
        POFormsCopy[0].totalpallets = event.target.value;
      }else if(event.target.name === 'totalcartons'){
        POFormsCopy[0].totalcartons = event.target.value;
      }else if(event.target.name === 'ponotes'){
        POFormsCopy[0].ponotes = event.target.value;
      }else if(event.target.name === 'priorityLevel'){
        POFormsCopy[0].priorityLevel = event.target.value;
}// end inner if 
// if add row button is clicked add data to next array element in state
   }if(this.state.rowCounter === 2){
     console.log('Hellow');
      if(event.target.name === 'company'){
        POFormsCopy[1].company = event.target.value;
      } else if(event.target.name ==='facility'){
        POFormsCopy[1].facility = event.target.value;
      }else if(event.target.name ==='PONumber'){
        POFormsCopy[1].PONumber = event.target.value;
      }else if(event.target.name === 'bol'){
        POFormsCopy[1].bol = event.target.value;
      }else if(event.target.name === 'freightcontact'){
        POFormsCopy[1].freightcontact = event.target.value;
      }else if(event.target.name === 'sku'){
        POFormsCopy[1].sku = event.target.value;
      }else if(event.target.name === 'qty'){
        POFormsCopy[1].qty = event.target.value;
      }else if(event.target.name === 'pallet'){
        POFormsCopy[1].pallet = event.target.value;
      }else if(event.target.name === 'arrivaldate'){
        POFormsCopy[1].arrivaldate = event.target.value;
      }else if(event.target.name === 'totalcontainers'){
        POFormsCopy[1].totalcontainers = event.target.value;
      }else if(event.target.name === 'totalpallets'){
        POFormsCopy[1].totalpallets = event.target.value;
      }else if(event.target.name === 'totalcartons'){
        POFormsCopy[1].totalcartons = event.target.value;
      }else if(event.target.name === 'ponotes'){
        POFormsCopy[1].ponotes = event.target.value;
      }else if(event.target.name === 'priorityLevel'){
        
            POFormsCopy[1].priorityLevel = event.target.value;
          
        
  }// end inner if 
   }

  this.setState({
    POForms:POFormsCopy
    
  });
}//end exportCSVHandlerPO
  /**First Go: Updates everthing **/

 
  render() {
    console.log("In Render: ", this.state)
    let addPOForm2 = null;
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
      console.log('Balls');
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

          </div>
       <CSVLink data={this.state.POForms} headers={this.state.headers}> <Button className ='GenerateBtn' >Generate</Button></CSVLink>
       <Button className ='AddRowBtn' onClick ={this.addingRow.bind(this)}> Add Another Row</Button>
      </div>
      
    );
  }

  
}

export default App;
