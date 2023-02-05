# User Operations Server

## All of the server methods are described here:



### Add User to database:
The method adds new user with User type to DB.

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
Authenticates the user.
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
4. Send info depents on the role with new generated user token.
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
Works according to the following algorithm:
1. Validates all necessary data;
2. Deletes subordinateId from current boss;
3. Sets new boss for dubordinate;
4. Adds subordinate for given boss;
5. Returns the object of current boss wiht new generated token.
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
