/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.blackcurrant.poc.web.react.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Jose NG
 */
@Entity
@Table(schema = "poc_schema",name="user")
public class User {
	
	private @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "user_id")
	Long userId;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "middle_name")
	private String middleName;

	@Column(name = "birthday")
	private java.sql.Date birthDate;

	@Column(name = "gender")
	private String gender;

	@Column(name = "email")
	private String email;

	@Column(name = "user_name")
	private String userName;

	@Column(name = "password")
	private String password;

	@Column(name = "address")
	private String address;

	@Column(name = "cc_number")
	private String ccNumber;

	@Column(name = "cc_name")
	private String ccName;

	@Column(name = "cc_expiry_date")
	private java.sql.Date ccExpiryDate;

	@Column(name = "cc_security_code")
	private String ccSecurityCode;

	private User() {}

	public User(String firstName,String middleName,java.sql.Date birthDate,String gender,String email,String userName,String password,String address,String ccNumber,String ccName,java.sql.Date ccExpiryDate,String ccSecurityCode) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.birthDate = birthDate;
		this.gender = gender;
		this.email = email;
		this.userName =  userName;
		this.password =  password;
		this.address = address;
		this.ccNumber =  ccNumber;
		this.ccName = ccName;
		this.ccExpiryDate = ccExpiryDate;
		this.ccSecurityCode = ccSecurityCode;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public java.sql.Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(java.sql.Date birthDate) {
		this.birthDate = birthDate;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCcNumber() {
		return ccNumber;
	}

	public void setCcNumber(String ccNumber) {
		this.ccNumber = ccNumber;
	}

	public String getCcName() {
		return ccName;
	}

	public void setCcName(String ccName) {
		this.ccName = ccName;
	}

	public java.sql.Date getCcExpiryDate() {
		return ccExpiryDate;
	}

	public void setCcExpiryDate(java.sql.Date ccExpiryDate) {
		this.ccExpiryDate = ccExpiryDate;
	}

	public String getCcSecurityCode() {
		return ccSecurityCode;
	}

	public void setCcSecurityCode(String ccSecurityCode) {
		this.ccSecurityCode = ccSecurityCode;
	}

	@Override
	public String toString() {
		return "User{" +
			", userId='" + userId + '\'' +
			", firstName='" + firstName + '\'' +
			", middleName='" + middleName + '\'' +
			", birthDate='" + birthDate + '\'' +
			", gender='" + gender + '\'' +
			", email='" + email + '\'' +
			", userName='" + userName + '\'' +
			", password='" + password + '\'' +
			", address='" + address + '\'' +
			", ccNumber='" + ccNumber + '\'' +
			", ccName='" + ccName + '\'' +
			", ccExpiryDate='" + ccExpiryDate + '\'' +
			", ccSecurityCode='" + ccSecurityCode + '\'' +
			'}';
	}
}
