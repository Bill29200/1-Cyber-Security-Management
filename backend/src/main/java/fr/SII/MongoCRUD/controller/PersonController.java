package fr.SII.MongoCRUD.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import fr.SII.MongoCRUD.model.Person;
import fr.SII.MongoCRUD.service.PersonService;

@RestController
@RequestMapping("/api/person")
public class PersonController {
	@Autowired
	private PersonService personService;
	//......................................................................
	//                    Create	
	//......................................................................	
	@PostMapping("/add")
	public ResponseEntity<Person> addPerson(@RequestBody Person person) {
		Person newPerson = personService.add(person);
        return new ResponseEntity<>(newPerson, HttpStatus.CREATED);
	}
	//......................................................................	
	//                    Read	
	//......................................................................
	@RequestMapping("/get/{id}")
	public Optional<Person> getPersonById(@PathVariable("id") String id) {
			return personService.getById(id);
		}
	//......................................................................
	@RequestMapping("/getByEmail/{email}")
		public Person getPersonByEmail(@PathVariable("email") String email) {
				return personService.getByEmail(email);
	}
	//......................................................................
	@RequestMapping("/getByPassword/{password}")
		public Person getPersonByPassword(@PathVariable("password") String password) {
				return personService.getByPassword(password);
	}
	//......................................................................
	@GetMapping("/all")
    public ResponseEntity<List<Person>> getAll () {
        List<Person> persons = personService.getAll();
        return new ResponseEntity<>(persons, HttpStatus.OK);
    }
	//......................................................................
	@RequestMapping("/count")
	public long count() {
			return personService.count();
	}
	//......................................................................
	//                 Update	
	//......................................................................	
	@PutMapping("/update")
    public ResponseEntity<Person> update(@RequestBody Person person) {
        Person updatePerson = personService.update(person);
        return new ResponseEntity<>(updatePerson, HttpStatus.OK);
    }
	//......................................................................	
	//                 Delete	
	//......................................................................
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") String id) {
        personService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
	//......................................................................
	@RequestMapping("/deleteAll")
	public ResponseEntity<?> deleteAll() {
		    personService.deleteAll();
		   return new ResponseEntity<>(HttpStatus.OK);
	}
	//......................................................................

}
