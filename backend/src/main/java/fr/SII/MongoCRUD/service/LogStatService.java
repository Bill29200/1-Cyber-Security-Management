package fr.SII.MongoCRUD.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.SII.MongoCRUD.model.LogStat;
import fr.SII.MongoCRUD.repository.LogStatRepository;

@Service
public class LogStatService {
	@Autowired
	private  LogStatRepository logStatRepository;
	
	//...................................................................
	//                              Create
	//...................................................................
	public LogStat add(LogStat logStat) {
		return logStatRepository.insert(logStat);		
	}
	//...................................................................
	//                              Read
	//...................................................................
	public List<LogStat> getAll(){
		return logStatRepository.findAll();
	}
	
	//...................................................................
	public Optional<LogStat> getById(String id) {		
			return logStatRepository.findById(id);			 
	}
	//...................................................................		
	public long count() {
		return logStatRepository.count();
	}
	//...................................................................
	//                            Update
	//...................................................................
		public LogStat update(LogStat logStat){			
			return	logStatRepository.save(logStat);				
	}
	//...................................................................
	//                          Delete
	//...................................................................
	public void deleteAll() {
			logStatRepository.deleteAll();
	}
	//...................................................................
	public void delete(String id) {		
			logStatRepository.deleteById(id);
	}
	//...................................................................
	//...................................................................
}
