
import sys

numbers = sys.argv
numbers.pop(0)

sum = int(numbers[0]) + int(numbers[1])

print(sum)

if int(sum) <= 0:
    print("You have chosen the path of destitution.")
elif int(sum) > 1 and int(sum) <= 100:
    print("You have chosen the path of plenty.")
elif int(sum) > 100:
    print("You have chosen the path of excess.")

