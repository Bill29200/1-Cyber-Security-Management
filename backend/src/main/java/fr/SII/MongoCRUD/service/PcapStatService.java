package fr.SII.MongoCRUD.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.SII.MongoCRUD.model.PcapStat;
import fr.SII.MongoCRUD.repository.PcapStatRepository;

@Service
public class PcapStatService {
	@Autowired
	private PcapStatRepository pcapStatRepository;
	//...................................................................
		//                              Create
		//...................................................................
		public PcapStat add(PcapStat pcapStat) {
			return pcapStatRepository.insert(pcapStat);		
		}
		//...................................................................
		//                              Read
		//...................................................................
		public List<PcapStat> getAll(){
			return pcapStatRepository.findAll();
		}
		//...................................................................
		public Optional<PcapStat> getById(String id) {		
				return pcapStatRepository.findById(id);			 
		}
		//...................................................................		
		public long count() {
			return pcapStatRepository.count();
		}
		//...................................................................
		//                            Update
		//...................................................................
			public PcapStat update(PcapStat pcapStat){			
				return	pcapStatRepository.save(pcapStat);				
		}
		//...................................................................
		//                          Delete
		//...................................................................
		public void deleteAll() {
				pcapStatRepository.deleteAll();
		}
		//...................................................................
		public void delete(String id) {		
				pcapStatRepository.deleteById(id);
		}
		//...................................................................
		//...................................................................

}
