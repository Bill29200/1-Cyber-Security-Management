package fr.SII.MongoCRUD.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import fr.SII.MongoCRUD.model.LogStat;

@Repository
public interface LogStatRepository extends MongoRepository<LogStat, String>{

}
