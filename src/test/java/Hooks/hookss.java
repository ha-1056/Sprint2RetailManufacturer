package Hooks;



import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hookss {
	
	public static WebDriver driver;

	@Before
	public void initialization()
	{
		System.setProperty("webdriver.chrome.driver", "F:\\chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.get("http://retailm1.upskills.in/admin");
	}
	@After
	public void close() 
	{
		
		System.out.println("Closed");
		driver.quit();
	}
	}



