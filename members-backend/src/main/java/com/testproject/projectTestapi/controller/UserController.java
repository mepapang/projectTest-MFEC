package com.testproject.projectTestapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.testproject.projectTestapi.entity.UserEntity;
import com.testproject.projectTestapi.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	/**
	 * function : getUsers()
	 * operation: function for get all user from DB
	 * param: -
	 *  
	 * */
	@GetMapping(path="/user")
	public List<UserEntity> getUsers() {
		return userService.getUsers();
	}
	
	/**
	 * function : getUserById()
	 * operation: function for get user by id from DB
	 * param: id
	 *  
	 * */
	@GetMapping(path = "/user/{id}")
	public UserEntity getUserById(@PathVariable("id") Integer userId) {
		return userService.getUserById(userId);
	}
	
	/**
	 * function : addUser()
	 * operation: function for add user to DB
	 * param: UserEntity
	 *  
	 * */
	@PostMapping(path = "/addUser")
	public UserEntity addUser(@RequestBody UserEntity user) {
		return userService.addUser(user);
	}
	
	/**
	 * function : updateUser()
	 * operation: function for update user to DB
	 * param: UserEntity
	 *  
	 * */
	@PutMapping(path = "/updateUser")
	public UserEntity updateUser(@RequestBody UserEntity user) {
		return userService.updateUser(user);
	}
	
	
	/**
	 * function : deleteUser()
	 * operation: function for delete user from DB
	 * param: id
	 *  
	 * */
	@DeleteMapping(path = "/delUser/{id}")
	public String deleteUser(@PathVariable("id") Integer userId) {
		return userService.deleteUser(userId);
	}

}
