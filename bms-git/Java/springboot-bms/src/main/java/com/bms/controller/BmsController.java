package com.bms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bms.dto.LoginReq;
import com.bms.dto.RegisterReq;

import com.bms.entity.CustomerList;
import com.bms.exception.ResourceNotFoundException;
import com.bms.service.BmsAuthService;
import com.bms.service.CustomerService;


@CrossOrigin(origins ="http://localhost:3001")
@RestController
public class BmsController {
	
	@Autowired 
	private BmsAuthService  bmsAuthService;
	private CustomerService customerService;
	
	@PostMapping(path="/api/login")
     public ResponseEntity<LoginReq> loginBMS(@RequestBody LoginReq loginReq) throws Exception{
		
		String bmsAuthNew = bmsAuthService.loginBMSUser(loginReq);		 
		System.out.println(bmsAuthNew);
		if(bmsAuthNew == null) {
			return new ResponseEntity<LoginReq>(loginReq,HttpStatus.BAD_GATEWAY);			 
		}else {
			return new ResponseEntity<LoginReq>(loginReq,HttpStatus.OK);
		}
		
	}
	@PostMapping(value="/api/register")
	public ResponseEntity<RegisterReq> registerBMS(@RequestBody RegisterReq registerReq) {
		
		String bmsAuthNew = bmsAuthService.registerBMSUser(registerReq); 
		System.out.println(bmsAuthNew);
		return new ResponseEntity<RegisterReq>(registerReq,HttpStatus.OK);
	}
	@GetMapping(path="/api/profile/{id}")
	public ResponseEntity<CustomerList> getCustomer(@PathVariable Long id){
		try {
			CustomerList customer=customerService.getCustomer(id);
			return new ResponseEntity<CustomerList>(customer, HttpStatus.OK);
			
		}catch(ResourceNotFoundException e) {
			return new ResponseEntity<CustomerList>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@PutMapping(path="/api/profile/{id}")
	public ResponseEntity<CustomerList> updateUser(@PathVariable long id,  @RequestBody CustomerList customer){
		try { 
		CustomerList updateUser=customerService.updateCustomer(id,customer);	
	     return new ResponseEntity<CustomerList>(updateUser, HttpStatus.OK);
		}catch(ResourceNotFoundException e) {
			return new ResponseEntity<CustomerList>(HttpStatus.NOT_FOUND);
		}
	}
	
}
