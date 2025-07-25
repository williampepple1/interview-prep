import { AssessmentQuestion } from '../../types';

export const pythonAssessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'python-1',
    question: 'What is Python?',
    options: [
      'A high-level, interpreted programming language known for its simplicity and readability',
      'A low-level programming language for system programming',
      'A markup language for web development',
      'A database management system'
    ],
    correctAnswer: 'A high-level, interpreted programming language known for its simplicity and readability',
    explanation: 'Python is a high-level, interpreted programming language that emphasizes code readability with its notable use of significant whitespace.',
    category: 'Python Basics',
    difficulty: 'Easy'
  },
  {
    id: 'python-2',
    question: 'What is the correct way to create a variable in Python?',
    options: [
      'variable_name = value',
      'var variable_name = value',
      'let variable_name = value',
      'const variable_name = value'
    ],
    correctAnswer: 'variable_name = value',
    explanation: 'Python uses simple assignment with the equals sign. No keywords like var, let, or const are needed.',
    category: 'Python Syntax',
    difficulty: 'Easy'
  },
  {
    id: 'python-3',
    question: 'What is the output of: print(type(3.14))?',
    options: [
      '<class \'float\'>',
      '<class \'int\'>',
      '<class \'number\'>',
      '<class \'decimal\'>'
    ],
    correctAnswer: '<class \'float\'>',
    explanation: '3.14 is a floating-point number, so type() returns the float class.',
    category: 'Python Data Types',
    difficulty: 'Easy'
  },
  {
    id: 'python-4',
    question: 'What is the correct way to create a list in Python?',
    options: [
      'my_list = [1, 2, 3, 4, 5]',
      'my_list = {1, 2, 3, 4, 5}',
      'my_list = (1, 2, 3, 4, 5)',
      'my_list = <1, 2, 3, 4, 5>'
    ],
    correctAnswer: 'my_list = [1, 2, 3, 4, 5]',
    explanation: 'Lists in Python are created using square brackets []. Curly braces {} are for sets/dictionaries, and parentheses () are for tuples.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-5',
    question: 'What is the output of: print("Hello" + " " + "World")?',
    options: [
      'Hello World',
      'HelloWorld',
      'Hello + World',
      'Error'
    ],
    correctAnswer: 'Hello World',
    explanation: 'The + operator concatenates strings, and the space between quotes adds a space between the words.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-6',
    question: 'What is the correct way to define a function in Python?',
    options: [
      'def function_name():',
      'function function_name():',
      'def function_name():',
      'func function_name():'
    ],
    correctAnswer: 'def function_name():',
    explanation: 'Python uses the def keyword to define functions, followed by the function name and parentheses.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-7',
    question: 'What is the output of: print(len("Python"))?',
    options: [
      '6',
      '5',
      '7',
      'Error'
    ],
    correctAnswer: '6',
    explanation: 'The len() function returns the length of a string. "Python" has 6 characters.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-8',
    question: 'What is the correct way to create a tuple in Python?',
    options: [
      'my_tuple = (1, 2, 3)',
      'my_tuple = [1, 2, 3]',
      'my_tuple = {1, 2, 3}',
      'my_tuple = <1, 2, 3>'
    ],
    correctAnswer: 'my_tuple = (1, 2, 3)',
    explanation: 'Tuples are created using parentheses (). They are immutable, unlike lists which use square brackets [].',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-9',
    question: 'What is the output of: print(2 ** 3)?',
    options: [
      '8',
      '6',
      '5',
      'Error'
    ],
    correctAnswer: '8',
    explanation: 'The ** operator is the exponentiation operator. 2 ** 3 means 2 raised to the power of 3, which equals 8.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-10',
    question: 'What is the correct way to create a dictionary in Python?',
    options: [
      'my_dict = {"key": "value"}',
      'my_dict = ["key": "value"]',
      'my_dict = ("key": "value")',
      'my_dict = <"key": "value">'
    ],
    correctAnswer: 'my_dict = {"key": "value"}',
    explanation: 'Dictionaries are created using curly braces {} with key-value pairs separated by colons.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-11',
    question: 'What is the output of: print(10 // 3)?',
    options: [
      '3',
      '3.333...',
      '3.0',
      'Error'
    ],
    correctAnswer: '3',
    explanation: 'The // operator is floor division, which returns the largest integer less than or equal to the division result.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-12',
    question: 'What is the correct way to check if a key exists in a dictionary?',
    options: [
      'if key in my_dict:',
      'if my_dict.has_key(key):',
      'if my_dict.contains(key):',
      'if key exists in my_dict:'
    ],
    correctAnswer: 'if key in my_dict:',
    explanation: 'The in operator is used to check if a key exists in a dictionary. The has_key() method is deprecated in Python 3.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-13',
    question: 'What is the output of: print(range(5))?',
    options: [
      'range(0, 5)',
      '[0, 1, 2, 3, 4]',
      '(0, 1, 2, 3, 4)',
      'Error'
    ],
    correctAnswer: 'range(0, 5)',
    explanation: 'range(5) returns a range object, not a list. To get a list, you would use list(range(5)).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-14',
    question: 'What is the correct way to import a module in Python?',
    options: [
      'import module_name',
      'include module_name',
      'require module_name',
      'using module_name'
    ],
    correctAnswer: 'import module_name',
    explanation: 'Python uses the import keyword to import modules. Other languages use different keywords like include, require, or using.',
    category: 'Python Modules',
    difficulty: 'Easy'
  },
  {
    id: 'python-15',
    question: 'What is the output of: print("Hello" * 3)?',
    options: [
      'HelloHelloHello',
      'Hello 3',
      'HelloHello',
      'Error'
    ],
    correctAnswer: 'HelloHelloHello',
    explanation: 'The * operator with strings repeats the string the specified number of times.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-16',
    question: 'What is the correct way to create a set in Python?',
    options: [
      'my_set = {1, 2, 3}',
      'my_set = [1, 2, 3]',
      'my_set = (1, 2, 3)',
      'my_set = <1, 2, 3>'
    ],
    correctAnswer: 'my_set = {1, 2, 3}',
    explanation: 'Sets are created using curly braces {} with comma-separated values. They contain unique, unordered elements.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-17',
    question: 'What is the output of: print(True and False)?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'The and operator returns True only if both operands are True. Since False is one of the operands, the result is False.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-18',
    question: 'What is the correct way to handle exceptions in Python?',
    options: [
      'try: ... except Exception: ...',
      'try: ... catch Exception: ...',
      'try: ... handle Exception: ...',
      'try: ... rescue Exception: ...'
    ],
    correctAnswer: 'try: ... except Exception: ...',
    explanation: 'Python uses try/except for exception handling. Other languages use try/catch or try/rescue.',
    category: 'Python Exception Handling',
    difficulty: 'Medium'
  },
  {
    id: 'python-19',
    question: 'What is the output of: print([1, 2, 3] + [4, 5, 6])?',
    options: [
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3][4, 5, 6]',
      '[5, 7, 9]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 4, 5, 6]',
    explanation: 'The + operator with lists concatenates them, creating a new list with all elements from both lists.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-20',
    question: 'What is the correct way to create a class in Python?',
    options: [
      'class MyClass:',
      'class MyClass():',
      'class MyClass(object):',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'All three syntaxes are valid in Python. In Python 3, all classes inherit from object by default.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-21',
    question: 'What is the output of: print("hello".upper())?',
    options: [
      'HELLO',
      'hello',
      'Hello',
      'Error'
    ],
    correctAnswer: 'HELLO',
    explanation: 'The upper() method converts all characters in a string to uppercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-22',
    question: 'What is the correct way to check if a value is in a list?',
    options: [
      'if value in my_list:',
      'if my_list.contains(value):',
      'if my_list.has(value):',
      'if value exists in my_list:'
    ],
    correctAnswer: 'if value in my_list:',
    explanation: 'The in operator is used to check if a value exists in a list, tuple, or other iterable.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-23',
    question: 'What is the output of: print(round(3.7))?',
    options: [
      '4',
      '3',
      '3.7',
      'Error'
    ],
    correctAnswer: '4',
    explanation: 'The round() function rounds a number to the nearest integer. 3.7 rounds up to 4.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-24',
    question: 'What is the correct way to create a lambda function in Python?',
    options: [
      'lambda x: x * 2',
      'def lambda x: x * 2',
      'function lambda x: x * 2',
      'lambda function x: x * 2'
    ],
    correctAnswer: 'lambda x: x * 2',
    explanation: 'Lambda functions are created using the lambda keyword followed by parameters and an expression.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-25',
    question: 'What is the output of: print(type([]))?',
    options: [
      '<class \'list\'>',
      '<class \'array\'>',
      '<class \'sequence\'>',
      '<class \'collection\'>'
    ],
    correctAnswer: '<class \'list\'>',
    explanation: 'Empty square brackets create an empty list, so type() returns the list class.',
    category: 'Python Data Types',
    difficulty: 'Easy'
  },
  {
    id: 'python-26',
    question: 'What is the correct way to remove an item from a list by value?',
    options: [
      'my_list.remove(value)',
      'my_list.delete(value)',
      'my_list.pop(value)',
      'del my_list[value]'
    ],
    correctAnswer: 'my_list.remove(value)',
    explanation: 'The remove() method removes the first occurrence of a value from a list.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-27',
    question: 'What is the output of: print(abs(-5))?',
    options: [
      '5',
      '-5',
      '0',
      'Error'
    ],
    correctAnswer: '5',
    explanation: 'The abs() function returns the absolute value of a number, which is always positive.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-28',
    question: 'What is the correct way to create a string with quotes inside it?',
    options: [
      'text = "It\'s a string"',
      'text = "It"s a string"',
      'text = "It\'s a string"',
      'All of the above'
    ],
    correctAnswer: 'text = "It\'s a string"',
    explanation: 'You can escape quotes with a backslash or use different quote types to avoid conflicts.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-29',
    question: 'What is the output of: print(max([1, 5, 3, 9, 2]))?',
    options: [
      '9',
      '1',
      '5',
      'Error'
    ],
    correctAnswer: '9',
    explanation: 'The max() function returns the largest value in an iterable. In this case, 9 is the maximum value.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-30',
    question: 'What is the correct way to check if a string starts with a specific prefix?',
    options: [
      'if my_string.startswith(prefix):',
      'if my_string.begins_with(prefix):',
      'if my_string.starts(prefix):',
      'if prefix in my_string[0]:'
    ],
    correctAnswer: 'if my_string.startswith(prefix):',
    explanation: 'The startswith() method checks if a string begins with the specified prefix.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-31',
    question: 'What is the output of: print(sorted([3, 1, 4, 1, 5]))?',
    options: [
      '[1, 1, 3, 4, 5]',
      '[3, 1, 4, 1, 5]',
      '[5, 4, 3, 1, 1]',
      'Error'
    ],
    correctAnswer: '[1, 1, 3, 4, 5]',
    explanation: 'The sorted() function returns a new sorted list from the elements of any iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-32',
    question: 'What is the correct way to get the length of a dictionary?',
    options: [
      'len(my_dict)',
      'my_dict.length()',
      'my_dict.size()',
      'my_dict.count()'
    ],
    correctAnswer: 'len(my_dict)',
    explanation: 'The len() function returns the number of key-value pairs in a dictionary.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-33',
    question: 'What is the output of: print("Python"[1:4])?',
    options: [
      'yth',
      'Pyt',
      'ytho',
      'Error'
    ],
    correctAnswer: 'yth',
    explanation: 'String slicing [1:4] returns characters from index 1 to 3 (exclusive of 4).',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-34',
    question: 'What is the correct way to add an item to a list?',
    options: [
      'my_list.append(item)',
      'my_list.add(item)',
      'my_list.insert(item)',
      'my_list.push(item)'
    ],
    correctAnswer: 'my_list.append(item)',
    explanation: 'The append() method adds an item to the end of a list.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-35',
    question: 'What is the output of: print(bool(0))?',
    options: [
      'False',
      'True',
      '0',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'The bool() function converts values to boolean. 0, empty sequences, and None are considered False.',
    category: 'Python Data Types',
    difficulty: 'Medium'
  },
  {
    id: 'python-36',
    question: 'What is the correct way to check if a file exists in Python?',
    options: [
      'import os; os.path.exists(filename)',
      'import file; file.exists(filename)',
      'import path; path.exists(filename)',
      'import system; system.file_exists(filename)'
    ],
    correctAnswer: 'import os; os.path.exists(filename)',
    explanation: 'The os.path.exists() function checks if a file or directory exists.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-37',
    question: 'What is the output of: print(list(range(3, 7)))?',
    options: [
      '[3, 4, 5, 6]',
      '[3, 4, 5, 6, 7]',
      '[3, 5, 7]',
      'Error'
    ],
    correctAnswer: '[3, 4, 5, 6]',
    explanation: 'range(3, 7) generates numbers from 3 to 6 (exclusive of 7), and list() converts it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-38',
    question: 'What is the correct way to get all keys from a dictionary?',
    options: [
      'my_dict.keys()',
      'my_dict.get_keys()',
      'my_dict.all_keys()',
      'my_dict.key_list()'
    ],
    correctAnswer: 'my_dict.keys()',
    explanation: 'The keys() method returns a view object of all keys in the dictionary.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-39',
    question: 'What is the output of: print("hello world".title())?',
    options: [
      'Hello World',
      'hello world',
      'HELLO WORLD',
      'Error'
    ],
    correctAnswer: 'Hello World',
    explanation: 'The title() method capitalizes the first letter of each word in a string.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-40',
    question: 'What is the correct way to create a list comprehension?',
    options: [
      '[x for x in range(5)]',
      'list(x for x in range(5))',
      'for x in range(5): list.append(x)',
      'All of the above'
    ],
    correctAnswer: '[x for x in range(5)]',
    explanation: 'List comprehensions provide a concise way to create lists based on existing sequences.',
    category: 'Python Comprehensions',
    difficulty: 'Medium'
  },
  {
    id: 'python-41',
    question: 'What is the output of: print(sum([1, 2, 3, 4, 5]))?',
    options: [
      '15',
      '10',
      '20',
      'Error'
    ],
    correctAnswer: '15',
    explanation: 'The sum() function returns the sum of all items in an iterable. 1+2+3+4+5 = 15.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-42',
    question: 'What is the correct way to check if a string contains only digits?',
    options: [
      'my_string.isdigit()',
      'my_string.isnumeric()',
      'my_string.isdecimal()',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'All three methods check if a string contains only digits, but they have slight differences in what they consider valid.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-43',
    question: 'What is the output of: print(any([False, False, True]))?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'The any() function returns True if at least one element in the iterable is True.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-44',
    question: 'What is the correct way to reverse a list in place?',
    options: [
      'my_list.reverse()',
      'my_list = my_list[::-1]',
      'my_list = reversed(my_list)',
      'All of the above'
    ],
    correctAnswer: 'my_list.reverse()',
    explanation: 'The reverse() method reverses the list in place, while the other options create new lists.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-45',
    question: 'What is the output of: print(chr(65))?',
    options: [
      'A',
      '65',
      'a',
      'Error'
    ],
    correctAnswer: 'A',
    explanation: 'The chr() function returns the string representing a character whose Unicode code point is the integer.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-46',
    question: 'What is the correct way to get the current working directory?',
    options: [
      'import os; os.getcwd()',
      'import path; path.current()',
      'import system; system.cwd()',
      'import file; file.cwd()'
    ],
    correctAnswer: 'import os; os.getcwd()',
    explanation: 'The os.getcwd() function returns the current working directory as a string.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-47',
    question: 'What is the output of: print(all([True, True, False]))?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'The all() function returns True only if all elements in the iterable are True.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-48',
    question: 'What is the correct way to convert a string to an integer?',
    options: [
      'int(my_string)',
      'str_to_int(my_string)',
      'convert_int(my_string)',
      'parse_int(my_string)'
    ],
    correctAnswer: 'int(my_string)',
    explanation: 'The int() function converts a string to an integer, provided the string represents a valid number.',
    category: 'Python Type Conversion',
    difficulty: 'Easy'
  },
  {
    id: 'python-49',
    question: 'What is the output of: print(ord("A"))?',
    options: [
      '65',
      'A',
      '97',
      'Error'
    ],
    correctAnswer: '65',
    explanation: 'The ord() function returns the Unicode code point of a given character. "A" has the code point 65.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-50',
    question: 'What is the correct way to create a generator expression?',
    options: [
      '(x for x in range(5))',
      '[x for x in range(5)]',
      '{x for x in range(5)}',
      '<x for x in range(5)>'
    ],
    correctAnswer: '(x for x in range(5))',
    explanation: 'Generator expressions use parentheses () and create an iterator that yields values on demand.',
    category: 'Python Generators',
    difficulty: 'Hard'
  },
  {
    id: 'python-51',
    question: 'What is the output of: print("hello".replace("l", "x"))?',
    options: [
      'hexxo',
      'hello',
      'hexo',
      'Error'
    ],
    correctAnswer: 'hexxo',
    explanation: 'The replace() method replaces all occurrences of the first argument with the second argument.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-52',
    question: 'What is the correct way to create a virtual environment in Python?',
    options: [
      'python -m venv myenv',
      'python create venv myenv',
      'python virtual myenv',
      'python env myenv'
    ],
    correctAnswer: 'python -m venv myenv',
    explanation: 'The venv module is used to create virtual environments. The -m flag runs the module as a script.',
    category: 'Python Environment',
    difficulty: 'Medium'
  },
  {
    id: 'python-53',
    question: 'What is the output of: print([1, 2, 3] * 2)?',
    options: [
      '[1, 2, 3, 1, 2, 3]',
      '[2, 4, 6]',
      '[1, 2, 3][1, 2, 3]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 1, 2, 3]',
    explanation: 'The * operator with lists repeats the list the specified number of times.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-54',
    question: 'What is the correct way to import a specific function from a module?',
    options: [
      'from module_name import function_name',
      'import function_name from module_name',
      'include function_name from module_name',
      'require function_name from module_name'
    ],
    correctAnswer: 'from module_name import function_name',
    explanation: 'The from...import syntax allows you to import specific functions or classes from a module.',
    category: 'Python Modules',
    difficulty: 'Easy'
  },
  {
    id: 'python-55',
    question: 'What is the output of: print("Python".find("th"))?',
    options: [
      '2',
      '3',
      '-1',
      'Error'
    ],
    correctAnswer: '2',
    explanation: 'The find() method returns the index of the first occurrence of the substring. "th" starts at index 2.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-56',
    question: 'What is the correct way to check if a variable is None?',
    options: [
      'if variable is None:',
      'if variable == None:',
      'if variable is null:',
      'if variable == null:'
    ],
    correctAnswer: 'if variable is None:',
    explanation: 'In Python, use "is None" to check for None, as it checks for identity rather than equality.',
    category: 'Python Comparison',
    difficulty: 'Medium'
  },
  {
    id: 'python-57',
    question: 'What is the output of: print(divmod(10, 3))?',
    options: [
      '(3, 1)',
      '(3.333..., 1)',
      '(3, 0)',
      'Error'
    ],
    correctAnswer: '(3, 1)',
    explanation: 'divmod() returns a tuple containing the quotient and remainder of division. 10 ÷ 3 = 3 remainder 1.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-58',
    question: 'What is the correct way to create a dictionary comprehension?',
    options: [
      '{key: value for key, value in items}',
      'dict(key: value for key, value in items)',
      '[key: value for key, value in items]',
      '(key: value for key, value in items)'
    ],
    correctAnswer: '{key: value for key, value in items}',
    explanation: 'Dictionary comprehensions use curly braces {} and create key-value pairs.',
    category: 'Python Comprehensions',
    difficulty: 'Hard'
  },
  {
    id: 'python-59',
    question: 'What is the output of: print("hello".split())?',
    options: [
      '[\'hello\']',
      '[\'h\', \'e\', \'l\', \'l\', \'o\']',
      'hello',
      'Error'
    ],
    correctAnswer: '[\'hello\']',
    explanation: 'split() without arguments splits on whitespace. Since "hello" has no spaces, it returns a list with one element.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-60',
    question: 'What is the correct way to get the current date and time?',
    options: [
      'from datetime import datetime; datetime.now()',
      'import time; time.now()',
      'import date; date.now()',
      'import calendar; calendar.now()'
    ],
    correctAnswer: 'from datetime import datetime; datetime.now()',
    explanation: 'The datetime module provides classes for manipulating dates and times.',
    category: 'Python Libraries',
    difficulty: 'Medium'
  },
  {
    id: 'python-61',
    question: 'What is the output of: print(enumerate(["a", "b", "c"]))?',
    options: [
      '<enumerate object>',
      '[(0, \'a\'), (1, \'b\'), (2, \'c\')]',
      '[0, 1, 2]',
      'Error'
    ],
    correctAnswer: '<enumerate object>',
    explanation: 'enumerate() returns an enumerate object. To see the values, you need to convert it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-62',
    question: 'What is the correct way to read a file in Python?',
    options: [
      'with open("file.txt", "r") as f: content = f.read()',
      'file.read("file.txt")',
      'read_file("file.txt")',
      'open("file.txt").read()'
    ],
    correctAnswer: 'with open("file.txt", "r") as f: content = f.read()',
    explanation: 'The with statement ensures the file is properly closed after reading.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-63',
    question: 'What is the output of: print(filter(lambda x: x > 0, [-1, 0, 1, 2]))?',
    options: [
      '<filter object>',
      '[1, 2]',
      '[-1, 0, 1, 2]',
      'Error'
    ],
    correctAnswer: '<filter object>',
    explanation: 'filter() returns a filter object. To see the filtered values, convert it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-64',
    question: 'What is the correct way to create a set comprehension?',
    options: [
      '{x for x in range(5)}',
      'set(x for x in range(5))',
      '[x for x in range(5)]',
      '(x for x in range(5))'
    ],
    correctAnswer: '{x for x in range(5)}',
    explanation: 'Set comprehensions use curly braces {} and create sets with unique elements.',
    category: 'Python Comprehensions',
    difficulty: 'Hard'
  },
  {
    id: 'python-65',
    question: 'What is the output of: print("hello".count("l"))?',
    options: [
      '2',
      '1',
      '3',
      'Error'
    ],
    correctAnswer: '2',
    explanation: 'The count() method returns the number of occurrences of a substring. "l" appears twice in "hello".',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-66',
    question: 'What is the correct way to check if a string ends with a specific suffix?',
    options: [
      'my_string.endswith(suffix)',
      'my_string.ends_with(suffix)',
      'my_string.ends(suffix)',
      'my_string.has_suffix(suffix)'
    ],
    correctAnswer: 'my_string.endswith(suffix)',
    explanation: 'The endswith() method checks if a string ends with the specified suffix.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-67',
    question: 'What is the output of: print(map(str, [1, 2, 3]))?',
    options: [
      '<map object>',
      '[\'1\', \'2\', \'3\']',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: '<map object>',
    explanation: 'map() returns a map object. To see the mapped values, convert it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-68',
    question: 'What is the correct way to get a random number in Python?',
    options: [
      'import random; random.randint(1, 10)',
      'import math; math.random()',
      'import random; random.random()',
      'import random; random.number(1, 10)'
    ],
    correctAnswer: 'import random; random.randint(1, 10)',
    explanation: 'random.randint(a, b) returns a random integer N such that a <= N <= b.',
    category: 'Python Libraries',
    difficulty: 'Medium'
  },
  {
    id: 'python-69',
    question: 'What is the output of: print("hello".upper().lower())?',
    options: [
      'hello',
      'HELLO',
      'Hello',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'upper() converts to uppercase, then lower() converts back to lowercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-70',
    question: 'What is the correct way to create a tuple with one element?',
    options: [
      'my_tuple = (1,)',
      'my_tuple = (1)',
      'my_tuple = 1,',
      'my_tuple = tuple(1)'
    ],
    correctAnswer: 'my_tuple = (1,)',
    explanation: 'A single-element tuple needs a trailing comma to distinguish it from a parenthesized expression.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-71',
    question: 'What is the output of: print(zip([1, 2], [\'a\', \'b\']))?',
    options: [
      '<zip object>',
      '[(1, \'a\'), (2, \'b\')]',
      '[1, 2, \'a\', \'b\']',
      'Error'
    ],
    correctAnswer: '<zip object>',
    explanation: 'zip() returns a zip object. To see the zipped values, convert it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-72',
    question: 'What is the correct way to write to a file in Python?',
    options: [
      'with open("file.txt", "w") as f: f.write("content")',
      'write_file("file.txt", "content")',
      'file.write("file.txt", "content")',
      'open("file.txt", "w").write("content")'
    ],
    correctAnswer: 'with open("file.txt", "w") as f: f.write("content")',
    explanation: 'The with statement ensures the file is properly closed after writing.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-73',
    question: 'What is the output of: print("hello".strip())?',
    options: [
      'hello',
      ' hello ',
      'h',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'strip() removes leading and trailing whitespace. Since "hello" has no extra spaces, it returns the same string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-74',
    question: 'What is the correct way to get the length of a string?',
    options: [
      'len(my_string)',
      'my_string.length()',
      'my_string.size()',
      'my_string.count()'
    ],
    correctAnswer: 'len(my_string)',
    explanation: 'The len() function returns the number of characters in a string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-75',
    question: 'What is the output of: print(reversed([1, 2, 3]))?',
    options: [
      '<list_reverseiterator object>',
      '[3, 2, 1]',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: '<list_reverseiterator object>',
    explanation: 'reversed() returns a reverse iterator. To see the reversed values, convert it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-76',
    question: 'What is the correct way to check if a list is empty?',
    options: [
      'if not my_list:',
      'if my_list.empty():',
      'if my_list.is_empty():',
      'if len(my_list) == 0:'
    ],
    correctAnswer: 'if not my_list:',
    explanation: 'In Python, empty lists are falsy, so "not my_list" is True when the list is empty.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-77',
    question: 'What is the output of: print("hello".join(["a", "b", "c"]))?',
    options: [
      'ahellobhelloc',
      'a b c',
      'abc',
      'Error'
    ],
    correctAnswer: 'ahellobhelloc',
    explanation: 'join() concatenates the elements of the iterable with the string as the separator.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-78',
    question: 'What is the correct way to get the current timestamp?',
    options: [
      'import time; time.time()',
      'import datetime; datetime.now()',
      'import time; time.now()',
      'import timestamp; timestamp.now()'
    ],
    correctAnswer: 'import time; time.time()',
    explanation: 'time.time() returns the current time as a floating point number expressed in seconds since the epoch.',
    category: 'Python Libraries',
    difficulty: 'Medium'
  },
  {
    id: 'python-79',
    question: 'What is the output of: print("hello".partition("l"))?',
    options: [
      '(\'he\', \'l\', \'lo\')',
      '[\'he\', \'l\', \'lo\']',
      'he l lo',
      'Error'
    ],
    correctAnswer: '(\'he\', \'l\', \'lo\')',
    explanation: 'partition() splits the string at the first occurrence of the separator and returns a tuple of three parts.',
    category: 'Python Strings',
    difficulty: 'Hard'
  },
  {
    id: 'python-80',
    question: 'What is the correct way to create a deep copy of a list?',
    options: [
      'import copy; copy.deepcopy(my_list)',
      'my_list.copy()',
      'my_list[:]',
      'list(my_list)'
    ],
    correctAnswer: 'import copy; copy.deepcopy(my_list)',
    explanation: 'deepcopy() creates a completely independent copy, including nested objects.',
    category: 'Python Data Structures',
    difficulty: 'Hard'
  },
  {
    id: 'python-81',
    question: 'What is the output of: print("hello".center(10))?',
    options: [
      '  hello   ',
      'hello',
      'hello     ',
      'Error'
    ],
    correctAnswer: '  hello   ',
    explanation: 'center() centers the string in a field of the specified width, padding with spaces.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-82',
    question: 'What is the correct way to get command line arguments?',
    options: [
      'import sys; sys.argv',
      'import os; os.argv',
      'import argparse; argparse.args',
      'import cli; cli.args'
    ],
    correctAnswer: 'import sys; sys.argv',
    explanation: 'sys.argv is a list containing the command line arguments passed to the script.',
    category: 'Python System',
    difficulty: 'Medium'
  },
  {
    id: 'python-83',
    question: 'What is the output of: print("hello".ljust(10))?',
    options: [
      'hello     ',
      '  hello   ',
      '     hello',
      'Error'
    ],
    correctAnswer: 'hello     ',
    explanation: 'ljust() left-justifies the string in a field of the specified width, padding with spaces.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-84',
    question: 'What is the correct way to check if a file is a directory?',
    options: [
      'import os; os.path.isdir(path)',
      'import path; path.isdir(path)',
      'import file; file.isdir(path)',
      'import system; system.isdir(path)'
    ],
    correctAnswer: 'import os; os.path.isdir(path)',
    explanation: 'os.path.isdir() returns True if the path is an existing directory.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-85',
    question: 'What is the output of: print("hello".rjust(10))?',
    options: [
      '     hello',
      'hello     ',
      '  hello   ',
      'Error'
    ],
    correctAnswer: '     hello',
    explanation: 'rjust() right-justifies the string in a field of the specified width, padding with spaces.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-86',
    question: 'What is the correct way to get environment variables?',
    options: [
      'import os; os.environ.get("VAR_NAME")',
      'import env; env.get("VAR_NAME")',
      'import system; system.env("VAR_NAME")',
      'import environment; environment.get("VAR_NAME")'
    ],
    correctAnswer: 'import os; os.environ.get("VAR_NAME")',
    explanation: 'os.environ is a mapping object representing the environment variables.',
    category: 'Python System',
    difficulty: 'Medium'
  },
  {
    id: 'python-87',
    question: 'What is the output of: print("hello".expandtabs())?',
    options: [
      'hello',
      'hello    ',
      'h e l l o',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'expandtabs() replaces tab characters with spaces. Since "hello" has no tabs, it returns the same string.',
    category: 'Python Strings',
    difficulty: 'Hard'
  },
  {
    id: 'python-88',
    question: 'What is the correct way to create a JSON string from a Python object?',
    options: [
      'import json; json.dumps(obj)',
      'import json; json.dump(obj)',
      'import json; json.encode(obj)',
      'import json; json.stringify(obj)'
    ],
    correctAnswer: 'import json; json.dumps(obj)',
    explanation: 'json.dumps() serializes an object to a JSON formatted string.',
    category: 'Python Libraries',
    difficulty: 'Medium'
  },
  {
    id: 'python-89',
    question: 'What is the output of: print("hello".isalpha())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isalpha() returns True if all characters in the string are alphabetic.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-90',
    question: 'What is the correct way to parse a JSON string in Python?',
    options: [
      'import json; json.loads(json_string)',
      'import json; json.load(json_string)',
      'import json; json.decode(json_string)',
      'import json; json.parse(json_string)'
    ],
    correctAnswer: 'import json; json.loads(json_string)',
    explanation: 'json.loads() deserializes a JSON formatted string to a Python object.',
    category: 'Python Libraries',
    difficulty: 'Medium'
  },
  {
    id: 'python-91',
    question: 'What is the output of: print("hello".isalnum())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isalnum() returns True if all characters in the string are alphanumeric.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-92',
    question: 'What is the correct way to get the current working directory name?',
    options: [
      'import os; os.path.basename(os.getcwd())',
      'import os; os.getcwd().split("/")[-1]',
      'import path; path.basename(os.getcwd())',
      'import os; os.cwd_name()'
    ],
    correctAnswer: 'import os; os.path.basename(os.getcwd())',
    explanation: 'os.path.basename() returns the base name of the pathname path.',
    category: 'Python File Operations',
    difficulty: 'Hard'
  },
  {
    id: 'python-93',
    question: 'What is the output of: print("hello".islower())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'islower() returns True if all cased characters in the string are lowercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-94',
    question: 'What is the correct way to get the size of a file?',
    options: [
      'import os; os.path.getsize(filename)',
      'import os; os.size(filename)',
      'import file; file.size(filename)',
      'import path; path.size(filename)'
    ],
    correctAnswer: 'import os; os.path.getsize(filename)',
    explanation: 'os.path.getsize() returns the size, in bytes, of the file.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-95',
    question: 'What is the output of: print("hello".isupper())?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'isupper() returns True if all cased characters in the string are uppercase. "hello" is lowercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-96',
    question: 'What is the correct way to check if a path is a file?',
    options: [
      'import os; os.path.isfile(path)',
      'import path; path.isfile(path)',
      'import file; file.isfile(path)',
      'import system; system.isfile(path)'
    ],
    correctAnswer: 'import os; os.path.isfile(path)',
    explanation: 'os.path.isfile() returns True if the path is an existing regular file.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-97',
    question: 'What is the output of: print("hello".istitle())?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'istitle() returns True if the string is a titlecased string. "hello" is not titlecased.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-98',
    question: 'What is the correct way to get the absolute path of a file?',
    options: [
      'import os; os.path.abspath(path)',
      'import path; path.abspath(path)',
      'import os; os.abspath(path)',
      'import file; file.abspath(path)'
    ],
    correctAnswer: 'import os; os.path.abspath(path)',
    explanation: 'os.path.abspath() returns a normalized absolutized version of the pathname path.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-99',
    question: 'What is the output of: print("hello".isspace())?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'isspace() returns True if there are only whitespace characters in the string. "hello" contains letters.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-100',
    question: 'What is the correct way to get the directory name of a path?',
    options: [
      'import os; os.path.dirname(path)',
      'import path; path.dirname(path)',
      'import os; os.dirname(path)',
      'import file; file.dirname(path)'
    ],
    correctAnswer: 'import os; os.path.dirname(path)',
    explanation: 'os.path.dirname() returns the directory name of pathname path.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-101',
    question: 'What is the output of: print("hello".zfill(10))?',
    options: [
      '00000hello',
      'hello00000',
      '     hello',
      'Error'
    ],
    correctAnswer: '00000hello',
    explanation: 'zfill() pads the string on the left with zeros to fill the specified width.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-102',
    question: 'What is the correct way to create a context manager?',
    options: [
      'class MyContextManager: def __enter__(self): ... def __exit__(self, ...): ...',
      'def context_manager(): ...',
      'with context_manager(): ...',
      'import contextlib; @contextlib.contextmanager'
    ],
    correctAnswer: 'class MyContextManager: def __enter__(self): ... def __exit__(self, ...): ...',
    explanation: 'Context managers are created by implementing __enter__ and __exit__ methods in a class.',
    category: 'Python Advanced',
    difficulty: 'Hard'
  },
  {
    id: 'python-103',
    question: 'What is the output of: print("hello".swapcase())?',
    options: [
      'HELLO',
      'hello',
      'hELLO',
      'Error'
    ],
    correctAnswer: 'HELLO',
    explanation: 'swapcase() converts uppercase characters to lowercase and vice versa.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-104',
    question: 'What is the correct way to create a decorator?',
    options: [
      'def decorator(func): def wrapper(*args, **kwargs): ... return wrapper',
      'def decorator(func): return func',
      '@decorator def func(): ...',
      'import decorator; @decorator'
    ],
    correctAnswer: 'def decorator(func): def wrapper(*args, **kwargs): ... return wrapper',
    explanation: 'Decorators are functions that take another function and extend its behavior.',
    category: 'Python Advanced',
    difficulty: 'Hard'
  },
  {
    id: 'python-105',
    question: 'What is the output of: print("hello".encode())?',
    options: [
      "b'hello'",
      'hello',
      'h e l l o',
      'Error'
    ],
    correctAnswer: "b'hello'",
    explanation: 'encode() converts a string to bytes using the default encoding (UTF-8).',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-106',
    question: 'What is the correct way to create a metaclass?',
    options: [
      'class Meta(type): ... class MyClass(metaclass=Meta): ...',
      'class Meta: ... class MyClass(Meta): ...',
      'metaclass Meta: ...',
      'import metaclass; @metaclass'
    ],
    correctAnswer: 'class Meta(type): ... class MyClass(metaclass=Meta): ...',
    explanation: 'Metaclasses are classes for classes. They are created by inheriting from type.',
    category: 'Python Advanced',
    difficulty: 'Hard'
  },
  {
    id: 'python-107',
    question: 'What is the output of: print(b"hello".decode())?',
    options: [
      'hello',
      "b'hello'",
      'h e l l o',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'decode() converts bytes to a string using the default encoding (UTF-8).',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-108',
    question: 'What is the correct way to create a property?',
    options: [
      '@property def my_property(self): ...',
      'def property(self): ...',
      'property = property()',
      'import property; @property'
    ],
    correctAnswer: '@property def my_property(self): ...',
    explanation: 'The @property decorator converts a method into a read-only property.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-109',
    question: 'What is the output of: print("hello".format())?',
    options: [
      'hello',
      '{}',
      'Error',
      'None'
    ],
    correctAnswer: 'hello',
    explanation: 'format() with no arguments returns the original string unchanged.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-110',
    question: 'What is the correct way to create a static method?',
    options: [
      '@staticmethod def my_method(): ...',
      'def static_method(): ...',
      'static def my_method(): ...',
      'import static; @static'
    ],
    correctAnswer: '@staticmethod def my_method(): ...',
    explanation: 'The @staticmethod decorator creates a static method that doesn\'t receive self or cls.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-111',
    question: 'What is the output of: print("hello".format_map({}))?',
    options: [
      'hello',
      '{}',
      'Error',
      'None'
    ],
    correctAnswer: 'hello',
    explanation: 'format_map() with an empty dictionary returns the original string unchanged.',
    category: 'Python Strings',
    difficulty: 'Hard'
  },
  {
    id: 'python-112',
    question: 'What is the correct way to create a class method?',
    options: [
      '@classmethod def my_method(cls): ...',
      'def class_method(cls): ...',
      'class def my_method(): ...',
      'import classmethod; @classmethod'
    ],
    correctAnswer: '@classmethod def my_method(cls): ...',
    explanation: 'The @classmethod decorator creates a method that receives the class as the first argument.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-113',
    question: 'What is the output of: print("hello".casefold())?',
    options: [
      'hello',
      'HELLO',
      'Hello',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'casefold() converts the string to lowercase, similar to lower() but more aggressive.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-114',
    question: 'What is the correct way to create an abstract method?',
    options: [
      'from abc import ABC, abstractmethod; @abstractmethod def my_method(self): ...',
      'def abstract_method(self): ...',
      'abstract def my_method(): ...',
      'import abstract; @abstract'
    ],
    correctAnswer: 'from abc import ABC, abstractmethod; @abstractmethod def my_method(self): ...',
    explanation: 'Abstract methods are created using the @abstractmethod decorator from the abc module.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-115',
    question: 'What is the output of: print("hello".maketrans("h", "H"))?',
    options: [
      '{104: 72}',
      'Hello',
      'hello',
      'Error'
    ],
    correctAnswer: '{104: 72}',
    explanation: 'maketrans() creates a translation table mapping characters. 104 is the ASCII code for "h", 72 for "H".',
    category: 'Python Strings',
    difficulty: 'Hard'
  },
  {
    id: 'python-116',
    question: 'What is the correct way to create a singleton class?',
    options: [
      'class Singleton: _instance = None; def __new__(cls): if cls._instance is None: cls._instance = super().__new__(cls); return cls._instance',
      'class Singleton: def __init__(self): self.instance = None',
      'singleton class MyClass: ...',
      'import singleton; @singleton'
    ],
    correctAnswer: 'class Singleton: _instance = None; def __new__(cls): if cls._instance is None: cls._instance = super().__new__(cls); return cls._instance',
    explanation: 'Singleton pattern ensures only one instance of a class exists by overriding __new__.',
    category: 'Python Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'python-117',
    question: 'What is the output of: print("hello".translate({104: 72}))?',
    options: [
      'Hello',
      'hello',
      'hELLO',
      'Error'
    ],
    correctAnswer: 'Hello',
    explanation: 'translate() applies the translation table, replacing "h" (ASCII 104) with "H" (ASCII 72).',
    category: 'Python Strings',
    difficulty: 'Hard'
  },
  {
    id: 'python-118',
    question: 'What is the correct way to create a factory pattern?',
    options: [
      'class Factory: @staticmethod def create_object(type): if type == "A": return ClassA(); elif type == "B": return ClassB()',
      'class Factory: def create(self): return object()',
      'factory class MyClass: ...',
      'import factory; @factory'
    ],
    correctAnswer: 'class Factory: @staticmethod def create_object(type): if type == "A": return ClassA(); elif type == "B": return ClassB()',
    explanation: 'Factory pattern creates objects without specifying their exact class.',
    category: 'Python Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'python-119',
    question: 'What is the output of: print("hello".isprintable())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isprintable() returns True if all characters in the string are printable.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-120',
    question: 'What is the correct way to create an observer pattern?',
    options: [
      'class Subject: def __init__(self): self._observers = []; def attach(self, observer): self._observers.append(observer)',
      'class Observer: def observe(self): pass',
      'observer class MyClass: ...',
      'import observer; @observer'
    ],
    correctAnswer: 'class Subject: def __init__(self): self._observers = []; def attach(self, observer): self._observers.append(observer)',
    explanation: 'Observer pattern allows objects to subscribe to events and be notified when they occur.',
    category: 'Python Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'python-121',
    question: 'What is the output of: print("hello".isidentifier())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isidentifier() returns True if the string is a valid Python identifier.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-122',
    question: 'What is the correct way to create a strategy pattern?',
    options: [
      'class Context: def __init__(self, strategy): self._strategy = strategy; def execute_strategy(self): return self._strategy.execute()',
      'class Strategy: def execute(self): pass',
      'strategy class MyClass: ...',
      'import strategy; @strategy'
    ],
    correctAnswer: 'class Context: def __init__(self, strategy): self._strategy = strategy; def execute_strategy(self): return self._strategy.execute()',
    explanation: 'Strategy pattern allows selecting an algorithm\'s implementation at runtime.',
    category: 'Python Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'python-123',
    question: 'What is the output of: print("hello".isascii())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isascii() returns True if all characters in the string are ASCII.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-124',
    question: 'What is the correct way to create a command pattern?',
    options: [
      'class Command: def execute(self): pass; class Invoker: def __init__(self): self._commands = []; def add_command(self, command): self._commands.append(command)',
      'class Command: def run(self): pass',
      'command class MyClass: ...',
      'import command; @command'
    ],
    correctAnswer: 'class Command: def execute(self): pass; class Invoker: def __init__(self): self._commands = []; def add_command(self, command): self._commands.append(command)',
    explanation: 'Command pattern encapsulates a request as an object, allowing parameterization of clients.',
    category: 'Python Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'python-125',
    question: 'What is the output of: print("hello".isdecimal())?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'isdecimal() returns True if all characters in the string are decimal characters. "hello" contains letters.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-126',
    question: 'What is the output of: print("hello".isnumeric())?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'isnumeric() returns True if all characters in the string are numeric. "hello" contains letters.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-127',
    question: 'What is the correct way to create a custom exception?',
    options: [
      'class CustomException(Exception): pass',
      'def CustomException(): pass',
      'exception CustomException: pass',
      'import exception; @exception'
    ],
    correctAnswer: 'class CustomException(Exception): pass',
    explanation: 'Custom exceptions are created by inheriting from the Exception class or its subclasses.',
    category: 'Python Exception Handling',
    difficulty: 'Medium'
  },
  {
    id: 'python-128',
    question: 'What is the output of: print("hello".capitalize())?',
    options: [
      'Hello',
      'hello',
      'HELLO',
      'Error'
    ],
    correctAnswer: 'Hello',
    explanation: 'capitalize() returns a copy of the string with its first character capitalized.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-129',
    question: 'What is the correct way to create a thread in Python?',
    options: [
      'import threading; thread = threading.Thread(target=function)',
      'import thread; thread.start(function)',
      'import multiprocessing; thread = multiprocessing.Thread(function)',
      'import concurrent; thread = concurrent.Thread(function)'
    ],
    correctAnswer: 'import threading; thread = threading.Thread(target=function)',
    explanation: 'The threading module provides a high-level interface for working with threads.',
    category: 'Python Concurrency',
    difficulty: 'Medium'
  },
  {
    id: 'python-130',
    question: 'What is the output of: print("hello".title())?',
    options: [
      'Hello',
      'hello',
      'HELLO',
      'Error'
    ],
    correctAnswer: 'Hello',
    explanation: 'title() returns a titlecased version of the string where words start with uppercase characters.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-131',
    question: 'What is the correct way to create a process in Python?',
    options: [
      'import multiprocessing; process = multiprocessing.Process(target=function)',
      'import threading; process = threading.Process(function)',
      'import os; process = os.fork()',
      'import subprocess; process = subprocess.Process(function)'
    ],
    correctAnswer: 'import multiprocessing; process = multiprocessing.Process(target=function)',
    explanation: 'The multiprocessing module provides a high-level interface for working with processes.',
    category: 'Python Concurrency',
    difficulty: 'Medium'
  },
  {
    id: 'python-132',
    question: 'What is the output of: print("hello".splitlines())?',
    options: [
      "['hello']",
      "['h', 'e', 'l', 'l', 'o']",
      'hello',
      'Error'
    ],
    correctAnswer: "['hello']",
    explanation: 'splitlines() splits the string at line boundaries and returns a list of lines.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-133',
    question: 'What is the correct way to create a pool of workers?',
    options: [
      'import multiprocessing; pool = multiprocessing.Pool()',
      'import threading; pool = threading.Pool()',
      'import concurrent; pool = concurrent.Pool()',
      'import asyncio; pool = asyncio.Pool()'
    ],
    correctAnswer: 'import multiprocessing; pool = multiprocessing.Pool()',
    explanation: 'multiprocessing.Pool provides a pool of worker processes for parallel execution.',
    category: 'Python Concurrency',
    difficulty: 'Hard'
  },
  {
    id: 'python-134',
    question: 'What is the output of: print("hello".rsplit())?',
    options: [
      "['hello']",
      "['h', 'e', 'l', 'l', 'o']",
      'hello',
      'Error'
    ],
    correctAnswer: "['hello']",
    explanation: 'rsplit() splits the string from the right side, similar to split() but from the end.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-135',
    question: 'What is the correct way to create an async function?',
    options: [
      'async def my_function(): ...',
      'def async my_function(): ...',
      'async function my_function(): ...',
      'import asyncio; @asyncio.async def my_function(): ...'
    ],
    correctAnswer: 'async def my_function(): ...',
    explanation: 'async def defines an asynchronous function that can use await.',
    category: 'Python Async',
    difficulty: 'Medium'
  },
  {
    id: 'python-136',
    question: 'What is the output of: print("hello".rpartition("l"))?',
    options: [
      "('he', 'l', 'lo')",
      "('hel', 'l', 'o')",
      "['he', 'l', 'lo']",
      'Error'
    ],
    correctAnswer: "('hel', 'l', 'o')",
    explanation: 'rpartition() splits the string at the last occurrence of the separator.',
    category: 'Python Strings',
    difficulty: 'Hard'
  },
  {
    id: 'python-137',
    question: 'What is the correct way to run an async function?',
    options: [
      'import asyncio; asyncio.run(my_function())',
      'my_function()',
      'await my_function()',
      'import async; async.run(my_function())'
    ],
    correctAnswer: 'import asyncio; asyncio.run(my_function())',
    explanation: 'asyncio.run() runs the coroutine and returns the result.',
    category: 'Python Async',
    difficulty: 'Medium'
  },
  {
    id: 'python-138',
    question: 'What is the output of: print("hello".lstrip())?',
    options: [
      'hello',
      'hello ',
      ' hello',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'lstrip() removes leading whitespace from the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-139',
    question: 'What is the correct way to create a task in asyncio?',
    options: [
      'import asyncio; task = asyncio.create_task(coroutine)',
      'import asyncio; task = asyncio.Task(coroutine)',
      'import asyncio; task = asyncio.run(coroutine)',
      'import asyncio; task = asyncio.start(coroutine)'
    ],
    correctAnswer: 'import asyncio; task = asyncio.create_task(coroutine)',
    explanation: 'asyncio.create_task() schedules the coroutine to run and returns a Task object.',
    category: 'Python Async',
    difficulty: 'Medium'
  },
  {
    id: 'python-140',
    question: 'What is the output of: print("hello".rstrip())?',
    options: [
      'hello',
      'hello ',
      ' hello',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'rstrip() removes trailing whitespace from the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-141',
    question: 'What is the correct way to wait for multiple coroutines?',
    options: [
      'import asyncio; await asyncio.gather(coro1(), coro2())',
      'import asyncio; asyncio.wait([coro1(), coro2()])',
      'await coro1(); await coro2()',
      'import asyncio; asyncio.run_all([coro1(), coro2()])'
    ],
    correctAnswer: 'import asyncio; await asyncio.gather(coro1(), coro2())',
    explanation: 'asyncio.gather() runs multiple coroutines concurrently and waits for all to complete.',
    category: 'Python Async',
    difficulty: 'Medium'
  },
  {
    id: 'python-142',
    question: 'What is the output of: print("hello".removeprefix("he"))?',
    options: [
      'llo',
      'hello',
      'he',
      'Error'
    ],
    correctAnswer: 'llo',
    explanation: 'removeprefix() removes the specified prefix if the string starts with it.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-143',
    question: 'What is the correct way to create a semaphore in asyncio?',
    options: [
      'import asyncio; semaphore = asyncio.Semaphore(5)',
      'import asyncio; semaphore = asyncio.Lock()',
      'import asyncio; semaphore = asyncio.Event()',
      'import asyncio; semaphore = asyncio.Condition()'
    ],
    correctAnswer: 'import asyncio; semaphore = asyncio.Semaphore(5)',
    explanation: 'asyncio.Semaphore limits the number of coroutines that can access a resource simultaneously.',
    category: 'Python Async',
    difficulty: 'Hard'
  },
  {
    id: 'python-144',
    question: 'What is the output of: print("hello".removesuffix("lo"))?',
    options: [
      'hel',
      'hello',
      'lo',
      'Error'
    ],
    correctAnswer: 'hel',
    explanation: 'removesuffix() removes the specified suffix if the string ends with it.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-145',
    question: 'What is the correct way to create a lock in asyncio?',
    options: [
      'import asyncio; lock = asyncio.Lock()',
      'import asyncio; lock = asyncio.Semaphore(1)',
      'import asyncio; lock = asyncio.Event()',
      'import asyncio; lock = asyncio.Condition()'
    ],
    correctAnswer: 'import asyncio; lock = asyncio.Lock()',
    explanation: 'asyncio.Lock provides mutual exclusion for coroutines.',
    category: 'Python Async',
    difficulty: 'Medium'
  },
  {
    id: 'python-146',
    question: 'What is the output of: print("hello".isascii())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isascii() returns True if all characters in the string are ASCII.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-147',
    question: 'What is the correct way to create an event in asyncio?',
    options: [
      'import asyncio; event = asyncio.Event()',
      'import asyncio; event = asyncio.Lock()',
      'import asyncio; event = asyncio.Semaphore(1)',
      'import asyncio; event = asyncio.Condition()'
    ],
    correctAnswer: 'import asyncio; event = asyncio.Event()',
    explanation: 'asyncio.Event allows coroutines to wait for a signal from another coroutine.',
    category: 'Python Async',
    difficulty: 'Medium'
  },
  {
    id: 'python-148',
    question: 'What is the output of: print("hello".isprintable())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isprintable() returns True if all characters in the string are printable.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-149',
    question: 'What is the correct way to create a condition in asyncio?',
    options: [
      'import asyncio; condition = asyncio.Condition()',
      'import asyncio; condition = asyncio.Lock()',
      'import asyncio; condition = asyncio.Event()',
      'import asyncio; condition = asyncio.Semaphore(1)'
    ],
    correctAnswer: 'import asyncio; condition = asyncio.Condition()',
    explanation: 'asyncio.Condition allows coroutines to wait for a condition to become true.',
    category: 'Python Async',
    difficulty: 'Hard'
  },
  {
    id: 'python-150',
    question: 'What is the output of: print("hello".isidentifier())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isidentifier() returns True if the string is a valid Python identifier.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-151',
    question: 'What is a decorator in Python?',
    options: [
      'A function that takes another function and extends its behavior without modifying it',
      'A design pattern for creating objects',
      'A type of comment used to document code',
      'A way to define class attributes'
    ],
    correctAnswer: 'A function that takes another function and extends its behavior without modifying it',
    explanation: 'Decorators are a powerful feature in Python that allow you to modify or enhance functions or methods without changing their code.',
    category: 'Python Advanced',
    difficulty: 'Medium'
  },
  {
    id: 'python-152',
    question: 'What is the output of: print(list(filter(lambda x: x > 5, [2, 5, 8, 1, 9])))?',
    options: [
      '[8, 9]',
      '[2, 5, 1]',
      '[8, 1, 9]',
      '[2, 5, 8, 9]'
    ],
    correctAnswer: '[8, 9]',
    explanation: 'The filter function returns an iterator yielding elements that satisfy the provided function. Here, it returns elements greater than 5.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-153',
    question: 'What is a generator in Python?',
    options: [
      'A function that returns an iterator using yield statements',
      'A built-in function that generates random numbers',
      'A class that creates new instances of objects',
      'A tool for generating Python code automatically'
    ],
    correctAnswer: 'A function that returns an iterator using yield statements',
    explanation: 'Generators are functions that can be paused and resumed, yielding values one at a time instead of computing them all at once.',
    category: 'Python Advanced',
    difficulty: 'Medium'
  },
  {
    id: 'python-154',
    question: 'What is the purpose of the __init__ method in Python classes?',
    options: [
      'To initialize object attributes when an instance is created',
      'To define class methods',
      'To import required modules',
      'To finalize an object before destruction'
    ],
    correctAnswer: 'To initialize object attributes when an instance is created',
    explanation: 'The __init__ method is a special method (constructor) that is automatically called when a new instance of a class is created.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-155',
    question: 'What is the output of: print("{:.2f}".format(3.14159))?',
    options: [
      '3.14',
      '3.142',
      '3.1416',
      '3.14159'
    ],
    correctAnswer: '3.14',
    explanation: 'The format specifier {:.2f} formats a floating-point number with 2 decimal places.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-156',
    question: 'What is the purpose of the with statement in Python?',
    options: [
      'To ensure proper acquisition and release of resources',
      'To create conditional loops',
      'To handle multiple exceptions simultaneously',
      'To define new functions within a limited scope'
    ],
    correctAnswer: 'To ensure proper acquisition and release of resources',
    explanation: 'The with statement is used for context management, ensuring resources like files are properly closed after use, even if exceptions occur.',
    category: 'Python Advanced',
    difficulty: 'Medium'
  },
  {
    id: 'python-157',
    question: 'What is the output of: print([x*x for x in range(5)])?',
    options: [
      '[0, 1, 4, 9, 16]',
      '[1, 4, 9, 16, 25]',
      '[0, 2, 4, 6, 8]',
      '[1, 2, 3, 4, 5]'
    ],
    correctAnswer: '[0, 1, 4, 9, 16]',
    explanation: 'This is a list comprehension that squares each number in range(5), which includes numbers 0 through 4.',
    category: 'Python Comprehensions',
    difficulty: 'Medium'
  },
  {
    id: 'python-158',
    question: 'What is the difference between append() and extend() methods in lists?',
    options: [
      'append() adds a single element to the end, extend() adds elements from an iterable',
      'append() adds multiple elements, extend() adds only one element',
      'append() modifies the original list, extend() creates a new list',
      'append() can only add numbers, extend() can add any data type'
    ],
    correctAnswer: 'append() adds a single element to the end, extend() adds elements from an iterable',
    explanation: 'append() adds its argument as a single item to the end of a list, while extend() adds each element of its iterable argument to the list.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-159',
    question: 'What is the purpose of the *args parameter in a function definition?',
    options: [
      'To accept a variable number of positional arguments',
      'To make all parameters optional',
      'To restrict the function to only accept string arguments',
      'To indicate that the function takes no arguments'
    ],
    correctAnswer: 'To accept a variable number of positional arguments',
    explanation: 'The *args syntax allows a function to accept any number of positional arguments, which are collected into a tuple.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-160',
    question: 'What is the output of: print(dict(zip(["a", "b", "c"], [1, 2, 3])))?',
    options: [
      "{'a': 1, 'b': 2, 'c': 3}",
      "[('a', 1), ('b', 2), ('c', 3)]",
      "{'a': 1}",
      "Error"
    ],
    correctAnswer: "{'a': 1, 'b': 2, 'c': 3}",
    explanation: 'zip() pairs elements from two iterables, and dict() converts these pairs into a dictionary with keys from the first iterable and values from the second.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-161',
    question: 'What is the output of: print(sum([1, 2, 3], 5))?',
    options: [
      '11',
      '6',
      '[1, 2, 3, 5]',
      'Error'
    ],
    correctAnswer: '11',
    explanation: 'The sum() function adds all elements of the iterable, starting with the second argument as the initial value. 1+2+3+5 = 11.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-162',
    question: 'What is the purpose of the __enter__ and __exit__ methods in a class?',
    options: [
      'To define behavior for context managers (with statement)',
      'To initialize and destroy objects',
      'To implement object serialization',
      'To handle attribute access'
    ],
    correctAnswer: 'To define behavior for context managers (with statement)',
    explanation: 'Classes that implement __enter__ and __exit__ can be used with the with statement, managing setup and cleanup automatically.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-163',
    question: 'What is the output of: print(type(lambda x: x))?',
    options: [
      "<class 'function'>",
      "<class 'lambda'>",
      'function',
      'Error'
    ],
    correctAnswer: "<class 'function'>",
    explanation: 'Lambdas in Python are just syntactic sugar for function objects, so they have type <class \'function\'>.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-164',
    question: 'What is the purpose of the sys.getsizeof function?',
    options: [
      'To get the size of an object in bytes',
      'To count elements in an object',
      'To estimate memory usage for a program',
      'To check the type of an object'
    ],
    correctAnswer: 'To get the size of an object in bytes',
    explanation: 'sys.getsizeof returns the size of an object in bytes, including the overhead of the object itself, which is useful for memory analysis.',
    category: 'Python Memory Management',
    difficulty: 'Medium'
  },
  {
    id: 'python-165',
    question: 'What is the output of: print({}.setdefault("a", 1))?',
    options: [
      '1',
      'None',
      'Error',
      '{}'
    ],
    correctAnswer: '1',
    explanation: 'The setdefault() method returns the value for the key if it exists, otherwise inserts the key with the provided default and returns that default.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-166',
    question: 'What is the purpose of the inspect module in Python?',
    options: [
      'To retrieve information about live objects like functions, classes, and frames',
      'To debug Python code',
      'To generate documentation automatically',
      'To analyze memory usage'
    ],
    correctAnswer: 'To retrieve information about live objects like functions, classes, and frames',
    explanation: 'The inspect module provides introspection capabilities, allowing you to analyze functions, methods, classes, and stack frames at runtime.',
    category: 'Python Modules',
    difficulty: 'Hard'
  },
  {
    id: 'python-167',
    question: 'What is the output of: print(any([]))?',
    options: [
      'False',
      'True',
      '[]',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'The any() function returns True if any element in the iterable is True. For an empty iterable, it returns False.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-168',
    question: 'What is the purpose of the functools.lru_cache decorator?',
    options: [
      'To cache the results of function calls for faster repeated access',
      'To make a function run in parallel',
      'To reduce memory usage of recursive functions',
      'To convert a function into a generator'
    ],
    correctAnswer: 'To cache the results of function calls for faster repeated access',
    explanation: 'functools.lru_cache stores the results of expensive function calls, so repeated calls with the same arguments can return cached results, improving performance.',
    category: 'Python Modules',
    difficulty: 'Hard'
  },
  {
    id: 'python-169',
    question: 'What is the difference between is and == in Python?',
    options: [
      'is compares object identity, == compares object values',
      'is compares object values, == compares object identity',
      'Both are the same',
      'is can only be used with numbers'
    ],
    correctAnswer: 'is compares object identity, == compares object values',
    explanation: 'The is operator checks if two variables point to the same object in memory, while == checks if their values are equal.',
    category: 'Python Operators',
    difficulty: 'Medium'
  },
  {
    id: 'python-170',
    question: 'What does the enumerate() function do in Python?',
    options: [
      'It returns an iterator with index and value pairs for each element',
      'It sorts a list in ascending order',
      'It filters elements from a sequence',
      'It generates a sequence of numbers'
    ],
    correctAnswer: 'It returns an iterator with index and value pairs for each element',
    explanation: 'enumerate() is often used in loops to get both the index and the value while iterating over a sequence.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-171',
    question: 'What is a Python package?',
    options: [
      'A directory containing an __init__.py file and modules',
      'A single Python file',
      'A compressed zip file containing code',
      'A built-in Python library'
    ],
    correctAnswer: 'A directory containing an __init__.py file and modules',
    explanation: 'A package allows for hierarchical structuring of the module namespace using dot notation.',
    category: 'Python Modules',
    difficulty: 'Medium'
  },
  {
    id: 'python-172',
    question: 'What is the purpose of the global keyword in Python?',
    options: [
      'To declare that a variable refers to a global variable',
      'To make a variable immutable',
      'To create a variable accessible across multiple files',
      'To define constants'
    ],
    correctAnswer: 'To declare that a variable refers to a global variable',
    explanation: 'The global keyword tells Python that a variable inside a function refers to the one at the module level.',
    category: 'Python Variables',
    difficulty: 'Medium'
  },
  {
    id: 'python-173',
    question: 'What is the output of: print(set([1, 2, 2, 3, 3, 3]))?',
    options: [
      '{1, 2, 3}',
      '[1, 2, 3]',
      '(1, 2, 3)',
      'Error'
    ],
    correctAnswer: '{1, 2, 3}',
    explanation: 'Sets automatically remove duplicates, so the resulting set only contains unique elements.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-174',
    question: 'What is the purpose of the zip() function?',
    options: [
      'To combine multiple iterables into tuples element-wise',
      'To compress files',
      'To repeat a sequence multiple times',
      'To convert lists into dictionaries automatically'
    ],
    correctAnswer: 'To combine multiple iterables into tuples element-wise',
    explanation: 'zip() pairs elements from iterables based on their positions, producing tuples.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-175',
    question: 'What does the any() function return in Python?',
    options: [
      'True if at least one element in the iterable is true',
      'True only if all elements in the iterable are true',
      'False if any element is true',
      'The first element in the iterable'
    ],
    correctAnswer: 'True if at least one element in the iterable is true',
    explanation: 'any() returns True if any element evaluates to True, otherwise False.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-176',
    question: 'What is a shallow copy in Python?',
    options: [
      'A copy where only the outer object is duplicated, but nested objects are shared',
      'A copy where all nested objects are also duplicated',
      'A copy that removes duplicates',
      'A copy made using deep learning techniques'
    ],
    correctAnswer: 'A copy where only the outer object is duplicated, but nested objects are shared',
    explanation: 'Shallow copies copy the structure but not nested elements, leading to shared references.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-177',
    question: 'What is the purpose of the __slots__ attribute in Python classes?',
    options: [
      'To limit the attributes a class can have and save memory',
      'To define default values for attributes',
      'To enable private variables',
      'To specify static variables only'
    ],
    correctAnswer: 'To limit the attributes a class can have and save memory',
    explanation: '__slots__ prevents the creation of __dict__ for instances, reducing memory usage by restricting attributes.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-178',
    question: 'What is the output of: print(bool(""))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'An empty string is considered False in a boolean context.',
    category: 'Python Data Types',
    difficulty: 'Easy'
  },
  {
    id: 'python-179',
    question: 'What is a lambda function in Python?',
    options: [
      'An anonymous, single-expression function',
      'A type of loop',
      'A module for creating functions',
      'A built-in constant'
    ],
    correctAnswer: 'An anonymous, single-expression function',
    explanation: 'Lambda functions are small, anonymous functions created with the lambda keyword.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-180',
    question: 'What is the difference between a tuple and a list?',
    options: [
      'Tuples are immutable, lists are mutable',
      'Tuples can only hold numbers, lists can hold any type',
      'Lists are faster to access than tuples',
      'Tuples automatically remove duplicates'
    ],
    correctAnswer: 'Tuples are immutable, lists are mutable',
    explanation: 'Tuples cannot be changed after creation, while lists can be modified.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-181',
    question: 'What is the purpose of the zip() function in Python?',
    options: [
      'To combine multiple iterables element-wise into tuples',
      'To compress data into a zip file',
      'To iterate through elements in reverse order',
      'To merge dictionaries together'
    ],
    correctAnswer: 'To combine multiple iterables element-wise into tuples',
    explanation: 'The zip() function pairs elements from multiple iterables into tuples. It stops at the shortest iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-182',
    question: 'What is the output of: print(list(range(1, 10, 3)))?',
    options: [
      '[1, 4, 7]',
      '[1, 3, 5, 7, 9]',
      '[1, 4, 7, 10]',
      '[1, 3, 6, 9]'
    ],
    correctAnswer: '[1, 4, 7]',
    explanation: 'The range() function generates numbers starting at 1, stopping before 10, with a step of 3, resulting in 1, 4, 7.',
    category: 'Python Loops',
    difficulty: 'Easy'
  },
  {
    id: 'python-183',
    question: 'What does the hasattr() function do?',
    options: [
      'Checks if an object has a specified attribute',
      'Returns the value of an attribute',
      'Deletes an attribute from an object',
      'Lists all attributes of an object'
    ],
    correctAnswer: 'Checks if an object has a specified attribute',
    explanation: 'hasattr() checks whether an object has a given attribute and returns True or False.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-184',
    question: 'What is the output of: print(sorted([3, 1, 4], reverse=True))?',
    options: [
      '[4, 3, 1]',
      '[1, 3, 4]',
      '[3, 1, 4]',
      'Error'
    ],
    correctAnswer: '[4, 3, 1]',
    explanation: 'The sorted() function sorts the list in descending order when reverse=True is specified.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-185',
    question: 'What is the difference between copy.copy() and copy.deepcopy()?',
    options: [
      'copy.copy() performs a shallow copy, deepcopy() performs a full recursive copy',
      'copy.copy() creates a deep copy, deepcopy() creates a shallow copy',
      'Both perform the same type of copy',
      'copy.deepcopy() only works on lists'
    ],
    correctAnswer: 'copy.copy() performs a shallow copy, deepcopy() performs a full recursive copy',
    explanation: 'copy.copy() copies only the top-level structure, while copy.deepcopy() recursively copies all nested objects.',
    category: 'Python Modules',
    difficulty: 'Hard'
  },
  {
    id: 'python-186',
    question: 'What is the output of: print(any([0, "", None, False]))?',
    options: [
      'False',
      'True',
      '0',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'The any() function returns True if any element is truthy. All given elements are falsy, so it returns False.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-187',
    question: 'What is the purpose of enumerate() in Python?',
    options: [
      'To iterate over an iterable and get both index and value',
      'To list all variables in the current scope',
      'To create a dictionary from two lists',
      'To convert iterables into strings'
    ],
    correctAnswer: 'To iterate over an iterable and get both index and value',
    explanation: 'enumerate() allows looping over an iterable while retrieving both the index and the element.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-188',
    question: 'What is the output of: print(5 // 2)?',
    options: [
      '2',
      '2.5',
      '3',
      'Error'
    ],
    correctAnswer: '2',
    explanation: 'The // operator performs floor division, returning the integer part of the division result.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-189',
    question: 'What does the with statement do in Python?',
    options: [
      'Simplifies resource management by automatically closing resources',
      'Defines a context manager explicitly',
      'Declares a variable as immutable',
      'Executes code only once'
    ],
    correctAnswer: 'Simplifies resource management by automatically closing resources',
    explanation: 'The with statement is used with context managers to ensure resources like files are properly closed after use, even if an error occurs.',
    category: 'Python Context Managers',
    difficulty: 'Medium'
  },
  {
    id: 'python-190',
    question: 'What is the output of: print(type(lambda x: x))?',
    options: [
      "<class 'function'>",
      "<class 'lambda'>",
      "<class 'generator'>",
      'Error'
    ],
    correctAnswer: "<class 'function'>",
    explanation: 'Lambda functions are anonymous functions, but they are still of type function.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-191',
    question: 'What is a frozenset in Python?',
    options: [
      'An immutable version of a set',
      'A set that only stores integers',
      'A set that can be sorted',
      'A set that removes duplicates automatically'
    ],
    correctAnswer: 'An immutable version of a set',
    explanation: 'frozenset is like a set but immutable, meaning its elements cannot be modified after creation.',
    category: 'Python Data Types',
    difficulty: 'Hard'
  },
  {
    id: 'python-192',
    question: 'What is the output of: print(2 ** 3 ** 2)?',
    options: [
      '512',
      '64',
      '16',
      'Error'
    ],
    correctAnswer: '512',
    explanation: 'Exponentiation is right-associative: 3 ** 2 = 9, then 2 ** 9 = 512.',
    category: 'Python Operators',
    difficulty: 'Hard'
  },
  {
    id: 'python-193',
    question: 'What does sys.exit() do?',
    options: [
      'Terminates the program by raising SystemExit',
      'Shuts down the operating system',
      'Pauses the program indefinitely',
      'Closes all file descriptors'
    ],
    correctAnswer: 'Terminates the program by raising SystemExit',
    explanation: 'sys.exit() stops the program by raising a SystemExit exception, which can be caught if needed.',
    category: 'Python Modules',
    difficulty: 'Medium'
  },
  {
    id: 'python-194',
    question: 'What is the output of: print("".join(["a", "b", "c"]))?',
    options: [
      '"abc"',
      '"a b c"',
      '"[a, b, c]"',
      'Error'
    ],
    correctAnswer: '"abc"',
    explanation: 'The join() method concatenates all elements of the iterable into a single string without separators.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-195',
    question: 'What is the difference between is and == in Python?',
    options: [
      'is checks identity (same object), == checks equality (same value)',
      'is checks equality, == checks identity',
      'Both do the same thing',
      'is is only for integers'
    ],
    correctAnswer: 'is checks identity (same object), == checks equality (same value)',
    explanation: 'is checks if two variables point to the same object in memory, while == compares their values.',
    category: 'Python Operators',
    difficulty: 'Medium'
  },
  {
    id: 'python-196',
    question: 'What is the output of: print(type( (x for x in range(5)) ))?',
    options: [
      "<class 'generator'>",
      "<class 'list'>",
      "<class 'tuple'>",
      'Error'
    ],
    correctAnswer: "<class 'generator'>",
    explanation: 'A generator expression creates a generator object, not a list or tuple, until it is iterated over.',
    category: 'Python Generators',
    difficulty: 'Medium'
  },
  {
    id: 'python-197',
    question: 'What does the @staticmethod decorator do in Python?',
    options: [
      'Defines a method that doesn’t receive an implicit self argument',
      'Creates a class method that can access class attributes',
      'Automatically makes a method private',
      'Defines a method as read-only'
    ],
    correctAnswer: 'Defines a method that doesn’t receive an implicit self argument',
    explanation: '@staticmethod is used to define a method that behaves like a normal function but belongs to a class’s namespace.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-198',
    question: 'What is the output of: print(bool("False"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'Non-empty strings are always truthy in Python, even if they represent the word "False".',
    category: 'Python Data Types',
    difficulty: 'Easy'
  },
  {
    id: 'python-199',
    question: 'What is the __enter__ method used for in a context manager?',
    options: [
      'To set up resources when entering a with block',
      'To handle exceptions within the block',
      'To release resources after the block',
      'To skip the with block entirely'
    ],
    correctAnswer: 'To set up resources when entering a with block',
    explanation: '__enter__ is called when execution enters the context managed block, often to allocate or prepare resources.',
    category: 'Python Context Managers',
    difficulty: 'Hard'
  },
  {
    id: 'python-200',
    question: 'What is the output of: print(~5)?',
    options: [
      '-6',
      '6',
      '-5',
      'Error'
    ],
    correctAnswer: '-6',
    explanation: 'The ~ operator performs a bitwise NOT. For 5, ~5 equals -(5+1) = -6 due to two’s complement representation.',
    category: 'Python Operators',
    difficulty: 'Hard'
  },
  {
    id: 'python-201',
    question: 'What is the output of: print("Python".replace("Py", "My"))?',
    options: [
      'Mython',
      'Python',
      'MyPython',
      'Error'
    ],
    correctAnswer: 'Mython',
    explanation: 'The replace method substitutes all occurrences of the first substring ("Py") with the second ("My"), producing "Mython".',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-202',
    question: 'What does the __slots__ attribute in a Python class do?',
    options: [
      'Prevents dynamic attribute creation and saves memory by using a fixed attribute set',
      'Locks class attributes from modification',
      'Automatically generates getters and setters',
      'Enables multi-threaded attribute access'
    ],
    correctAnswer: 'Prevents dynamic attribute creation and saves memory by using a fixed attribute set',
    explanation: '__slots__ defines a fixed set of attributes for a class, reducing memory usage by avoiding a per-instance __dict__.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-203',
    question: 'What is the output of: print(list(map(str.upper, "go")))?',
    options: [
      "['G', 'O']",
      "['g', 'o']",
      'GO',
      'Error'
    ],
    correctAnswer: "['G', 'O']",
    explanation: 'map applies the str.upper function to each character in the string, resulting in a list of uppercase characters.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-204',
    question: 'What is the difference between repr() and str() in Python?',
    options: [
      'repr() is for unambiguous representations, str() is for readable representations',
      'repr() converts numbers, str() converts strings',
      'repr() is slower, str() is faster',
      'They are identical in all cases'
    ],
    correctAnswer: 'repr() is for unambiguous representations, str() is for readable representations',
    explanation: 'repr() aims to be unambiguous (often suitable for debugging), while str() is designed for human readability.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-205',
    question: 'What is the output of: print(sorted([3, 1, 2], reverse=True))?',
    options: [
      '[3, 2, 1]',
      '[1, 2, 3]',
      '[2, 3, 1]',
      'Error'
    ],
    correctAnswer: '[3, 2, 1]',
    explanation: 'The sorted function returns a new list, sorted in descending order when reverse=True is specified.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-206',
    question: 'What is the purpose of the @staticmethod decorator?',
    options: [
      'Defines a method that does not receive the instance or class as its first argument',
      'Converts a function to a class method',
      'Creates a read-only property',
      'Automatically calls the method at import time'
    ],
    correctAnswer: 'Defines a method that does not receive the instance or class as its first argument',
    explanation: 'Static methods are bound to a class but don’t receive self or cls; they behave like normal functions inside the class namespace.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-207',
    question: 'What is the output of: print(bool("False"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'Non-empty strings are always truthy, regardless of their content.',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-208',
    question: 'What is the difference between deep copy and shallow copy?',
    options: [
      'Shallow copy copies only references to nested objects, deep copy recursively copies all objects',
      'Deep copy is faster, shallow copy is slower',
      'They are the same in Python',
      'Shallow copy is immutable, deep copy is mutable'
    ],
    correctAnswer: 'Shallow copy copies only references to nested objects, deep copy recursively copies all objects',
    explanation: 'shallow copies share nested object references, while deep copies duplicate every level, avoiding shared state.',
    category: 'Python Copying',
    difficulty: 'Medium'
  },
  {
    id: 'python-209',
    question: 'What is the output of: print([i for i in range(3) if i % 2])?',
    options: [
      '[1]',
      '[0, 2]',
      '[1, 2]',
      '[]'
    ],
    correctAnswer: '[1]',
    explanation: 'The list comprehension includes only numbers where i % 2 is True (i.e., odd numbers). From 0–2, only 1 qualifies.',
    category: 'Python Comprehensions',
    difficulty: 'Medium'
  },
  {
    id: 'python-210',
    question: 'What is the purpose of the zip function in Python?',
    options: [
      'Combines multiple iterables into tuples, stopping at the shortest iterable',
      'Compresses data into a zip file',
      'Creates a dictionary from two lists',
      'Shuffles lists randomly'
    ],
    correctAnswer: 'Combines multiple iterables into tuples, stopping at the shortest iterable',
    explanation: 'zip aggregates elements from multiple iterables into tuples; it stops when the shortest iterable is exhausted.',
    category: 'Python Itertools',
    difficulty: 'Easy'
  },
  {
    id: 'python-211',
    question: 'What is the output of: print(type(type))?',
    options: [
      "<class 'type'>",
      "<class 'object'>",
      "<class 'class'>",
      'Error'
    ],
    correctAnswer: "<class 'type'>",
    explanation: 'type is itself an instance of type; classes are created by type in Python’s metaclass system.',
    category: 'Python Types',
    difficulty: 'Hard'
  },
  {
    id: 'python-212',
    question: 'What is the effect of calling dict.fromkeys(["a", "b"], 0)?',
    options: [
      "{'a': 0, 'b': 0}",
      "{'a': None, 'b': None}",
      '["a", "b"]',
      'Error'
    ],
    correctAnswer: "{'a': 0, 'b': 0}",
    explanation: 'dict.fromkeys creates a dictionary with the given keys and assigns the specified default value (0 here).',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-213',
    question: 'What is the output of: print(any([0, [], False, ""]))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'All elements are falsy, so any() returns False.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-214',
    question: 'What is the effect of the itertools.cycle function?',
    options: [
      'Repeats the elements of an iterable indefinitely',
      'Shuffles elements randomly',
      'Returns every second element from an iterable',
      'Generates a range of numbers'
    ],
    correctAnswer: 'Repeats the elements of an iterable indefinitely',
    explanation: 'cycle endlessly loops over the provided iterable, yielding elements repeatedly.',
    category: 'Python Itertools',
    difficulty: 'Medium'
  },
  {
    id: 'python-215',
    question: 'What is the output of: print(divmod(7, 3))?',
    options: [
      '(2, 1)',
      '(3, 2)',
      '(7, 3)',
      'Error'
    ],
    correctAnswer: '(2, 1)',
    explanation: 'divmod returns a tuple of quotient and remainder (7 divided by 3 is 2 remainder 1).',
    category: 'Python Arithmetic',
    difficulty: 'Easy'
  },
  {
    id: 'python-216',
    question: 'What is the effect of the del statement on a list element?',
    options: [
      'Removes the specified element by index',
      'Sets the element to None',
      'Clears the list',
      'Permanently deletes the list variable'
    ],
    correctAnswer: 'Removes the specified element by index',
    explanation: 'del list[index] removes the element entirely, shifting remaining elements.',
    category: 'Python Lists',
    difficulty: 'Medium'
  },
  {
    id: 'python-217',
    question: 'What is the output of: print(all([1, True, ""]))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'all() returns True only if all elements are truthy. An empty string is falsy.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-218',
    question: 'What is the difference between enumerate and range?',
    options: [
      'enumerate pairs elements with an index, range generates a sequence of numbers',
      'enumerate generates numbers, range generates iterables',
      'They are identical in all cases',
      'range is slower than enumerate'
    ],
    correctAnswer: 'enumerate pairs elements with an index, range generates a sequence of numbers',
    explanation: 'enumerate provides (index, value) pairs for an iterable, while range only produces a sequence of integers.',
    category: 'Python Iteration',
    difficulty: 'Medium'
  },
  {
    id: 'python-219',
    question: 'What is the output of: print(list(reversed([1, 2, 3])))?',
    options: [
      '[3, 2, 1]',
      '[1, 2, 3]',
      '[1, 3, 2]',
      'Error'
    ],
    correctAnswer: '[3, 2, 1]',
    explanation: 'reversed() returns an iterator over the sequence in reverse order, which can be converted to a list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-220',
    question: 'What is the purpose of the contextlib.suppress function?',
    options: [
      'Suppresses specified exceptions in a with block',
      'Silences all print statements',
      'Delays exception raising',
      'Suppresses logging output'
    ],
    correctAnswer: 'Suppresses specified exceptions in a with block',
    explanation: 'contextlib.suppress allows you to ignore specific exceptions gracefully during a block of code.',
    category: 'Python Modules',
    difficulty: 'Hard'
  },
  {
    id: 'python-221',
    question: 'What is the output of: print(isinstance(True, int))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'In Python, bool is a subclass of int, so isinstance(True, int) returns True.',
    category: 'Python Types',
    difficulty: 'Medium'
  },
  {
    id: 'python-222',
    question: 'What is the effect of using collections.Counter?',
    options: [
      'Counts the frequency of elements in an iterable',
      'Sorts elements by frequency',
      'Removes duplicates',
      'Caches elements for fast lookup'
    ],
    correctAnswer: 'Counts the frequency of elements in an iterable',
    explanation: 'Counter creates a dictionary-like object mapping elements to their counts.',
    category: 'Python Collections',
    difficulty: 'Medium'
  },
  {
    id: 'python-223',
    question: 'What is the output of: print(5 < float("5.0") <= 5)?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: '5 < 5.0 is False, so the whole chained comparison evaluates to False.',
    category: 'Python Comparisons',
    difficulty: 'Hard'
  },
  {
    id: 'python-224',
    question: 'What is the effect of the itertools.islice function?',
    options: [
      'Slices an iterator without converting it to a list',
      'Shuffles elements in an iterator',
      'Reverses the order of elements',
      'Combines multiple iterators into one'
    ],
    correctAnswer: 'Slices an iterator without converting it to a list',
    explanation: 'islice allows efficient slicing of iterators and generators without materializing the entire sequence.',
    category: 'Python Itertools',
    difficulty: 'Medium'
  },
  {
    id: 'python-225',
    question: 'What is the output of: print(hash("test") == hash("test"))?',
    options: [
      'True',
      'False',
      'Depends on the interpreter',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'The same string in the same session will produce the same hash value, so the comparison is True.',
    category: 'Python Hashing',
    difficulty: 'Easy'
  },
  {
    id: 'python-226',
    question: 'What does setattr(object, name, value) do in Python?',
    options: [
      'Deletes an attribute from an object',
      'Retrieves an attribute value',
      'Dynamically sets or creates an attribute',
      'Checks if an attribute exists'
    ],
    correctAnswer: 'Dynamically sets or creates an attribute',
    explanation: 'setattr() dynamically assigns a value to an attribute of an object, creating it if it does not exist.',
    category: 'Python Built-ins',
    difficulty: 'Medium'
  },
  {
    id: 'python-227',
    question: 'What is the difference between copy.copy() and copy.deepcopy()?',
    options: [
      'copy() is faster but loses data types',
      'copy() creates a shallow copy, deepcopy() recursively copies all nested objects',
      'deepcopy() only works with lists',
      'They are identical'
    ],
    correctAnswer: 'copy() creates a shallow copy, deepcopy() recursively copies all nested objects',
    explanation: 'copy.copy() only duplicates the outer object, while deepcopy() recursively copies all nested structures.',
    category: 'Python Copying',
    difficulty: 'Medium'
  },
  {
    id: 'python-228',
    question: 'How does Python implement negative indexing for lists?',
    options: [
      'It uses modulo operations',
      'It subtracts from zero internally',
      'It adds the negative index to the list length',
      'It reverses the list temporarily'
    ],
    correctAnswer: 'It adds the negative index to the list length',
    explanation: 'Negative indexes are resolved by adding them to len(list) to get the correct positive index.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-229',
    question: 'What is the output of: print(flatten([1, [2, [3, 4]], 5])) if flatten recursively flattens nested lists?',
    options: [
      '[1, 2, 3, 4, 5]',
      '[1, [2, [3, 4]], 5]',
      '[1, 2, [3, 4], 5]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 4, 5]',
    explanation: 'A recursive flatten function traverses all levels of nesting, returning a single flat list.',
    category: 'Python Recursion',
    difficulty: 'Medium'
  },
  {
    id: 'python-230',
    question: 'Which method is used to remove all items from a Python list?',
    options: [
      'clear()',
      'delete()',
      'removeAll()',
      'purge()'
    ],
    correctAnswer: 'clear()',
    explanation: 'The clear() method removes all elements from a list without deleting the list itself.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-231',
    question: 'What does the globals() function return?',
    options: [
      'A list of all global variables',
      'A dictionary of the current global symbol table',
      'A list of imported modules',
      'The Python interpreter settings'
    ],
    correctAnswer: 'A dictionary of the current global symbol table',
    explanation: 'globals() returns a dictionary mapping all global variable names to their values.',
    category: 'Python Namespaces',
    difficulty: 'Medium'
  },
  {
    id: 'python-232',
    question: 'Which of these is NOT a valid way to create a dictionary?',
    options: [
      'dict(a=1, b=2)',
      '{"a": 1, "b": 2}',
      'dict([("a", 1), ("b", 2)])',
      'dict(("a", 1), ("b", 2))'
    ],
    correctAnswer: 'dict(("a", 1), ("b", 2))',
    explanation: 'The dict constructor needs a list of key-value tuples or keyword arguments, not separate tuple arguments.',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-233',
    question: 'What is the output of: print(type(lambda x: x))?',
    options: [
      '<class "function">',
      '<class "lambda">',
      '<class "method">',
      '<class "generator">'
    ],
    correctAnswer: '<class "function">',
    explanation: 'Lambda expressions create anonymous functions, which are of type function in Python.',
    category: 'Python Lambdas',
    difficulty: 'Easy'
  },
  {
    id: 'python-234',
    question: 'Which of these can be used to safely serialize Python objects?',
    options: [
      'pickle',
      'marshal',
      'json',
      'All of the above'
    ],
    correctAnswer: 'json',
    explanation: 'json is safe for interoperability. pickle and marshal are Python-specific and can be unsafe with untrusted input.',
    category: 'Python Serialization',
    difficulty: 'Medium'
  },
  {
    id: 'python-235',
    question: 'What does the zip() function return in Python 3?',
    options: [
      'A list of tuples',
      'A generator-like zip object',
      'A tuple of lists',
      'A dictionary'
    ],
    correctAnswer: 'A generator-like zip object',
    explanation: 'In Python 3, zip() returns an iterator that yields tuples lazily, not a list.',
    category: 'Python Iterators',
    difficulty: 'Medium'
  },
  {
    id: 'python-236',
    question: 'What is the difference between is and == in Python?',
    options: [
      'No difference',
      'is compares values, == compares identities',
      'is compares object identity, == compares values',
      'is is only for numbers'
    ],
    correctAnswer: 'is compares object identity, == compares values',
    explanation: 'is checks if two references point to the same object, == checks if values are equal.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-237',
    question: 'Which of these will NOT raise an error?',
    options: [
      'int("10")',
      'int("10.5")',
      'int(10.5)',
      'int(True)'
    ],
    correctAnswer: 'int(10.5)',
    explanation: 'int("10.5") will raise a ValueError, while int(10.5) truncates to 10.',
    category: 'Python Type Conversion',
    difficulty: 'Medium'
  },
  {
    id: 'python-238',
    question: 'What is the output of: print(bool(""))?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'Empty strings are falsy values in Python, so bool("") evaluates to False.',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-239',
    question: 'Which method is called when using the with statement on a file object?',
    options: [
      '__init__ and __exit__',
      '__enter__ and __exit__',
      '__open__ and __close__',
      '__start__ and __stop__'
    ],
    correctAnswer: '__enter__ and __exit__',
    explanation: 'Context managers implement __enter__ and __exit__ to handle resource setup and cleanup.',
    category: 'Python Context Managers',
    difficulty: 'Medium'
  },
  {
    id: 'python-240',
    question: 'What is the output of: print(type(iter([])))?',
    options: [
      '<class "list">',
      '<class "iterator">',
      '<class "list_iterator">',
      '<class "iterable">'
    ],
    correctAnswer: '<class "list_iterator">',
    explanation: 'iter([]) returns a list_iterator object, which is an iterator type specifically for lists.',
    category: 'Python Iterators',
    difficulty: 'Medium'
  },
  {
    id: 'python-241',
    question: 'Which function can be used to dynamically compile and execute Python code?',
    options: [
      'compile()',
      'exec()',
      'eval()',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'compile() compiles, while exec() and eval() execute. Together, they can dynamically execute Python code.',
    category: 'Python Execution',
    difficulty: 'Hard'
  },
  {
    id: 'python-242',
    question: 'What is the default encoding for open() in Python 3?',
    options: [
      'UTF-8',
      'ASCII',
      'Latin-1',
      'System dependent'
    ],
    correctAnswer: 'System dependent',
    explanation: 'By default, open() uses the platform’s default encoding, which is often UTF-8 but not guaranteed.',
    category: 'Python I/O',
    difficulty: 'Medium'
  },
  {
    id: 'python-243',
    question: 'Which of these is NOT a Python built-in constant?',
    options: [
      'None',
      'Ellipsis',
      'NotImplemented',
      'Undefined'
    ],
    correctAnswer: 'Undefined',
    explanation: 'Python has None, Ellipsis, and NotImplemented as built-in constants, but not Undefined.',
    category: 'Python Constants',
    difficulty: 'Easy'
  },
  {
    id: 'python-244',
    question: 'What does str.join() expect as its argument?',
    options: [
      'A list or iterable of strings',
      'A string',
      'A list of any objects',
      'An integer'
    ],
    correctAnswer: 'A list or iterable of strings',
    explanation: 'str.join() concatenates elements from an iterable of strings, inserting the separator string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-245',
    question: 'What is the output of: print(list(range(3, 3)))?',
    options: [
      '[3]',
      '[0]',
      '[]',
      'Error'
    ],
    correctAnswer: '[]',
    explanation: 'range(3, 3) is empty because the start equals the stop, producing no numbers.',
    category: 'Python Ranges',
    difficulty: 'Easy'
  },
  {
    id: 'python-246',
    question: 'What is the purpose of sys.getsizeof(object)?',
    options: [
      'Returns the size of the object in kilobytes',
      'Returns the memory address',
      'Returns the size of the object in bytes',
      'Returns the type of the object'
    ],
    correctAnswer: 'Returns the size of the object in bytes',
    explanation: 'sys.getsizeof() gives the size of an object in bytes, including overhead.',
    category: 'Python Memory',
    difficulty: 'Medium'
  },
  {
    id: 'python-247',
    question: 'Which built-in function can be used to reverse any iterable?',
    options: [
      'reversed()',
      'reverse()',
      'invert()',
      'iterreverse()'
    ],
    correctAnswer: 'reversed()',
    explanation: 'reversed() returns an iterator that yields elements in reverse order for any sequence.',
    category: 'Python Iterators',
    difficulty: 'Easy'
  },
  {
    id: 'python-248',
    question: 'What happens when a Python function has no return statement?',
    options: [
      'It raises an error',
      'It returns None',
      'It returns 0',
      'It returns an empty string'
    ],
    correctAnswer: 'It returns None',
    explanation: 'By default, Python functions without an explicit return statement return None.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-249',
    question: 'Which of the following is used to release unused memory in Python?',
    options: [
      'del',
      'gc.collect()',
      'Both',
      'Neither'
    ],
    correctAnswer: 'Both',
    explanation: 'del removes references, while gc.collect() explicitly triggers garbage collection to free memory.',
    category: 'Python Memory',
    difficulty: 'Medium'
  },
  {
    id: 'python-250',
    question: 'What is the result of: print(any([]))?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'any() returns False for an empty iterable because there are no True elements.',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-251',
    question: 'What will be the result of: print(any([0, "", None]))?',
    options: [
      'True',
      'False',
      '0',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'The any() function returns True if at least one element is truthy. All elements (0, "", None) are falsy, so it returns False.',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-252',
    question: 'What is the result of: print({1, 2, 3} - {2, 4})?',
    options: [
      '{1, 3}',
      '{4}',
      '{2, 4}',
      '{1, 2, 3, 4}'
    ],
    correctAnswer: '{1, 3}',
    explanation: 'The minus operator on sets returns elements present in the first set but not in the second, so {1, 3}.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-253',
    question: 'What will the following code print?\n\nx = [1, 2, 3]\ny = x\nx += [4]\nprint(y)',
    options: [
      '[1, 2, 3]',
      '[1, 2, 3, 4]',
      'Error',
      'None'
    ],
    correctAnswer: '[1, 2, 3, 4]',
    explanation: 'x and y refer to the same list object. Using += modifies the list in place, so y also reflects the change.',
    category: 'Python Lists',
    difficulty: 'Medium'
  },
  {
    id: 'python-254',
    question: 'What is the output of: print(divmod(9, 4))?',
    options: [
      '(2, 1)',
      '(2.25, 1)',
      '(1, 2)',
      'Error'
    ],
    correctAnswer: '(2, 1)',
    explanation: 'divmod(a, b) returns a tuple (quotient, remainder). For 9 divided by 4, quotient is 2, remainder is 1.',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-255',
    question: 'What happens when you call bool(object()) in Python?',
    options: [
      'True',
      'False',
      'Error',
      'Depends on the object'
    ],
    correctAnswer: 'True',
    explanation: 'Instances of user-defined classes (like object()) are always considered True unless __bool__ or __len__ returns False.',
    category: 'Python Objects',
    difficulty: 'Easy'
  },
  {
    id: 'python-256',
    question: 'What is the result of: print(list(zip("abc", [1, 2])))?',
    options: [
      '[("a", 1), ("b", 2), ("c", None)]',
      '[("a", 1), ("b", 2)]',
      '[("a", 1), ("b", 2), ("c", 0)]',
      'Error'
    ],
    correctAnswer: '[("a", 1), ("b", 2)]',
    explanation: 'zip pairs elements until the shortest iterable is exhausted, so "c" is ignored.',
    category: 'Python Itertools',
    difficulty: 'Easy'
  },
  {
    id: 'python-257',
    question: 'What is the result of: print(sum([0.1] * 10) == 1.0)?',
    options: [
      'True',
      'False',
      'Error',
      'Depends on the platform'
    ],
    correctAnswer: 'False',
    explanation: 'Due to floating-point precision errors, the sum of 0.1 * 10 is slightly off from 1.0, making the comparison False.',
    category: 'Python Numbers',
    difficulty: 'Medium'
  },
  {
    id: 'python-258',
    question: 'What will the following code print?\n\nprint([x for x in range(5) if x % 2])',
    options: [
      '[1, 3, 5]',
      '[1, 3]',
      '[0, 2, 4]',
      'Error'
    ],
    correctAnswer: '[1, 3]',
    explanation: 'The comprehension filters numbers where x % 2 is True (odd numbers). 5 is not included because range(5) stops at 4.',
    category: 'Python Comprehensions',
    difficulty: 'Easy'
  },
  {
    id: 'python-259',
    question: 'What is the output of: print(all([]))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'By definition, all() on an empty iterable returns True because there are no False elements.',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-260',
    question: 'What is the type of the value returned by the map() function in Python 3?',
    options: [
      'list',
      'iterator',
      'tuple',
      'generator'
    ],
    correctAnswer: 'iterator',
    explanation: 'In Python 3, map() returns a lazy iterator, not a list. It must be converted to a list explicitly.',
    category: 'Python Iterators',
    difficulty: 'Easy'
  },
  {
    id: 'python-261',
    question: 'What will be the result of: print("".join(reversed("abc")))?',
    options: [
      'abc',
      'cba',
      'Error',
      '["c", "b", "a"]'
    ],
    correctAnswer: 'cba',
    explanation: 'reversed("abc") creates a reverse iterator, and join concatenates the characters into "cba".',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-262',
    question: 'Which statement about Python’s GIL (Global Interpreter Lock) is true?',
    options: [
      'It prevents multi-threading entirely in Python.',
      'It allows only one thread to execute Python bytecode at a time.',
      'It only exists in Jython, not CPython.',
      'It speeds up CPU-bound threads.'
    ],
    correctAnswer: 'It allows only one thread to execute Python bytecode at a time.',
    explanation: 'The GIL does not prevent threads, but it does restrict concurrent execution of Python bytecode in CPython.',
    category: 'Python Internals',
    difficulty: 'Medium'
  },
  {
    id: 'python-263',
    question: 'What is the output of: print(2 ** 3 ** 2)?',
    options: [
      '64',
      '512',
      '256',
      'Error'
    ],
    correctAnswer: '512',
    explanation: 'Exponentiation is right-associative, so it evaluates as 2 ** (3 ** 2) = 2 ** 9 = 512.',
    category: 'Python Operators',
    difficulty: 'Medium'
  },
  {
    id: 'python-264',
    question: 'What is the result of: print([i for i in range(3)].pop())?',
    options: [
      '0',
      '2',
      'Error',
      'None'
    ],
    correctAnswer: '2',
    explanation: 'The list comprehension creates [0, 1, 2], and pop() removes and returns the last element, 2.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-265',
    question: 'What will be printed?\n\nx = (1, 2, 3)\nx[0] = 10\nprint(x)',
    options: [
      '(10, 2, 3)',
      'Error',
      '(1, 2, 3)',
      'None'
    ],
    correctAnswer: 'Error',
    explanation: 'Tuples are immutable, so attempting to modify an element raises a TypeError.',
    category: 'Python Tuples',
    difficulty: 'Easy'
  },
  {
    id: 'python-266',
    question: 'What is the output of: print(bool("False"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'Any non-empty string is considered True in a boolean context, regardless of content.',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-267',
    question: 'What will this code print?\n\nprint(list(filter(None, [0, "", None, "a", 5])))',
    options: [
      '[0, "", None, "a", 5]',
      '["a", 5]',
      '["a"]',
      '[5]',
    ],
    correctAnswer: '["a", 5]',
    explanation: 'filter(None, iterable) removes all falsy elements, leaving only truthy ones.',
    category: 'Python Built-ins',
    difficulty: 'Medium'
  },
  {
    id: 'python-268',
    question: 'What will be printed?\n\nprint(3 < 4 < 5)',
    options: [
      'True',
      'False',
      'Error',
      'Depends'
    ],
    correctAnswer: 'True',
    explanation: 'Python supports chained comparisons, which are evaluated left to right as (3 < 4) and (4 < 5).',
    category: 'Python Comparisons',
    difficulty: 'Easy'
  },
  {
    id: 'python-269',
    question: 'Which of the following is immutable?',
    options: [
      'list',
      'dict',
      'set',
      'frozenset'
    ],
    correctAnswer: 'frozenset',
    explanation: 'frozenset is the immutable version of a set. Lists, dicts, and sets are mutable.',
    category: 'Python Data Types',
    difficulty: 'Easy'
  },
  {
    id: 'python-270',
    question: 'What is the output of: print(5 // -2)?',
    options: [
      '-2',
      '-3',
      '2',
      '-1'
    ],
    correctAnswer: '-3',
    explanation: 'Integer division (//) rounds toward negative infinity, so 5 divided by -2 is -3.',
    category: 'Python Numbers',
    difficulty: 'Medium'
  },
  {
    id: 'python-271',
    question: 'What will this print?\n\nprint(bool([]) and bool(1))',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'The and operator returns False immediately because bool([]) is False, so the second operand is not evaluated.',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-272',
    question: 'What is the output of: print(chr(65))?',
    options: [
      '"65"',
      '"A"',
      '"a"',
      'Error'
    ],
    correctAnswer: '"A"',
    explanation: 'chr(65) converts the Unicode code point 65 into the character "A".',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-273',
    question: 'What does sys.getsizeof(1000) return?',
    options: [
      'The size of 1000 in bytes, including overhead',
      'Always 4 bytes',
      'The bit length of the number',
      'The size of its string representation'
    ],
    correctAnswer: 'The size of 1000 in bytes, including overhead',
    explanation: 'sys.getsizeof() returns the memory size of an object in bytes, including Python’s internal overhead.',
    category: 'Python Memory',
    difficulty: 'Medium'
  },
  {
    id: 'python-274',
    question: 'What will this code print?\n\nprint([i for i in range(3)] * 2)',
    options: [
      '[0, 1, 2, 0, 1, 2]',
      '[0, 1, 2, 2]',
      '[0, 1, 2]',
      'Error'
    ],
    correctAnswer: '[0, 1, 2, 0, 1, 2]',
    explanation: 'Multiplying a list duplicates its contents, so the comprehension is repeated twice.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-275',
    question: 'What will be the output of: print(hex(255))?',
    options: [
      '"255"',
      '"0x255"',
      '"0xff"',
      '"ff"'
    ],
    correctAnswer: '"0xff"',
    explanation: 'hex(255) returns the string representation of 255 in hexadecimal, prefixed with "0x".',
    category: 'Python Numbers',
    difficulty: 'Easy'
  },
  {
    id: 'python-276',
    question: 'What will be the result of: print(list(reversed(range(3))))?',
    options: [
      '[2, 1, 0]',
      '[0, 1, 2]',
      'range(2, -1, -1)',
      'Error'
    ],
    correctAnswer: '[2, 1, 0]',
    explanation: 'reversed(range(3)) produces an iterator over 2, 1, 0, which is converted to a list.',
    category: 'Python Iterators',
    difficulty: 'Easy'
  },
  {
    id: 'python-277',
    question: 'What is the result of: print(type((1,)))?',
    options: [
      '<class \'tuple\'>',
      '<class \'int\'>',
      '<class \'list\'>',
      '<class \'set\'>'
    ],
    correctAnswer: '<class \'tuple\'>',
    explanation: 'A trailing comma is required to create a single-element tuple. Without it, it’s just an int.',
    category: 'Python Tuples',
    difficulty: 'Easy'
  },
  {
    id: 'python-278',
    question: 'What will be printed?\n\nx = "abc"; print(x * 0)',
    options: [
      '""',
      '"abc"',
      'Error',
      '"0"'
    ],
    correctAnswer: '""',
    explanation: 'Multiplying a string by 0 produces an empty string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-279',
    question: 'What is the output of: print(round(2.675, 2))?',
    options: [
      '2.68',
      '2.67',
      'Error',
      'Depends on system'
    ],
    correctAnswer: '2.67',
    explanation: 'Due to floating-point representation, 2.675 is stored slightly less than 2.675, causing rounding down.',
    category: 'Python Numbers',
    difficulty: 'Medium'
  },
  {
    id: 'python-280',
    question: 'What will be printed?\n\nprint(isinstance(True, int))',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'In Python, bool is a subclass of int, so isinstance(True, int) returns True.',
    category: 'Python Data Types',
    difficulty: 'Medium'
  },
  {
    id: 'python-281',
    question: 'What does dict.fromkeys([1, 2, 3], 0) produce?',
    options: [
      '{1: 0, 2: 0, 3: 0}',
      '{1: None, 2: None, 3: None}',
      '{0: 1, 0: 2, 0: 3}',
      'Error'
    ],
    correctAnswer: '{1: 0, 2: 0, 3: 0}',
    explanation: 'dict.fromkeys(iterable, value) creates a dictionary with the given keys, all mapped to the same value.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-282',
    question: 'What is the output of: print(10 % -3)?',
    options: [
      '-1',
      '1',
      '-2',
      '2'
    ],
    correctAnswer: '-2',
    explanation: 'The modulus result has the same sign as the divisor. 10 % -3 equals -2 because -3 * -4 + -2 = 10.',
    category: 'Python Numbers',
    difficulty: 'Medium'
  },
  {
    id: 'python-283',
    question: 'What is the output of: print(hash("hello") == hash("hello"))?',
    options: [
      'True',
      'False',
      'Depends on run',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'The same string in the same run will produce the same hash value, even though Python randomizes hash seeds between runs.',
    category: 'Python Hashing',
    difficulty: 'Medium'
  },
  {
    id: 'python-284',
    question: 'What does enumerate(["a", "b"]) return?',
    options: [
      '[(0, "a"), (1, "b")]',
      '["a", "b"]',
      '<enumerate object>',
      'Error'
    ],
    correctAnswer: '<enumerate object>',
    explanation: 'enumerate returns an iterator. To see pairs, convert it to a list explicitly.',
    category: 'Python Iterators',
    difficulty: 'Easy'
  },
  {
    id: 'python-285',
    question: 'What will be printed?\n\nprint("hello".capitalize())',
    options: [
      '"hello"',
      '"Hello"',
      '"HELLO"',
      'Error'
    ],
    correctAnswer: '"Hello"',
    explanation: 'capitalize() returns a copy with the first character uppercase and the rest lowercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-286',
    question: 'What will be the output of: print(list(range(0, 10, 3)))?',
    options: [
      '[0, 3, 6, 9]',
      '[0, 3, 6]',
      '[3, 6, 9]',
      'Error'
    ],
    correctAnswer: '[0, 3, 6, 9]',
    explanation: 'range(start, stop, step) includes numbers starting from 0 up to 9 (step 3).',
    category: 'Python Ranges',
    difficulty: 'Easy'
  },
  {
    id: 'python-287',
    question: 'What is the result of: print(list("abc").remove("d"))?',
    options: [
      '["a", "b", "c"]',
      'None',
      'Error',
      '[]'
    ],
    correctAnswer: 'Error',
    explanation: 'remove("d") raises a ValueError because "d" is not in the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-288',
    question: 'What does bool(object) return when object is an empty set?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'Empty containers like [], {}, set(), and "" are all falsy in Python.',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-289',
    question: 'What is the output of: print([None] * 3)',
    options: [
      '[None, None, None]',
      '[None]',
      'Error',
      '[]'
    ],
    correctAnswer: '[None, None, None]',
    explanation: 'Multiplying a list replicates its elements, so [None] * 3 creates three None elements.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-290',
    question: 'What is the output of: print(list({1, 2, 3} & {2, 3, 4}))?',
    options: [
      '[2, 3]',
      '[1, 4]',
      '[1, 2, 3, 4]',
      'Error'
    ],
    correctAnswer: '[2, 3]',
    explanation: 'The & operator computes the intersection of two sets, producing {2, 3}.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-291',
    question: 'What will be printed?\n\nprint(type(lambda x: x))',
    options: [
      '<class \'lambda\'>',
      '<class \'function\'>',
      '<class \'callable\'>',
      'Error'
    ],
    correctAnswer: '<class \'function\'>',
    explanation: 'Lambdas are just anonymous functions, so their type is function.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-292',
    question: 'What is the output of: print(5 in {1: "a", 5: "b"})?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'The `in` operator checks dictionary keys by default, so 5 is found.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-293',
    question: 'What will the following print?\n\nprint(list(map(str.upper, ["a", "b"])))',
    options: [
      '["a", "b"]',
      '["A", "B"]',
      'Error',
      'None'
    ],
    correctAnswer: '["A", "B"]',
    explanation: 'map applies str.upper to each element, producing uppercase strings.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-294',
    question: 'What is the output of: print("hello".find("x"))?',
    options: [
      '-1',
      '0',
      'Error',
      'None'
    ],
    correctAnswer: '-1',
    explanation: 'str.find returns -1 when the substring is not found.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-295',
    question: 'What does "".join(["a", "b", "c"]) return?',
    options: [
      '"a b c"',
      '"abc"',
      '["a", "b", "c"]',
      'Error'
    ],
    correctAnswer: '"abc"',
    explanation: 'join concatenates all strings in the iterable without any separator.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-296',
    question: 'What will be printed?\n\nx = [1, 2, 3]\nprint(x.clear())',
    options: [
      '[]',
      'None',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'list.clear() empties the list in place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-297',
    question: 'What is the output of: print(ord("A"))?',
    options: [
      '65',
      '"A"',
      '1',
      'Error'
    ],
    correctAnswer: '65',
    explanation: 'ord() converts a single character to its Unicode code point, so "A" is 65.',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-298',
    question: 'What is the result of: print([i for i in range(3) if i])?',
    options: [
      '[0, 1, 2]',
      '[1, 2]',
      '[0]',
      '[]'
    ],
    correctAnswer: '[1, 2]',
    explanation: 'The comprehension filters out 0 because it is falsy, leaving 1 and 2.',
    category: 'Python Comprehensions',
    difficulty: 'Easy'
  },
  {
    id: 'python-299',
    question: 'What will be the output of: print(bool(0) or bool([]))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'Both 0 and [] are falsy, so the or expression evaluates to False.',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-300',
    question: 'What is the output of: print(list(zip("ab", "123")))?',
    options: [
      '[("a", "1"), ("b", "2")]',
      '[("a", "1"), ("b", "2"), ("", "3")]',
      '[("a", "1"), ("b", "2"), ("c", "3")]',
      'Error'
    ],
    correctAnswer: '[("a", "1"), ("b", "2")]',
    explanation: 'zip pairs elements until the shortest iterable is exhausted, ignoring the extra "3".',
    category: 'Python Itertools',
    difficulty: 'Easy'
  }

]; 