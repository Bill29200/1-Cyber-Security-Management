package fr.SII.MongoCRUD.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import fr.SII.MongoCRUD.model.Person;
import fr.SII.MongoCRUD.repository.PersonRepository;

@Service
public class PersonService {
	@Autowired
	private  PersonRepository personRepository;
	
	//...................................................................
	//                              Create
	//...................................................................
	public Person add(Person person) {
		return personRepository.insert(person);		
	}
	//...................................................................
	//                              Read
	//...................................................................
	public List<Person> getAll(){
		return personRepository.findAll();
	}
	//...................................................................
	public Person getByEmail(String email) {
		return personRepository.findByEmail(email);
	}
	//...................................................................
		public Person getByPassword(String password) {
			return personRepository.findByPassword(password);
	}
	
	//...................................................................
	public Optional<Person> getById(String id) {		
			return personRepository.findById(id);			 
	}
	//...................................................................		
	public long count() {
		return personRepository.count();
	}
	//...................................................................
	//                            Update
	//...................................................................
		public Person update(Person person){			
			return	personRepository.save(person);				
	}
	//...................................................................
	//                          Delete
	//...................................................................
	public void deleteAll() {
			personRepository.deleteAll();
	}
	//...................................................................
	public void delete(String id) {		
			personRepository.deleteById(id);
	}
	//...................................................................
	//...................................................................
	
}
