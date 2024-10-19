package com.kms.main.test;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Entity
@Table(name="person_table")
@Getter
@Setter
public class Person {
	@Id //기본키를 의미. 반드시 기본키를 가져야함.
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NonNull
	@Column(unique = true, length=10) //유일하고 최대 길이가 10.
	private String personName;
	
	@Column(name="person_age")
	private int age;
}
