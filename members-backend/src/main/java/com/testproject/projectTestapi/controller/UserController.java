package com.testproject.projectTestapi.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.testproject.projectTestapi.entity.UserEntity;
import com.testproject.projectTestapi.service.UserService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping(path = "/user/{username}")
	public Optional<UserEntity> getUserByUserName(@PathVariable("username") String username) {
		return userService.getUserByUserName(username);
	}
	
	@PutMapping(path = "/user/update")
	public UserEntity updateUserProfile(@RequestBody UserEntity user) {
		return userService.updateUserProfile(user);
	}
	
	
}
