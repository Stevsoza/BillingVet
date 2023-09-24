/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.steven.practicestev.seller;

import com.steven.practicestev.person.Person;
import jakarta.persistence.*;
// import java.sql.Date;

/**
 *
 * @author Steven
 */
@Entity
@Table(name = "seller")
public class Seller extends Person {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Long id;
   private String password;
   private String username;

   // public Seller(int id, String name, String lastName, String secondLastname,
   // Date birthDate, String phone, String email, String password, String username)
   // {
   // super(name,lastName,secondLastname, birthDate,phone, email);
   // this.id = id;
   // this.password = password;
   // this.username = username;
   // }

   // public seller(){
   // super();
   // id = 0;
   // password = "";
   // user = "";
   // }

   public Long getId() {
      return id;
   }

   // public void setId(int id) {
   // this.id = id;
   // }

   public String getPassword() {
      return password;
   }

   public void setPassword(String password) {
      this.password = password;
   }

   public String getUsername() {
      return username;
   }

   public void setUsername(String username) {
      this.username = username;
   }
}
