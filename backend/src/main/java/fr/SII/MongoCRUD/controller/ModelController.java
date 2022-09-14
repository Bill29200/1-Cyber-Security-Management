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

import fr.SII.MongoCRUD.model.Model;
import fr.SII.MongoCRUD.model.Person;
import fr.SII.MongoCRUD.service.ModelService;

@RestController
@RequestMapping("/api/model")
public class ModelController {
   @Autowired
   private ModelService modelService;
   //......................................................................
	//                    Create	
	//......................................................................	
	@PostMapping("/add")
	public ResponseEntity<Model> addModel(@RequestBody Model model) {
		Model newModel = modelService.add(model);
        return new ResponseEntity<>(newModel, HttpStatus.CREATED);
	}
	//......................................................................	
	//                    Read	
	//......................................................................
	@RequestMapping("/get/{id}")
	public Optional<Model> getModelById(@PathVariable("id") String id) {
			return modelService.getById(id);
		}
	//......................................................................
	@RequestMapping("/getByPerson")
		public List<Model> getModelByPerson(@RequestBody Person person) {
				return modelService.getByUser(person);
	}
	//......................................................................
		@GetMapping("/all")
    public ResponseEntity<List<Model>> getAll () {
        List<Model> models = modelService.getAll();
        return new ResponseEntity<>(models, HttpStatus.OK);
    }
	//......................................................................
	@RequestMapping("/count")
	public long count() {
			return modelService.count();
	}
	//......................................................................
	//                 Update	
	//......................................................................	
	@PutMapping("/update")
    public ResponseEntity<Model> update(@RequestBody Model model) {
        Model updateModel = modelService.update(model);
        return new ResponseEntity<>(updateModel, HttpStatus.OK);
    }
	//......................................................................	
	//                 Delete	
	//......................................................................
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") String id) {
        modelService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
	//......................................................................
	@DeleteMapping("/deleteAll")
	public ResponseEntity<?> deleteAll() {
    	modelService.deleteAll();
    	return new ResponseEntity<>(HttpStatus.OK);       
	}
	//......................................................................

}
