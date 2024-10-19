package com.kms.main.test;

import org.springframework.stereotype.Controller;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class PersonController {
	
	private final PersonRepository personRepository;
}
