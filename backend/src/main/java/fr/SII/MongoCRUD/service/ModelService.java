package fr.SII.MongoCRUD.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.SII.MongoCRUD.model.Model;
import fr.SII.MongoCRUD.model.Person;
import fr.SII.MongoCRUD.repository.ModelRepository;

@Service
public class ModelService {

	@Autowired
	private ModelRepository modelRepository;
	
	//...................................................................
		//                              Create
		//...................................................................
		public Model add(Model model) {
			return modelRepository.insert(model);		
		}
		//...................................................................
		//                              Read
		//...................................................................
		public List<Model> getAll(){
			return modelRepository.findAll();
		}
		//...................................................................
		public List<Model> getByUser(Person person) {
			return modelRepository.findByUser(person);
		}
		//...................................................................
		public Optional<Model> getById(String id) {		
				return modelRepository.findById(id);			 
		}
		//...................................................................		
		public long count() {
			return modelRepository.count();
		}
		//...................................................................
		//                            Update
		//...................................................................
			public Model update(Model model){			
				return	modelRepository.save(model);				
		}
		//...................................................................
		//                          Delete
		//...................................................................
		public void deleteAll() {
				modelRepository.deleteAll();
		}
		//...................................................................
		public void delete(String id) {		
				modelRepository.deleteById(id);
		}
		//...................................................................
		//...................................................................
}
