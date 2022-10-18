# Python Unit test based on selenium and webdriver (tester.py)

## To use it, the user need to have Python 3 and selenium from pip

## To run it, simply use terminal to run the tester.py or from any IDE (e.g. Pycharm, VScode)

## This Tester will run like a simulation script, which will automatically open up your browser and our web application, and then automatically type in the test inputs

## Introduction:

### First, please download and open tester.py and change the line 12 where shows test.driver=webdriver.Chrome

NOTICE: Please change the executable_path to your local path, or just leave it empty like webdriver.Chrome

You can also use other browser, Please read and follow the guide of [selenium ](https://pypi.org/project/selenium/), download your matched webdriver.exe and make the change the executable_path follows it.

(Note that this will be the tricky part for using our tester, but once the path is setup correctly, the test should run)

### The detailed comments are also written in tester.py which introduces each step

### After the test finished, you will see 'Test Completed, closing the browser' in your console and OK.

Since the tester will do the test very quickly, you might not be able to see what happened. If you would like to see what does our tester do, please uncomment the line 35 of sleep()

## If you have any concerns, like experincing the issue of set up the path, please contact us
