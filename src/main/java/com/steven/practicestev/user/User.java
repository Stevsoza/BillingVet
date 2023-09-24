package com.steven.practicestev.user;

import jakarta.persistence.*;
// import javax.persistence.Entity;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Long id;

  private String firstName;
  private String lastName;
  private Integer age;


  public Long getId() {
    return id;
  }

  // public void setId( Long id ) {
  //     this.id = id;
  //  }

  public String getfirstName() {
    return firstName;
  }

  public void setfirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getlastName() {
    return lastName;
  }

  public void setlastName(String lastName) {
    this.lastName = lastName;
  }
  public Integer getage(){
    return age;
  }

  public void setage(Integer age) {
    this.age = age;
  }
}