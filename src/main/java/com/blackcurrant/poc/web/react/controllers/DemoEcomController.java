package com.blackcurrant.poc.web.react.controllers;

import java.util.List;

import com.blackcurrant.poc.web.react.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blackcurrant.poc.web.react.entity.Product;

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
