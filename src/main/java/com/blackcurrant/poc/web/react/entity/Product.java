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
@Table(schema = "poc_schema",name="product")
public class Product {
	
	private @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "product_id")
	Long productId;
	
	@Column(name = "product_name")
	private String productName;
	
	@Column(name = "product_description")
	private String productDescription;
	
	@Column(name = "brand")
	private String brand;
	
	@Column(name = "product_type")
	private String productType;
	
	@Column(name = "price")
	private double price;
	
	@Column(name = "country_of_origin")
	private String countryOfOrigin;
	
	@Column(name = "serial_number")
	private String serialNumber;
	
	@Column(name = "img")
	private String img;

	private Product() {}

	public Product(String productName,String productDescription, String brand,String productType, double price,String countryOfOrigin,String serialNumber) {
		this.productName=productName;
		this.productDescription=productDescription;
		this.brand=brand;
		this.productType=productType;
		this.price=price;
		this.countryOfOrigin=countryOfOrigin;
		this.serialNumber=serialNumber;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getCountryOfOrigin() {
		return countryOfOrigin;
	}

	public void setCountryOfOrigin(String countryOfOrigin) {
		this.countryOfOrigin = countryOfOrigin;
	}

	public String getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	@Override
	public String toString() {
		return "Product{" +
			", productId='" + productId + '\'' +
			", productName='" + productName + '\'' +
			", productDescription='" + productDescription + '\'' +
			", brand='" + brand + '\'' +
			", productType='" + productType + '\'' +
			", price='" + price + '\'' +
			", countryOfOrigin='" + countryOfOrigin + '\'' +
			", serialNumber='" + serialNumber + '\'' +
			'}';
	}
}
