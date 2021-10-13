Feature: Automtion testing of Reatil Website

  Background: SignUp
    Given Admin is on the login page
    When admin will enter the UserId "admin" and password "admin@123"
    And admin will click on the login button
    And will be redirected to the the dashboard of the reatil page
    And will click on the catalog
    And will click on the manufacturer
    Then admin will be redirected to the maufacturer page

  Scenario Outline: Add new
    When admin will click on the add new button
    And would be redirected on the add manufacturer page
    And would write the "<name>" in the name field
    And check if the stored default check box is checked or not
    And enter the "<sort>" int sort field
    And admin  will click on the save button
    Then check the validation message "<validation>" and check if the"<name>" "<sort>"entered is same as seen in the record
 

    Examples: 
      | name    | sort | validation                                             |
    #  | Harry   |    1 | Success: You have modified manufacturers!              |
      #| harry1  |    1 | Success: You have modified manufacturers!              |
     # | harry@1 |    1 | Success: You have modified manufacturers!              |
      | harry12 | s2   | Success: You have modified manufacturers!              |
      |         |      | Manufacturer Name must be between 2 and 64 characters! |
      | a       |    1 | Manufacturer Name must be between 2 and 64 characters! |

  #################################################################################
  @run
  Scenario Outline: admin wants to edit the entry
    When Admin will click on the edit option
    And will be redirected to the edit page
    And can change the  name "<name>" and the sort order"<sort order>"
    And then wil click on the save button
    Then check the validation message "<validation>" and check if the"<name>" "<sort>"entered is same as seen in the record

    Examples: 
      | name | sort order | validation                                             |
      | Anna |          5 | Success: You have modified manufacturers               |
      | a    |          5 | Manufacturer Name must be between 2 and 64 characters! |

  ###################################################################################
  Scenario: Cancel button verificaton
    When user clicks on add new button
    And would be redirected to the Add manufacturer page
    And clicks on cancel button
    Then will be redirected back

  ##################################################################################
  
  Scenario: select and delete the entry
    When user will create an new entry
    When the admin selects the check box of a particular field
    And click on the delete button
    Then alert message will appear and will delete the field
    And will select the checkbox of the header
    Then all the checkboxes will be checked

  ##################################################################################
  Scenario: ascending and descending
    When admin clicks on the Manufacturer name heading
    Then the names will be arranges in asecending
    When admin clicks on the Manufacturer name heading  again
    Then the name will be arranged in descending order
    When admin clicks on the sort order heading
    Then the order will be arranges in asecending
    When admin clicks on the Sort order heading  again
    Then the sort order will be arranged in descending
    

  ##################################################################################
  Scenario: Pagination
    When admin clicks on two for second page
    And would be redirected to the second one
    When admin clicks on next page
    Then admin will get navigate to the next page
    When admin clicks on back
    Then would be navigated to the previous page
