package fr.SII.MongoCRUD.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import fr.SII.MongoCRUD.model.Model;
import fr.SII.MongoCRUD.model.Person;

@Repository
public interface ModelRepository extends MongoRepository<Model, String>{
   	List<Model> findByUser(Person person);

}
