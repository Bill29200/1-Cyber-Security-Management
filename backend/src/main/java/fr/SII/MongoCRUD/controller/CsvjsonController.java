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

import fr.SII.MongoCRUD.model.Csvjson;
import fr.SII.MongoCRUD.service.CsvjsonService;

@RestController
@RequestMapping("/api/csvjson")
public class CsvjsonController {
	
	@Autowired
	private CsvjsonService csvjsonService;
	
	//......................................................................
		//                    Create	
		//......................................................................	
		@PostMapping("/add")
		public ResponseEntity<Csvjson> addlogStat(@RequestBody Csvjson csvjson) {
			Csvjson newlogStat = csvjsonService.add(csvjson);
	        return new ResponseEntity<>(newlogStat, HttpStatus.CREATED);
		}
		//......................................................................	
		//                    Read	
		//......................................................................
		@RequestMapping("/get/{id}")
		public Optional<Csvjson> getlogStatById(@PathVariable("id") String id) {
				return csvjsonService.getById(id);
			}
		//......................................................................
		@GetMapping("/all")
	    public ResponseEntity<List<Csvjson>> getAll () {
	        List<Csvjson> csvjsons = csvjsonService.getAll();
	        return new ResponseEntity<>(csvjsons, HttpStatus.OK);
	    }
		//......................................................................
		@RequestMapping("/count")
		public long count() {
				return csvjsonService.count();
		}
		//......................................................................
		//                 Update	
		//......................................................................	
		@PutMapping("/update")
	    public ResponseEntity<Csvjson> Update (@RequestBody Csvjson csvjson) {
			Csvjson updatecsvjson = csvjsonService.update(csvjson);
	        return new ResponseEntity<>(updatecsvjson, HttpStatus.OK);
	    }
		//......................................................................	
		//                 Delete	
		//......................................................................
		@DeleteMapping("/delete/{id}")
		public ResponseEntity<?> delete(@PathVariable("id") String id) {
            csvjsonService.delete(id);
	        return new ResponseEntity<>(HttpStatus.OK);
	    }
		//......................................................................
		@RequestMapping("/deleteAll")
		public ResponseEntity<?> deleteAll() {
			   csvjsonService.deleteAll();
			   return new ResponseEntity<>(HttpStatus.OK);
		}
		//......................................................................

}
