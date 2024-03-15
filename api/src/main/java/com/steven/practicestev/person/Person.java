/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.steven.practicestev.person;

import java.sql.Date;
// import java.time.LocalDate;
import jakarta.persistence.MappedSuperclass;

/**
 *
 * @author Steven
 */
@MappedSuperclass
public abstract class Person {

   // attributes
   private String name;
   private String lastname;
   private String secondlastname;
   private Date birthdate;
   private String phone;
   private String email;
   private boolean exists;

   // public Person(String name, String lastName, String secondLastname, Date
   // birthDate, String phone, String email) {
   // this.name = name;
   // this.lastName = lastName;
   // this.secondLastname = secondLastname;
   // this.birthDate = birthDate;
   // this.phone = phone;
   // this.email = email;
   // this.exists = true;
   // }

   // public Person(){
   // name = "";
   // lastName = "";
   // secondLastname = "";
   // birthDate = Date.valueOf(LocalDate.MIN);
   // phone = "";
   // email = "";
   // exists = false;
   // }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public String getLastname() {
      return lastname;
   }

   public void setLastname(String lastname) {
      this.lastname = lastname;
   }

   public String getSecondlastname() {
      return secondlastname;
   }

   public void setSecondlastname(String secondlastname) {
      this.secondlastname = secondlastname;
   }

   public Date getBirthdate() {
      return birthdate;
   }

   public void setBirthdate(Date birthdate) {
      this.birthdate = birthdate;
   }

   public String getPhone() {
      return phone;
   }

   public void setPhone(String phone) {
      this.phone = phone;
   }

   public String getEmail() {
      return email;
   }

   public void setEmail(String email) {
      this.email = email;
   }

   public boolean isExists() {
      return exists;
   }

   public void setExists(boolean exists) {
      this.exists = exists;
   }
}
