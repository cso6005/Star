package io.star;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.web.WebAppConfiguration;

@WebAppConfiguration
@SpringBootTest
class StarProjectApplicationTests {

//	@Test
	public void test2() throws IOException {
		
		Date now = new Date();

		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String nowDate = dateFormat.format(now);
		
		System.out.println(nowDate);
	}
}
