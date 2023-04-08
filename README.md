# Camel_Case from Hacker Rank
Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

I will try to solve as many as possible problems from Hacker Rank, and will post their solutions here.

The Program is used for converting a series of input to Camel Case, based on the inputs. The Format of the input will be:-

<ul>
<li>
Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
</li>
<li>
The operation will either be S (split) or C (combine)
</li>
<li>
M indicates method, C indicates class, and V indicates variable
</li>
<li>
In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
</li>
<li>
In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
</li>
</ul>
Output Format

For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).
<br><br>
Sample Input

<ul>
<li>
S;M;plasticCup()
</li>
<li>
C;V;mobile phone
</li>
<li>
C;C;coffee machine
</li>
<li>
S;C;LargeSoftwareBook
</li>
<li>
C;M;white sheet of paper
</li>
<li>
S;V;pictureFrame
</li>
</ul>

Sample Output

<ul>
<li>
plastic cup
</li>
<li>
mobilePhone
</li>
<li>
CoffeeMachine
</li>
<li>
large software book
</li>
<li>
whiteSheetOfPaper()
</li>
<li>
picture frame
</li>
</ul>

Explanation

Use Scanner to read in all information as if it were coming from the keyboard.

Print all information to the console using standard output (System.out.print() or System.out.println()).

Outputs must be exact (exact spaces and casing).

