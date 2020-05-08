package com.testproject.projectTestapi.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.testproject.projectTestapi.entity.RoleEntity;

@Repository
public interface RoleRepository extends CrudRepository<RoleEntity, Integer>{
	Optional<RoleEntity> findByRolename(String rolename);
}
