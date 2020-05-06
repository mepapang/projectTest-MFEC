package com.testproject.projectTestapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.testproject.projectTestapi.entity.UserEntity;
import com.testproject.projectTestapi.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping(path="/user")
	public List<UserEntity> getUsers() {
		return userService.getUsers();
	}
	
	@GetMapping(path = "/user/{id}")
	public UserEntity getUserById(@PathVariable("id") Integer userId) {
		return userService.getUserById(userId);
	}

}
