package com.bms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bms.entity.CustomerList;
 
@Repository
public interface CustomerListRepository extends JpaRepository<CustomerList,Long> {
   
	CustomerList findByRegisteredId(long registeredId);
} 
