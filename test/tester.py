from selenium import webdriver
import unittest
import HtmlTestRunner



class MyTest(unittest.TestCase):


    @classmethod
    def setUp(cls):
        cls.driver = webdriver.Firefox(executable_path='C:\Program Files\Mozilla Firefox\firefox.exe')
        cls.driver.maximize_window()


    def test_home(self):
        self.driver.get("http://127.0.0.1:5500/pages/index.html")

        self.driver.find_element("name").clear()
        self.driver.find_element("price").clear()
        self.driver.find_element("quantity").clear()
        self.driver.find_element("name").send_keys("test")
        self.driver.find_element("price").send_keys("10.00")
        self.driver.find_element("quantity").send_keys("1")

        self.driver.find_element("add_update_item").click()


    @classmethod
    def tearDown(cls):
        cls.driver.quit()
        print("Test Completed")


if __name__ == "__main__":
    unittest.main(testRunner=HtmlTestRunner.HTMLTestRunner(output='../reports'))
