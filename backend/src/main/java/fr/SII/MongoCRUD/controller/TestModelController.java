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

import fr.SII.MongoCRUD.model.TestModel;
import fr.SII.MongoCRUD.service.TestModelService;

@RestController
@RequestMapping("/api/testModel")
public class TestModelController {
	@Autowired
	private TestModelService testModelService;
	//................................................................................
	//                    Create	
	//................................................................................	
	@PostMapping("/add")
	public ResponseEntity<TestModel> addtestModel(@RequestBody TestModel testModel) {
		TestModel newtestModel = testModelService.add(testModel);
        return new ResponseEntity<>(newtestModel, HttpStatus.CREATED);
	}
	//................................................................................	
	//                    Read	
	//................................................................................
	@RequestMapping("/get/{id}")
	public Optional<TestModel> gettestModelById(@PathVariable("id") String id) {
			return testModelService.getById(id);
		}
	//................................................................................
	@GetMapping("/all")
	public ResponseEntity<List<TestModel>> getAll () {
	    List<TestModel> testModels = testModelService.getAll();
	        return new ResponseEntity<>(testModels, HttpStatus.OK);
	}
	//................................................................................
	@RequestMapping("/count")
	public long count() {
				return testModelService.count();
	  }
	//................................................................................
	//                 Update	
	//................................................................................	
	@PutMapping("/update")
    public ResponseEntity<TestModel> update(@RequestBody TestModel testModel) {
        TestModel updatetestModel = testModelService.update(testModel);
        return new ResponseEntity<>(updatetestModel, HttpStatus.OK);
    }
	//......................................................................	
	//                 Delete	
	//......................................................................
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") String id) {
        testModelService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
	//......................................................................
	@RequestMapping("/deleteAll")	
	public ResponseEntity<?> deleteAll() {
	    testModelService.deleteAll();
	   return new ResponseEntity<>(HttpStatus.OK);
	}
	//......................................................................
}
