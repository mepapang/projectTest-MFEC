package com.testproject.projectTestapi.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.testproject.projectTestapi.entity.MemberEntity;

@Repository
public interface MemberRepository extends CrudRepository<MemberEntity, Integer>{
	List<MemberEntity> findAll();
	

}
