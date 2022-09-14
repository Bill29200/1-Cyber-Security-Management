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

import fr.SII.MongoCRUD.model.PcapStat;
import fr.SII.MongoCRUD.service.PcapStatService;

@RestController
@RequestMapping("/api/pcapStat")
public class PcapStatController {
	@Autowired
	private PcapStatService pcapStatService;
	//......................................................................
	//                    Create	
	//......................................................................	
	@PostMapping("/add")
	public ResponseEntity<PcapStat> addpcapStat(@RequestBody PcapStat pcapStat) {
		PcapStat newpcapStat = pcapStatService.add(pcapStat);
        return new ResponseEntity<>(newpcapStat, HttpStatus.CREATED);
	}
	//......................................................................	
	//                    Read	
	//......................................................................
	@RequestMapping("/get/{id}")
	public Optional<PcapStat> getpcapStatById(@PathVariable("id") String id) {
			return pcapStatService.getById(id);
		}
	//......................................................................
	@GetMapping("/all")
    public ResponseEntity<List<PcapStat>> getAll () {
        List<PcapStat> pcapStats = pcapStatService.getAll();
        return new ResponseEntity<>(pcapStats, HttpStatus.OK);
    }
	//......................................................................
	@RequestMapping("/count")
	public long count() {
			return pcapStatService.count();
	}
	//......................................................................
	//                 Update	
	//......................................................................	
	@PutMapping("/update")
    public ResponseEntity<PcapStat> update(@RequestBody PcapStat pcapStat) {
        PcapStat updatepcapStat = pcapStatService.update(pcapStat);
        return new ResponseEntity<>(updatepcapStat, HttpStatus.OK);
    }
	//......................................................................	
	//                 Delete	
	//......................................................................
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") String id) {
        pcapStatService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
	//......................................................................
	@RequestMapping("/deleteAll")
	public ResponseEntity<?> deleteAll() {
		    pcapStatService.deleteAll();
		   return new ResponseEntity<>(HttpStatus.OK);
	}
	//......................................................................
}
