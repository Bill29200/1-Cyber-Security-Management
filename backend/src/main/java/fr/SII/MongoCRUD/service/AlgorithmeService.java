package fr.SII.MongoCRUD.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.SII.MongoCRUD.model.Algorithme;
import fr.SII.MongoCRUD.model.Layer;
import fr.SII.MongoCRUD.model.Person;
import fr.SII.MongoCRUD.repository.AlgorithmeRepository;

@Service
public class AlgorithmeService {
	@Autowired
	private  AlgorithmeRepository algorithmeRepository;
	//...................................................................
	//                              Create
	//...................................................................
	public Algorithme add(Algorithme algorithme) {
		return algorithmeRepository.insert(algorithme);		
	}
	//...................................................................
	//                              Read
	//...................................................................
	public List<Algorithme> getAll(){
		return algorithmeRepository.findAll();
	}
	//...................................................................
	public Optional<Algorithme> getById(String id) {		
		return algorithmeRepository.findById(id);			 
	}
	//...................................................................
	public List<Algorithme> getByLayer(Layer layer) {
		return algorithmeRepository.findByLayer(layer);
	}
	//...................................................................		
	public long count() {
		return algorithmeRepository.count();
	}
	//...................................................................
	//                            Update
	//...................................................................
	public Algorithme update(Algorithme algorithme){			
			return	algorithmeRepository.save(algorithme);				
	}
	//...................................................................
	//                          Delete
	//...................................................................
	public void deleteAll() {
		 algorithmeRepository.deleteAll();
	}
	
	//...................................................................
	public void delete(String id) {		
				algorithmeRepository.deleteById(id);
	}
	//...................................................................
	//...................................................................
}
