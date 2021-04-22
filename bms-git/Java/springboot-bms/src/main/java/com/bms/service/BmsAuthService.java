package com.bms.service;

import com.bms.dto.LoginReq;
import com.bms.dto.RegisterReq;

public interface BmsAuthService {

	String registerBMSUser(RegisterReq registerReq);
	
	String loginBMSUser(LoginReq loginReq) throws Exception;
}
