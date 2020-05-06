package com.testproject.projectTestapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.testproject.projectTestapi.entity.MemberEntity;
import com.testproject.projectTestapi.service.MemberService;

@RestController
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	
	@GetMapping(path="/member")
	public List<MemberEntity> getMember() {
		return memberService.getMembers();
	}
	
	@GetMapping(path = "/member/{id}")
	public MemberEntity getMemberById(@PathVariable("id") Integer memberId) {
		return memberService.getMemberById(memberId);
	}
}
