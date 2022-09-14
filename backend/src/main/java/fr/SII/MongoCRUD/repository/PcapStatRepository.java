package fr.SII.MongoCRUD.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import fr.SII.MongoCRUD.model.PcapStat;

@Repository
public interface PcapStatRepository extends MongoRepository<PcapStat, String>{

}
