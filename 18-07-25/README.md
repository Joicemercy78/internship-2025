*** What I Learned *** 
--- 
### Difference between GitAPI and Raw content url :
---
  - content API url:
    - The  API URL has official API endpoint, returns the file's content in a special format (Base64-encoded).
    - set of rules and protocols -to interact with a Git repository programmatically, without using the command-line.
    - Read Repository Data: Fetch file contents, get a list of branches, see commit history, and view folder structures.
    - Modify Content: Create, update, or delete files directly in a repository.
    - Manage: Create new branches, merge branches, and manage pull requests.
  - Raw Content URL:
    - It is a simpler endpoint that just gives you the raw, unformatted content of the file.
    - It is a content delivery service, strictly a read-only endpoint
---
### REST (Representational State Transfer) API:
  - architectural style for building web services.
  - set of guidelines that dictate how an API should be designed
  - Standard HTTP Methods:
      - GET    : Read	        -> Retrieves a resource. Safe and idempotent.
      - POST	 : Create	      -> Creates a new resource. Not idempotent.
      - PUT	   : Update	      -> Replaces an entire existing resource. Idempotent.
      - PATCH  : Partial      -> Update	Updates parts of an existing resource. Not necessarily idempotent.
      - DELETE : Delete	      -> Deletes a specified resource. Idempotent.
      - HEAD	 : Get Metadata	-> Retrieves headers only, no response body.
      - OPTIONS: Get Options	-> Lists the allowed HTTP methods for a resource.
  - Stateless:
      - Each request from a client to the server is self-contained, does not store client information.
  - Representations:
      - The data is transferred in a standard format, JSON , XML(tag structured), plain text or csv, YAML(human readable formate.
---
### cURL:
  - low-level command-line tool for making raw requests to any server.
  - To test, debug APIs.
  - eg (curl -X GET 'https://api.github.com/repos/...') 
---
### Synchronous:
  - Tasks are executed one after the other in a strict, sequential order. 
---    
### Asynchronous:
  - long-running task (like fetching data) and then immediately moves on to the next task without waiting.
  - async tells JavaScript, "it contains asynchronous task don't block the rest of the program while it runs."
  - await tells JavaScript, "For specific line of code, please wait until the result is ready before moving on to the next line."
- atob() method: is a built-in JavaScript function used for decoding a string that has been encoded in Base64.
- promise :
    - Pending state
    - Fulfilled (Resolved):  The promise is complete, and it holds the value you wanted.
    - Rejected: The promise is broken, and it holds the reason for the failure.
---
### Postman:
  - used for API development, testing, and documentation.
  - used to make working with APIs easier than using a command-line tool (curl) or writing test code in JavaScript.
