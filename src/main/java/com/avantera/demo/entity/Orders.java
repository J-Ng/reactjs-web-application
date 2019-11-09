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
package com.avantera.demo.entity;

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
@Table(schema = "avantera_schema",name="orders")
public class Orders {
	
	private @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "order_id")
	Long orderId;
	
	@Column(name = "user_id")
	private Long userId;
	
	@Column(name = "purchase_date")
	private java.sql.Date purchaseDate;
	
	@Column(name = "delivery_address")
	private String deliveryAddress;
	
	@Column(name = "purchase_price")
	private double purchasePrice;
	
	@Column(name = "product_id")
	private Long productId;
	
	@Column(name = "quantity")
	private int quentity;
	
	@Column(name = "discount")
	private double discount;
	
	@Column(name = "status")
	private String status;

	private Orders() {}

	public Orders(java.sql.Date purchaseDate,String deliveryAddress,double purchasePrice,Long productId,int quentity,double discount,String status) {
		this.purchaseDate=purchaseDate;
		this.deliveryAddress=deliveryAddress;
		this.purchasePrice=purchasePrice;
		this.productId=productId;
		this.quentity=quentity;
		this.discount=discount;
		this.status=status;
	}

	@Override
	public String toString() {
		return "Orders{" +
			", purchaseDate='" + purchaseDate + '\'' +
			", deliveryAddress='" + deliveryAddress + '\'' +
			", purchasePrice='" + purchasePrice + '\'' +
			", productId='" + productId + '\'' +
			", discount='" + discount + '\'' +
			", status='" + status + '\'' +
			'}';
	}
}
