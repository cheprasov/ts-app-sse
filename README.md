# Home Task APP SSE

## About

The code is based on a small exercise

how to run
```
cd server
npm i
npx ts-node ./server.ts
```

Then open http://localhost:3000/ in your browser

## About me

https://cv.cheprasov.com

## What need to do and what I have not done, because it is a test exercise.

**Front-End side:**
1. I created really super simple FE Client that implements all required actions by test.
2. Proper FE should be implemented.

**Back-End side:**
1. Code and API should be covered by tests.
2. Different `todo` things in code should be implemented.
3. For scalability (not implemented):
    - it is better to use separate database/storage (like Redis).
    - or created in-memory Storage should be moved to separate microservices
4. Mutex could be implemented for avoiding race conditions on I/O operations (disk, network, DB), or transaction/atomic operations for databases.
5. CRUD response codes, response data format and the REST API could be updated according business needs.
6. Should be prepared ENV params in the App and `.Dockerfile` for building docker container.
7. Logger / Metrics should be added for collecting possible error and monitoring the App.
8. Good to have a linter for checking code style.
9. Generator for documenting API could be implemented based on @decorators.

## Original Test Task:
The only requirement is that you use Node and Typescript. You can use whatever frameworks and libraries you feel are best, or are most comfortable with. 

**Requirements:**

- Create a server that implements an in-memory database and provides a CRUD endpoint as well as an SSE endpoint.
- Create an application that sends CRUD requests to the server and displays changes from the SEE endpoint.
1. Multiple users of the application should see each other's changes via the SSE endpoint.
2. Your solution should be robust and follow best practices. We expect to see the same techniques and approaches that you would use in a real project.
3. Please include sensible and appropriate tests.

**Deliverables:**

Supply your efforts in a zipped Git repository, complete with the .git folder so that we can review your commit history, along with full documentation to set it up and run it on a Linux system. We will follow the instructions to the letter. If particular system components or services are required, include notes about their setup and configuration.

Please do not publish your project on GitHub or any other provider.

Please include any notes that you would like us to read, along with answers to the following questions:
- How long did you spend on the coding test?
- Did you manage to cover everything that you wanted to?
- What would you add to your solution if you had more time?
- Would you choose different technologies if this were to become a reliable enterprise system? Why? Or, why not?


