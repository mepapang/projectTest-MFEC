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

import com.testproject.projectTestapi.entity.MemberEntity;
import com.testproject.projectTestapi.service.MemberService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	
	/**
	 * function : getMember()
	 * operation: function for get all member from DB
	 * param: -
	 *  
	 * */
	@GetMapping(path="/member")
	public List<MemberEntity> getMember() {
		return memberService.getMembers();
	}
	
	/**
	 * function : getMemberById()
	 * operation: function for get member by Id from DB
	 * param: id
	 *  
	 * */
	@GetMapping(path = "/member/{id}")
	public MemberEntity getMemberById(@PathVariable("id") Integer memberId) {
		return memberService.getMemberById(memberId);
	}
	
	/**
	 * function : addMember()
	 * operation: function for add member to DB
	 * param: memberEntity
	 *  
	 * */
	@PostMapping(path = "/add")
	public MemberEntity addMember(@RequestBody MemberEntity member) {
		return memberService.addMember(member);
	}
	
	/**
	 * function : updateMember()
	 * operation: function for update member to DB
	 * param: memberEntity
	 *  
	 * */
	@PutMapping(path = "/update")
	public MemberEntity updateMember(@RequestBody MemberEntity member) {
		return memberService.updateMember(member);
	}
	
	/**
	 * function : deleteMember()
	 * operation: function for delete member from DB
	 * param: id
	 *  
	 * */
	@DeleteMapping(path = "/del/{id}")
	public String deleteMember(@PathVariable("id") Integer memberId) {
		return memberService.deleteMember(memberId);
	}
	
	
	
	
}
