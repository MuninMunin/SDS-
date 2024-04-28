# SDS-TaskManagement

## Introduction
The project focuses on task management, offering users an improved solution for managing tasks with effective functions. With more visibility of the teamwork environment, the system allows users to work and communicate confidentially within the association. However, a system is not only about functionalities therefore Implement security into the system's design from the beginning is significant. 

## Defining User
1. **Admin ( of the System)**
    - Has the highest privileges monitoring the system.
2. **User**
    - Every user are promoted to be admin by default when they register account, and there privileges only to manage their projects that are created by them such as `assign tasks to other user` and `monitor on their project`.
        - **Functions**
            - Input Project names.
            - Input tasks.
            - Input deadline.
            - Input Status.
            - Assign task owner.
    - User that are invited to project created by other user, can only manage on tasks that are assigned to them.
        - **Functions**
            - View assigned Project and Tasks.
            - Update task status (Mark task done).


## Authentication
- Firebase support various provider authentication methods such as email/password, phone number, and OAuth providers like Google, Facebook, and Twitter. By depending on third party it is more reliable to enssure a security layer for users. 


## Confidentiality
- Encrypt sensitive user data both in transit and at rest. Firebase provides TLS encryption for data in transit, Hence we can use Firebase Security Rules to restrict access to sensitive data stored in Firestore, Realtime Database, or Firebase Storage.
- Implement end-to-end encryption for sensitive communications within your application, especially for messaging or file sharing functionalities.
- Utilize Firebase Cloud Functions or server-side logic to handle encryption and decryption processes, ensuring that encryption keys are securely managed.


## Intergrity
- Firebase provide strong hash algorithm in defult, before the passwords are stored in Firebase Authentication. This ensures that passwords are securely hashed and cannot be easily reversed.
- Firebase Security Rules enforce data validation and integrity constraints within your Firestore or Realtime Database, preventing unauthorized modifications or deletions.
- Implement checksums or digital signatures for critical data exchanges between client and server to detect tampering or unauthorized modifications.
- Regularly audit and monitor data access and modification logs to detect any suspicious activities that may compromise data integrity.


## Non-repudiation:
- Leverage Firebase Authentication's built-in features for logging user authentication events and actions. This creates an audit trail that can be used to trace back user activities and verify their actions.
- Implement transaction logs or event sourcing mechanisms to record all significant transactions or changes within your application.
- Utilize digital signatures or timestamping services to ensure the authenticity and integrity of important documents or transactions, providing evidence that can be used to verify the origin and validity of data or actions.
- Educate users about their responsibilities and actions within the application, emphasizing the importance of maintaining the confidentiality and integrity of their credentials and data.

![Image](Picture/aaa.png)
![Image](Picture/bbb.png)
