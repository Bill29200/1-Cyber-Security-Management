package fr.SII.MongoCRUD.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import fr.SII.MongoCRUD.model.Csvjson;

@Repository
public interface CsvjsonRepository extends MongoRepository<Csvjson, String>{

}
