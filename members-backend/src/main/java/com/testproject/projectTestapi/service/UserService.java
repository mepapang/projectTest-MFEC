package com.testproject.projectTestapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.testproject.projectTestapi.entity.UserEntity;
import com.testproject.projectTestapi.repository.UserRepository;
import com.testproject.projectTestapi.security.service.UserPrinciple;

@Service
public class UserService implements UserDetailsService{
	
	@Autowired
	private UserRepository userRepo;
	
	public List<UserEntity> getUsers() {
		return userRepo.findAll();
	}
	
	public Optional<UserEntity> getUserByUserName(String username) {
		return userRepo.findByUsername(username);
	}
	
	public UserEntity getUserById(Integer id) {
		return userRepo.findById(id).orElse(null);
	}
	
	public UserEntity addUser(UserEntity user) {
		return userRepo.save(user);
	}
	
	public UserEntity updateUserProfile(UserEntity user) {
		UserEntity userTemp = userRepo.findByUsername(user.getUsername()).orElse(null);
		userTemp.setNickname(user.getNickname());
		userTemp.setEmail(user.getEmail());
		return userRepo.save(userTemp);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserEntity user = userRepo.findByUsername(username).orElseThrow(
				() -> new UsernameNotFoundException("User Not Found with -> username or email : " + username));
		return UserPrinciple.build(user);
	}
	

}
