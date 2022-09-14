package fr.SII.MongoCRUD.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import fr.SII.MongoCRUD.model.Person;

@Repository
public interface PersonRepository extends MongoRepository<Person, String>{   
	   public Person findByEmail(String email); 
	   public Person findByPassword(String password); 
}
