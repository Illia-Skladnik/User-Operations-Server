# User Operations Server
Hi! Here are some features of the server:

- This server is written in TS.
- It is connected to MongoDB.
- It handles all possible errors.
- It stores user passwords as a hash.
- It creates a user token during each interaction with the DB.
- It contains test method getAll to check all data.
- It contains CORS.

To run code please, use next commands:
- npm i
- cd src
- npx ts-node app.ts

Note that the user’s token is updated at each request! Try commands in Postman using Examples from description below:

## All of the server methods are described here:

### Register User to database:
The method adds new User to DB. Keeps the password hash created in bcrypt and creates new token for created user.

```
• Validates: bossId, name, email (correct format and presence in DB), password.

• Requires: name, email, bossId, password.

Responds:  
• New User.

Type:  
• POST.

URL:
• http://localhost:8080/registration

Body:
• Content-Type: JSON
{
  "name": "Borys",
  "email": "JohnsonsBaby@gmail.com",
  "bossId": "63f89d363b8638dc16b79b47",
  "userPass": "giveThemDamnJets"
}

```

### User authentication:
Authenticates the user using bcrypt.

If you wanna try how authentication works, here are the passwords to check the method:

- Splinter: splinter123
- Donatello: donatello123
- Michelangelo: michelangelo123
- Raphael: raphael123
- Leonardo: leonardo123
- Shredder: shredder123
- Krang: krang123
- April O'Neil: apriloneil123
- Casey Jones: caseyjones123
- Slash: slash123

```
• Validates: email (if there is current email in DB). 

• Requires: email, password

Responds:  
• True / False

Type:  
• GET

URL:  
• http://localhost:8080/authentication

Body:
• Content-Type: JSON
{
  "email": "splinter@gmail.com",
  "userPass": "splinter123"
}
```

### Get info:
Works according to the following algorithm:
1. Validates current token;
2. Checks current user's role;
3. Generates new token;
4. Sends info depents on the role with new generated user token.
5. Rewrites new token in DB.
```
• Validates: token.

• Requires: token.

Responds:  
• Info dependents on the role

Type:  
• POST

URL:  
• http://localhost:8080/info

Body:
• Content-Type: JSON
{
  "token": "c5a8e6e8-44d9-40a3-ab9e-2deefdf4e081"
}
```

### Change user's boss:
Method works for boss and admin.
Works according to the following algorithm:
1. Validates all necessary data;
2. Deletes subordinateId from current boss;
3. If new boss is User, method changes its role to boss.
4. Sets new boss for subordinate;
5. Adds subordinate for given boss;
6. Returns the object of current boss wiht new generated token.
7. Rewrites new token of current boss in DB.
```
• Validates: token, subordinateId, newBossId;

• Requires: token, subordinateId, newBossId;

Responds:  
• The object of current boss with new token.

Type:  
• POST

URL:  
• http://localhost:8080/functions/changeBoss

Body:
• Content-Type: JSON
{
  "token": "48351e27-4e71-4b58-96ef-fbe3790baa7a",
  "subordinateId": "63f8b3cd288b734cc711fe1c",
  "newBossId": "63f8cfaa4b9e6dd95d9e44da"
}

```

### Add new admin:
Only admin can set role 'admin'.
Sets admin role for the user and changes token for current user.
```
• Validates: token, newAdminId;

• Requires: token, newAdminId;

Responds:  
• The object of current admin with new token.

Type:  
• POST

URL:  
• http://localhost:8080/functions/setAdmin

Body:
• Content-Type: JSON
{
  "token": "e1287c1d-1eb9-4c1c-82df-57a3cd2d4f26",
  "newAdminId": "63f8d0114b9e6dd95d9e44dc"
}
```

### Get all users Test method:
This method was created only for the convenience of obtaining information from the database.
```
Responds:  
• All users' data

Type:  
• GET

URL:  
• http://localhost:8080/getAll
```
