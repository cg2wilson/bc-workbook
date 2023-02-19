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
  "body": " Functions: Four Representations   Representations of Change  In mathematics, particularly applied mathematics, we need to be able to interpret real-world phenomena in four ways: numerically, algebraically, verbally, and graphically.    The price of gas at a certain 7-11 in Norman was $4.39 per gallon on June 26th. Represent this data in four ways.       Numerically: We can numerically represent the data by placing values in a table.    Gasoline Pumped (in gallons)  0  1  5  10  15  20    Total Cost (in USD)  0  4.39  21.95  43.90  65.85  87.80      Algebraically: Since we are paying $4.39 for every gallon, it is reasonable to express the situation by the function dollars (total cost), with gallons pumped.    Verbally: The problem is given to us verbally, but using we'll rephrase it to sound more like what we would expect in this class. The price at the pump for gasoline is $4.39 per gallon of gasoline pumped.    Graphically: We may use a graph to display this same information. Since we created the function , we can plot this in order to create a graphical representation of the data.   The graph of the function          The process of using information like this to generate something usable is called mathematical modeling , and we call the result a model . Business Calculus courses place heavy emphasis on developing and deploying models.    Functions & Representations  A relation is a rule which links an input variable to an output ; given one piece of information, we can determine the corresponding piece. A special type of relation is one called a function.   Function  Function   A function is a rule that assigns a single output to each input value. For a given output function , and given input value , this is notated .     It is very important that you understand this notation . One of the most common mistakes in 1743 and 2123 is a misunderstanding of how function notation works. The letters chosen ( etc.) indicate the name of the function, and the numbers\/variables inside the parentheses indicate what the function is being applied to . A way to remember this is to read the expression as '' of ''.    Let be a function. Write the correct notation for the following situations:      applied to the number 5     applied to the number 10     applied to the variable      applied to the variable      applied to the expression      applied to the expression      applied to the expression                                                   Evaluate the function at the inputs:                                         4    7                           We may also represent functions using an input\/output diagram . One is given below, for the previous example:   An input\/output diagram showing how the input is transformed into the output 13.    Every function is a relation, but not every relation is a function. If a relation gives more than one output value for even a single input value, then it cannot be a function. This can be determined using a verbal, numerical, or graphical description of the data.    Let represent the number courses offered campus-wide during the week at time , and represent the number of students walking on the South Oval at time last Monday. Is a function? What about ?     is not a function: take, for example, 12:00pm. On Monday, there may be 250 classes offered but on Tuesday there could only be 200. The input has multiple outputs.   is a function because at that specific time and place, there can only be one fixed number of people.      Below are numerical expressions for the functions and . Is a function? What about ?       0  1  1  2  5  6       0  1  2  3  4  5         0  1  1  2  5  6       0  1  1  3  4  5       is not a function because the input 1 maps to two outputs; is a function because 1 only maps to 1 (despite the duplication)      Are both of these graphs functions? Why or why not?    The image on the left is the graph of the curve on the interval .     The image on the right is the graph of the curve whose coordinate is given by the rule , and whose coordinate is given by the rule .       The graph of the left is a function because each input has only a single output; the right graph is not a function because each input in (except at 0) has multiple outputs.      Model Output and Units of measure  In real-world applications, the proper units of measure must be attached to a model and every result derived from that model; in this way, we can gain meaningful information from whatever is it we do. The verbal description of a function gives us the units of measure. In our first example, our input unit is gallons, and our output unit is dollars.    The population of Canada between 1900 and 2010 is given by the model where is the number of years since the end of 1900.     When did the population reach 155 million people? Write a sentence interpreting the result.    Determine the population in the year 1990. Write a sentence interpreting the result.    Give a description and the unit of measure for both the input and output variables.    Draw an input\/output diagram for , and a graph of .           years after 1900. The sentence is: the population of Canada will reach 155 million people 133.46 years after 1900.    42.90 million people. The sentence is: In the year 1990, Canada's population was 42.90 million people.    The input is years since 1900 and the output is million people.     A rough input\/output diagram for the problem           Calculate the output value that corresponds to the inputs and for the function .     and       Calculate the output value that corresponds to the inputs and for the function .     and       Let .     Does the expression ask to find an input or output?    Solve (a).          Input              Let .     Does the expression ask to find an input or output?    Solve (a).          Output              Let .     Does the expression ask to find an input or output?    Solve (a).          Input              The number of donors to the American Red Cross Disaster Relief Fund who donated more than million dollars during 2005 is represented as .     Write a sentence of interpretation for .    Write the function notation for the statement: ``Seventy-five groups donated at least $500,000 to the Disaster Relief Fund in 2005.''          The number of donors to the Red Cross Disaster Relief Fund who donated more than 5 million dollars was 2.              The average number of people standing in the Chick-Fil-A line on Wednesdays can be represented by , where is the number of hours after 12:00pm.     Write a sentence of interpretation for the expression     Write the function notation for the statement ''At 1:15pm, there are an average of 15 people in line at Chick-Fil-A''.          At noon on Wednesday, 32 people on average were standing in the Chick-Fil-A line.             "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-11.html#example-1",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  The price of gas at a certain 7-11 in Norman was $4.39 per gallon on June 26th. Represent this data in four ways.       Numerically: We can numerically represent the data by placing values in a table.    Gasoline Pumped (in gallons)  0  1  5  10  15  20    Total Cost (in USD)  0  4.39  21.95  43.90  65.85  87.80      Algebraically: Since we are paying $4.39 for every gallon, it is reasonable to express the situation by the function dollars (total cost), with gallons pumped.    Verbally: The problem is given to us verbally, but using we'll rephrase it to sound more like what we would expect in this class. The price at the pump for gasoline is $4.39 per gallon of gasoline pumped.    Graphically: We may use a graph to display this same information. Since we created the function , we can plot this in order to create a graphical representation of the data.   The graph of the function         "
},
{
  "id": "p-12",
  "level": "2",
  "url": "section-11.html#p-12",
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
  "id": "p-47",
  "level": "2",
  "url": "section-11.html#p-47",
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
  "body": "  Below are numerical expressions for the functions and . Is a function? What about ?       0  1  1  2  5  6       0  1  2  3  4  5         0  1  1  2  5  6       0  1  1  3  4  5       is not a function because the input 1 maps to two outputs; is a function because 1 only maps to 1 (despite the duplication)   "
},
{
  "id": "example-6",
  "level": "2",
  "url": "section-11.html#example-6",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": "  Are both of these graphs functions? Why or why not?    The image on the left is the graph of the curve on the interval .     The image on the right is the graph of the curve whose coordinate is given by the rule , and whose coordinate is given by the rule .       The graph of the left is a function because each input has only a single output; the right graph is not a function because each input in (except at 0) has multiple outputs.   "
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
  "body": " Function Behavior and End Behavior Limits   Descriptions of Function Behavior  Especially as we consider longer-term models, we are concerned about what happens to a function as time advances.   Increasing\/Decreasing\/Constant  Increasing  Decreasing  Constant   Let be a function defined over some input interval. The function is said to be      increasing if the output values increase on the interval     decreasing if the output values decrease on the interval     constant if the output values remain the same on the interval         On what intervals is increasing, decreasing, or constant? Use the calculator to help you find the answer.    The function is increasing on and decreasing on       Is the function given in the table below increasing, decreasing, or constant? Why?     2  4  6  8  10     5  6  8  12  20      The function is increasing; as the input increases, so does the output.      The function is constant. Look at the graph and\/or table and explain why.    Answers and explanations may vary      Direction and Curvature   Concavity  Concavity  Concave Up  Concave Down   A function defined over an input interval is said to be      concave up if a graph of the function appears to be bending upward     concave down if a graph of the function appears to be bending downward     The curvature of a function is called concavity .      Describe the concavity of . Does it appear to ever change? If so, where? Draw a picture.     is concave down; how you choose to sketch the picture is up to you, whether it's done by hand or calculator.      Describe the concavity of . Does it appear to ever change? If so, where? Draw a picture.     is concave down; how you choose to sketch the picture is up to you, whether it's done by hand or calculator.      Describe the concavity of . Does it appear to ever change? If so, where? Draw a picture.     is neither concave down nor concave up; how you choose to sketch the picture is up to you, whether it's done by hand or calculator.      Describe the concavity of . Does it appear to ever change? If so, where? Draw a picture.     is concave down on about and concave up on about ; how you choose to sketch the picture is up to you, whether it's done by hand or calculator.     Inflection Point  Inflection Point   A point on a continuous function where the concavity of the function changes is called an inflection point .      The function describes the profit (in hundred dollars) made by a small business after a rash of bad Yelp reviews where is the number of weeks since the reviews were put online. Let .     Sketch a picture of the graph.    Estimate the input and output values at the inflection point(s).    Identify the intervals where is increasing, decreasing, and constant.    Identify the intervals where is concave up, concave down, or neither.    Use the information from (a)-(c) to describe what was happening to the profit made by the business between the first and sixth week.           The graph of on .      The inflection point is at about weeks, and hundred dollars.    The function appears to be decreasing on and increasing on     The function appears to be concave down on and concave up on     Starting at week 1, the profit is decreasing until approximately , at which point it begins increasing and stays increasing through week 6.  This is probably supposed to be either \"week 1 to week 5\" or \"week 0 to week 5\", but that will be fixed in future iterations.         Limits and End Behavior   End Behavior  End Behavior   The end behavior of a function refers to the behavior of the output values of the function as the input values become larger and larger, or smaller and smaller.    As the input values become larger and larger (more and more positive), we say that the input increases without bound . As they become smaller and smaller (more and more negative), the input decreases without bound .    Consider .     Sketch the function on the interval .    In a sentence, describe the end behavior of as the input increases without bound.    In a sentence, describe the end behavior of as the input decreases without bound.                 As the input increases without bound, the output increases without bound.    As the input decreases without bound, the output decreases without bound.       There are three possibilities when we consider the end behavior of a function:   The output values may approach or equal a certain number    The output values may increase or decrease without bound    The output values may oscillate and fail to approach any particular number       Draw three functions that have will have each of these three end behaviors.    This is up to you; it depends on what you want to emphasize.      Determine the end behavior\/limit of the function as the input increases without bound, using numerical estimation. Record your approximations with full decimal accuracy , and round the final answer to the hundredths.                            End Behavior\/Limit              2.2222222222222     2.020202020202     2.002002002002     2.000200020002     2.0000200002    End Behavior\/Limit  2.00       Note  When creating a table, you need to stop when the digit after the one you're rounding to repeats twice.    Limit  Limit   A function is said to have a limit  if the output of approaches as the input approaches some (possibly infinite) value . We write this using the following notation:       Rewrite the end behavior\/limit from the previous example using limit notation.          Horizontal Asymptote  Horizontal Asymptote   A horizontal line with the equation is called a horizontal asymptote .      Let and .     Write the statement \"The limit of as approachs is \" in limit notation.    Find , and write the notation in words (like in (a))    Find the end behaviors of , and write them in limit notation.                ; the limit of as decreases without bound is infinity.     and          Sketch the following functions, and use the sketches to find the limit as the input increases without bound and decreases without bound:                           .  There's two ways you might approach the vertical asymptote at 0 here; one way is to say that it's impossible to determine what happens as the inptu decreases without bound. The other way is to note that we can only do something like take the limit as ; this sets up for Section 1.3, but might happen a little early for everyone to make the connection.   The graph of        and    The graph of        and    The graph of            Use numerical estimation to find . Make a table showing at least five inputs and the corresponding outputs; write all decimals in the table, and round your final answer to two decimal places. Start your input at 2 and double.          2  0.64    4  0.8704    8  0.98320384    16  0.99971788900926    32  0.99999992041339    This one converges fast, and it might be helpful to show them a graph of the exponential. If they remember the properties of exponentials from 1643, then this should be a relatively straightforward question.  A question students may have is why we're stopping at 32 if the input is supposed to increase without bound. I can think of two responses: 1) our rounding rules tell us to stop when the third decimal repeats twice, and this condition is met after 32; 2) students are welcome to try more numbers to play around with the behavior, but should know that if this were a test question, they would need to stop after 32.      Use numerical estimation to find . Make a table showing at least five inputs, and the corresponding outputs; write all decimals in the table, and round your final answer to the nearest integer. Start your input at and double.            1.01     1.0025     1.000625     1.00015625     1.0000390625     1.000009765625    In reality, we only need two lines here. I like to go out this far to emphasize the numerical behavior. Again, you'll want to emphasize that if this is a question on the test, they need to stop after the second line (since the first decimal place repeats after two iterations).     "
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
},
{
  "id": "example-22",
  "level": "2",
  "url": "section-12.html#example-22",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": "  The function describes the profit (in hundred dollars) made by a small business after a rash of bad Yelp reviews where is the number of weeks since the reviews were put online. Let .     Sketch a picture of the graph.    Estimate the input and output values at the inflection point(s).    Identify the intervals where is increasing, decreasing, and constant.    Identify the intervals where is concave up, concave down, or neither.    Use the information from (a)-(c) to describe what was happening to the profit made by the business between the first and sixth week.           The graph of on .      The inflection point is at about weeks, and hundred dollars.    The function appears to be decreasing on and increasing on     The function appears to be concave down on and concave up on     Starting at week 1, the profit is decreasing until approximately , at which point it begins increasing and stays increasing through week 6.  This is probably supposed to be either \"week 1 to week 5\" or \"week 0 to week 5\", but that will be fixed in future iterations.      "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "section-12.html#definition-5",
  "type": "Definition",
  "number": "1.2.12",
  "title": "End Behavior.",
  "body": " End Behavior  End Behavior   The end behavior of a function refers to the behavior of the output values of the function as the input values become larger and larger, or smaller and smaller.   "
},
{
  "id": "p-146",
  "level": "2",
  "url": "section-12.html#p-146",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "increases without bound decreases without bound "
},
{
  "id": "example-23",
  "level": "2",
  "url": "section-12.html#example-23",
  "type": "Example",
  "number": "1.2.13",
  "title": "",
  "body": "  Consider .     Sketch the function on the interval .    In a sentence, describe the end behavior of as the input increases without bound.    In a sentence, describe the end behavior of as the input decreases without bound.                 As the input increases without bound, the output increases without bound.    As the input decreases without bound, the output decreases without bound.      "
},
{
  "id": "example-24",
  "level": "2",
  "url": "section-12.html#example-24",
  "type": "Example",
  "number": "1.2.14",
  "title": "",
  "body": "  Draw three functions that have will have each of these three end behaviors.    This is up to you; it depends on what you want to emphasize.   "
},
{
  "id": "example-25",
  "level": "2",
  "url": "section-12.html#example-25",
  "type": "Example",
  "number": "1.2.15",
  "title": "",
  "body": "  Determine the end behavior\/limit of the function as the input increases without bound, using numerical estimation. Record your approximations with full decimal accuracy , and round the final answer to the hundredths.                            End Behavior\/Limit              2.2222222222222     2.020202020202     2.002002002002     2.000200020002     2.0000200002    End Behavior\/Limit  2.00     "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "section-12.html#definition-6",
  "type": "Definition",
  "number": "1.2.16",
  "title": "Limit.",
  "body": " Limit  Limit   A function is said to have a limit  if the output of approaches as the input approaches some (possibly infinite) value . We write this using the following notation:    "
},
{
  "id": "example-26",
  "level": "2",
  "url": "section-12.html#example-26",
  "type": "Example",
  "number": "1.2.17",
  "title": "",
  "body": "  Rewrite the end behavior\/limit from the previous example using limit notation.        "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "section-12.html#definition-7",
  "type": "Definition",
  "number": "1.2.18",
  "title": "Horizontal Asymptote.",
  "body": " Horizontal Asymptote  Horizontal Asymptote   A horizontal line with the equation is called a horizontal asymptote .   "
},
{
  "id": "example-27",
  "level": "2",
  "url": "section-12.html#example-27",
  "type": "Example",
  "number": "1.2.19",
  "title": "",
  "body": "  Let and .     Write the statement \"The limit of as approachs is \" in limit notation.    Find , and write the notation in words (like in (a))    Find the end behaviors of , and write them in limit notation.                ; the limit of as decreases without bound is infinity.     and       "
},
{
  "id": "example-28",
  "level": "2",
  "url": "section-12.html#example-28",
  "type": "Example",
  "number": "1.2.20",
  "title": "",
  "body": "  Sketch the following functions, and use the sketches to find the limit as the input increases without bound and decreases without bound:                           .  There's two ways you might approach the vertical asymptote at 0 here; one way is to say that it's impossible to determine what happens as the inptu decreases without bound. The other way is to note that we can only do something like take the limit as ; this sets up for Section 1.3, but might happen a little early for everyone to make the connection.   The graph of        and    The graph of        and    The graph of         "
},
{
  "id": "example-29",
  "level": "2",
  "url": "section-12.html#example-29",
  "type": "Example",
  "number": "1.2.21",
  "title": "",
  "body": "  Use numerical estimation to find . Make a table showing at least five inputs and the corresponding outputs; write all decimals in the table, and round your final answer to two decimal places. Start your input at 2 and double.          2  0.64    4  0.8704    8  0.98320384    16  0.99971788900926    32  0.99999992041339    This one converges fast, and it might be helpful to show them a graph of the exponential. If they remember the properties of exponentials from 1643, then this should be a relatively straightforward question.  A question students may have is why we're stopping at 32 if the input is supposed to increase without bound. I can think of two responses: 1) our rounding rules tell us to stop when the third decimal repeats twice, and this condition is met after 32; 2) students are welcome to try more numbers to play around with the behavior, but should know that if this were a test question, they would need to stop after 32.   "
},
{
  "id": "example-30",
  "level": "2",
  "url": "section-12.html#example-30",
  "type": "Example",
  "number": "1.2.22",
  "title": "",
  "body": "  Use numerical estimation to find . Make a table showing at least five inputs, and the corresponding outputs; write all decimals in the table, and round your final answer to the nearest integer. Start your input at and double.            1.01     1.0025     1.000625     1.00015625     1.0000390625     1.000009765625    In reality, we only need two lines here. I like to go out this far to emphasize the numerical behavior. Again, you'll want to emphasize that if this is a question on the test, they need to stop after the second line (since the first decimal place repeats after two iterations).   "
},
{
  "id": "section-13",
  "level": "1",
  "url": "section-13.html",
  "type": "Section",
  "number": "1.3",
  "title": "Function Behavior and End Behavior Limits",
  "body": " Function Behavior and End Behavior Limits   Motivating Example  Consider the function , graphed below:   A graph of the function        What happens to the output of as the input increases without bound? Write your answer in limit notation.       What happens to the output of as the input decreases without bound? Write your answer in limit notation.       There is a vertical asymptote; the outputs increase or decrease without bound depending on which side of 2 that you're on.     Ultimately, the idea is that the output of the function around depends on which side you approach from; this necessitates the idea of a right and left-hand limit.    Left\/Right Hand Limit   Left\/Right Hand Limit  Left Hand Limit  Right Hand Limit   Let be a function defined on an interval containing some constant (except possibly at itself).     If approaches the value of as approaches from the left, then the left-hand limit of is , and is written     If approaches the value of as approaches from the right, then the right-hand limit of is , and is written          For , find and .     and       Use a calculator to numerically examine the limit behavior of at .         1.9     1.99     1.999     1.9999     1.99999               2.1     2.01     2.001     2.0001     2.00001                      1.9  -10    1.99  -100    1.999  -1000    1.9999  -10000    1.99999  -100000              2.1  10    2.01  100    2.001  1000    2.0001  10000    2.00001  100000            The idea behind the sequence of Example 2 and Example 3 is that we can visually tell what's happening from the picture, so we can assign values to the limit; numerical investigation confirms the visual inspection, and we can definitively say that the overall limit doesn't exist.      Use the graph of to answer the following.   The graph of the piecewise function                                       There's an error in the label on the graph; it's labeled but should be .                                          Examine the limit behavior of the function at . Round to the nearest tenth if necessary.           2.9     2.99     2.999     2.9999               3.1     3.01     3.001     3.0001             The table isn't drawn out for the students, in part so that the students can get used to identifying the point at which they should stop on something like a test.      Use a calculator to examine the limit behavior of the function at . Round to the nearest thousandth if necessary.                                                             The table isn't drawn out for the students, in part so that the students can get used to identifying the point at which they should stop on something like a test.  Students may also stumble with the appropriate numbers to use for right\/left limits since the input is a negative number; for this, I think it helps to draw a number line and show them what would happen with the numbers.      Use a calculator to examine the limit behavior of the function at . Round your answer to 2 decimal places.           2.49     2.499     2.4999     2.49999               2.51  788.03290766735    2.501  7802.796174759    2.5001  77950.849646335    2.50001  779431.4262884         The table isn't drawn out for the students, in part so that the students can get used to identifying the point at which they should stop on something like a test.    There's not that many examples that approach a finite value, and that's my bad. That element is getting fixed in the next iteration    Continuity  Continuity    A function , defined on some input interval containing , is said to be continuity at if and only if the following conditions are satisfied:      exists     exists          A function is continuous on any open interval if it is continuous at every point inside the interval. If a function is not continuous at the input , then we say that is discontinuous at .    It's probably worthwhile to point out the explicit connection between the first condition and left\/right-hand limits.    Identify any points of discontinuity in the function . Explain why the function is discontinuous at those points.     is discontinuous at because it fails the first and second conditions of continuity.      Identify any points of discontinuity in the function in Example 1.3.4. Explain why the function is discontinuous at those points.    There's a discontinuity at because doesn't exist.      Use the graph to find the following:   This is a graph of the piecewise function on                       Is continuous at ?                   Is continuous at ?                   Is continuous at ?                         No                   No                   Yes         Properties of Limits  Let and be continuous functions over some input interval containing , and be some arbitrary constant. Then, we have the following properties of limits:     Constant Rule:     Sum Rule:     Constant Multiple Rule:     Replacement Rule: If is defined at , then .    Product Rule:     Quotient Rule: (as long as )    If can be factored as , and can also be factored as , then i.e. common factors may be canceled across fractions under the limit.     I don't know how I missed the \"Difference Rule\", but it should be lumped in with the Sum Rule.  I think the Replacement Rule should read \"If is continuous\" rather than \"defined\".    Algebraically determine the limits of the following:                                                              I think these are all decent tproblems, but you can probably skip the derivative question in part e if there's not time. Especially since the next question is of the same type.      Determine the limit:     10      Let . Algebraically determine the following limits and answer the questions:                    Is continuous at ? Why?    Graph . Do your answers make sense?                         Yes:      A graph of the piecewise function     Yes they do, in fact.         Let . Algebraically determine the following limits and answer the questions:                    Is continuous at ? Why?    Graph . Do your answers make sense?                         Is continuous at ? Why?     A graph of the piecewise function     Yes they do, in fact.        "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "section-13.html#definition-8",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Left\/Right Hand Limit.",
  "body": " Left\/Right Hand Limit  Left Hand Limit  Right Hand Limit   Let be a function defined on an interval containing some constant (except possibly at itself).     If approaches the value of as approaches from the left, then the left-hand limit of is , and is written     If approaches the value of as approaches from the right, then the right-hand limit of is , and is written       "
},
{
  "id": "example-31",
  "level": "2",
  "url": "section-13.html#example-31",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  For , find and .     and    "
},
{
  "id": "example-32",
  "level": "2",
  "url": "section-13.html#example-32",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  Use a calculator to numerically examine the limit behavior of at .         1.9     1.99     1.999     1.9999     1.99999               2.1     2.01     2.001     2.0001     2.00001                      1.9  -10    1.99  -100    1.999  -1000    1.9999  -10000    1.99999  -100000              2.1  10    2.01  100    2.001  1000    2.0001  10000    2.00001  100000            The idea behind the sequence of Example 2 and Example 3 is that we can visually tell what's happening from the picture, so we can assign values to the limit; numerical investigation confirms the visual inspection, and we can definitively say that the overall limit doesn't exist.   "
},
{
  "id": "example-33",
  "level": "2",
  "url": "section-13.html#example-33",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Use the graph of to answer the following.   The graph of the piecewise function                                       There's an error in the label on the graph; it's labeled but should be .                                       "
},
{
  "id": "example-34",
  "level": "2",
  "url": "section-13.html#example-34",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  Examine the limit behavior of the function at . Round to the nearest tenth if necessary.           2.9     2.99     2.999     2.9999               3.1     3.01     3.001     3.0001             The table isn't drawn out for the students, in part so that the students can get used to identifying the point at which they should stop on something like a test.   "
},
{
  "id": "example-35",
  "level": "2",
  "url": "section-13.html#example-35",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "  Use a calculator to examine the limit behavior of the function at . Round to the nearest thousandth if necessary.                                                             The table isn't drawn out for the students, in part so that the students can get used to identifying the point at which they should stop on something like a test.  Students may also stumble with the appropriate numbers to use for right\/left limits since the input is a negative number; for this, I think it helps to draw a number line and show them what would happen with the numbers.   "
},
{
  "id": "example-36",
  "level": "2",
  "url": "section-13.html#example-36",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": "  Use a calculator to examine the limit behavior of the function at . Round your answer to 2 decimal places.           2.49     2.499     2.4999     2.49999               2.51  788.03290766735    2.501  7802.796174759    2.5001  77950.849646335    2.50001  779431.4262884         The table isn't drawn out for the students, in part so that the students can get used to identifying the point at which they should stop on something like a test.   "
},
{
  "id": "definition-9",
  "level": "2",
  "url": "section-13.html#definition-9",
  "type": "Definition",
  "number": "1.3.8",
  "title": "",
  "body": "  A function , defined on some input interval containing , is said to be continuity at if and only if the following conditions are satisfied:      exists     exists          A function is continuous on any open interval if it is continuous at every point inside the interval. If a function is not continuous at the input , then we say that is discontinuous at .   "
},
{
  "id": "example-37",
  "level": "2",
  "url": "section-13.html#example-37",
  "type": "Example",
  "number": "1.3.9",
  "title": "",
  "body": "  Identify any points of discontinuity in the function . Explain why the function is discontinuous at those points.     is discontinuous at because it fails the first and second conditions of continuity.   "
},
{
  "id": "example-38",
  "level": "2",
  "url": "section-13.html#example-38",
  "type": "Example",
  "number": "1.3.10",
  "title": "",
  "body": "  Identify any points of discontinuity in the function in Example 1.3.4. Explain why the function is discontinuous at those points.    There's a discontinuity at because doesn't exist.   "
},
{
  "id": "example-39",
  "level": "2",
  "url": "section-13.html#example-39",
  "type": "Example",
  "number": "1.3.11",
  "title": "",
  "body": "  Use the graph to find the following:   This is a graph of the piecewise function on                       Is continuous at ?                   Is continuous at ?                   Is continuous at ?                         No                   No                   Yes      "
},
{
  "id": "example-40",
  "level": "2",
  "url": "section-13.html#example-40",
  "type": "Example",
  "number": "1.3.12",
  "title": "",
  "body": "  Algebraically determine the limits of the following:                                                              I think these are all decent tproblems, but you can probably skip the derivative question in part e if there's not time. Especially since the next question is of the same type.   "
},
{
  "id": "example-41",
  "level": "2",
  "url": "section-13.html#example-41",
  "type": "Example",
  "number": "1.3.13",
  "title": "",
  "body": "  Determine the limit:     10   "
},
{
  "id": "example-42",
  "level": "2",
  "url": "section-13.html#example-42",
  "type": "Example",
  "number": "1.3.14",
  "title": "",
  "body": "  Let . Algebraically determine the following limits and answer the questions:                    Is continuous at ? Why?    Graph . Do your answers make sense?                         Yes:      A graph of the piecewise function     Yes they do, in fact.      "
},
{
  "id": "example-43",
  "level": "2",
  "url": "section-13.html#example-43",
  "type": "Example",
  "number": "1.3.15",
  "title": "",
  "body": "  Let . Algebraically determine the following limits and answer the questions:                    Is continuous at ? Why?    Graph . Do your answers make sense?                         Is continuous at ? Why?     A graph of the piecewise function     Yes they do, in fact.      "
},
{
  "id": "section-14",
  "level": "1",
  "url": "section-14.html",
  "type": "Section",
  "number": "1.4",
  "title": "Linear Functions & Models",
  "body": " Linear Functions & Models   Linear Functions  Remember that a linear function requires two pieces of information- a starting value ( , the -intercept), and an amount of incremental change in the independent variable ( , the slope of the function). This gives us three ways to describe a linear function:     Verbally: A function with a constant rate of change    Graphically: There are images below    Algebraically:        Given two points and , how can we find the slope of the line between them?       It's probably worthwhile to talk about some other forms they might see slope take.      Linear Models  For our general model, , we have the following characteristics:    A sketch of a linear function with a positive slope.                  is always increasing     has no concavity      A sketch of a linear function with a negative slope.                  is always decreasing     has no concavity        A sketch of a linear function with a constant slope.                  is always constant     has no concavity      A sketch of a linear function with a undefined slope.        DNE     DNE    Neither increasing nor decreasing    No concavity      For any given graph, the scales will change; use algebra, don't trust your eyes.    Elements of a Model  From now on, when we refer to a model, we are referring to a specific collection of information. These pieces are listed below; memorize them!     Proper and consistent function notation    Model coefficients rounded to three decimal places    Output units    Output description    Input units    Input description       The following table gives the percentage of new companies which remained open years after beginning business.    Years After Opening  5  6  7  8  9  10    Companies Still Open (in %)  50  47  44  41  38  35       Fill in the new inputs if we align the data so that the fifth year corresponds to an input of zero.    Years After Opening          Companies Still Open (in %)  50  47  44  41  38  35      Use the aligned data to create a complete model.          Fill in the new inputs if we align the data so that the fifth year corresponds to an input of zero.    Years After Opening  0  1  2  3  4  5    Companies Still Open (in %)  50  47  44  41  38  35       percent of companies still open, years after opening.        Extrapolation  Extrapolation   When using a model, we say that data is extrapolated if we find an output value from outside the model's input range.     Interpolation  Interpolation   When using a model, we say that data is interpolated if we find an output value from inside the model's input range.      In the example above, predict the number of companies open in the twelfth year of operation. Is this extrapolation or interpolation?     . This is extrapolation      Do the same, but after 8.5 years after opening. Is this extrapolation or interpolation?     . This is interpolation      The amount of electricity sold by a power company in year is given below.    Year  2003  2004  2005  2006  2007  2008    Retail Sales (in quadrillion kWh)  1.2  1.23  1.27  1.3  1.33  1.35       Find a complete linear model to fit the data.    Write an interpretation the slope of the linear model.    When did retail sales first exceed 1.4 quadrillion kWh? Is this interpolation or extrapolation?           quadrillion kWh of electricity sold by a power company, in year .    The retail sales of electricity is increasing by 0.031 quadrillion kWh per year.    In 2010; this is extrapolation.     This example should probably take a little bit of time. You're doing a few things that are (in theory) new to the students: using the calculator to create a regression, reading the values from the calculator to write the appropriate equation, writing an interpretation, and potentially using solver.      Data Alignment  When using an input value of years, alignment should (usually) happen so that the first year given corresponds to an input of zero.    Find the complete linear model to fit the data of the previous example, aligning the input so that the year 2003 corresponds to an input of zero.     quadrillion kWh of electricity sold by a power company, years since 2003.  This is a really good opportunity to highlight what changes and what stays the same when you modify alignments.      Numerical Considerations  Since numerical approximations can vary, we will use the following guidelines:     Use common sense; if a model outputs something like ''2.5 people'', we would round to 3 people.    The accuracy of the output must be the same as the original model's accuracy.    All answers must have proper units; answers without labels are useless.    If arriving at your answer requires multiple steps, do not round until the final answer.      ERROR IN WORKBOOK TEXT  The second bullet point should read like this: The accuracy of the output must be the same as the accuracy of the original data.     The world's daily demand of oil was recorded in various years, and is listed below.    Year  2004  2005  2006  2007  2008  2009    Oil Demand (in million barrels)  82.327  83.652  84.622  85.385  86.384  87.698       Based on the scatterplot, why is a linear model best?    Align the data so that the year 2000 corresponds to an input of 0, and find the complete linear model.    Estimate the demand in the year 2015.          The data looks mostly like a line     million barrels of oil demanded, years since 2000.              Expenditure on pets in the United States was recorded over the span of several years, and is recorded in the table below.    Year  1994  1996  1998  2001  2002  2003  2004  2005  2006  2007  2008    Expenditure (billion USD)  17  21  23  28.5  29.5  32.4  34.4  36.3  38.5  41.2  43.4       Align the data so that the year 1994 corresponds to an input of zero, and find the complete linear model.    Use the model to estimate the expenditure in the year 2013.           billion dollars (US) expenditure on pets in the United States, years since 1994     billion dollars     Students tend to be confused about the rounding here; be sure to emphasize that the output needs to be rounded to the tenths place because of the data rounding.      The number of successful tax audits performed by a company between 2000 and 2006 can be modeled by audits, where is the number of years since 2000.     Give the rate of change of . Include units.    Evaluate . Write a sentence interpreting your answer.    Find the number of successful audits in 2005. Is this interpolation or extrapolation?    Find the number of successful audits in 2010. is this interpolation or extrapolation?           audits per year     . In 2000, there were 1063 successful audits.    644; interpolation    224; extrapolation         The population of a town in selected years is given below.    Year  2005  2006  2007  2008  2009  2010    Population (in thousands)  125.2  128.7  132.4  136  139.8  143.6       Find a complete model for the population of the town in year .    According to your model, what is the constant rate of change of the population of the town?    Use your model to predict the population of the town in 2015.           thousand people gives the population of a town, years since 2000.    3.683 thousand people per year     thousand people         Honda engineers are designing a new car, and are measuring the distance it takes the car to come to a complete stop on dry pavement. Their measurements are given below.    Speed (mph)  55  60  65  70  75    Distance (ft)  77.6  131.4  186.3  236.7  289.3       Find a complete model for the braking distance of the car.    Use your model to find the braking distance needed when the car is traveling at 77 miles per hour; write your answer using function notation.    Find another complete model, aligning the data so that a speed of 50 mph corresponds to an input of 0.    Repeat part (b)    How fast is the car traveling if it requires 156 ft to come to a complete stop?           feet braking distance required when the car's speed is miles per hour     feet     feet braking distance required when the car's speed is miles per hour     feet    62.3 miles per hour        "
},
{
  "id": "question-1",
  "level": "2",
  "url": "section-14.html#question-1",
  "type": "Question",
  "number": "1.4.1",
  "title": "",
  "body": "  Given two points and , how can we find the slope of the line between them?       It's probably worthwhile to talk about some other forms they might see slope take.   "
},
{
  "id": "p-357",
  "level": "2",
  "url": "section-14.html#p-357",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "three "
},
{
  "id": "example-44",
  "level": "2",
  "url": "section-14.html#example-44",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": "  The following table gives the percentage of new companies which remained open years after beginning business.    Years After Opening  5  6  7  8  9  10    Companies Still Open (in %)  50  47  44  41  38  35       Fill in the new inputs if we align the data so that the fifth year corresponds to an input of zero.    Years After Opening          Companies Still Open (in %)  50  47  44  41  38  35      Use the aligned data to create a complete model.          Fill in the new inputs if we align the data so that the fifth year corresponds to an input of zero.    Years After Opening  0  1  2  3  4  5    Companies Still Open (in %)  50  47  44  41  38  35       percent of companies still open, years after opening.      "
},
{
  "id": "definition-10",
  "level": "2",
  "url": "section-14.html#definition-10",
  "type": "Definition",
  "number": "1.4.3",
  "title": "Extrapolation.",
  "body": " Extrapolation  Extrapolation   When using a model, we say that data is extrapolated if we find an output value from outside the model's input range.   "
},
{
  "id": "definition-11",
  "level": "2",
  "url": "section-14.html#definition-11",
  "type": "Definition",
  "number": "1.4.4",
  "title": "Interpolation.",
  "body": " Interpolation  Interpolation   When using a model, we say that data is interpolated if we find an output value from inside the model's input range.   "
},
{
  "id": "example-45",
  "level": "2",
  "url": "section-14.html#example-45",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  In the example above, predict the number of companies open in the twelfth year of operation. Is this extrapolation or interpolation?     . This is extrapolation   "
},
{
  "id": "example-46",
  "level": "2",
  "url": "section-14.html#example-46",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": "  Do the same, but after 8.5 years after opening. Is this extrapolation or interpolation?     . This is interpolation   "
},
{
  "id": "example-47",
  "level": "2",
  "url": "section-14.html#example-47",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": "  The amount of electricity sold by a power company in year is given below.    Year  2003  2004  2005  2006  2007  2008    Retail Sales (in quadrillion kWh)  1.2  1.23  1.27  1.3  1.33  1.35       Find a complete linear model to fit the data.    Write an interpretation the slope of the linear model.    When did retail sales first exceed 1.4 quadrillion kWh? Is this interpolation or extrapolation?           quadrillion kWh of electricity sold by a power company, in year .    The retail sales of electricity is increasing by 0.031 quadrillion kWh per year.    In 2010; this is extrapolation.     This example should probably take a little bit of time. You're doing a few things that are (in theory) new to the students: using the calculator to create a regression, reading the values from the calculator to write the appropriate equation, writing an interpretation, and potentially using solver.   "
},
{
  "id": "example-48",
  "level": "2",
  "url": "section-14.html#example-48",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": "  Find the complete linear model to fit the data of the previous example, aligning the input so that the year 2003 corresponds to an input of zero.     quadrillion kWh of electricity sold by a power company, years since 2003.  This is a really good opportunity to highlight what changes and what stays the same when you modify alignments.   "
},
{
  "id": "example-49",
  "level": "2",
  "url": "section-14.html#example-49",
  "type": "Example",
  "number": "1.4.9",
  "title": "",
  "body": "  The world's daily demand of oil was recorded in various years, and is listed below.    Year  2004  2005  2006  2007  2008  2009    Oil Demand (in million barrels)  82.327  83.652  84.622  85.385  86.384  87.698       Based on the scatterplot, why is a linear model best?    Align the data so that the year 2000 corresponds to an input of 0, and find the complete linear model.    Estimate the demand in the year 2015.          The data looks mostly like a line     million barrels of oil demanded, years since 2000.           "
},
{
  "id": "example-50",
  "level": "2",
  "url": "section-14.html#example-50",
  "type": "Example",
  "number": "1.4.10",
  "title": "",
  "body": "  Expenditure on pets in the United States was recorded over the span of several years, and is recorded in the table below.    Year  1994  1996  1998  2001  2002  2003  2004  2005  2006  2007  2008    Expenditure (billion USD)  17  21  23  28.5  29.5  32.4  34.4  36.3  38.5  41.2  43.4       Align the data so that the year 1994 corresponds to an input of zero, and find the complete linear model.    Use the model to estimate the expenditure in the year 2013.           billion dollars (US) expenditure on pets in the United States, years since 1994     billion dollars     Students tend to be confused about the rounding here; be sure to emphasize that the output needs to be rounded to the tenths place because of the data rounding.   "
},
{
  "id": "example-51",
  "level": "2",
  "url": "section-14.html#example-51",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": "  The number of successful tax audits performed by a company between 2000 and 2006 can be modeled by audits, where is the number of years since 2000.     Give the rate of change of . Include units.    Evaluate . Write a sentence interpreting your answer.    Find the number of successful audits in 2005. Is this interpolation or extrapolation?    Find the number of successful audits in 2010. is this interpolation or extrapolation?           audits per year     . In 2000, there were 1063 successful audits.    644; interpolation    224; extrapolation      "
},
{
  "id": "example-52",
  "level": "2",
  "url": "section-14.html#example-52",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": "  The population of a town in selected years is given below.    Year  2005  2006  2007  2008  2009  2010    Population (in thousands)  125.2  128.7  132.4  136  139.8  143.6       Find a complete model for the population of the town in year .    According to your model, what is the constant rate of change of the population of the town?    Use your model to predict the population of the town in 2015.           thousand people gives the population of a town, years since 2000.    3.683 thousand people per year     thousand people      "
},
{
  "id": "example-53",
  "level": "2",
  "url": "section-14.html#example-53",
  "type": "Example",
  "number": "1.4.13",
  "title": "",
  "body": "  Honda engineers are designing a new car, and are measuring the distance it takes the car to come to a complete stop on dry pavement. Their measurements are given below.    Speed (mph)  55  60  65  70  75    Distance (ft)  77.6  131.4  186.3  236.7  289.3       Find a complete model for the braking distance of the car.    Use your model to find the braking distance needed when the car is traveling at 77 miles per hour; write your answer using function notation.    Find another complete model, aligning the data so that a speed of 50 mph corresponds to an input of 0.    Repeat part (b)    How fast is the car traveling if it requires 156 ft to come to a complete stop?           feet braking distance required when the car's speed is miles per hour     feet     feet braking distance required when the car's speed is miles per hour     feet    62.3 miles per hour      "
},
{
  "id": "section-15",
  "level": "1",
  "url": "section-15.html",
  "type": "Section",
  "number": "1.5",
  "title": "Exponential Functions & Models",
  "body": " Exponential Functions & Models   Exponential Functions  As with the linear model, we have three descriptons of an exponential model:     Algebraic: An exponential model has ane quation of the form     Verbally: An exponential model has a constant percent change    Graphically: An exponetial model will look like the pictures below.       Exponential Models  For exponential models, we have the following information:    A sketch of an exponential function with a positive leading coefficient and .                  is always increasing     is concave up      A sketch of an exponential function with negative leading coefficient and                   is always decreasing     is concave down        A sketch of an exponential function with positive leading coefficient and                   is always decreasing     is concave up      A sketch of an exponential function with negative leading coefficient and                   is always increasing     is concave down      For us, an exponential model will always have an asymptote at     Formulas and Examples  There are two formulas which will be useful to memorize. For exponential models, we have a constant percent change; this is given above as   Percent Change (Exponential)  Percent Change     Percent Change (Other Models)  Percent Change      iPod sales were 7.68 million units in 2006, and increased by 9.1% each year between 2006 and 2008.     Write an exponential model for this situation.    Explain why the exponential model is best.    Use the model to predict the number of iPods sold in 2010.           million iPods sold, years since 2006    There's a constant percent change    10.88 million iPods sold         The population of Northern cod in a certain body of water is given in the table below.    Decade (since 1963)  0  1  2  3  4    Population (in billions)  1.72  0.63  0.24  0.085  0.032       Identify which model (linear\/exponential) is best for this data.    Find the complete model.    Find the percent change of the model.          Exponential     billion Northern cod in a body of water, decades since 1963              Early in the millennium, it was predicted that United States imports of petroleum products would be 4.81 quadrillion Btu, and increase by each year through 2020.     Find the associated exponential model.    When will imports exceed 10 quadrillion Btu?    Describe the end behavior of your model.           quadrillion Btu, imports of petroleum products, years since 2000.     years after 2000     and      In part (a), it might be a bit confusing that we're using 2 decimals for the initial value and 4 decimals for the base. This is because we are given a specific initial value (4.81) and specific percent change (5.47%). If we had to use the calculator to create the model, we would use 3 decimal places for both numbers.      According to the Social Security Advisory Board, the number of workers per beneficiary of the Social Security program was 3.3 in 1995 and is projected to decline by 1.46% each year until 2030.     Write a model for the number of workers per beneficiary from 1995 through 2030.    What does the model predict the number of workers per beneficiary will be in 2030?           workers per beneficiary in the Social Security program, years after 1995    1.97 workers per beneficiary         A social media website collected data on its users. Below are the users of a certain age and gender, as a percentage of total users.    Age (years)  27  29  31  33  35  37  39  41  43  45    Females (as %)  9.6  7.8  6.1  5.1  4.3  3.8  2.4  2.1  1.2  1.1    Males (as %)  8.8  7.6  6.0  4.6  4.0  4.4  2.7  1.9  1.5  1.3       Align the input data to the number of years after 27. Write an exponential model for the female user data.    According to the model in part (a), what is the percentage change in your model? Write a sentence interpreting your answer.    What percentage of female users are 30 years old? What about 48 years old? Are these interpolation or extrapolation?    Write the exponential model for the male user data.    According to your model in part (d), what is the percentage change in your model? Write a sentence interpreting your answer.    What percentage of male users are 30 years old? What about 48 years old?           percent female users on a social media website, years after age 27.          and . The first is interpolation, the second is extrapolation.     percent male users on a social media website, years after age 27.          and          Doubling Time and Half Life   Doubling Time  Doubling Time   For an exponential function , the doubling time is defined to be the amount of time it takes an initial quantity to double (or grow by 100%).     Half Life  Half Life   For an exponential function , the half life is defined to be the amount of time it takes an initial quantity to decay to half of its original size (or decrease by 50%).      Albuterol is used to calm bronchospasm. It has a biological half-life of 7 hours and is normally inhaled as a 1.25 mg dose.     Find a model for the amount of albuterol left in the body after an initial dose 1.25 mg.    How much albuterol is left in the body after 24 hours?           mg albuterol left in the body, hours after ingestion    0.12 mg         The amount of money Frank has in a particular investment is given by , where is the principal invested and is the amount of time (in years) the investment has been active.     If Frank began the investment 15 years ago, and currently has $25,500 in the account, what was the principal that he invested?    If Frank currently has $14,250 in the account and invested $2,500 to start, how long as the investment been active?    Compute the doubling time for an investment of $1000.    How long will it take an investment to triple instead of double?          $10367.53    29 years    11.55 years    18.31 years        "
},
{
  "id": "example-54",
  "level": "2",
  "url": "section-15.html#example-54",
  "type": "Example",
  "number": "1.5.1",
  "title": "",
  "body": "  iPod sales were 7.68 million units in 2006, and increased by 9.1% each year between 2006 and 2008.     Write an exponential model for this situation.    Explain why the exponential model is best.    Use the model to predict the number of iPods sold in 2010.           million iPods sold, years since 2006    There's a constant percent change    10.88 million iPods sold      "
},
{
  "id": "example-55",
  "level": "2",
  "url": "section-15.html#example-55",
  "type": "Example",
  "number": "1.5.2",
  "title": "",
  "body": "  The population of Northern cod in a certain body of water is given in the table below.    Decade (since 1963)  0  1  2  3  4    Population (in billions)  1.72  0.63  0.24  0.085  0.032       Identify which model (linear\/exponential) is best for this data.    Find the complete model.    Find the percent change of the model.          Exponential     billion Northern cod in a body of water, decades since 1963           "
},
{
  "id": "example-56",
  "level": "2",
  "url": "section-15.html#example-56",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": "  Early in the millennium, it was predicted that United States imports of petroleum products would be 4.81 quadrillion Btu, and increase by each year through 2020.     Find the associated exponential model.    When will imports exceed 10 quadrillion Btu?    Describe the end behavior of your model.           quadrillion Btu, imports of petroleum products, years since 2000.     years after 2000     and      In part (a), it might be a bit confusing that we're using 2 decimals for the initial value and 4 decimals for the base. This is because we are given a specific initial value (4.81) and specific percent change (5.47%). If we had to use the calculator to create the model, we would use 3 decimal places for both numbers.   "
},
{
  "id": "example-57",
  "level": "2",
  "url": "section-15.html#example-57",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": "  According to the Social Security Advisory Board, the number of workers per beneficiary of the Social Security program was 3.3 in 1995 and is projected to decline by 1.46% each year until 2030.     Write a model for the number of workers per beneficiary from 1995 through 2030.    What does the model predict the number of workers per beneficiary will be in 2030?           workers per beneficiary in the Social Security program, years after 1995    1.97 workers per beneficiary      "
},
{
  "id": "example-58",
  "level": "2",
  "url": "section-15.html#example-58",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": "  A social media website collected data on its users. Below are the users of a certain age and gender, as a percentage of total users.    Age (years)  27  29  31  33  35  37  39  41  43  45    Females (as %)  9.6  7.8  6.1  5.1  4.3  3.8  2.4  2.1  1.2  1.1    Males (as %)  8.8  7.6  6.0  4.6  4.0  4.4  2.7  1.9  1.5  1.3       Align the input data to the number of years after 27. Write an exponential model for the female user data.    According to the model in part (a), what is the percentage change in your model? Write a sentence interpreting your answer.    What percentage of female users are 30 years old? What about 48 years old? Are these interpolation or extrapolation?    Write the exponential model for the male user data.    According to your model in part (d), what is the percentage change in your model? Write a sentence interpreting your answer.    What percentage of male users are 30 years old? What about 48 years old?           percent female users on a social media website, years after age 27.          and . The first is interpolation, the second is extrapolation.     percent male users on a social media website, years after age 27.          and       "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "section-15.html#definition-12",
  "type": "Definition",
  "number": "1.5.6",
  "title": "Doubling Time.",
  "body": " Doubling Time  Doubling Time   For an exponential function , the doubling time is defined to be the amount of time it takes an initial quantity to double (or grow by 100%).   "
},
{
  "id": "definition-13",
  "level": "2",
  "url": "section-15.html#definition-13",
  "type": "Definition",
  "number": "1.5.7",
  "title": "Half Life.",
  "body": " Half Life  Half Life   For an exponential function , the half life is defined to be the amount of time it takes an initial quantity to decay to half of its original size (or decrease by 50%).   "
},
{
  "id": "example-59",
  "level": "2",
  "url": "section-15.html#example-59",
  "type": "Example",
  "number": "1.5.8",
  "title": "",
  "body": "  Albuterol is used to calm bronchospasm. It has a biological half-life of 7 hours and is normally inhaled as a 1.25 mg dose.     Find a model for the amount of albuterol left in the body after an initial dose 1.25 mg.    How much albuterol is left in the body after 24 hours?           mg albuterol left in the body, hours after ingestion    0.12 mg      "
},
{
  "id": "example-60",
  "level": "2",
  "url": "section-15.html#example-60",
  "type": "Example",
  "number": "1.5.9",
  "title": "",
  "body": "  The amount of money Frank has in a particular investment is given by , where is the principal invested and is the amount of time (in years) the investment has been active.     If Frank began the investment 15 years ago, and currently has $25,500 in the account, what was the principal that he invested?    If Frank currently has $14,250 in the account and invested $2,500 to start, how long as the investment been active?    Compute the doubling time for an investment of $1000.    How long will it take an investment to triple instead of double?          $10367.53    29 years    11.55 years    18.31 years      "
},
{
  "id": "section-16",
  "level": "1",
  "url": "section-16.html",
  "type": "Section",
  "number": "1.6",
  "title": "Models in Finance",
  "body": " Models in Finance    Future Value\/Present Value  Future Value  Present Value   The future value of an investment\/loan at time is the sum of the prevent value and all accumulated interest; this is denoted or . The present value , denoted (principal) is the value `'today'', or at .      Simple Interest   Simple Interest  Simple Interest    Simple interest is the interest earned on the present value only. The rate (as a decimal) is called the annual percentage rate (APR) or nominal rate .    We have two formulas for simple interest: where is the principal , is the rate (as a decimal), and is the time (in years).    A family friend offers to loan you $10,000 to cover your outlandishly high tuition this year. She wants to earn 5.75% interest on the loan.     If you pay the loan back in 1 year, how much interest does the friend make?    What about if you pay the loan back in 3 years?    What about 4 months?          $575    $1725    $191.67         I invest $500 at 8.5%. How much is the investment worth in 5 years?    $700      Discretely Compounding Interest   Discretely Compounding Interest  Discretely Compounding Interest    Discretely compounding interest is interest earned on the balance at discrete time intervals    We have two formulas for discretely compounding interest: where is the principal , is the rate (as a decimal), is the time (in years), and is the number of compounds (in a years)    You take out a $16,750 loan for a new car. Find the value of the loan (assuming no payments were made) with:      , monthly     ,      , yearly     , quarterly     ,      , daily          $27544.75    $21450.75    $26830.26    $19477.98    $19482.59    $22339.80     I forgot to add the length of time for the loan. It's up to you to choose, but a 4-year note seems reasonable. So all of these answers will assume that period of time.     Annual Percentage Yield  Annual Percentage Yield   The annual percentage yield (APY) of an investment (also called the effective rate ) gives the return on investment in one year. APY for discretely compounding interest is calculated with the formula       Calculate the APY for each of the situations from the last example. Round each to the nearest tenth:      , monthly     ,      , yearly     , quarterly     ,      , daily          13.2%    6.4%    12.5%    3.8%    3.9%    7.5%         OU Federal Credit Union offers an APR of 6.35% (compounded monthly) for an investment opportunity, while First Fidelity offers you an APY of 5.95%. Which option will give the highest return after one year?    The OUFCU option is best  The idea here is to explicitly draw the connection that APR and APY are distinct. In future iterations, the numbers probably need to be much      Continuously Compounding Interest   Continuously Compounding Interest   Interest earned on the balance at any given time is called continuously compounding interest , and has the future value formula given by where is the principal, is the rate, and is the time.  It's not typed out, but probably worth mentioning that is still in years for this formula.    We also have a formula for the APY of continuously compounding interest:     Determine the amount that must be invested in the following situations to get $7000 payable in 4 years:      APR, compounded continuously     APR, compounded monthly     APR, simple interest     APR, compounded weekly.          $6208.44    $5990.43    $4364.09    $4694.04     In these problems, it's important to stress that they have to show at least the setup work. If they choose to plug into their calculator and solve, they're probaly going to lose points.      Find the APY for the examples above, rounding to the nearest hundredth.      APR, compounded continuously     APR, compounded monthly     APR, simple interest     APR, compounded weekly.          3.05%    3.97%    15.1%    10.51%     In these problems, it's important to stress that they have to show at least the setup work. If they choose to plug into their calculator and solve, they're probaly going to lose points.     "
},
{
  "id": "definition-14",
  "level": "2",
  "url": "section-16.html#definition-14",
  "type": "Definition",
  "number": "1.6.1",
  "title": "Future Value\/Present Value.",
  "body": " Future Value\/Present Value  Future Value  Present Value   The future value of an investment\/loan at time is the sum of the prevent value and all accumulated interest; this is denoted or . The present value , denoted (principal) is the value `'today'', or at .   "
},
{
  "id": "definition-15",
  "level": "2",
  "url": "section-16.html#definition-15",
  "type": "Definition",
  "number": "1.6.2",
  "title": "Simple Interest.",
  "body": " Simple Interest  Simple Interest    Simple interest is the interest earned on the present value only. The rate (as a decimal) is called the annual percentage rate (APR) or nominal rate .   "
},
{
  "id": "p-550",
  "level": "2",
  "url": "section-16.html#p-550",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "principal "
},
{
  "id": "example-61",
  "level": "2",
  "url": "section-16.html#example-61",
  "type": "Example",
  "number": "1.6.3",
  "title": "",
  "body": "  A family friend offers to loan you $10,000 to cover your outlandishly high tuition this year. She wants to earn 5.75% interest on the loan.     If you pay the loan back in 1 year, how much interest does the friend make?    What about if you pay the loan back in 3 years?    What about 4 months?          $575    $1725    $191.67      "
},
{
  "id": "example-62",
  "level": "2",
  "url": "section-16.html#example-62",
  "type": "Example",
  "number": "1.6.4",
  "title": "",
  "body": "  I invest $500 at 8.5%. How much is the investment worth in 5 years?    $700   "
},
{
  "id": "definition-16",
  "level": "2",
  "url": "section-16.html#definition-16",
  "type": "Definition",
  "number": "1.6.5",
  "title": "Discretely Compounding Interest.",
  "body": " Discretely Compounding Interest  Discretely Compounding Interest    Discretely compounding interest is interest earned on the balance at discrete time intervals   "
},
{
  "id": "p-563",
  "level": "2",
  "url": "section-16.html#p-563",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "principal "
},
{
  "id": "example-63",
  "level": "2",
  "url": "section-16.html#example-63",
  "type": "Example",
  "number": "1.6.6",
  "title": "",
  "body": "  You take out a $16,750 loan for a new car. Find the value of the loan (assuming no payments were made) with:      , monthly     ,      , yearly     , quarterly     ,      , daily          $27544.75    $21450.75    $26830.26    $19477.98    $19482.59    $22339.80     I forgot to add the length of time for the loan. It's up to you to choose, but a 4-year note seems reasonable. So all of these answers will assume that period of time.   "
},
{
  "id": "definition-17",
  "level": "2",
  "url": "section-16.html#definition-17",
  "type": "Definition",
  "number": "1.6.7",
  "title": "Annual Percentage Yield.",
  "body": " Annual Percentage Yield  Annual Percentage Yield   The annual percentage yield (APY) of an investment (also called the effective rate ) gives the return on investment in one year. APY for discretely compounding interest is calculated with the formula    "
},
{
  "id": "example-64",
  "level": "2",
  "url": "section-16.html#example-64",
  "type": "Example",
  "number": "1.6.8",
  "title": "",
  "body": "  Calculate the APY for each of the situations from the last example. Round each to the nearest tenth:      , monthly     ,      , yearly     , quarterly     ,      , daily          13.2%    6.4%    12.5%    3.8%    3.9%    7.5%      "
},
{
  "id": "example-65",
  "level": "2",
  "url": "section-16.html#example-65",
  "type": "Example",
  "number": "1.6.9",
  "title": "",
  "body": "  OU Federal Credit Union offers an APR of 6.35% (compounded monthly) for an investment opportunity, while First Fidelity offers you an APY of 5.95%. Which option will give the highest return after one year?    The OUFCU option is best  The idea here is to explicitly draw the connection that APR and APY are distinct. In future iterations, the numbers probably need to be much   "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "section-16.html#definition-18",
  "type": "Definition",
  "number": "1.6.10",
  "title": "Continuously Compounding Interest.",
  "body": " Continuously Compounding Interest   Interest earned on the balance at any given time is called continuously compounding interest , and has the future value formula given by where is the principal, is the rate, and is the time.  It's not typed out, but probably worth mentioning that is still in years for this formula.   "
},
{
  "id": "example-66",
  "level": "2",
  "url": "section-16.html#example-66",
  "type": "Example",
  "number": "1.6.11",
  "title": "",
  "body": "  Determine the amount that must be invested in the following situations to get $7000 payable in 4 years:      APR, compounded continuously     APR, compounded monthly     APR, simple interest     APR, compounded weekly.          $6208.44    $5990.43    $4364.09    $4694.04     In these problems, it's important to stress that they have to show at least the setup work. If they choose to plug into their calculator and solve, they're probaly going to lose points.   "
},
{
  "id": "example-67",
  "level": "2",
  "url": "section-16.html#example-67",
  "type": "Example",
  "number": "1.6.12",
  "title": "",
  "body": "  Find the APY for the examples above, rounding to the nearest hundredth.      APR, compounded continuously     APR, compounded monthly     APR, simple interest     APR, compounded weekly.          3.05%    3.97%    15.1%    10.51%     In these problems, it's important to stress that they have to show at least the setup work. If they choose to plug into their calculator and solve, they're probaly going to lose points.   "
},
{
  "id": "section-17",
  "level": "1",
  "url": "section-17.html",
  "type": "Section",
  "number": "1.7",
  "title": "Constructed Functions",
  "body": " Constructed Functions   Definitions   Fixed Cost  Fixed Cost   A fixed cost is a cost which remains the same, no matter how much of a product is produced.     Variable Cost  Variable Cost   A variable cost is a cost which changes depending on the number of units produced.     Total Cost  Total Cost   The total cost is the sum of the fixed cost and variable cost.     Revenue  Revenue    Revenue is the product of the selling price (per unit) and the number of units sold:      Profit  Profit    Profit is the difference between revenue and cost:      Break-Even Point  Break-even Point   The break-even point is the point when total cost equals total revenue, i.e. when profit is zero      Function Operations  There are five operations which we will need to be familiar with in order to move on.     Addition: if the output units of and are exactly the same.    Subtraction: if the output units of and are exactly the same.    Multiplication: if the output units of and are compatible.    Division: if the output units of and are compatible.    Composition: if the output units of are the input units of      Addition creates total cost from fixed and variable costs by adding the two; profit is created using subtraction. Variable cost (and revenue) are created by multiplication, and division gives us average cost     Examples    The number of student tickets sold for a home basketball game at OU is represented by hundred tickets when is the winning percentage of the team. The number of non student tickets sold for the same game is represented by hundred tickets where is the winning percentage of the team. Combine the functions to construct a new function giving the total number of tickets sold for a home basketball game at OU.     hundred tickets sold      Sales of 12-ounce bottles of sparkling water are modeled as million bottles, when the price is dollars per bottle. Write a model for the revenue from the sale of 12-ounce bottles of sparkling water.     million dollars gives revenue from sales of 12-ounce water bottles, when the price is dollars per bottle.  You'll likely need (or want) to discuss how to work with units in this example, since the unit \"million dollars\" doesn't explicitly show up in the question.      The profit from the supply of a certain commodity is modeled as thousand dollars, where is the number of units produced in millions. Write a model for the average profit when units are produced.     dollars per thousand units gives average profit from the supply of a commodity, when units are produced.  Average profit isn't explicitly mentioned earlier, which is more of a feature than a bug in the notes right now. This is a good opportunity to talk about how to create average-type functions (average profit, cost, revenue).      A travel agency offers spring break cruise packages. The agency advertises a cruise to Cancun for $1200 per person. To promote the cruise among student organizations on campus, the agency offers a discount for student groups selling the cruise to over 50 of their members. The price per student will be discounted by $10 for each student in excess of 50 (for example, if an organization had 55 members go on the cruise, each of those students would pay $1150). Write a model for the travel agency's revenue that depends on the number of students from a student organization.     dollasr gives the travel agency's revenue when students purchase cruise packages.  The alignment can be modified if you think the wording is awkward  This kind of question really gives students fits. I'm not sure the exact reason, but my suspicion is that it lies somewhere in the intersection of \"no one likes word problems\" and \"there's a lot of information\". It's perfectly fine to skip this problem, but there is a very similar (maybe identical?) problem in the optimization section (Section 4.6).      The sales of a certain brand of backpack is modeled by million dollars, when is the number of stores that sell the brand of backpack. The number of stores that sell the brand of backpack is modeled by stores, months since the beginning of 2000. Write a model for the sales of a certain brand of backpack with respect to time.     million dollars gives the sales of a backpack brand, months after the beginning of 2000.      The level of contamination in groundsoil is parts per million when the population of the surrounding community if people. The population of the surrounding community in year is modeled as people, years since 2000.     Why can we use function composition?    Find a model for the contamination of the groundsoil.          The output units of are the input units of .     parts per million, concentration of groundsoil contamination, years since 2000.         It costs a company $19.50 to produce 150 glass bottles. Write a model for , the average cost of producing a bottle when units are produced.     dollars per bottle gives the average cost of producing a bottle when units are produced.  I'm not a big fan of this question; it's perfectly fine to skip it. It's going away in the next iteration anyway.      Write the following functions as composite functions, and then evaluate the composite at an input of 2.      ,      ,      ,      ,            ,      ,      ,      ,         "
},
{
  "id": "definition-19",
  "level": "2",
  "url": "section-17.html#definition-19",
  "type": "Definition",
  "number": "1.7.1",
  "title": "Fixed Cost.",
  "body": " Fixed Cost  Fixed Cost   A fixed cost is a cost which remains the same, no matter how much of a product is produced.   "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "section-17.html#definition-20",
  "type": "Definition",
  "number": "1.7.2",
  "title": "Variable Cost.",
  "body": " Variable Cost  Variable Cost   A variable cost is a cost which changes depending on the number of units produced.   "
},
{
  "id": "definition-21",
  "level": "2",
  "url": "section-17.html#definition-21",
  "type": "Definition",
  "number": "1.7.3",
  "title": "Total Cost.",
  "body": " Total Cost  Total Cost   The total cost is the sum of the fixed cost and variable cost.   "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "section-17.html#definition-22",
  "type": "Definition",
  "number": "1.7.4",
  "title": "Revenue.",
  "body": " Revenue  Revenue    Revenue is the product of the selling price (per unit) and the number of units sold:    "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "section-17.html#definition-23",
  "type": "Definition",
  "number": "1.7.5",
  "title": "Profit.",
  "body": " Profit  Profit    Profit is the difference between revenue and cost:    "
},
{
  "id": "definition-24",
  "level": "2",
  "url": "section-17.html#definition-24",
  "type": "Definition",
  "number": "1.7.6",
  "title": "Break-Even Point.",
  "body": " Break-Even Point  Break-even Point   The break-even point is the point when total cost equals total revenue, i.e. when profit is zero   "
},
{
  "id": "example-68",
  "level": "2",
  "url": "section-17.html#example-68",
  "type": "Example",
  "number": "1.7.7",
  "title": "",
  "body": "  The number of student tickets sold for a home basketball game at OU is represented by hundred tickets when is the winning percentage of the team. The number of non student tickets sold for the same game is represented by hundred tickets where is the winning percentage of the team. Combine the functions to construct a new function giving the total number of tickets sold for a home basketball game at OU.     hundred tickets sold   "
},
{
  "id": "example-69",
  "level": "2",
  "url": "section-17.html#example-69",
  "type": "Example",
  "number": "1.7.8",
  "title": "",
  "body": "  Sales of 12-ounce bottles of sparkling water are modeled as million bottles, when the price is dollars per bottle. Write a model for the revenue from the sale of 12-ounce bottles of sparkling water.     million dollars gives revenue from sales of 12-ounce water bottles, when the price is dollars per bottle.  You'll likely need (or want) to discuss how to work with units in this example, since the unit \"million dollars\" doesn't explicitly show up in the question.   "
},
{
  "id": "example-70",
  "level": "2",
  "url": "section-17.html#example-70",
  "type": "Example",
  "number": "1.7.9",
  "title": "",
  "body": "  The profit from the supply of a certain commodity is modeled as thousand dollars, where is the number of units produced in millions. Write a model for the average profit when units are produced.     dollars per thousand units gives average profit from the supply of a commodity, when units are produced.  Average profit isn't explicitly mentioned earlier, which is more of a feature than a bug in the notes right now. This is a good opportunity to talk about how to create average-type functions (average profit, cost, revenue).   "
},
{
  "id": "example-71",
  "level": "2",
  "url": "section-17.html#example-71",
  "type": "Example",
  "number": "1.7.10",
  "title": "",
  "body": "  A travel agency offers spring break cruise packages. The agency advertises a cruise to Cancun for $1200 per person. To promote the cruise among student organizations on campus, the agency offers a discount for student groups selling the cruise to over 50 of their members. The price per student will be discounted by $10 for each student in excess of 50 (for example, if an organization had 55 members go on the cruise, each of those students would pay $1150). Write a model for the travel agency's revenue that depends on the number of students from a student organization.     dollasr gives the travel agency's revenue when students purchase cruise packages.  The alignment can be modified if you think the wording is awkward  This kind of question really gives students fits. I'm not sure the exact reason, but my suspicion is that it lies somewhere in the intersection of \"no one likes word problems\" and \"there's a lot of information\". It's perfectly fine to skip this problem, but there is a very similar (maybe identical?) problem in the optimization section (Section 4.6).   "
},
{
  "id": "example-72",
  "level": "2",
  "url": "section-17.html#example-72",
  "type": "Example",
  "number": "1.7.11",
  "title": "",
  "body": "  The sales of a certain brand of backpack is modeled by million dollars, when is the number of stores that sell the brand of backpack. The number of stores that sell the brand of backpack is modeled by stores, months since the beginning of 2000. Write a model for the sales of a certain brand of backpack with respect to time.     million dollars gives the sales of a backpack brand, months after the beginning of 2000.   "
},
{
  "id": "example-73",
  "level": "2",
  "url": "section-17.html#example-73",
  "type": "Example",
  "number": "1.7.12",
  "title": "",
  "body": "  The level of contamination in groundsoil is parts per million when the population of the surrounding community if people. The population of the surrounding community in year is modeled as people, years since 2000.     Why can we use function composition?    Find a model for the contamination of the groundsoil.          The output units of are the input units of .     parts per million, concentration of groundsoil contamination, years since 2000.      "
},
{
  "id": "example-74",
  "level": "2",
  "url": "section-17.html#example-74",
  "type": "Example",
  "number": "1.7.13",
  "title": "",
  "body": "  It costs a company $19.50 to produce 150 glass bottles. Write a model for , the average cost of producing a bottle when units are produced.     dollars per bottle gives the average cost of producing a bottle when units are produced.  I'm not a big fan of this question; it's perfectly fine to skip it. It's going away in the next iteration anyway.   "
},
{
  "id": "example-75",
  "level": "2",
  "url": "section-17.html#example-75",
  "type": "Example",
  "number": "1.7.14",
  "title": "",
  "body": "  Write the following functions as composite functions, and then evaluate the composite at an input of 2.      ,      ,      ,      ,            ,      ,      ,      ,       "
},
{
  "id": "section-18",
  "level": "1",
  "url": "section-18.html",
  "type": "Section",
  "number": "1.8",
  "title": "Logarithmic Functions & Models",
  "body": " Logarithmic Functions & Models   Logarithmic Functions  We have three descriptons of a logarithmic model:     Algebraically: A logarithmic model has an equation of the form , where are constants and     Verbally: A log function has a vertical asymptotet at and continues to grow (or decay) as increase without bound.    Graphically: The graph of a log model takes a form as below.       Logarithmic Models    A sketch of a logarithmic function with a positive coefficient.                  is always increasing     is concave down      A sketch of a logarithmic function with a negative coefficient.                  is always decreasing     is concave up        Logarithmic Behavior    The percentage of viewers that have watched a DVR'd show before a certain number of days have passed is give in the table below.    Time (in days)  1  2  3  4  5  6  7  8    Viewers (in %)  46  62  76  84  91  95  98  100       Why is a logarithmic model best here? Use a scatterplot to help you develop your reasons.    Find the model corresponding to your answer in part (a). Write the complete model.    Explain why the exponential model does not work.          Concave down only + increasing  The appearance of a vertical asymptote would be telling, but it's not entirely clear in this scatterplot that that's happening.  Technically, a logarithmic model isn't best here either (because there is an asymptote at ). However, since students haven't learned logistic models at this point in the class, a logarithmic is the best that we have. It could be useful to come back and analyze this question more during\/after Section 1.10.     viewers (in %) that have watched a DVR'd show after days have passed    Answers vary  The answers should mention the characteristics of an exponential: concave up and always increasing. But the more important reason, based on the data, is that exponential growth is not displayed in the scatterplot.         The average length of the ears of men after a certain age is given in the table below.    Age (in years)  0  20  70    Ear Length (in inches)  2.04  2.55  3.07       Find the complete logarithmic model for the data. Do you encounter any problems?    Align the data so that age 0 corresponds to an input of 10, and find the complete logarithmic model for the data.    Use the model to find the ear length of a 45 year old man.          Yes, we encounter a domain error.  This is a good place to remind them of the vertical asymptote for a logarithmic model.     inches ear length in men, at age     2.87 inches         The table below shows the life expectancy for women in Ireland between 1945 and 2011    Year  1945  1955  1965  1975  1985  1995  2005  2011    Expectancy (years)  65.2  71.1  73.1  74.7  77.4  78.8  79.3  80.2       Align the data so that 1940 corresponds to an input of 0.    What type of concavity does the scatter plot suggest?    Describe the end behavior suggested by the scatterplot as the input increases without bound.    Find the complete logarithmic model for the data.    Using your model, find the year in which the life expectancy for Irish women was exactly 76.3 years.    What was the life expectancy of an Irish woman in the year 1979?          There's not much to do for this one; you might want to run the model without aligning to show them the error that shows up on the calculator then explain why we would have to align this model.    Concave down    As the input increases without bound, the life expectancy increases without bound.     years life expectancy for Irish women, years after 1940     years after 1940    76.3 years        "
},
{
  "id": "example-76",
  "level": "2",
  "url": "section-18.html#example-76",
  "type": "Example",
  "number": "1.8.1",
  "title": "",
  "body": "  The percentage of viewers that have watched a DVR'd show before a certain number of days have passed is give in the table below.    Time (in days)  1  2  3  4  5  6  7  8    Viewers (in %)  46  62  76  84  91  95  98  100       Why is a logarithmic model best here? Use a scatterplot to help you develop your reasons.    Find the model corresponding to your answer in part (a). Write the complete model.    Explain why the exponential model does not work.          Concave down only + increasing  The appearance of a vertical asymptote would be telling, but it's not entirely clear in this scatterplot that that's happening.  Technically, a logarithmic model isn't best here either (because there is an asymptote at ). However, since students haven't learned logistic models at this point in the class, a logarithmic is the best that we have. It could be useful to come back and analyze this question more during\/after Section 1.10.     viewers (in %) that have watched a DVR'd show after days have passed    Answers vary  The answers should mention the characteristics of an exponential: concave up and always increasing. But the more important reason, based on the data, is that exponential growth is not displayed in the scatterplot.      "
},
{
  "id": "example-77",
  "level": "2",
  "url": "section-18.html#example-77",
  "type": "Example",
  "number": "1.8.2",
  "title": "",
  "body": "  The average length of the ears of men after a certain age is given in the table below.    Age (in years)  0  20  70    Ear Length (in inches)  2.04  2.55  3.07       Find the complete logarithmic model for the data. Do you encounter any problems?    Align the data so that age 0 corresponds to an input of 10, and find the complete logarithmic model for the data.    Use the model to find the ear length of a 45 year old man.          Yes, we encounter a domain error.  This is a good place to remind them of the vertical asymptote for a logarithmic model.     inches ear length in men, at age     2.87 inches      "
},
{
  "id": "example-78",
  "level": "2",
  "url": "section-18.html#example-78",
  "type": "Example",
  "number": "1.8.3",
  "title": "",
  "body": "  The table below shows the life expectancy for women in Ireland between 1945 and 2011    Year  1945  1955  1965  1975  1985  1995  2005  2011    Expectancy (years)  65.2  71.1  73.1  74.7  77.4  78.8  79.3  80.2       Align the data so that 1940 corresponds to an input of 0.    What type of concavity does the scatter plot suggest?    Describe the end behavior suggested by the scatterplot as the input increases without bound.    Find the complete logarithmic model for the data.    Using your model, find the year in which the life expectancy for Irish women was exactly 76.3 years.    What was the life expectancy of an Irish woman in the year 1979?          There's not much to do for this one; you might want to run the model without aligning to show them the error that shows up on the calculator then explain why we would have to align this model.    Concave down    As the input increases without bound, the life expectancy increases without bound.     years life expectancy for Irish women, years after 1940     years after 1940    76.3 years      "
},
{
  "id": "section-19",
  "level": "1",
  "url": "section-19.html",
  "type": "Section",
  "number": "1.9",
  "title": "Quadratic Functions & Models",
  "body": " Quadratic Functions & Models   Quadratic Models  The model is given by , where are constants ( ). The function has an absolute maximum if , and absolute minimum if .    A sketch of a quadratic function with a positive leading coefficient.                  is decreasing then increasing     is concave up      A sketch of a quadratic function with a negative leading coefficient.                  is increasing then decreasing     is concave down        Choosing Models  At this point, we have five models to choose from when analyzing a data set. The process of choosing a model should go as follows:     Does the scatterplot show any sort of concavity? If yes, then go to the next step. If not, try a linear model.    If the scatterplot shows concavity, does it appear to change concavity? If yes, then the model could be logistic or cubic. If not, then the model could be exponential, logarithmic, or quadratic.     If the scatterplot changes concavity, then does it have an asymptote? If yes, then the model is logistic. If no, then the model is cubic.    If the scatterplot does not change concavity, then look at the end behavior and for asymptotes. If there is an asymptote at , then the model is logarithmic; if it is at , then the model is exponential; if there is no asymptote, then it is quadratic.       If it is still difficult to determine between exponential and quadratic, then use the method of second differences (described below). If second differences gives roughly constant values, then the model is quadratic; if it does not, then, it is exponential.    If in doubt, one can develop multiple models and compare the fit of each model against the data.    It is never a bad idea to apply common sense to models.       Draw a decision tree\/diagram for choosing a model.    This is left to students  I recommend students do this one for themselves. It's helpful to have, and writing it themselves will hopefully make it stick better.      The table below shows the profit (in millions of dollars) that American Airlines makes on tickets between Dallas and Chicago when tickets are set at a certain price:    Ticket Price (dollars)  200  250  300  350  400  450    Profit (million dollars)  3.08  3.52  3.76  3.82  3.7  3.38       Give two reasons why a quadratic model is more appropriate than a log or exponential model.    Find a quadratic model for the data.    Why doesn't the airline profit increase as the ticket price increases?    At what price does the airline begin posting a loss?          Change in direction and only concave down  It's worthwhile to remind students that \"change in direction\" and \"has a vertex\/maximum\/minimum\" are considered equivalent when we ask these kinds of questions on the test.     million dollars profit from ticket sales, when tickets are dollars  I keep forgetting to put some kind of proviso like \"use 4 decimal places in your model\". It should exist.    Higher ticket prices means less people purchase tickets, so there's less profit.    $660.75         The table below gives the braking distance required for a vehicle to come to a complete stop, given the initial velocity of the vehicle.    Speed (mph)  10  20  30  40  50  60  70  80  90    Distance (feet)  27  63  109  164  229  304  388  481  584       Find the second differences of the data above.    Find a quadratic model for stopping distance.    What other factors besides the initial speed would impact the stopping distance?    What speed is the vehicle moving if its braking distance is exactly 412 feet? Round your answer to two decimal places, if needed.          10, 9, 10, 10, 9, 9, 10  Ideally you'd be writing the second differences in some sort of row-by-row pattern; I can't figure out how to make it show up here, though.     feet distance required to stop, when initial velocity is miles per hour    Answers vary    72.71 mph         The ratios of public school students to instructional computers with Internet access for years between 1998 and 2004 are given below:    Year  1998  1999  2000  2001  2002  2003  2004    Ratio  9.1  6.1  3.6  2.4  1.8  1.4  1.8       Align the input so that 1998 corresponds to an input of 0.    Write the complete quadratic model for the data.    Write the complete exponential model for the data.    Which model best fits the data: (b) or (c)?    Give two reasons why an exponential model might be best for this data.          Align the input so that 1998 corresponds to an input of 0.     gives the ratio of public school students to instructional computers with internet access, years after 1998     gives the ratio of public school students to instructional computers with internet access, years after 1998    Based on second differences, the exponential model.    1) Second differences aren't consisent, and 2) The graph is concave up only        "
},
{
  "id": "example-79",
  "level": "2",
  "url": "section-19.html#example-79",
  "type": "Example",
  "number": "1.9.1",
  "title": "",
  "body": "  Draw a decision tree\/diagram for choosing a model.    This is left to students  I recommend students do this one for themselves. It's helpful to have, and writing it themselves will hopefully make it stick better.   "
},
{
  "id": "example-80",
  "level": "2",
  "url": "section-19.html#example-80",
  "type": "Example",
  "number": "1.9.2",
  "title": "",
  "body": "  The table below shows the profit (in millions of dollars) that American Airlines makes on tickets between Dallas and Chicago when tickets are set at a certain price:    Ticket Price (dollars)  200  250  300  350  400  450    Profit (million dollars)  3.08  3.52  3.76  3.82  3.7  3.38       Give two reasons why a quadratic model is more appropriate than a log or exponential model.    Find a quadratic model for the data.    Why doesn't the airline profit increase as the ticket price increases?    At what price does the airline begin posting a loss?          Change in direction and only concave down  It's worthwhile to remind students that \"change in direction\" and \"has a vertex\/maximum\/minimum\" are considered equivalent when we ask these kinds of questions on the test.     million dollars profit from ticket sales, when tickets are dollars  I keep forgetting to put some kind of proviso like \"use 4 decimal places in your model\". It should exist.    Higher ticket prices means less people purchase tickets, so there's less profit.    $660.75      "
},
{
  "id": "example-81",
  "level": "2",
  "url": "section-19.html#example-81",
  "type": "Example",
  "number": "1.9.3",
  "title": "",
  "body": "  The table below gives the braking distance required for a vehicle to come to a complete stop, given the initial velocity of the vehicle.    Speed (mph)  10  20  30  40  50  60  70  80  90    Distance (feet)  27  63  109  164  229  304  388  481  584       Find the second differences of the data above.    Find a quadratic model for stopping distance.    What other factors besides the initial speed would impact the stopping distance?    What speed is the vehicle moving if its braking distance is exactly 412 feet? Round your answer to two decimal places, if needed.          10, 9, 10, 10, 9, 9, 10  Ideally you'd be writing the second differences in some sort of row-by-row pattern; I can't figure out how to make it show up here, though.     feet distance required to stop, when initial velocity is miles per hour    Answers vary    72.71 mph      "
},
{
  "id": "example-82",
  "level": "2",
  "url": "section-19.html#example-82",
  "type": "Example",
  "number": "1.9.4",
  "title": "",
  "body": "  The ratios of public school students to instructional computers with Internet access for years between 1998 and 2004 are given below:    Year  1998  1999  2000  2001  2002  2003  2004    Ratio  9.1  6.1  3.6  2.4  1.8  1.4  1.8       Align the input so that 1998 corresponds to an input of 0.    Write the complete quadratic model for the data.    Write the complete exponential model for the data.    Which model best fits the data: (b) or (c)?    Give two reasons why an exponential model might be best for this data.          Align the input so that 1998 corresponds to an input of 0.     gives the ratio of public school students to instructional computers with internet access, years after 1998     gives the ratio of public school students to instructional computers with internet access, years after 1998    Based on second differences, the exponential model.    1) Second differences aren't consisent, and 2) The graph is concave up only      "
},
{
  "id": "section-110",
  "level": "1",
  "url": "section-110.html",
  "type": "Section",
  "number": "1.10",
  "title": "Logistic Functions & Models",
  "body": " Logistic Functions & Models   Logistic Functions  A logistic has the following descriptions:     Algebraically: A logistic model has an equation of the form where are constants and is the carrying capacity or limiting value     Graphically: See below; logistics have two horizontal asymptotes at and        Logistic Models  For logistic models, we have the following information:    A sketch of a logistic function with a .                  is always increasing     is concave up then down      A sketch of a logarithmic function with .                  is always decreasing     is concave down then up        Examples    The number of NBA players taller than a given height are listed in the table below.    Height (in inches)  Number of Players  Height (in inches)  Number of Players    68\"  490  80\"  203    70\"  487  82\"  86    72\"  467  84\"  13    74\"  423  86\"  2    76\"  367  88\"  1    78\"  293       Using the scatterplot, explain why a logistic model is best for this data.    Align the data so that 68'' corresponds to an input of 0, and find the complete logistic model.    Describe (using limit notation) the end behavior of the model as height increases.          It looks like the concavity changes and there are horizontal asymptotes  Eventually we'll have two models with concavity changes (logistic and cubic), so \"concavity change\" isn't sufficient to determine a logistic; whether you add the note about the asymptotes or not is up to you.     players in the NBA whose height is inches taller than 68 inches  It's worthwhile to do a handful of things here: 1) logistic models take calculators a long time to run, 2) the calculator will display the coefficients out of order from how we define the model- it shows alphabetical order rather than reading order, 3) just like with exponential models, we need to align because exponentials get large very fast and the calculator has a tough time with larger numbers              The narrow band residential internet access, as a percentage of total residential internet access, is given below.    Year  Narrow Band Users (in %)  Years  Narrow Band Users (in %)    2000  89.4  2008  9.6    2001  80.7  2009  7.3    2002  70.9  2010  4.3    2003  58.3  2011  3    2004  45.9  2012  2.5    2005  35.3  2013  1.5    2006  21.5  2014  1.0    2007  12.2       Based on the scatterplot, explain why a logistic model is best.    Align the model so that 2000 corresponds to an input of 0. Find the complete logistic model for the data.    Write the equations for the two asymptotes.    Estimate the location of the inflection point          Concavity change + horizontal asymptotes     percent, narrow band internet users as a percentage of total residential internet access, years after 2000     and     The inflection point is around .  Students might recall (or you could tell them) that the inflection point on a logistic occurs at ; solver gives .        "
},
{
  "id": "p-790",
  "level": "2",
  "url": "section-110.html#p-790",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "carrying capacity limiting value "
},
{
  "id": "example-83",
  "level": "2",
  "url": "section-110.html#example-83",
  "type": "Example",
  "number": "1.10.1",
  "title": "",
  "body": "  The number of NBA players taller than a given height are listed in the table below.    Height (in inches)  Number of Players  Height (in inches)  Number of Players    68\"  490  80\"  203    70\"  487  82\"  86    72\"  467  84\"  13    74\"  423  86\"  2    76\"  367  88\"  1    78\"  293       Using the scatterplot, explain why a logistic model is best for this data.    Align the data so that 68'' corresponds to an input of 0, and find the complete logistic model.    Describe (using limit notation) the end behavior of the model as height increases.          It looks like the concavity changes and there are horizontal asymptotes  Eventually we'll have two models with concavity changes (logistic and cubic), so \"concavity change\" isn't sufficient to determine a logistic; whether you add the note about the asymptotes or not is up to you.     players in the NBA whose height is inches taller than 68 inches  It's worthwhile to do a handful of things here: 1) logistic models take calculators a long time to run, 2) the calculator will display the coefficients out of order from how we define the model- it shows alphabetical order rather than reading order, 3) just like with exponential models, we need to align because exponentials get large very fast and the calculator has a tough time with larger numbers           "
},
{
  "id": "example-84",
  "level": "2",
  "url": "section-110.html#example-84",
  "type": "Example",
  "number": "1.10.2",
  "title": "",
  "body": "  The narrow band residential internet access, as a percentage of total residential internet access, is given below.    Year  Narrow Band Users (in %)  Years  Narrow Band Users (in %)    2000  89.4  2008  9.6    2001  80.7  2009  7.3    2002  70.9  2010  4.3    2003  58.3  2011  3    2004  45.9  2012  2.5    2005  35.3  2013  1.5    2006  21.5  2014  1.0    2007  12.2       Based on the scatterplot, explain why a logistic model is best.    Align the model so that 2000 corresponds to an input of 0. Find the complete logistic model for the data.    Write the equations for the two asymptotes.    Estimate the location of the inflection point          Concavity change + horizontal asymptotes     percent, narrow band internet users as a percentage of total residential internet access, years after 2000     and     The inflection point is around .  Students might recall (or you could tell them) that the inflection point on a logistic occurs at ; solver gives .      "
},
{
  "id": "section-111",
  "level": "1",
  "url": "section-111.html",
  "type": "Section",
  "number": "1.11",
  "title": "Cubic Functions & Models",
  "body": " Cubic Functions & Models   Cubic Models    A sketch of a cubic function with a positive leading coefficient.                  is increasing, decreasing, then increasing     is concave down then up      A sketch of a cubic function with a negative leading coefficient.                  is decreasing, increasing, then decreasing     is concave up then down        Examples    A car company's profit on SUV's is given below.    SUV's sold (in millions)  10  20  30  40  50  60  70    Profit (in trillion dollars)  0.9  3.1  4.3  5.2  5.8  6.4  6.9       Use the scatterplot to determine the best model for the data. Give two reasons for your choice.    Write the complete model.    Find the profit when 37 million SUV's are sold. Write a sentence of interpretation for your answer.          Concave down only + always increasing + (potential) asymptote at means logarithmic     trillion dollars profit from the sale of million SUVs     . When 37 million SUVs are sold, he profit from sales of SUVs is 4.9 trillion dollars         A manufacturing company recorded the production of toys when a certain amount of capital is invested in the production run.    Capital Invested (in million dollars)  6  18  24  30  42  48    Units Produced (in billions)  19  38  42  45  60  77       Use the scatterplot to determine the best model for the data. Give two reasons for your choice.    Write the complete model.    Find the capital needed to produce 50 billion units. Write a sentence interpreting your answer.          Change in concavity + no asymptotes\/unbounded end behavior means cubic     billion units of toys produced when million dollars are invested in production.     million dollars. When 35.78 million dollars are invested, 50 billion units will be produced.        "
},
{
  "id": "example-85",
  "level": "2",
  "url": "section-111.html#example-85",
  "type": "Example",
  "number": "1.11.1",
  "title": "",
  "body": "  A car company's profit on SUV's is given below.    SUV's sold (in millions)  10  20  30  40  50  60  70    Profit (in trillion dollars)  0.9  3.1  4.3  5.2  5.8  6.4  6.9       Use the scatterplot to determine the best model for the data. Give two reasons for your choice.    Write the complete model.    Find the profit when 37 million SUV's are sold. Write a sentence of interpretation for your answer.          Concave down only + always increasing + (potential) asymptote at means logarithmic     trillion dollars profit from the sale of million SUVs     . When 37 million SUVs are sold, he profit from sales of SUVs is 4.9 trillion dollars      "
},
{
  "id": "example-86",
  "level": "2",
  "url": "section-111.html#example-86",
  "type": "Example",
  "number": "1.11.2",
  "title": "",
  "body": "  A manufacturing company recorded the production of toys when a certain amount of capital is invested in the production run.    Capital Invested (in million dollars)  6  18  24  30  42  48    Units Produced (in billions)  19  38  42  45  60  77       Use the scatterplot to determine the best model for the data. Give two reasons for your choice.    Write the complete model.    Find the capital needed to produce 50 billion units. Write a sentence interpreting your answer.          Change in concavity + no asymptotes\/unbounded end behavior means cubic     billion units of toys produced when million dollars are invested in production.     million dollars. When 35.78 million dollars are invested, 50 billion units will be produced.      "
},
{
  "id": "section-21",
  "level": "1",
  "url": "section-21.html",
  "type": "Section",
  "number": "2.1",
  "title": "Measures of Change over an Interval",
  "body": " Measures of Change over an Interval   Formulas  Let be a function with input values such that .   Change       Percent Change       Average Rate of Change (AROC)      When giving interpretations, we have four considerations:     When is this event happening? Be sure to specify the interval.    What is happening? Specify the quantity which is changing.    How is it changing? Specify whether or not the quantity is increasing or decreasing.    By how much is it changing? Include proper units.       If denotes the number of students enrolled in Math 1743 and is the number of academic years after the 2000-2001 academic year, interpret the expression .    10 years after the 2000-2001 academic year, the number of students enrolled in Math 1743 was 1552 students      Examples    The average temperature in Norman during the last week of September is given in the table below:    Time  Temperature ( F)  Time  Temperature ( F)    7am  49  1pm  80    8am  58  2pm  80    9am  66  3pm  78    10am  72  4pm  74    11am  76  5pm  69    noon  79  6pm  62       Give the average rate of change in temperature between 11am and 4pm. Write a sentence interpreting your result.    Find the percent change in temperature between 9am and noon, and round your answer to the nearest hundredth. Write a sentence interpreting your result.          AROC is F per hour. Between 11am and 4pm, the average temperature in Norman decreased by F per hour  For (a) and (b), you will want to stress the verb tense in the \"how\" statement. When we interpret instantaneous rates of change, the tense changes to present progressive.    The percent change is 19.7%. Between 9am and 12pm, the average temperature in Norman increased by 19.7%.         Airtran posted a revenue of $603.7 million dollars in the second quarter of 2009 compared with revenue of $693.4 million during the second quarter of 2008. Write a sentence interpreting each of the following:     Find the change in revenue between the second quarter of 2008 and the second quarter of 2009.    Find the percent change between the second quarter of 2008 and second quarter end of 2009.    Find the average rate of change between the second quarter of 2008 and the second quarter of 2009.          Between the second quarter of 2008 and the second quarter of 2009, Airtran's revenue increased by 89.7 million dollars    Between the second quarter of 2008 and the second quarter of 2009, Airtran's revenue increased by 14.86%.    Between the second quarter of 2008 and the second quarter of 2009, Airtran's revenue increased by 89.7 million dollars per year.         The American Indian, Eskimo, and Aleut populations in the United States was 362 thousand in 1930, and 4.5 million in 2005. Write a sentence interpreting each of the following, and round to two decimals if necessary:     Find the change in population between 1930 and 2005.    Find the percent change between between 1930 and 2005.    Find the average rate of change between 1930 and 2005.          Between 1930 and 2005, the American Indian, Eskimo, and Aleut populations in the US increased by 4.14 million people.  Be mindful that the unit in 1930 is \"thousand people\" not \"million people\", so you have to do some conversion    Between 1930 and 2005, the American Indian, Eskimo, and Aleut populations in the US increased by 1143.65%.    Between 1930 and 2005, the American Indian, Eskimo, and Aleut populations in the US increased by 0.06 million people per year.         OU Parking Services commissioned a projection of its profit (in thousands of dollars) when commuter parking passes are set certain prices.    Price (dollars)  200  250  300  350  400  450    Profit (thousand dollars)  2080  2520  2760  2820  2700  2380       Find a model for the data.    Calculate the average rate of change of profit when the parking pass price rises from $200 to $350.    Calculate the average rate of change of profit when the parking pass price rises from $350 to $450.    Calculate the percent change for parts (b) and (c).           thousand dollars projected profit for OU parking when commuter parking passes are dollars.    4.93 thousand dollars profit per dollar    -4.4 thousand dollars profit per dollar    In (b), it's 35.58%; in (c), it's -15.60%.         The CDC modeled the number of Zika cases diagnosed in Brazil between January and July of 2016 with the formula where is the number of months since January 2016.     Calculate and write a sentence of interpretation for the average rate of change in the number of Brazilians diagnosed with Zika between January 2016 and July 2016.    Calculate the percentage change in part (a).          Between January 2016 and July 2016, the number of Zika cases diagnosed in Brazil increased by 0.12 thousand cases per month.    26.53%         The function represents the number of students in line at Chick-Fil-A, hours after 11:00am, and represents the number of students in line at Quizno's, hours after 11:00am. Write a sentence interpreting the following expressions.                          3 hours after 11am, the number of students in the Chick-Fil-A line was 15.    1 hour after 11am, the number of students in the Quizno's line was 8.    At 11am, the number of students in the Chick-Fil-A and Quizno's lines was 12.        "
},
{
  "id": "example-87",
  "level": "2",
  "url": "section-21.html#example-87",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": "  If denotes the number of students enrolled in Math 1743 and is the number of academic years after the 2000-2001 academic year, interpret the expression .    10 years after the 2000-2001 academic year, the number of students enrolled in Math 1743 was 1552 students   "
},
{
  "id": "example-88",
  "level": "2",
  "url": "section-21.html#example-88",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  The average temperature in Norman during the last week of September is given in the table below:    Time  Temperature ( F)  Time  Temperature ( F)    7am  49  1pm  80    8am  58  2pm  80    9am  66  3pm  78    10am  72  4pm  74    11am  76  5pm  69    noon  79  6pm  62       Give the average rate of change in temperature between 11am and 4pm. Write a sentence interpreting your result.    Find the percent change in temperature between 9am and noon, and round your answer to the nearest hundredth. Write a sentence interpreting your result.          AROC is F per hour. Between 11am and 4pm, the average temperature in Norman decreased by F per hour  For (a) and (b), you will want to stress the verb tense in the \"how\" statement. When we interpret instantaneous rates of change, the tense changes to present progressive.    The percent change is 19.7%. Between 9am and 12pm, the average temperature in Norman increased by 19.7%.      "
},
{
  "id": "example-89",
  "level": "2",
  "url": "section-21.html#example-89",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "  Airtran posted a revenue of $603.7 million dollars in the second quarter of 2009 compared with revenue of $693.4 million during the second quarter of 2008. Write a sentence interpreting each of the following:     Find the change in revenue between the second quarter of 2008 and the second quarter of 2009.    Find the percent change between the second quarter of 2008 and second quarter end of 2009.    Find the average rate of change between the second quarter of 2008 and the second quarter of 2009.          Between the second quarter of 2008 and the second quarter of 2009, Airtran's revenue increased by 89.7 million dollars    Between the second quarter of 2008 and the second quarter of 2009, Airtran's revenue increased by 14.86%.    Between the second quarter of 2008 and the second quarter of 2009, Airtran's revenue increased by 89.7 million dollars per year.      "
},
{
  "id": "example-90",
  "level": "2",
  "url": "section-21.html#example-90",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "  The American Indian, Eskimo, and Aleut populations in the United States was 362 thousand in 1930, and 4.5 million in 2005. Write a sentence interpreting each of the following, and round to two decimals if necessary:     Find the change in population between 1930 and 2005.    Find the percent change between between 1930 and 2005.    Find the average rate of change between 1930 and 2005.          Between 1930 and 2005, the American Indian, Eskimo, and Aleut populations in the US increased by 4.14 million people.  Be mindful that the unit in 1930 is \"thousand people\" not \"million people\", so you have to do some conversion    Between 1930 and 2005, the American Indian, Eskimo, and Aleut populations in the US increased by 1143.65%.    Between 1930 and 2005, the American Indian, Eskimo, and Aleut populations in the US increased by 0.06 million people per year.      "
},
{
  "id": "example-91",
  "level": "2",
  "url": "section-21.html#example-91",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  OU Parking Services commissioned a projection of its profit (in thousands of dollars) when commuter parking passes are set certain prices.    Price (dollars)  200  250  300  350  400  450    Profit (thousand dollars)  2080  2520  2760  2820  2700  2380       Find a model for the data.    Calculate the average rate of change of profit when the parking pass price rises from $200 to $350.    Calculate the average rate of change of profit when the parking pass price rises from $350 to $450.    Calculate the percent change for parts (b) and (c).           thousand dollars projected profit for OU parking when commuter parking passes are dollars.    4.93 thousand dollars profit per dollar    -4.4 thousand dollars profit per dollar    In (b), it's 35.58%; in (c), it's -15.60%.      "
},
{
  "id": "example-92",
  "level": "2",
  "url": "section-21.html#example-92",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": "  The CDC modeled the number of Zika cases diagnosed in Brazil between January and July of 2016 with the formula where is the number of months since January 2016.     Calculate and write a sentence of interpretation for the average rate of change in the number of Brazilians diagnosed with Zika between January 2016 and July 2016.    Calculate the percentage change in part (a).          Between January 2016 and July 2016, the number of Zika cases diagnosed in Brazil increased by 0.12 thousand cases per month.    26.53%      "
},
{
  "id": "example-93",
  "level": "2",
  "url": "section-21.html#example-93",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": "  The function represents the number of students in line at Chick-Fil-A, hours after 11:00am, and represents the number of students in line at Quizno's, hours after 11:00am. Write a sentence interpreting the following expressions.                          3 hours after 11am, the number of students in the Chick-Fil-A line was 15.    1 hour after 11am, the number of students in the Quizno's line was 8.    At 11am, the number of students in the Chick-Fil-A and Quizno's lines was 12.      "
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
