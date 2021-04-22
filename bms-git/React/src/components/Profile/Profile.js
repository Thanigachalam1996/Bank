import React, { useState, useEffect } from 'react';
import { Form, Button, Row ,Col} from 'react-bootstrap';
import classes from './Profile.css';
import axios from 'axios';
import UpdateProfile from './UpdateProfile';

const Profile = props => {
    const [state, setState] = useState({
        id:props.match.params.id,
        username: '',
        email: '',
        city: '',
        phone: '',
        password: '',
        guardianType: '',
        guardianName: '',
        address: '',
        citizenship: '',
        state: '',
        country: '',
        email: '',
        gender: '',
        maritalStatus: '',
        contactNum: '',
        dob: '',
        registrationDate: '',
        accountType: '',
        branchName: '',
        citizenStatus: '',
        depositAmount: '',
        proofType: '',
        documentNum: '',
        referenceAccName: '',
        referenceAccNum: '',
        referenceAccHolderName: ''
      });

      

      const [validated, setValidated] = useState(false);

       const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const formData = new FormData(event.target),
    formDataObj = Object.fromEntries(formData.entries())

    if(form.checkValidity() === true){
      let value  = {
        "name" : formDataObj.name,
        "username" : formDataObj.username,
        "password" : formDataObj.password ,
        "guardianType" : formDataObj.guardianType,
        "guardianName" : formDataObj.guardianName,
        "address" : formDataObj.address,
        "citizenship" : formDataObj.citizenship,
        "state" : formDataObj.state,
        "country" : formDataObj.country,
        "email" : formDataObj.email,
        "gender" : formDataObj.gender,
        "maritalStatus" : formDataObj.maritalStatus,
        "contactNum": formDataObj.contactNum,
        "dob": formDataObj.dob,
        "registrationDate": formDataObj.registrationDate,
        "accountType": formDataObj.accountType,
        "branchName": formDataObj.branchName,
        "citizenStatus": formDataObj.citizenStatus,
        "depositAmount" : formDataObj.depositAmount,
        "proofType" : formDataObj.proofType,
        "documentNum": formDataObj.documentNum,
        "refAccountName": formDataObj.refAccountName,
        "refAccountNum": formDataObj.refAccountNum,
        "refAccountAdd": formDataObj.refAccountAdd
        
      }

      let id=1;
    UpdateProfile.updateProfile(value,id)
    .then(res =>
      handleSuccess(res))
    .catch(res =>
      handleError(res));
  }
    
  };
  const handleSuccess = (data) => {
    console.log(data) 
    setValidated(true);
     props.history.push({
            pathname: '/dashboard'
       });
  };

 const handleError = (data) =>{
  
  console.log(data)
  setValidated(false);
  };



    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

      const cancelRedirect = (event) =>{
         event.preventDefault();
         props.history.push({
           pathName: '/'
         });
      }

      

      // const updateProfile=id => {
      //   axios.put(`http://localhost:8080/profile/${state.id}`, state)
      //   .then(data =>{
      //     props.history.push("/dashboard");
      //   })
      //   .catch(err => alert(err));
      // };
    
      return (
        <div>
      <h1>Update Profile</h1>
      <Form className="register-form" noValidate validated={validated}  onSubmit={handleSubmit}>
          <Form.Row>
        <Form.Group as={Col} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            name="name" required
            />
              <Form.Control.Feedback type="invalid">
              Please choose a name.
            </Form.Control.Feedback>
        </Form.Group>
               

        <Form.Group as={Col} controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control required
            type="text"
            placeholder="Enter username"
            name="username"
             
          />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password" required
          />
            <Form.Control.Feedback type="invalid">
              Enter the password
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group  as={Col} controlId="GuardianType">
          <Form.Label>GuardianType</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter GuardianType"
            name="GuardianType"  required
            />
              <Form.Control.Feedback type="invalid">
                Enter the GuardianType
              </Form.Control.Feedback>
        </Form.Group>
        
        </Form.Row>

        <Form.Row>
        
        <Form.Group as={Col} controlId="GuardianName">
          <Form.Label>GuardianName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter GuardianName"
            name="GuardianName" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the GuardianName
              </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter address"
            name="address" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Address
              </Form.Control.Feedback>
        </Form.Group>
               
        <Form.Group as={Col} controlId="citizenship">
          <Form.Label>Citizenship</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter citizenship"
            name="citizenship" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Citizenship
              </Form.Control.Feedback>
         </Form.Group>
        <Form.Group as={Col} controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter State"
            name="state" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Citizenship
              </Form.Control.Feedback>
        </Form.Group>
        
        </Form.Row>
        
        <Form.Row>
        
        <Form.Group as={Col} controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            name="country" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Country
              </Form.Control.Feedback> 
        </Form.Group>
        
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Email
              </Form.Control.Feedback>  
        </Form.Group>
               
        <Form.Group controlId="gender" as={Col}>
          <Form.Label>Gender</Form.Label>
          <Form.Control as="select" defaultValue="Select">
              <option>select</option>
              <option>Male</option>
              <option>Female</option>          
            </Form.Control>
              <Form.Control.Feedback type="invalid">
                Enter the Gender
              </Form.Control.Feedback> 
        </Form.Group>
        <Form.Group controlId="maritialstatus" as={Col}>
          <Form.Label>Maritial Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter maritialstatus"
            name="maritialstatus" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the maritialstatus
              </Form.Control.Feedback> 
              </Form.Group>
        </Form.Row>
        
        <Form.Row>
        
        <Form.Group as={Col} controlId="contactno">
          <Form.Label>Contact No</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter contact no"
            name="contactno" required maxLength ="10" 
            />
              <Form.Control.Feedback type="invalid">
                Enter the contact no
              </Form.Control.Feedback> 
              </Form.Group>
        
        <Form.Group as={Col} controlId="dob">
          <Form.Label>D.O.B</Form.Label>
          <Form.Control 
            type="date"
            placeholder="Enter D.O.B"
            name="dob"
            format="YYYY-MM-DD"
            // value="{date: 'YYYY-MM-DD'}"
            required
            />
              <Form.Control.Feedback type="invalid">
                Enter the DD/MM/YY
              </Form.Control.Feedback> 
              </Form.Group>
               
        <Form.Group controlId="rDate" as={Col}>
          <Form.Label>Registration Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Registration Date"
            name="rDate"  required
            />
              <Form.Control.Feedback type="invalid">
                Enter the DD/MM/YY
              </Form.Control.Feedback> 
              </Form.Group>
                
        <Form.Group controlId="account" as={Col}>
          <Form.Label>Account Type</Form.Label>
          <Form.Control as="select" defaultValue="Select">
              <option>select</option>
              <option>Salary</option>
              <option>Savings</option>
          </Form.Control>
              <Form.Control.Feedback type="invalid">
                Enter the Account Type
              </Form.Control.Feedback> 
              </Form.Group>
               
        </Form.Row>
        
        <Form.Row>
        
        <Form.Group as={Col} controlId="branchname">
          <Form.Label>Branchname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter branchname"
            name="branchname"  required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Branchname
              </Form.Control.Feedback> 
              </Form.Group>
               
        
        <Form.Group as={Col} controlId="cStatus">
          <Form.Label>Citizen Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Citizen Status"
            name="text"  required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Citizen Status
              </Form.Control.Feedback> 
              </Form.Group>
               
        <Form.Group controlId="depositamount" as={Col}>
          <Form.Label>Deposite Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Deposite Amount"
            name="depositamount"  required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Deposite Amount
              </Form.Control.Feedback> 
              </Form.Group>
        <Form.Group controlId="prooftype" as={Col}>
          <Form.Label>Proof type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Proof type"
            name="prooftype" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Proof type
              </Form.Control.Feedback> 
              </Form.Group>
        </Form.Row>
        
        <Form.Row>
        
        <Form.Group as={Col} controlId="documentNo">
          <Form.Label>Document No</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Document No"
            name="documentNo" required
            />
              <Form.Control.Feedback type="invalid">
                Enter the Document No
              </Form.Control.Feedback> 
              </Form.Group>
        
        <Form.Group as={Col} controlId="refAccountname">
          <Form.Label>Reference Account Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Reference Account Name"
            name="refAccountname"  
            />
              {/* <Form.Control.Feedback type="invalid">
                Enter the Reference Account Name
              </Form.Control.Feedback>  */}
              </Form.Group>
        
          <Form.Group as={Col} controlId="refAccountno">
          <Form.Label>Reference Account No</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Reference Account No"
            name="refAccountno"  
            />
              {/* <Form.Control.Feedback type="invalid">
                Enter the Reference Account No
              </Form.Control.Feedback>  */}
              </Form.Group>
               
          
        <Form.Group as={Col} controlId="refAccountadd">
          <Form.Label>Reference Account Address</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter Reference Account Address"
            name="refAccountadd" 
            />
              {/* <Form.Control.Feedback type="invalid">
                Enter the Reference Account Address
              </Form.Control.Feedback>  */}
              </Form.Group>
               
        </Form.Row>
        
        <Button variant="primary" type="submit" >
          Update
        </Button>
        <Button variant="primary" type="submit" style={{marginLeft: "10px"}} onClick={cancelRedirect}>
          Cancel
        </Button>
      </Form>
    </div>
        
      );
}

export default Profile;