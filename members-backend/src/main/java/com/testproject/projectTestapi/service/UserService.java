package com.testproject.projectTestapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.testproject.projectTestapi.entity.UserEntity;
import com.testproject.projectTestapi.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	public List<UserEntity> getUsers() {
		return userRepo.findAll();
	}
	
	public UserEntity getUserById(Integer id) {
		return userRepo.findById(id).orElse(null);
	}

}
