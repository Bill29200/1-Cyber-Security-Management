package fr.SII.MongoCRUD.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import fr.SII.MongoCRUD.model.TestModel;

@Repository
public interface testModelRepository extends MongoRepository<TestModel, String>{

}
