package fr.SII.MongoCRUD.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.SII.MongoCRUD.model.Csvjson;
import fr.SII.MongoCRUD.repository.CsvjsonRepository;

@Service
public class CsvjsonService {

	@Autowired
	private CsvjsonRepository csvjsonRepository;
	//...................................................................
		//                              Create
		//...................................................................
		public Csvjson add(Csvjson csvjson) {
			return csvjsonRepository.insert(csvjson);		
		}
		//...................................................................
		//                              Read
		//...................................................................
		public List<Csvjson> getAll(){
			return csvjsonRepository.findAll();
		}
		//...................................................................
		public Optional<Csvjson> getById(String id) {		
				return csvjsonRepository.findById(id);			 
		}
		//...................................................................		
		public long count() {
			return csvjsonRepository.count();
		}
		//...................................................................
		//                            Update
		//...................................................................
			public Csvjson update(Csvjson csvjson){			
				return	csvjsonRepository.save(csvjson);				
		}
		//...................................................................
		//                          Delete
		//...................................................................
		public void deleteAll() {
			csvjsonRepository.deleteAll();
		}
		//...................................................................
		public void delete(String id) {		
			csvjsonRepository.deleteById(id);
		}
		//...................................................................
		//...................................................................
	
	
}
