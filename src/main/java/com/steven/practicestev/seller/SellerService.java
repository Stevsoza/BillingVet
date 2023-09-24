
package com.steven.practicestev.seller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SellerService {
    @Autowired
    private SellerRepository sellerRepository;

    // Create a new seller
    public Seller createSeller(Seller seller) {
        return sellerRepository.save(seller);
    }

    // Get all seller
    public List<Seller> getAllSellers() {
        return sellerRepository.findAll();
    }

    // Get seller by ID
    public Optional<Seller> getSellerById(Long id) {
        return sellerRepository.findById(id);
    }

    // Update seller
    public Seller updateSeller(Long id, Seller sellerDetails) {
        Optional<Seller> seller = sellerRepository.findById(id);
        if (seller.isPresent()) {
            Seller existingSeller = seller.get();
            existingSeller.setPassword(sellerDetails.getPassword());
            existingSeller.setUsername(sellerDetails.getUsername());
            existingSeller.setName(sellerDetails.getName());
            existingSeller.setLastname(sellerDetails.getLastname());
            existingSeller.setSecondlastname(sellerDetails.getSecondlastname());
            existingSeller.setBirthdate(sellerDetails.getBirthdate());
            existingSeller.setEmail(sellerDetails.getEmail());
            existingSeller.setPhone(sellerDetails.getPhone());
            existingSeller.setExists(sellerDetails.isExists());
            return sellerRepository.save(existingSeller);
        }
        return null;
    }

    // Delete all seller
    public void deleteAllSellers() {
        sellerRepository.deleteAll();
    }

    // Delete seller
    public void deleteSeller(Long id) {
        sellerRepository.deleteById(id);
    }

    // Other business logic related to seller
}
