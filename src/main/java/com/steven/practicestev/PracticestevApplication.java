package com.steven.practicestev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.stereotype.Controller;

@SpringBootApplication 
@Controller
@RequestMapping("/")
public class PracticestevApplication {

	public static void main(String[] args) {
		SpringApplication.run(PracticestevApplication.class, args);
	}

	@GetMapping
	public ModelAndView principalPage(){
		return new ModelAndView("home");
	}
}
