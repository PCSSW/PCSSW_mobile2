from os import system

message = input('message: ')

system('git config user.name "PCSSW"')
system('git config user.email "avieiraborges2005@gmail.com"')
system('git add .')
system('git commit -m "' + message + '"')
system('git push origin master')