package com.bms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.bms.entity.CustomerList;
import com.bms.exception.ResourceNotFoundException;
import com.bms.repository.CustomerListRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerListRepository customerListRepository;

	public CustomerList getCustomer(Long id) {

		return customerListRepository.findById(id).get();
	}

	public CustomerList updateCustomer(Long id, CustomerList customerDetails)  {
       try {
		CustomerList user = customerListRepository.findById(id).get();
				
		user.setName(customerDetails.getName());
		user.setUsername(customerDetails.getUsername());
		user.setPassword(customerDetails.getPassword());
		user.setGuardiantype(customerDetails.getGuardiantype());
		user.setGuardianname(customerDetails.getGuardianname());
		user.setAddress(customerDetails.getAddress());
		user.setCitizenship(customerDetails.getCitizenship());
		user.setState(customerDetails.getState());
		user.setCountry(customerDetails.getCountry());
		user.setEmail(customerDetails.getEmail());
		user.setGender(customerDetails.getGender());
		user.setMaritialstatus(customerDetails.getMaritialstatus());
		user.setContactno(customerDetails.getContactno());
		user.setDob(customerDetails.getDob());
		user.setRegdate(customerDetails.getRegdate());
		user.setAccounttype(customerDetails.getAccounttype());
		user.setBranchname(customerDetails.getBranchname());
		user.setCitizenstatus(customerDetails.getCitizenstatus());
		user.setDepositamount(customerDetails.getDepositamount());
		user.setProoftype(customerDetails.getProoftype());
		user.setDocumentno(customerDetails.getDocumentno());
		user.setRefaccholdername(customerDetails.getRefaccholdername());
		user.setRefaccno(customerDetails.getRefaccno());
		user.setRefaccaddress(customerDetails.getRefaccaddress());
		return customerListRepository.save(user);
       }
       catch(ResourceNotFoundException e) {
    	   throw e;
       }

	}

}
