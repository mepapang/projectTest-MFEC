package com.testproject.projectTestapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.testproject.projectTestapi.entity.MemberEntity;
import com.testproject.projectTestapi.repository.MemberRepository;

@Service
public class MemberService {
	
	@Autowired
	private MemberRepository memberRepo;
	
	public List<MemberEntity> getMembers() {
		return memberRepo.findAll();
	}
	
	public MemberEntity getMemberById(Integer id) {
		return memberRepo.findById(id).orElse(null);
	}
	
	public MemberEntity addMember(MemberEntity member) {
		return memberRepo.save(member);
	}
	
	public String deleteMember(Integer id) {
		memberRepo.deleteById(id);
		return "Member removed!";
	}
	
	public MemberEntity updateMember(MemberEntity member) {
		MemberEntity memberTemp = memberRepo.findById(member.getMemberId()).orElse(null);
		memberTemp.setFname(member.getFname());
		memberTemp.setLname(member.getLname());
		memberTemp.setEmail(member.getEmail());
		memberTemp.setTel(member.getTel());
		return memberRepo.save(memberTemp);
	}
	
	
}
