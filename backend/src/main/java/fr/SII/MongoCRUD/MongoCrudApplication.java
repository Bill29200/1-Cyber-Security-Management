package fr.SII.MongoCRUD;


import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


@RestController
@SpringBootApplication
public class MongoCrudApplication {

//	@Autowired
//	private TestModelService testmodelService;
//	@Autowired
//	private PcapStatService pcapStatService;
	
	public static void main(String[] args) {
		SpringApplication.run(MongoCrudApplication.class, args);
		
	}
	@Bean
	public CorsFilter corsFilter() {
		CorsConfiguration corsConfiguration = new CorsConfiguration();
		corsConfiguration.setAllowCredentials(true);
		corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
		corsConfiguration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin", "Content-Type",
				"Accept", "Authorization", "Origin, Accept", "X-Requested-With",
				"Access-Control-Request-Method", "Access-Control-Request-Headers"));
		corsConfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Authorization",
				"Access-Control-Allow-Origin", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
		corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
		UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
		urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
		return new CorsFilter(urlBasedCorsConfigurationSource);
	}
//	@GetMapping
//	public List<TestModel> begin() {
//		
//		
//		Person person = new Person("629f5381407fa36860417026","ALI", "ali@gmail.com", "ali123", Role.user, "california");
//		Model model = new Model("62ba28a8e52c327eb5838834","Model SU", "Type SU",person,"KNN", "OPTIMAL","KNN", "OPTIMAL","LMP", "OPTIMAL");
//		TestModel tm = new TestModel(List.of(LocalDate.now(), LocalDate.now()),
//				  TestType.AUTO,
//				  model,
//				  LocalDate.now(),
//				  person
//				  );
//		testmodelService.add(tm);
//		System.out.println("Yes");
//		return List.of( tm
//				  
//				);		
//	}
	//..........
//	@GetMapping
//	public String begin() {
//		PcapStat pcapStat = new PcapStat(LocalDate.now(),1,2,3,4,5,6,7,8);  
//		return pcapStatService.add(pcapStat).toString();
//	}
	@GetMapping
	public String start() {
		return "THE MAIN PAGE ";
	}
	
}
