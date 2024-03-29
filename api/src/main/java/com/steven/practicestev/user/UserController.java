package com.steven.practicestev.user;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;


@CrossOrigin(origins = "*")
@RestController
@Controller
@RequestMapping("/")
public class UserController {
   // @Qualifier("User")
   @Autowired
   private UserService userService;
   @Autowired
   private UserRepository userRepository;

   // Create a new user
   @PostMapping("/user/newUser")
   public User createUser(@RequestBody User user) {
      return userService.createUser(user);
   }

   @GetMapping("/showUsers")
   public ModelAndView getViewUsers() {
      ModelAndView mav = new ModelAndView("listUsers");
      List<User> list = userRepository.findAll();
      System.out.println(list.get(0).getfirstName());
      mav.addObject("users", list);
      return mav;
   }

   @GetMapping("/users")
   public List<User> getAllUsers() {
      return userRepository.findAll();
   }

   // Get user by ID
   @GetMapping("/user/{id}")
   public Optional<User> getUserById(@PathVariable Long id) {
      return userService.getUserById(id);
   }

   // Update user by ID
   @PutMapping("/user/{id}")
   public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {
      return userService.updateUser(id, userDetails);
   }

   // Delete all users
   @DeleteMapping("deleteAllUsers")
   public String deleteAllUsers() {
      userService.deleteAllUsers();
      return "All users have been deleted successfully.";
   }

   // Delete user by ID
   @DeleteMapping("/user/{id}")
   public void deleteUser(@PathVariable Long id) {
      userService.deleteUser(id);
   }
}
