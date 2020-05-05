package com.testproject.projectTestapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.testproject.projectTestapi.entity.MemberEntity;
import com.testproject.projectTestapi.repository.MemberRepository;

@RestController
public class MemberController {
	
	@Autowired
	private MemberRepository memberRepo;
	
	@GetMapping(path="")
	public List<MemberEntity> getMember() {
		return memberRepo.findAll();
	}

}
