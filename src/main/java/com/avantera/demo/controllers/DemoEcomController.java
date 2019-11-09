package com.avantera.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.avantera.demo.entity.Product;
import com.avantera.demo.repository.ProductRepository;

/**
 * @author Jose NG
 */
@RestController
public class DemoEcomController  {

	@Autowired
	ProductRepository productRepo;
	
	@GetMapping("/api/test")
	public List<Product> returnTest() {
		List<Product> output = productRepo.findAll();
		return output;
	}

}
