var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon",
  "level": "1",
  "url": "colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  This work includes materials used under license from the following works:   Calculus Concepts, 5\/e by Latorre et al.     "
},
{
  "id": "section-11",
  "level": "1",
  "url": "section-11.html",
  "type": "Section",
  "number": "1.1",
  "title": "Functions: Four Representations",
  "body": " Functions: Four Representations   Representations of Change  In mathematics, particularly applied mathematics, we need to be able to interpret real-world phenomena in four ways: numerically, algebraically, verbally, and graphically.    The price of gas at a certain 7-11 in Norman was $4.39 per gallon on June 26th. Represent this data in four ways.       Numerically: We can numerically represent the data by placing values in a table.     Gasoline Pumped (in gallons)  0  1  5  10  15  20    Total Cost (in USD)  0  4.39  21.95  43.90  65.85  87.80       Algebraically: Since we are paying $4.39 for every gallon, it is reasonable to express the situation by the function dollars (total cost), with gallons pumped.    Verbally: The problem is given to us verbally, but using we'll rephrase it to sound more like what we would expect in this class. The price at the pump for gasoline is $4.39 per gallon of gasoline pumped.    Graphically: We may use a graph to display this same information. Since we created the function , we can plot this in order to create a graphical representation of the data.    The graph of the function           The process of using information like this to generate something usable is called mathematical modeling , and we call the result a model . Business Calculus courses place heavy emphasis on developing and deploying models.    Functions & Representations  A relation is a rule which links an input variable to an output ; given one piece of information, we can determine the corresponding piece. A special type of relation is one called a function.   Function  Function   A function is a rule that assigns a single output to each input value. For a given output function , and given input value , this is notated .     It is very important that you understand this notation . One of the most common mistakes in 1743 and 2123 is a misunderstanding of how function notation works. The letters chosen ( etc.) indicate the name of the function, and the numbers\/variables inside the parentheses indicate what the function is being applied to . A way to remember this is to read the expression as '' of ''.    Let be a function. Write the correct notation for the following situations:      applied to the number 5     applied to the number 10     applied to the variable      applied to the variable      applied to the expression      applied to the expression      applied to the expression                                                   Evaluate the function at the inputs:                                         4    7                           We may also represent functions using an input\/output diagram . One is given below, for the previous example:    An input\/output diagram showing how the input is transformed into the output 13.     Every function is a relation, but not every relation is a function. If a relation gives more than one output value for even a single input value, then it cannot be a function. This can be determined using a verbal, numerical, or graphical description of the data.    Let represent the number courses offered campus-wide during the week at time , and represent the number of students walking on the South Oval at time last Monday. Is a function? What about ?     is not a function: take, for example, 12:00pm. On Monday, there may be 250 classes offered but on Tuesday there could only be 200. The input has multiple outputs.   is a function because at that specific time and place, there can only be one fixed number of people.      Below are numerical expressions for the functions and . Is a function? What about ?        0  1  1  2  5  6       0  1  2  3  4  5         0  1  1  2  5  6       0  1  1  3  4  5        is not a function because the input 1 maps to two outputs; is a function because 1 only maps to 1 (despite the duplication)      Are both of these graphs functions? Why or why not?     The image on the left is the graph of the curve on the interval .     The image on the right is the graph of the curve whose coordinate is given by the rule , and whose coordinate is given by the rule .        The graph of the left is a function because each input has only a single output; the right graph is not a function because each input in (except at 0) has multiple outputs.      Model Output and Units of measure  In real-world applications, the proper units of measure must be attached to a model and every result derived from that model; in this way, we can gain meaningful information from whatever is it we do. The verbal description of a function gives us the units of measure. In our first example, our input unit is gallons, and our output unit is dollars.    The population of Canada between 1900 and 2010 is given by the model where is the number of years since the end of 1900.     When did the population reach 155 million people? Write a sentence interpreting the result.    Determine the population in the year 1990. Write a sentence interpreting the result.    Give a description and the unit of measure for both the input and output variables.    Draw an input\/output diagram for , and a graph of .           years after 1900. The sentence is: the population of Canada will reach 155 million people 133.46 years after 1900.    42.90 million people. The sentence is: In the year 1990, Canada's population was 42.90 million people.    The input is years since 1900 and the output is million people.     A rough input\/output diagram for the problem           Calculate the output value that corresponds to the inputs and for the function .     and       Calculate the output value that corresponds to the inputs and for the function .     and       Let .     Does the expression ask to find an input or output?    Solve (a).          Input              Let .     Does the expression ask to find an input or output?    Solve (a).          Output              Let .     Does the expression ask to find an input or output?    Solve (a).          Input              The number of donors to the American Red Cross Disaster Relief Fund who donated more than million dollars during 2005 is represented as .     Write a sentence of interpretation for .    Write the function notation for the statement: ``Seventy-five groups donated at least $500,000 to the Disaster Relief Fund in 2005.''          The number of donors to the Red Cross Disaster Relief Fund who donated more than 5 million dollars was 2.              The average number of people standing in the Chick-Fil-A line on Wednesdays can be represented by , where is the number of hours after 12:00pm.     Write a sentence of interpretation for the expression     Write the function notation for the statement ''At 1:15pm, there are an average of 15 people in line at Chick-Fil-A''.          At noon on Wednesday, 32 people on average were standing in the Chick-Fil-A line.             "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-11.html#example-1",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  The price of gas at a certain 7-11 in Norman was $4.39 per gallon on June 26th. Represent this data in four ways.       Numerically: We can numerically represent the data by placing values in a table.     Gasoline Pumped (in gallons)  0  1  5  10  15  20    Total Cost (in USD)  0  4.39  21.95  43.90  65.85  87.80       Algebraically: Since we are paying $4.39 for every gallon, it is reasonable to express the situation by the function dollars (total cost), with gallons pumped.    Verbally: The problem is given to us verbally, but using we'll rephrase it to sound more like what we would expect in this class. The price at the pump for gasoline is $4.39 per gallon of gasoline pumped.    Graphically: We may use a graph to display this same information. Since we created the function , we can plot this in order to create a graphical representation of the data.    The graph of the function          "
},
{
  "id": "p-14",
  "level": "2",
  "url": "section-11.html#p-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relation input output "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "section-11.html#definition-1",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Function.",
  "body": " Function  Function   A function is a rule that assigns a single output to each input value. For a given output function , and given input value , this is notated .   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-11.html#example-2",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  Let be a function. Write the correct notation for the following situations:      applied to the number 5     applied to the number 10     applied to the variable      applied to the variable      applied to the expression      applied to the expression      applied to the expression                                                "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-11.html#example-3",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  Evaluate the function at the inputs:                                         4    7                          "
},
{
  "id": "p-49",
  "level": "2",
  "url": "section-11.html#p-49",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "input\/output diagram "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-11.html#example-4",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "  Let represent the number courses offered campus-wide during the week at time , and represent the number of students walking on the South Oval at time last Monday. Is a function? What about ?     is not a function: take, for example, 12:00pm. On Monday, there may be 250 classes offered but on Tuesday there could only be 200. The input has multiple outputs.   is a function because at that specific time and place, there can only be one fixed number of people.   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-11.html#example-5",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  Below are numerical expressions for the functions and . Is a function? What about ?        0  1  1  2  5  6       0  1  2  3  4  5         0  1  1  2  5  6       0  1  1  3  4  5        is not a function because the input 1 maps to two outputs; is a function because 1 only maps to 1 (despite the duplication)   "
},
{
  "id": "example-6",
  "level": "2",
  "url": "section-11.html#example-6",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": "  Are both of these graphs functions? Why or why not?     The image on the left is the graph of the curve on the interval .     The image on the right is the graph of the curve whose coordinate is given by the rule , and whose coordinate is given by the rule .        The graph of the left is a function because each input has only a single output; the right graph is not a function because each input in (except at 0) has multiple outputs.   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "section-11.html#example-7",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  The population of Canada between 1900 and 2010 is given by the model where is the number of years since the end of 1900.     When did the population reach 155 million people? Write a sentence interpreting the result.    Determine the population in the year 1990. Write a sentence interpreting the result.    Give a description and the unit of measure for both the input and output variables.    Draw an input\/output diagram for , and a graph of .           years after 1900. The sentence is: the population of Canada will reach 155 million people 133.46 years after 1900.    42.90 million people. The sentence is: In the year 1990, Canada's population was 42.90 million people.    The input is years since 1900 and the output is million people.     A rough input\/output diagram for the problem        "
},
{
  "id": "example-8",
  "level": "2",
  "url": "section-11.html#example-8",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "  Calculate the output value that corresponds to the inputs and for the function .     and    "
},
{
  "id": "example-9",
  "level": "2",
  "url": "section-11.html#example-9",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": "  Calculate the output value that corresponds to the inputs and for the function .     and    "
},
{
  "id": "example-10",
  "level": "2",
  "url": "section-11.html#example-10",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "  Let .     Does the expression ask to find an input or output?    Solve (a).          Input           "
},
{
  "id": "example-11",
  "level": "2",
  "url": "section-11.html#example-11",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": "  Let .     Does the expression ask to find an input or output?    Solve (a).          Output           "
},
{
  "id": "example-12",
  "level": "2",
  "url": "section-11.html#example-12",
  "type": "Example",
  "number": "1.1.13",
  "title": "",
  "body": "  Let .     Does the expression ask to find an input or output?    Solve (a).          Input           "
},
{
  "id": "example-13",
  "level": "2",
  "url": "section-11.html#example-13",
  "type": "Example",
  "number": "1.1.14",
  "title": "",
  "body": "  The number of donors to the American Red Cross Disaster Relief Fund who donated more than million dollars during 2005 is represented as .     Write a sentence of interpretation for .    Write the function notation for the statement: ``Seventy-five groups donated at least $500,000 to the Disaster Relief Fund in 2005.''          The number of donors to the Red Cross Disaster Relief Fund who donated more than 5 million dollars was 2.           "
},
{
  "id": "example-14",
  "level": "2",
  "url": "section-11.html#example-14",
  "type": "Example",
  "number": "1.1.15",
  "title": "",
  "body": "  The average number of people standing in the Chick-Fil-A line on Wednesdays can be represented by , where is the number of hours after 12:00pm.     Write a sentence of interpretation for the expression     Write the function notation for the statement ''At 1:15pm, there are an average of 15 people in line at Chick-Fil-A''.          At noon on Wednesday, 32 people on average were standing in the Chick-Fil-A line.           "
},
{
  "id": "section-12",
  "level": "1",
  "url": "section-12.html",
  "type": "Section",
  "number": "1.2",
  "title": "Function Behavior and End Behavior Limits",
  "body": " Function Behavior and End Behavior Limits   Descriptions of Function Behavior  Especially as we consider longer-term models, we are concerned about what happens to a function as time advances.   Increasing\/Decreasing\/Constant  Increasing  Decreasing  Constant   Let be a function defined over some input interval. The function is said to be      increasing if the output values increase on the interval     decreasing if the output values decrease on the interval     constant if the output values remain the same on the interval         On what intervals is increasing, decreasing, or constant? Use the calculator to help you find the answer.    The function is increasing on and decreasing on       Is the function given in the table below increasing, decreasing, or constant? Why?     2  4  6  8  10     5  6  8  12  20      The function is increasing; as the input increases, so does the output.      The function is constant. Look at the graph and\/or table and explain why.    Answers and explanations may vary      Direction and Curvature   Concavity  Concavity  Concave Up  Concave Down   A function defined over an input interval is said to be      concave up if a graph of the function appears to be bending upward     concave down if a graph of the function appears to be bending downward     The curvature of a function is called concavity .      Describe the concavity of . Does it appear to ever change? If so, where? Draw a picture.     is concave down; how you choose to sketch the picture is up to you, whether it's done by hand or calculator.      Describe the concavity of . Does it appear to ever change? If so, where? Draw a picture.     is concave down; how you choose to sketch the picture is up to you, whether it's done by hand or calculator.      Describe the concavity of . Does it appear to ever change? If so, where? Draw a picture.     is neither concave down nor concave up; how you choose to sketch the picture is up to you, whether it's done by hand or calculator.      Describe the concavity of . Does it appear to ever change? If so, where? Draw a picture.     is concave down on about and concave up on about ; how you choose to sketch the picture is up to you, whether it's done by hand or calculator.     Inflection Point  Inflection Point   A point on a continuous function where the concavity of the function changes is called an inflection point .     "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "section-12.html#definition-2",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Increasing\/Decreasing\/Constant.",
  "body": " Increasing\/Decreasing\/Constant  Increasing  Decreasing  Constant   Let be a function defined over some input interval. The function is said to be      increasing if the output values increase on the interval     decreasing if the output values decrease on the interval     constant if the output values remain the same on the interval      "
},
{
  "id": "example-15",
  "level": "2",
  "url": "section-12.html#example-15",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  On what intervals is increasing, decreasing, or constant? Use the calculator to help you find the answer.    The function is increasing on and decreasing on    "
},
{
  "id": "example-16",
  "level": "2",
  "url": "section-12.html#example-16",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Is the function given in the table below increasing, decreasing, or constant? Why?     2  4  6  8  10     5  6  8  12  20      The function is increasing; as the input increases, so does the output.   "
},
{
  "id": "example-17",
  "level": "2",
  "url": "section-12.html#example-17",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  The function is constant. Look at the graph and\/or table and explain why.    Answers and explanations may vary   "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "section-12.html#definition-3",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Concavity.",
  "body": " Concavity  Concavity  Concave Up  Concave Down   A function defined over an input interval is said to be      concave up if a graph of the function appears to be bending upward     concave down if a graph of the function appears to be bending downward     The curvature of a function is called concavity .   "
},
{
  "id": "example-18",
  "level": "2",
  "url": "section-12.html#example-18",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  Describe the concavity of . Does it appear to ever change? If so, where? Draw a picture.     is concave down; how you choose to sketch the picture is up to you, whether it's done by hand or calculator.   "
},
{
  "id": "example-19",
  "level": "2",
  "url": "section-12.html#example-19",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": "  Describe the concavity of . Does it appear to ever change? If so, where? Draw a picture.     is concave down; how you choose to sketch the picture is up to you, whether it's done by hand or calculator.   "
},
{
  "id": "example-20",
  "level": "2",
  "url": "section-12.html#example-20",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": "  Describe the concavity of . Does it appear to ever change? If so, where? Draw a picture.     is neither concave down nor concave up; how you choose to sketch the picture is up to you, whether it's done by hand or calculator.   "
},
{
  "id": "example-21",
  "level": "2",
  "url": "section-12.html#example-21",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": "  Describe the concavity of . Does it appear to ever change? If so, where? Draw a picture.     is concave down on about and concave up on about ; how you choose to sketch the picture is up to you, whether it's done by hand or calculator.   "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "section-12.html#definition-4",
  "type": "Definition",
  "number": "1.2.10",
  "title": "Inflection Point.",
  "body": " Inflection Point  Inflection Point   A point on a continuous function where the concavity of the function changes is called an inflection point .   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
