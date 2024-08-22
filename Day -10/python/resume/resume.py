#Task 5: Read the resume.json file. Read each and every key and value from the resume.json file and print them


# Step 1: Go to this link https://jsonresume.org/schema

# Step 2: Copy the JSON data and save it in a file named resume.json

# Step 3: Read the file using json module

# Step 4: Read each and every key and value from the resume.json file and print them


# import json

# # Open and load the JSON file
# with open("Day -10/python/resume/resume.json") as file:
#     resume_data = json.load(file)

# # Iterate through the keys and values in the JSON data
# for key, value in resume_data.items():
#     print(key, value)




# Step 4: Function to recursively print all keys and values

# def print_json(data, indent=0):
#     for key, value in data.items():
#         print(' ' * indent + f"{key}: ", end="")
#         if isinstance(value, dict):
#             print()
#             print_json(value, indent + 2)
#         elif isinstance(value, list):
#             print()
#             for item in value:
#                 if isinstance(item, dict):
#                     print_json(item, indent + 2)
#                 else:
#                     print(' ' * (indent + 2) + str(item))
#         else:
#             print(value)

# # Print the entire resume data
# print_json(resume_data)



# Task 6: Create a function and move this code inside the function and call for five times using loop

import json

def read_resume():
    with open("Day -10/python/resume/resume.json") as file:
        resume = json.load(file)
    for key, value in resume.items():
        print(key, value)

# Call the function five times
for i in range(5):
    read_resume()


