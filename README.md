# James API RESPONSE

A simple and resuable API response formatter for Node.js applications.

## INSTALLATION
```bash 
npm install @jamesadebayo/api-response
```
## USAGE
const Response = require('@jamesadebayo/api-response);
const response = new Response();

const result = response.success("User Created", {
    id: 1,
    name: "James"
});

console.log(result);

## OUTPUT
{
    success: true, 
    message: "User Created",
    data : {
        id : 1,
        name: "James"
    }
}

## ERROR RESPONSE
const result = response.error("Invalid Credentials");
console.log(result);

## OUTPUT
{
    success: false,
    message: "Invalid credentials"
}

## METHODS
```bash 
success(message, data);
```
Creates a successful response

# Parameters:
message — Response Message
data — Optional response data

```bash
error(message);
```
message — Error message
errors —  Optional