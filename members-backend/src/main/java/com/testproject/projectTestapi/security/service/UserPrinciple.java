package com.testproject.projectTestapi.security.service;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.testproject.projectTestapi.entity.UserEntity;

public class UserPrinciple implements UserDetails{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer userId;
    private String nickname;
    private String email;
    private String username;
    
    @JsonIgnore
    private String password;
    
    private Collection<? extends GrantedAuthority> authorities;
    

    
    public UserPrinciple(Integer userId, String nickname, 
    		String email,String username, String password, Collection<? extends GrantedAuthority> authorities) {
		this.userId = userId;
		this.nickname = nickname;
		this.username = username;
		this.email = email;
		this.password = password;
		this.authorities = authorities;
    }
    
    public static UserPrinciple build(UserEntity user) {
//        List<GrantedAuthority> authorities = user.getRoles().stream().map(role ->
//                new SimpleGrantedAuthority(role.getRolename())
//        ).collect(Collectors.toList());

        return new UserPrinciple(
                user.getUserId(),
                user.getNickname(),
                user.getEmail(),
                user.getUsername(),
                user.getPassword(),
                null
        );
    }
    
	public Integer getUserId() {
		return userId;
	}

	public String getNickname() {
		return nickname;
	}

	public String getEmail() {
		return email;
	}
	
	@Override
		public String getUsername() {
			return username;
		}
	
	@Override
	public String getPassword() {
		return password;
	}

//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		return authorities;
//	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
	
	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        
        UserPrinciple user = (UserPrinciple) o;
        return Objects.equals(userId, user.userId);
    }

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}

}
