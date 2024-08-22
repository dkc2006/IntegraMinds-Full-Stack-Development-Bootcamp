# Sample dictionary to represent the complete student meta data

student = {
    'name': 'John Doe',
    'age': 20,
    'grade': 'A',
    'isStudent': True,
    'hobbies': ["reading", "writing", "dancing", "coding"],
    'sampleTuple': (1, 2, 3, 4),
    'sampleDict': {"name": "Bob", "age": 20}
}

print("Student:", student)

# Accessing the student's name
print("Student Name:", student["name"])

# Accessing the student's age
print("Student Age:", student["age"])

# Checking if keys are in the student dictionary and printing them
keys = ["name", "age", "isStudent", "hobbies", "sampleTuple", "sampleSet", "sampleDict", "randomKey"]

for key in keys:
    if key in student:
        print(f"{key}: {student[key]}")
    else:
        print(f"{key} not found in the student's metadata.")

# Accessing and iterating through the student's hobbies with index
print("Student's Hobbies:")
for index, hobby in enumerate(student["hobbies"]):
    print(index, hobby)

# Accessing and iterating through the student's sample tuple with index
print("Student's Sample Tuple:")
for index, item in enumerate(student["sampleTuple"]):
    print(index, item)
