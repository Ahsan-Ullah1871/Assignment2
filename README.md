# Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

Answer: The purpose of creating a model with an interface and schema in MongoDB is defining structure for a collection .
The interface is way to interact with the model, and schema defines the data types and properties of documents.
It provides a consistent way to interact with data and enforce data integrity .

# Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

Answer: Field filtering in MongoDB allows to specify which fields will include or exclude in the returned documents.The `projection` parameter in queries is controlling the fields that will be included or excluded. By specifying the fields to include or exclude,can reduce the amount of data showing .

``
db.books.find({})
.projection({genre:1,price:1})
.limit(100)

``

Like in above query it will just show genre and price field from book collection fields.

# Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

Answer:
Instance methods is that are for some specific functionalities to a particular instance of the model. It can be used to perform custom operations on the document, like editing or deleting it.
Basically when need some custom functionalities base on any new use cases for document that time we can define separate method.

For example, can define an instance method called "totalPeople" that calculates the total people based on fields of a document. This method can be invoked on a specific document instance to perform the calculation.

``
totalPeople() {
return this.people.reduce(
(accumulator, currentValue) => accumulator + currentValue,
initialValue
);
}

``

# Question 4: How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

Answer:
Comparison operators like $ne, $gt, $lt, $gte, and $lte can be used in MongoDB queries to compare the value of a field with a specific value or any other data. Basically "$ne" (not equal), "$gt" (greater than), "$lt" (less than), "$gte" (greater than or equal to), and "$lte" (less than or equal to) are using for comparing between values .
Example:

`db.books.find({ price: { $gt:25 } })`

//It will match that documents where the "price" field is greater than 25.

`db.books.find({ rating: { $lt:90 } })`
It will match that documents where the "rating" field is less than 3.

`db.books.find({ publicationYear: { $gt:2020 } })`
It will match that documents where the "publicationYear" field is greater than or equal to 2020.

`db.books.find({ price: { $lte:25 } })`
It will match that documents where the "price" field is less than or equal to 25.

# Question 5: What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

Basically “$in” and “$nin” are using for arrays . The "$in" operator matches values against an array of values, whereas the "$nin" operator excludes entries from a specified array. These are examples:

`db.practice.find({friends:{$in:["Mezbaul", "Rakib"]}})`

This query will match documents where the "friends" field is "Mezbaul","or "Rakib".

`db.practice.find({friends:{$nin:["Mezbaul", "Rakib"]}})`
This query will match documents where the where the "friends" field is not "Mezbaul","or "Rakib".

We are using this operator when need to match or exclude documents based on many values in array.

