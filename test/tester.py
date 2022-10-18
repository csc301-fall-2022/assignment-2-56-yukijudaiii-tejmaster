from time import sleep
from selenium import webdriver
import unittest
from selenium.webdriver.common.by import By


class MyTest(unittest.TestCase):


    def setUp(test):
        # Please change the executable_path to your own path or clear it
        test.driver = webdriver.Chrome(executable_path="C:\Program Files\Google\Chrome\Application\chromedriver.exe")

    def test_home(self):
        # get our URL
        self.driver.get("https://lit-fjord-01765.herokuapp.com/")
        
        # find the element by id and give input
        self.driver.find_element(By.ID,"name").send_keys("test")
        self.driver.find_element(By.ID,"price").send_keys("10.00")
        self.driver.find_element(By.ID,"quantity").send_keys("1")

        # click the add item button
        self.driver.find_element(By.ID,"add_update_item").click()
        
        result = self.driver.find_element(By.ID,"grand_total").text

        # test the result
        self.assertEqual(result, '11.30')
        
    def tearDown(test):
        # this will close the browser immediately
        # if you would like to see what happened, please decomment next line for sleep()
        
        # sleep(5)
        test.driver.close()
        test.driver.quit()
        print("Test Completed, closing the browser")


if __name__ == "__main__":
    unittest.main()