package fr.SII.MongoCRUD.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.SII.MongoCRUD.model.TestModel;
import fr.SII.MongoCRUD.repository.testModelRepository;

@Service
public class TestModelService {
	
	@Autowired
	private testModelRepository testModelRepository;
	//...................................................................
	//                              Create
	//...................................................................
	public TestModel add(TestModel testModel) {
		return testModelRepository.insert(testModel);		
	}
	//...................................................................
	//                              Read
	//...................................................................
	public List<TestModel> getAll(){
		return testModelRepository.findAll();
	}
	//...................................................................
	public Optional<TestModel> getById(String id){
		return testModelRepository.findById(id);
	}
	//...................................................................
	public long count() {
		return testModelRepository.count();
	}
	//...................................................................
	//                            Update
	//...................................................................
	public TestModel update(TestModel testModel){			
		return	testModelRepository.save(testModel);				
     }
    //...................................................................
    //                          Delete
    //...................................................................
	public void deleteAll() {
		testModelRepository.deleteAll();
     }
    //...................................................................
    public void delete(String id) {		
		testModelRepository.deleteById(id);
        }
    //...................................................................
    //...................................................................
	

}
