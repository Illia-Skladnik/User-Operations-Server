# User Operations Server
Hi!
This task is written in TS. JS files have been compiled automatically.

node_modules is already in the project.

To run code please, use next commands:
- cd src
- node app.js

Note that the user’s token is updated at each request! Try commands in Postman using Examples from description below:

It also handles all possible errors.

## All of the server methods are described here:

### Register User to database:
The method adds new user with User type to DB. Keeps the password hash created in bcrypt.

```
• Validates: bossId, name, email (correct format and presence in DB), password.

• Requires: name, email, bossId, password.

Responds:  
• New User.

Type:  
• POST.

Exapmle:
http://localhost:8080/registration/Borys/JohnsonsBaby@gmail.com/1/giveThemDamnJets
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

Exapmle:  
http://localhost:8080/authentication/splinter@gmail.com/splinter123
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
• GET

Exapmle:  
http://localhost:8080/info/c5a8e6e8-44d9-40a3-ab9e-2deefdf4e081
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
• GET

Exapmle:  
http://localhost:8080/functions/changeBoss/8166aa86-6744-476a-ba59-b69afaa9d5b6/2/7
```

### Add new admin:
Method works only for users.
Sets admin role for the user and changes token for current user.
```
• Validates: token, newAdminId;

• Requires: token, newAdminId;

Responds:  
• The object of current admin with new token.

Type:  
• GET

Exapmle:  
http://localhost:8080/functions/setAdmin/b3bb5f41-5a6d-4d00-bf56-8e73be3bebc2/2
```
