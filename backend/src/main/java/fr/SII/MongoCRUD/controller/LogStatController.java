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

import fr.SII.MongoCRUD.model.LogStat;
import fr.SII.MongoCRUD.service.LogStatService;

@RestController
@RequestMapping("/api/logStat")
public class LogStatController {
	@Autowired
	private LogStatService logStatService;
	//......................................................................
	//                    Create	
	//......................................................................	
	@PostMapping("/add")
	public ResponseEntity<LogStat> addlogStat(@RequestBody LogStat logStat) {
		LogStat newlogStat = logStatService.add(logStat);
        return new ResponseEntity<>(newlogStat, HttpStatus.CREATED);
	}
	//......................................................................	
	//                    Read	
	//......................................................................
	@RequestMapping("/get/{id}")
	public Optional<LogStat> getlogStatById(@PathVariable("id") String id) {
			return logStatService.getById(id);
		}
	//......................................................................
	@GetMapping("/all")
    public ResponseEntity<List<LogStat>> getAll () {
        List<LogStat> logStats = logStatService.getAll();
        return new ResponseEntity<>(logStats, HttpStatus.OK);
    }
	//......................................................................
	@RequestMapping("/count")
	public long count() {
			return logStatService.count();
	}
	//......................................................................
	//                 Update	
	//......................................................................	
	@PutMapping("/update")
    public ResponseEntity<LogStat> Update(@RequestBody LogStat logStat) {
        LogStat updateLogStat = logStatService.update(logStat);
        return new ResponseEntity<>(updateLogStat, HttpStatus.OK);
    }
	//......................................................................	
	//                 Delete	
	//......................................................................
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") String id) {
        logStatService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
	//......................................................................
	@RequestMapping("/deleteAll")
	public ResponseEntity<?> deleteAll() {
		    logStatService.deleteAll();
		   return new ResponseEntity<>(HttpStatus.OK);
	}
	//......................................................................
}
