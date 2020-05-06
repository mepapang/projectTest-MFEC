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
	
	public UserEntity addUser(UserEntity user) {
		return userRepo.save(user);
	}
	
	public String deleteUser(Integer id) {
		userRepo.deleteById(id);
		return "User removed!";
	}
	
	public UserEntity updateUser(UserEntity user) {
		UserEntity userTemp = userRepo.findById(user.getUserId()).orElse(null);
		userTemp.setNickname(user.getNickname());
		userTemp.setEmail(user.getEmail());
		userTemp.setUsername(user.getUsername());
		userTemp.setPassword(user.getPassword());
		return userRepo.save(userTemp);
	}

}
