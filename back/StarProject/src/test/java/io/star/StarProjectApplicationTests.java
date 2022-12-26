package io.star;

import java.io.IOException;
import java.util.Map;

import org.apache.http.HttpHost;
import org.elasticsearch.action.get.GetRequest;
import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestClientBuilder;
import org.elasticsearch.client.RestHighLevelClient;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.web.WebAppConfiguration;

@WebAppConfiguration
@SpringBootTest
class StarProjectApplicationTests {

	@Test
	public void contextLoads() throws IOException {
		
//		String hostname = "localhost";
//		int port = 9200;
//		HttpHost host = new HttpHost(hostname, port);
//		RestClientBuilder restClientBuilder = RestClient.builder(host);
//		RestHighLevelClient client = new RestHighLevelClient(restClientBuilder);
//		
//		String index = "bank";
//		String id = "1";
//		GetRequest getRequest = new GetRequest(index, id);
//		RequestOptions options = RequestOptions.DEFAULT;
//		
//		GetResponse response = client.get(getRequest, options);
//		
//		Map<String,Object> map = response.getSourceAsMap();
//		System.out.println(map);
		
	}

}
