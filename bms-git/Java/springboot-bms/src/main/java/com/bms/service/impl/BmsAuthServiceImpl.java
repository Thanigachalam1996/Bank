package com.bms.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bms.dto.LoginReq;
import com.bms.dto.RegisterReq;
import com.bms.entity.CustomerList;
import com.bms.repository.CustomerListRepository;
import com.bms.service.BmsAuthService;


@Service
public class BmsAuthServiceImpl implements BmsAuthService {
  

@Autowired 
private CustomerListRepository registerListRepository;


	private static List<RegisterReq> registerReqs = new ArrayList<>();
	 private static int rId = 10000;
	  
	static  {
			
		registerReqs.add(new RegisterReq(++rId,"John","John","John",10000));
	}
	
	@Override
	public String registerBMSUser(RegisterReq registerReq) { 
		// TODO Auto-generated method stub
		CustomerList registerList = new CustomerList();
		if(registerReq.getId() == -1 || registerReq.getId() ==0) { 
			registerReq.setRegisteredId(++rId);
			BeanUtils.copyProperties(registerReq, registerList);
			registerListRepository.save(registerList);
			//registerReqs.add(registerReq);
		}
		System.out.println(registerList);
		return  "SuccessFully Registered";
	}
	
	@SuppressWarnings("unlikely-arg-type")
	@Override
	public String loginBMSUser(LoginReq loginReq) throws Exception{
		// TODO Auto-generated method stub
	//	for (type variableName : arrayName) 
		CustomerList userId = registerListRepository.findByRegisteredId(loginReq.getUserId());
		
		if(Long.valueOf(userId.getRegisteredId()).equals(loginReq.getUserId()) && userId.getPassword().equals(loginReq.getPassword())) {
			return "SuccessFully Logge In";
		}else {
			return null;
		}
				//RegisterReq userId = findById(loginReq.getUserId());
		
//		if(Long.valueOf(userId.getId()).equals(loginReq.getUserId()) && userId.getPassword().equals(loginReq.getPassword())) {
//			return "SuccessFully Logged In";
//		}else {
//			 throw new RuntimeException("failed");
//		}
//		 
	}

//	public RegisterReq findById(long l) {
//		 
//		for(RegisterReq val : registerReqs ) {
//			if(Long.valueOf(val.getId()).equals(l)){
//				return val;
//			};
//		}
//		return null;
//	}

}
