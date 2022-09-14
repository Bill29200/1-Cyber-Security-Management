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
import fr.SII.MongoCRUD.model.Algorithme;
import fr.SII.MongoCRUD.model.Layer;
import fr.SII.MongoCRUD.service.AlgorithmeService;

@RestController
@RequestMapping("/api/algorithme")
public class AlgorithmeController {
	@Autowired
	private AlgorithmeService algorithmeService;
	// ......................................................................
	// Create
	// ......................................................................
	@PostMapping("/add")
	public ResponseEntity<Algorithme> addAlgorithme(@RequestBody Algorithme algorithme) {
		Algorithme newAlgorithme = algorithmeService.add(algorithme);
		return new ResponseEntity<>(newAlgorithme, HttpStatus.CREATED);
	}
	// ......................................................................
	// Read
	// ......................................................................
	@RequestMapping("/get/{id}")
	public Optional<Algorithme> getAlgorithmeById(@PathVariable("id") String id) {
		return algorithmeService.getById(id);
	}
	// ......................................................................
	@RequestMapping("/getByLayer/{layer}")
	public List<Algorithme> getAlgorithmeByLayer(@PathVariable("layer") Layer layer) {
		return algorithmeService.getByLayer(layer);
	}
	// ......................................................................
	@GetMapping("/all")
	public ResponseEntity<List<Algorithme>> getAll() {
		List<Algorithme> algorithmes = algorithmeService.getAll();
		return new ResponseEntity<>(algorithmes, HttpStatus.OK);
	}
	// ......................................................................
	@RequestMapping("/count")
	public long count() {
		return algorithmeService.count();
	}
	// ......................................................................
	// Update
	// ......................................................................
	@PutMapping("/update")
	public ResponseEntity<Algorithme> update(@RequestBody Algorithme algorithme) {
		Algorithme updateAlgorithme = algorithmeService.update(algorithme);
		return new ResponseEntity<>(updateAlgorithme, HttpStatus.OK);
	}
	// ......................................................................
	// Delete
	// ......................................................................
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") String id) {
		algorithmeService.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	// ......................................................................	
	@DeleteMapping("/deleteAll")
	public ResponseEntity<?> deleteAll() {
		    algorithmeService.deleteAll();
		   return new ResponseEntity<>(HttpStatus.OK);
	}
	// ......................................................................
}
