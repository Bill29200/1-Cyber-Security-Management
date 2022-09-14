package fr.SII.MongoCRUD.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Algorithme {
	
		@Id
	    private String id;
		private String name;
		private Layer layer;
		//............................	
		public Algorithme() {}
		//............................
		public Algorithme(String name, Layer layer) {
			this.name = name;
			this.layer = layer;
		}
		//............................
		public Algorithme(String id, String name, Layer layer) {
			this.id = id;
			this.name = name;
			this.layer = layer;
		}
		//............................
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public Layer getLayer() {
			return layer;
		}
		public void setLayer(Layer layer) {
			this.layer = layer;
		}
		//............................
		@Override
		public String toString() {
			return "Algorithme [id=" + id + ", name=" + name + ", layer=" + layer + "]";
		}
		
			

}
