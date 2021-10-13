$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/Test.feature");
formatter.feature({
  "name": "Automtion testing of Reatil Website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add new",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "admin will click on the add new button",
  "keyword": "When "
});
formatter.step({
  "name": "would be redirected on the add manufacturer page",
  "keyword": "And "
});
formatter.step({
  "name": "would write the \"\u003cname\u003e\" in the name field",
  "keyword": "And "
});
formatter.step({
  "name": "check if the stored default check box is checked or not",
  "keyword": "And "
});
formatter.step({
  "name": "enter the \"\u003csort\u003e\" int sort field",
  "keyword": "And "
});
formatter.step({
  "name": "admin  will click on the save button",
  "keyword": "And "
});
formatter.step({
  "name": "check the validation message \"\u003cvalidation\u003e\" and check if the\"\u003cname\u003e\" \"\u003csort\u003e\"entered is same as seen in the record",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "sort",
        "validation"
      ]
    },
    {
      "cells": [
        "Harry",
        "1",
        "Success: You have modified manufacturers!"
      ]
    },
    {
      "cells": [
        "harry1",
        "1",
        "Success: You have modified manufacturers!"
      ]
    },
    {
      "cells": [
        "harry@1",
        "1",
        "Success: You have modified manufacturers!"
      ]
    },
    {
      "cells": [
        "harry12",
        "s2",
        "Success: You have modified manufacturers!"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Manufacturer Name must be between 2 and 64 characters!"
      ]
    },
    {
      "cells": [
        "a",
        "1",
        "Manufacturer Name must be between 2 and 64 characters!"
      ]
    }
  ]
});
formatter.background({
  "name": "SignUp",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ManufactureDefination.admin_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will enter the UserId \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_enter_the_UserId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the the dashboard of the reatil page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_the_dashboard_of_the_reatil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the manufacturer",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_manufacturer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will be redirected to the maufacturer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_be_redirected_to_the_maufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "admin will click on the add new button",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would be redirected on the add manufacturer page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_be_redirected_on_the_add_manufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would write the \"Harry\" in the name field",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_write_the_in_the_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if the stored default check box is checked or not",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.check_if_the_stored_default_ceck_box_is_checked_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the \"1\" int sort field",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.enter_the_int_sort_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin  will click on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the validation message \"Success: You have modified manufacturers!\" and check if the\"Harry\" \"1\"entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.check_the_validation_message_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "SignUp",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ManufactureDefination.admin_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will enter the UserId \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_enter_the_UserId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the the dashboard of the reatil page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_the_dashboard_of_the_reatil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the manufacturer",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_manufacturer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will be redirected to the maufacturer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_be_redirected_to_the_maufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "admin will click on the add new button",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would be redirected on the add manufacturer page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_be_redirected_on_the_add_manufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would write the \"harry1\" in the name field",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_write_the_in_the_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if the stored default check box is checked or not",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.check_if_the_stored_default_ceck_box_is_checked_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the \"1\" int sort field",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.enter_the_int_sort_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin  will click on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the validation message \"Success: You have modified manufacturers!\" and check if the\"harry1\" \"1\"entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.check_the_validation_message_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "SignUp",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ManufactureDefination.admin_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will enter the UserId \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_enter_the_UserId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the the dashboard of the reatil page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_the_dashboard_of_the_reatil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the manufacturer",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_manufacturer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will be redirected to the maufacturer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_be_redirected_to_the_maufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "admin will click on the add new button",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would be redirected on the add manufacturer page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_be_redirected_on_the_add_manufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would write the \"harry@1\" in the name field",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_write_the_in_the_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if the stored default check box is checked or not",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.check_if_the_stored_default_ceck_box_is_checked_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the \"1\" int sort field",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.enter_the_int_sort_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin  will click on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the validation message \"Success: You have modified manufacturers!\" and check if the\"harry@1\" \"1\"entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.check_the_validation_message_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "SignUp",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ManufactureDefination.admin_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will enter the UserId \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_enter_the_UserId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the the dashboard of the reatil page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_the_dashboard_of_the_reatil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the manufacturer",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_manufacturer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will be redirected to the maufacturer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_be_redirected_to_the_maufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "admin will click on the add new button",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would be redirected on the add manufacturer page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_be_redirected_on_the_add_manufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would write the \"harry12\" in the name field",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_write_the_in_the_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if the stored default check box is checked or not",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.check_if_the_stored_default_ceck_box_is_checked_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the \"s2\" int sort field",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.enter_the_int_sort_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin  will click on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the validation message \"Success: You have modified manufacturers!\" and check if the\"harry12\" \"s2\"entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.check_the_validation_message_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "SignUp",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ManufactureDefination.admin_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will enter the UserId \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_enter_the_UserId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the the dashboard of the reatil page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_the_dashboard_of_the_reatil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the manufacturer",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_manufacturer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will be redirected to the maufacturer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_be_redirected_to_the_maufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "admin will click on the add new button",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would be redirected on the add manufacturer page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_be_redirected_on_the_add_manufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would write the \"\" in the name field",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_write_the_in_the_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if the stored default check box is checked or not",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.check_if_the_stored_default_ceck_box_is_checked_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the \"\" int sort field",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.enter_the_int_sort_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin  will click on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the validation message \"Manufacturer Name must be between 2 and 64 characters!\" and check if the\"\" \"\"entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.check_the_validation_message_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "SignUp",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ManufactureDefination.admin_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will enter the UserId \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_enter_the_UserId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the the dashboard of the reatil page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_the_dashboard_of_the_reatil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the manufacturer",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_manufacturer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will be redirected to the maufacturer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_be_redirected_to_the_maufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "admin will click on the add new button",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would be redirected on the add manufacturer page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_be_redirected_on_the_add_manufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would write the \"a\" in the name field",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_write_the_in_the_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if the stored default check box is checked or not",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.check_if_the_stored_default_ceck_box_is_checked_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the \"1\" int sort field",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.enter_the_int_sort_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin  will click on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the validation message \"Manufacturer Name must be between 2 and 64 characters!\" and check if the\"a\" \"1\"entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.check_the_validation_message_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "admin wants to edit the entry",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin will click on the edit option",
  "keyword": "When "
});
formatter.step({
  "name": "will be redirected to the edit page",
  "keyword": "And "
});
formatter.step({
  "name": "can change the  name \"\u003cname\u003e\" and the sort order\"\u003csort order\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "then wil click on the save button",
  "keyword": "And "
});
formatter.step({
  "name": "check the validation message \"\u003cvalidation\u003e\" and check if the\"\u003cname\u003e\" \"\u003csort\u003e\"entered is same as seen in the record",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "sort order",
        "validation"
      ]
    },
    {
      "cells": [
        "Anna",
        "5",
        "Success: You have modified manufacturers"
      ]
    },
    {
      "cells": [
        "a",
        "5",
        "Manufacturer Name must be between 2 and 64 characters!"
      ]
    }
  ]
});
formatter.background({
  "name": "SignUp",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ManufactureDefination.admin_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will enter the UserId \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_enter_the_UserId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the the dashboard of the reatil page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_the_dashboard_of_the_reatil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the manufacturer",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_manufacturer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will be redirected to the maufacturer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_be_redirected_to_the_maufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin wants to edit the entry",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin will click on the edit option",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_edit_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the edit page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_edit_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "can change the  name \"Anna\" and the sort order\"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.can_change_the_name_and_the_sort_order(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "then wil click on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.then_wil_click_on_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the validation message \"Success: You have modified manufacturers\" and check if the\"Anna\" \"\u003csort\u003e\"entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.check_the_validation_message_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "SignUp",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ManufactureDefination.admin_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will enter the UserId \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_enter_the_UserId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the the dashboard of the reatil page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_the_dashboard_of_the_reatil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the manufacturer",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_manufacturer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will be redirected to the maufacturer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_be_redirected_to_the_maufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin wants to edit the entry",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Admin will click on the edit option",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_edit_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the edit page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_edit_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "can change the  name \"a\" and the sort order\"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.can_change_the_name_and_the_sort_order(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "then wil click on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.then_wil_click_on_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the validation message \"Manufacturer Name must be between 2 and 64 characters!\" and check if the\"a\" \"\u003csort\u003e\"entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.check_the_validation_message_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "SignUp",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ManufactureDefination.admin_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will enter the UserId \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_enter_the_UserId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the the dashboard of the reatil page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_the_dashboard_of_the_reatil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the manufacturer",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_manufacturer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will be redirected to the maufacturer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_be_redirected_to_the_maufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cancel button verificaton",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on add new button",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.user_clicks_on_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "would be redirected to the Add manufacturer page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.would_be_redirected_to_the_Add_manufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.clicks_on_cancel_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected back",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_back()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "SignUp",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ManufactureDefination.admin_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will enter the UserId \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_enter_the_UserId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the the dashboard of the reatil page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_the_dashboard_of_the_reatil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the manufacturer",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_manufacturer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will be redirected to the maufacturer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_be_redirected_to_the_maufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "select and delete the entry",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user will create an new entry",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.user_will_create_an_new_entry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the admin selects the check box of a particular field",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.the_admin_selects_the_check_box_of_a_particular_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the delete button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.click_on_the_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alert message will appear and will delete the field",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.alert_message_will_appear_and_whill_delete_the_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will select the checkbox of the header",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_select_the_checkbox_of_the_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all the checkboxes will be checked",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.all_the_checkboxes_will_be_checked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "SignUp",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ManufactureDefination.admin_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will enter the UserId \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_enter_the_UserId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the the dashboard of the reatil page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_the_dashboard_of_the_reatil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the manufacturer",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_manufacturer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will be redirected to the maufacturer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_be_redirected_to_the_maufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ascending and descending",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "admin clicks on the Manufacturer name heading",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_clicks_on_the_Manufacturer_name_heading()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the names will be arranges in asecending",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.the_names_will_be_arranges_in_asecending()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin clicks on the Manufacturer name heading  again",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_clicks_on_the_Manufacturer_name_heading_again()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the name will be arranged in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.the_name_will_be_arranged_in_descending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin clicks on the sort order heading",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_clicks_on_the_sort_order_heading()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the order will be arranges in asecending",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.the_order_will_be_arranges_in_asecending()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin clicks on the Sort order heading  again",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_clicks_on_the_Sort_order_heading_again()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the sort order will be arranged in descending",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.the_sort_order_will_be_arranged_in_descending()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Pagination",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"\u003cSymbol1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User is directed to page no. \"\u003cPage no.1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks \"\u003cSymbol2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User is directed to page no. \"\u003cPage no.2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks \"\u003cSymbol3\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User is directed to page no. \"\u003cPage no.3\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User Clicks |\u003c",
  "keyword": "When "
});
formatter.step({
  "name": "User is directed to page no. \"\u003cPage no.4\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User Clicks on \u003e|",
  "keyword": "When "
});
formatter.step({
  "name": "User is directed to page no. \"\u003cPage no.5\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Symbol1",
        "Symbol2",
        "Symbol3",
        "Page no.1",
        "Page no.2",
        "Page no.3",
        "Page no.4",
        "Page no.5"
      ]
    },
    {
      "cells": [
        "\u003e",
        "\u003c",
        "3",
        "2",
        "1",
        "3",
        "1",
        "3"
      ]
    }
  ]
});
formatter.background({
  "name": "SignUp",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ManufactureDefination.admin_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will enter the UserId \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_enter_the_UserId_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will be redirected to the the dashboard of the reatil page",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_be_redirected_to_the_the_dashboard_of_the_reatil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "will click on the manufacturer",
  "keyword": "And "
});
formatter.match({
  "location": "ManufactureDefination.will_click_on_the_manufacturer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin will be redirected to the maufacturer page",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.admin_will_be_redirected_to_the_maufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pagination",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.user_clicks(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to page no. \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.user_is_directed_to_page_no(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks \"\u003c\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.user_clicks(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to page no. \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.user_is_directed_to_page_no(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks \"3\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.user_clicks(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to page no. \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.user_is_directed_to_page_no(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks |\u003c",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.user_Clicks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to page no. \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.user_is_directed_to_page_no(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on \u003e|",
  "keyword": "When "
});
formatter.match({
  "location": "ManufactureDefination.user_Clicks_on()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to page no. \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ManufactureDefination.user_is_directed_to_page_no(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});