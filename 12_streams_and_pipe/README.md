- ### In Node.js, streams are a powerful feature that provides an abstraction to work with data flowing through an I/O operation. 

- ### Streams are designed to handle large amounts of data efficiently by breaking it down into smaller chunks, and they are especially useful when dealing with data that doesn't fit into memory.

### There are several types of streams in Node.js:

1. **Readable Streams:** <br>
    Readable streams are used for reading data. Examples include reading data from a file, receiving an HTTP request, or processing data from a database.

2. **Writable Streams:** <br>
    Writable streams are used for writing data. Examples include writing data to a file, sending an HTTP response, or storing data in a database.

3. **Duplex Streams:** <br>
    Duplex streams can be used for both reading and writing. An example is a TCP socket.

4. **Transform Streams:** <br>
    Transform streams are a type of duplex stream that can modify or transform the data as it is read or written. They are commonly used for tasks such as compression or encryption.

### fs.createReadStream():

``` js
const fs = require('fs');

const readStream = fs.createReadStream('example.txt', 'utf8');
```

- In this example, fs.createReadStream() returns a readable stream (readStream) for the file named "example.txt". 

- The stream can be used to read the contents of the file in chunks, and you can listen for events like 'data', 'end', and 'error' on this stream.