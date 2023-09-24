
package com.steven.practicestev.seller;

import java.util.List;
import java.util.Optional;
// import java.io.*;

// import org.springframework.stereotype.Repository;

// import com.steven.practicestev.seller.SellerService;
// import com.steven.practicestev.seller.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@Controller
@RequestMapping("/")
public class SellerController {
   // @Qualifier("Seller")
   @Autowired
   private SellerService sellerService;
   @Autowired
   private SellerRepository sellerRepository;

   // Create a new Seller
   @PostMapping("/seller/newSeller")
   public Seller createSeller(@RequestBody Seller seller) {
      return sellerService.createSeller(seller);
   }

   @GetMapping("/showSellers")
   public ModelAndView getViewSellers() {
      ModelAndView mav = new ModelAndView("listSellers");
      List<Seller> list = sellerRepository.findAll();
      mav.addObject("sellers", list);
      return mav;
   }

   @GetMapping("/seller/createSeller")
   public ModelAndView sellerForm() {
      return new ModelAndView("formCreateSeller", "seller", new Seller());
   }

   @PostMapping("/seller/formSeller")
   public ModelAndView sellerPost(@ModelAttribute("seller") Seller seller) {
      sellerService.createSeller(seller);
      return new ModelAndView("redirect:/seller/success");
   }

   @GetMapping("/success")
   public ModelAndView successSave() {
      return new ModelAndView("success");
   }

   @GetMapping("/sellers")
   public List<Seller> getAllSellers() {
      return sellerRepository.findAll();
   }

   // Get Seller by ID
   @GetMapping("/seller/{id}")
   public Optional<Seller> getSellerById(@PathVariable Long id) {
      return sellerService.getSellerById(id);
   }

   // Update Seller by ID
   @PutMapping("/seller/{id}")
   public Seller updateSeller(@PathVariable Long id, @RequestBody Seller sellerDetails) {
      return sellerService.updateSeller(id, sellerDetails);
   }

   // Delete all Sellers
   @DeleteMapping("deleteAllSellers")
   public String deleteAllSellers() {
      sellerService.deleteAllSellers();
      return "All Sellers have been deleted successfully.";
   }

   // Delete Seller by ID
   @DeleteMapping("/seller/{id}")
   public void deleteSeller(@PathVariable Long id) {
      sellerService.deleteSeller(id);
   }
}
