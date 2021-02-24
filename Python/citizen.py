

class Citizen:
    '''Class containing the citizen's details.'''
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def full_name(self):
        both_names = self.first_name + " " + self.last_name
        return both_names

    greeting = "For the glory of Python!"


#print(Citizen.__doc__)

dave = Citizen("Dave","Smith")
print(dave.full_name())


