Steps for execution

Note: Make sure you have following installed on your machine.
1. Nodejs, npm
2. mongodb
3. If you get any error for nestjs,  execute below command to install nestjs-cli
```
npm i -g @nestjs/cli
```


1. Clone the repository and execute below command

```
  npm install 
```

2. Execute below command to start the service

```
  npm start
```

3. Open browser with the link  http://localhost:3001/api

    You'll be able to see the swagger UI
    
4. Create user with the below payload (POST)

```
   {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@doe.com",
    "phone": 23454645654
  } 

```

You'll see the below response


![image](https://user-images.githubusercontent.com/49985443/166144600-e5094e9c-4862-4fe5-a968-c68c01e59453.png)

5. Create product with below payload (POST)

```
{
  "product_title": "Dining Table",
  "description": "Dining Table with Wooden Finish",
  "price": 1000
}
```

Create 2 or more products so that you will have a variety while creating an order


6. Create order with below payload (POST)

```
{
  "products": [
  {
    "product": "626e74ec28403c99755c5bfb",
    "product_title": "Dining Table",
    "description": "Dining Table with Wooden Finish",
    "price": 1000
  }  
  ],
  "address": "USA",
  "user": "626e745628403c99755c5bf8"
}
```

7. You can now try other apis for Read, Update and Delete by providing the _id.
