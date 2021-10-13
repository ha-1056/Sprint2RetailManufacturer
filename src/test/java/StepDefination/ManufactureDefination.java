package StepDefination;


import static org.junit.Assert.fail;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import Hooks.hookss;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ManufactureDefination {
	WebDriver driver=hookss.driver;
	@Given("Admin is on the login page")
	public void admin_is_on_the_login_page() {
	    // Write code here that turns the phrase above into concrete actions
		try {
	  String actual=driver.getTitle();
	  String Expected="Administration";
	  
	  Assert.assertEquals(Expected, actual);
		}
		catch(Exception e)
		{
			System.out.println(e);
			Assert.fail();
		}
	}

	@When("admin will enter the UserId {string} and password {string}")
	public void admin_will_enter_the_UserId_and_password(String string, String string2) {
	    // Write code here that turns the phrase above into concrete actions
		try {
	  driver.findElement(By.xpath("//input[@name='username']")).sendKeys(string);
	  driver.findElement(By.xpath("//input[@name='password']")).sendKeys(string2);
		}
		catch(Exception e)
		{
			System.out.println(e);
			Assert.fail();
		}
	
		
	}

	@And("admin will click on the login button")
	public void admin_will_click_on_the_login_button() {
	    // Write code here that turns the phrase above into concrete actions
		try {
	    driver.findElement(By.xpath("//*[@class='btn btn-primary']")).click();
		}
		catch(Exception e)
		{
			System.out.println(e);
			Assert.fail();
		}
	
	}

	@And("will be redirected to the the dashboard of the reatil page")
	public void will_be_redirected_to_the_the_dashboard_of_the_reatil_page() {
	    // Write code here that turns the phrase above into concrete actions
		
	
		try {
			//Boolean display=driver.findElement(By.xpath("//h1[contains(text(),'Dashboard')]")).isDisplayed();
			  String actual=driver.getTitle();
			  String Expected="Dashboard";
			  
			  Assert.assertEquals(Expected, actual);
				}
				catch(Exception e)
				{
					System.out.println(e);
					Assert.fail();
				}
	   
	}


@And("will click on the catalog")
public void will_click_on_the_catalog() {
    // Write code here that turns the phrase above into concrete actions
  try {
	  driver.findElement(By.id("button-menu")).click();
      System.out.println("Menu Bar");
      Thread.sleep(2000);
      driver.findElement(By.xpath("//span[text()='Catalog']")).click();
 
  }
  catch(Exception e)
  {
	  System.out.println(e);
  }
}
@And("will click on the manufacturer")
public void will_click_on_the_manufacturer() {
    // Write code here that turns the phrase above into concrete actions
	try {
		
		Thread.sleep(2000);
	      System.out.println("Catalog");
	      driver.findElement(By.xpath("//a[text()='Manufacturers']/..")).click();
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	
	}
}
	@And("admin will be redirected to the maufacturer page")
	public void admin_will_be_redirected_to_the_maufacturer_page() {
	    // Write code here that turns the phrase above into concrete actions
		try {
		String Expected="Manufacturers";
	String actual=	driver.findElement(By.xpath("//div[@class='container-fluid']/h1")).getText();
	  Assert.assertEquals(Expected, actual);
			}
			catch(Exception e)
			{
				System.out.println(e);
				Assert.fail();
			}	
	}
	@When("admin will click on the add new button")
	public void admin_will_click_on_the_add_new_button() {
	    // Write code here that turns the phrase above into concrete actions
		try {
	driver.findElement(By.xpath("//div[@class='pull-right']/a")).click();
		}
		catch(Exception e)
		{
			System.out.println(e);
			Assert.fail();
	}
	}

	@And("would be redirected on the add manufacturer page")
	public void would_be_redirected_on_the_add_manufacturer_page() {
	    // Write code here that turns the phrase above into concrete actions
		try {
		String expected="Manufacturers";
		String actual=driver.getTitle();
		  Assert.assertEquals(expected, actual);
				}
				catch(Exception e)
				{
					System.out.println(e);
					Assert.fail();
				
				}
	    
	}

	@And("would write the {string} in the name field")
	public void would_write_the_in_the_name_field(String string) {
	    // Write code here that turns the phrase above into concrete actions
		try {
	    driver.findElement(By.xpath("//input[@name='name']")).sendKeys(string);	
		}
		catch(Exception e)
		{
			System.out.println(e);
			Assert.fail();
		}
		
	    }

	@And("check if the stored default check box is checked or not")
	public void check_if_the_stored_default_ceck_box_is_checked_or_not() {
	    // Write code here that turns the phrase above into concrete actions
		try {
	boolean select=driver.findElement(By.xpath("//input[@name='manufacturer_store[]']")).isSelected();
	Assert.assertTrue(select);
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}

@And("enter the {string} int sort field")
public void enter_the_int_sort_field(String string) {
    // Write code here that turns the phrase above into concrete actions
	try {
	  driver.findElement(By.xpath("//input[@name='sort_order']")).sendKeys(string);
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	
	}
}

@And("admin  will click on the save button")
public void admin_will_click_on_the_save_button() {
    // Write code here that turns the phrase above into concrete actions
driver.findElement(By.xpath("//div[@class='pull-right']/button")).click();
    
}
@Then("check the validation message {string} and check if the{string} {string}entered is same as seen in the record")
public void check_the_validation_message_and_check_if_the_entered_is_same_as_seen_in_the_record(String string, String name, String sort) {
    // Write code here that turns the phrase above into concrete actions


    // Write code here that turns the phrase above into concrete actions
	/*try {
	  String actual=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	  String[] sp=actual.split("\n");
	  actual=sp[0];
	  System.out.println(string);
	  System.out.println(actual);
	  System.out.println(string.equals(actual));
	  Assert.assertTrue(string.contains(actual));
	  if(string.contains(actual))
	  {
		  System.out.println("Yes");
	  }
	  else {
	 String actual2=driver.findElement(By.xpath("//div[@class='text-danger']")).getText();
		 System.out.println(actual2);
		 System.out.println(string);
		 Assert.assertTrue(actual2.contains(string));
	}*/
	  try{
			String s;
			String page=driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
			if(page.equalsIgnoreCase("Manufacturer List"))
			{
			 s=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
			String s1=driver.findElement(By.xpath("//td[text()='"+name+"']")).getText();
			String st=driver.findElement(By.xpath("//td[text()='"+name+"']//following-sibling::td[1]")).getText();
			if(s1.equals(name))
				{
			System.out.println("Name is same ");
				}
			else
				System.out.println("Name is  not same ");
			if(st.equals(sort))
		    {
				System.out.println("Sort is same ");
		    }
			else

				System.out.println("Sort is  not same ");
			}
	  
			
			else
			 s=driver.findElement(By.xpath("//div[@class='text-danger']")).getText();
			 System.out.println(s);
			 System.out.println(string);
			 Assert.assertTrue(s.contains(string));
		}
		catch(Exception e)
		{
			System.out.println(e);
			Assert.fail();
		}
	  
	}


/* @Then("check if the{string} {string}entered is same as seen in the record")
public void check_if_the_entered_is_same_as_seen_in_the_record(String name, String sort) {
    
	try {
		
		String s=driver.findElement(By.xpath("//td[text()='"+name+"']")).getText();
		String st=driver.findElement(By.xpath("//td[text()='"+name+"']//following-sibling::td[1]")).getText();
		if(s.equals(name))
			{
		System.out.println("Name is same ");
			}
		else
			System.out.println("Name is  not same ");
		if(st.equals(sort))
	    {
			System.out.println("Sort is same ");
	    }
		else

			System.out.println("Sort is  not same ");
	}
			
	
		catch(Exception e)
		{
			System.out.println("Manufacturer not added successfully"+e);
			Assert.fail();
		}
 }*/
		  

@When("Admin will click on the edit option")
public void admin_will_click_on_the_edit_option() {
    // Write code here that turns the phrase above into concrete actions
	try {
	driver.findElement(By.xpath("//td[contains(text(),'5')]//following::a[1]")).click();
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
  
}
@When("will be redirected to the edit page")
public void will_be_redirected_to_the_edit_page() {
    // Write code here that turns the phrase above into concrete actions
	try {
	String Str=" Edit Manufacturer";
	String edit=driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
	Assert.assertTrue(Str.contains(edit));
	
}
catch(Exception e)
{
	System.out.println(e);
	Assert.fail();
}
}

@When("can change the  name {string} and the sort order{string}")
public void can_change_the_name_and_the_sort_order(String string, String string2) {
    // Write code here that turns the phrase above into concrete actions
	try {
		driver.findElement(By.name("name")).clear();
		driver.findElement(By.name("name")).sendKeys(string);
		driver.findElement(By.name("sort_order")).clear();
		driver.findElement(By.name("sort_order")).sendKeys(string2);
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}

@When("then wil click on the save button")
public void then_wil_click_on_the_save_button() {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//div[@class='pull-right']/button")).click();
}

@Then("check the validation  {string}")
public void check_the_validation(String string) {
    // Write code here that turns the phrase above into concrete actions
	try{
		String s;
		String page=driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
		if(page.equalsIgnoreCase("Manufacturer List"))
		 s=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		
		else
		 s=driver.findElement(By.xpath("//div[@class='text-danger']")).getText();
		 System.out.println(s);
		 System.out.println(string);
		 Assert.assertTrue(s.contains(string));
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}

@When("user clicks on add new button")
public void user_clicks_on_add_new_button() {
    // Write code here that turns the phrase above into concrete actions
	try {
	driver.findElement(By.xpath("//div[@class='pull-right']/a")).click();
		}
		catch(Exception e)
		{
			System.out.println(e);
			Assert.fail();
		}
}

@When("would be redirected to the Add manufacturer page")
public void would_be_redirected_to_the_Add_manufacturer_page() {
    // Write code here that turns the phrase above into concrete actions
	try {
  String s=" Add Manufacturer";
String str=driver.findElement(By.xpath("//h3[contains(text(),' Add Manufacturer')]")).getText();
Assert.assertTrue(s.contains(str));
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}

@When("clicks on cancel button")
public void clicks_on_cancel_button() {
    // Write code here that turns the phrase above into concrete actions
	try {
	driver.findElement(By.xpath("//a[@data-original-title='Cancel']")).click();
	}
	
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}

@Then("will be redirected back")
public void will_be_redirected_back() {
    // Write code here that turns the phrase above into concrete actions
	try
	{
		String s=" Manufacturer List";
		String page=driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
		Assert.assertTrue(s.contains(page));
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
	
}
@When("user will create an new entry")
public void user_will_create_an_new_entry() {
    // Write code here that turns the phrase above into concrete actions
	try {
	driver.findElement(By.xpath("//div[@class='pull-right']/a")).click();
	driver.findElement(By.xpath("//input[@name='name']")).sendKeys("Ella");
	driver.findElement(By.xpath("//div[@class='pull-right']/button")).click();
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}

@When("the admin selects the check box of a particular field")
public void the_admin_selects_the_check_box_of_a_particular_field() {
    // Write code here that turns the phrase above into concrete actions
	try {
   driver.findElement(By.xpath("//td[text()='Ella']/../td/input")).click();
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}

@When("click on the delete button")
public void click_on_the_delete_button() {
    // Write code here that turns the phrase above into concrete actions
	try {
	driver.findElement(By.xpath("//div[@class='pull-right']/button")).click();
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}

@Then("alert message will appear and will delete the field")
public void alert_message_will_appear_and_whill_delete_the_field() {
    // Write code here that turns the phrase above into concrete actions
	try {
	Alert alert=driver.switchTo().alert();
   alert.accept();
   driver.findElement(By.xpath("//td[text()='Anna']/../td/input")).click();
   driver.findElement(By.xpath("//div[@class='pull-right']/button")).click();
   alert.dismiss();

	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
	
}

@Then("will select the checkbox of the header")
public void will_select_the_checkbox_of_the_header() {
    // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.xpath("//tr/descendant::td/preceding::input")).click();
}

@Then("all the checkboxes will be checked")
public void all_the_checkboxes_will_be_checked() {
    // Write code here that turns the phrase above into concrete actions
	try 
	{
	/* boolean b1= driver.findElement(By.xpath("//td[text()='12']/../td/input")).isSelected();
	  boolean b2=driver.findElement(By.xpath("//td[text()='@@@']/../td/input")).isSelected();
	  boolean b3=driver.findElement(By.xpath("//td[text()='abc']/../td/input")).isSelected();
	  if(b1==true&&b2==true&&b3==true)
	  {
		  System.out.println("Working");*/
		List<WebElement> check=driver.findElements(By.xpath("//form/div/table/tbody/tr/td[1]/input[@name='selected[]']"));
	 System.out.println(check.size());
	 int temp=0;
	 for(int i=0;i<check.size();i++)
	 {
		 if(!check.get(i).isSelected())
		 {
			 temp=1;
			 break;
		 }
	 }
	}
	catch(Exception e)
	{
		 System.out.println("Checkbox are not checked");
	Assert.fail();
	}
    
}


@When("admin clicks on the Manufacturer name heading")
public void admin_clicks_on_the_Manufacturer_name_heading() {
    // Write code here that turns the phrase above into concrete actions
	try {
	driver.findElement(By.xpath("//a[@class='asc']")).click();
}
catch(Exception e)
{
	System.out.println(e);
	Assert.fail();
}
}

@Then("the names will be arranges in asecending")
public void the_names_will_be_arranges_in_asecending() {
    // Write code here that turns the phrase above into concrete actions
    try {
	String s="zzz";
    String str=driver.findElement(By.xpath("//td[text()='zzz']")).getText();
    Assert.assertTrue(s.contains(str));
}
catch(Exception e)
{
	System.out.println(e);
	Assert.fail();
}
}

@When("admin clicks on the Manufacturer name heading  again")
public void admin_clicks_on_the_Manufacturer_name_heading_again() throws InterruptedException {
    // Write code here that turns the phrase above into concrete actions
	try {
	Thread.sleep(3000);
	driver.findElement(By.xpath("//a[@class='desc']")).click();
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}

@Then("the name will be arranged in descending order")
public void the_name_will_be_arranged_in_descending_order() {
    // Write code here that turns the phrase above into concrete actions 
	 // Write code here that turns the phrase above into concrete actions
	try {
    String s="12";
    String str=driver.findElement(By.xpath("//td[text()='12']")).getText();
    Assert.assertTrue(s.contains(str));
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}

@When("admin clicks on the sort order heading")
public void admin_clicks_on_the_sort_order_heading() {
    // Write code here that turns the phrase above into concrete actions
	try {
	driver.findElement(By.xpath("//*[@class='asc']")).click();
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
  
}

@Then("the order will be arranges in asecending")
public void the_order_will_be_arranges_in_asecending() {
    // Write code here that turns the phrase above into concrete actions
	try {
	String n="Soch";
	  String str=driver.findElement(By.xpath("//td[text()='Soch']")).getText();
	  Assert.assertTrue(n.contains(str));
	  }
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
  

}

@When("admin clicks on the Sort order heading  again")
public void admin_clicks_on_the_Sort_order_heading_again() {
    // Write code here that turns the phrase above into concrete actions
	try {
	driver.findElement(By.xpath("//*[@class='desc']")).click();
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}

@Then("the sort order will be arranged in descending")
public void the_sort_order_will_be_arranged_in_descending() {
    // Write code here that turns the phrase above into concrete actions
	try {
	  String n=": Test Manufacturer #";
	  String str=driver.findElement(By.xpath("//td[text()=': Test Manufacturer #']")).getText();
	  Assert.assertTrue(n.contains(str));
}
		catch(Exception e)
		{
			System.out.println(e);
			Assert.fail();
		}
	  
	}

/*
@When("admin clicks on two for second page")
public void admin_clicks_on_two_for_second_page() {
    // Write code here that turns the phrase above into concrete actions
	try {
    driver.findElement(By.xpath("//ul[@class='pagination']/li[2]/a")).click();
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}


@When("would be redirected to the second one")
public void would_be_redirected_to_the_second_one() {
    // Write code here that turns the phrase above into concrete actions
	try {
	String str =driver.findElement(By.xpath("//div[contains(text(),'Showing 26 to 50')]")).getText();
	String s="Showing 26 to 50 of 60 (3 Pages)";
	  Assert.assertTrue(s.contains(str));
	}
	catch(Exception e)
	  {
		System.out.println(e);
		Assert.fail(); 
	  }
	
}

@When("admin clicks on next page")
public void admin_clicks_on_next_page() {
    // Write code here that turns the phrase above into concrete actions
	try {
	 driver.findElement(By.xpath("//a[text()='>']")).click();
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}

@Then("admin will get navigate to the next page")
public void admin_will_get_navigate_to_the_next_page() {
    // Write code here that turns the phrase above into concrete actions
	try {
String str=	 driver.findElement(By.xpath("//div[@class='col-sm-6 text-right']")).getText();
String s="Showing 51 to 60 ";
Assert.assertTrue(s.contains(str));
	}
	catch(Exception e)
	{
		System.out.println("Did not navigate to the next page because of "+e);
		Assert.fail();
	}
}

@When("admin clicks on back")
public void admin_clicks_on_back() {
    // Write code here that turns the phrase above into concrete actions
	try {
	 driver.findElement(By.xpath("//a[text()='<']")).click();
	}
	catch(Exception e)
	{
		System.out.println(e);
		Assert.fail();
	}
}

@Then("would be navigated to the previous page")
public void woud_be_navigated_to_the_previous_page() {
    // Write code here that turns the phrase above into concrete actions
	try {
	String str =driver.findElement(By.xpath("//div[contains(text(),'Showing 26 to 50 ')]")).getText();
	String s="Showing 26 to 50";
	  Assert.assertTrue(s.contains(str));
	}
	catch(Exception e)
	{
		System.out.println("Did not navigate to the previous page because of"+ e);
		Assert.fail();
	}

}*/


@When("User clicks {string}")
public void user_clicks(String string) {
	
	 //driver.findElement(By.xpath("//a[text()='>']")).click();
	 try {
			
		 driver.findElement(By.xpath("//a[contains(text(),'"+string+"')]")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error: Unable to click on 'page' "+e);
			Assert.fail();
		}
}

@Then("User is directed to page no. {string}")
public void user_is_directed_to_page_no(String string) {
	
	
	  try { 
		  String page = driver.findElement(By.xpath("//li[@class='active']//span")).getText();
	       Assert.assertEquals(page, string); 
	  }
	  catch(Exception e) {
		  
	  System.out.println("Navigation Failed");
	  Assert.fail();
	  }
	 
}

@When("User Clicks |<")
public void user_Clicks() {
	

	try {
		driver.findElement(By.xpath("//a[contains(text(),'|<')]")).click();

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on |< "+e);
		Assert.fail();
	}
}

@When("User Clicks on >|")
public void user_Clicks_on() {

	try {
		driver.findElement(By.xpath("//a[contains(text(),'>|')]")).click();

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on >| "+e);
		Assert.fail();
	}
}




}





