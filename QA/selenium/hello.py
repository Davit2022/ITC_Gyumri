from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome(executable_path='/home/student/Desktop/ITC_Gyumri/QA/selenium/chromedriver')
driver.get('https://www.google.com/')
driver.find_element(By.CSS_SELECTOR,"div > .a4bIc > input").send_keys("selenium")
driver.find_element(By.CSS_SELECTOR,"div > .a4bIc > input").send_keys(Keys.ENTER)
