package fr.SII.MongoCRUD.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import fr.SII.MongoCRUD.model.Algorithme;
import fr.SII.MongoCRUD.model.Layer;
import fr.SII.MongoCRUD.model.Person;

@Repository
public interface AlgorithmeRepository extends MongoRepository<Algorithme, String> {
	 public List<Algorithme> findByLayer(Layer layer);
	
	 

}
