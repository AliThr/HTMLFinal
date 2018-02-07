import time
import webbrowser


print time.ctime()
print 'hello'


import os

print os.getcwd()
os.chdir("/Users/admin/Desktop")

def rename_files(file_location):
    file_list = os.listdir(file_location)
    for file_name in file_list:
        print "before - " + file_name
        os.rename(file_name, file_name.translate(None, '0123456789'))
        print "after - " + file_name
        print "****"
    return file_list
    


rename_files("/Users/admin/Desktop")




