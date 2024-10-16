package com.kms.main.main;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
	@GetMapping("/")
    public String rootConnector() {
        return "redirect:/terminal";
    }
	
	@GetMapping("/terminal")
	public String mainPage(Model model) {
		System.out.println("## MainPage...");
		model.addAttribute("hello","hello");
		return "main/terminal";
	}
}
