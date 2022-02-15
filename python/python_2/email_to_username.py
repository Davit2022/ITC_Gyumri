def email_to_username(*args):
    for i in args:
        print(i.split("@")[0])

email_to_username("username@companyname.com","username2@companyname.com", "username3@companyname.com")   