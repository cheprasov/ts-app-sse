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
