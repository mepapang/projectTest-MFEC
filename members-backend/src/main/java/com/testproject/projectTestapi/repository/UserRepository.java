package com.testproject.projectTestapi.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.testproject.projectTestapi.entity.UserEntity;

@Repository
public interface UserRepository  extends CrudRepository<UserEntity, Integer>{
	
	List<UserEntity> findAll();
	
	Optional<UserEntity> findByUsername(String username);
	
	Boolean existsByUsername(String username);
	Boolean existsByEmail(String email);
}
