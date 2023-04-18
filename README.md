# AWS-Serverless-Arch-Music-App# 

Implementing Serverless Architecture on AWS

In this project, I developed a serverless music web application utilizing Amazon DynamoDB, AWS Lambda, and API Gateway for displaying all music albums in the database, adding new albums, deleting existing albums, and updating certain album attributes. To create a functional and secure music application, I used multiple AWS services during implementation. The front-end of the application, built with HTML, CSS, and JavaScript, was hosted on Amazon S3. AWS Lambda, Amazon API Gateway, and Amazon DynamoDB were used for back-end development, with DynamoDB acting as the persistence layer to store music albums. Python-based Lambda functions executed database operations, and API Gateway endpoints linked the Lambda functions to the corresponding HTTP methods. For security purposes, I employed Amazon Cognito to manage user authentication and authorization, ensuring that only authorized users could perform specific actions on the application.

CONFIGURATIONS:

1. I configured the registration process using a Cognito User Pool named "projectpool," which takes the user's username, email, and password during the signup process. After filling in the details, the user remains in an "Unconfirmed" status in Cognito and is redirected to a verification page. Here, the user enters the email and code received in the email to change their status to "Confirmed."

2. Once the user is verified with Cognito, they are redirected to the Music Dashboard page. If the email or password is invalid, the process is stopped with an appropriate error message.

3. I created a DynamoDB table named "Albums" where I added few hundreds json music albums.

4. On the Music Dashboard page, the details are fetched automatically from the DynamoDB table using the GET method and displayed in a tabular form. The page includes options for editing and deleting items, a Sign Out button, and an Add Album button. The Sign Out button redirects the user to the Sign In page. Once the user enters their credentials, they are taken back to the Music Dashboard page.

5. The Add Album button redirects the user to another page where they can input details for all five fields required for the item in the DynamoDB table. After hitting the "Add" button, a POST function is executed, which updates the table with the new item in ascending order of Rank and redirects the user back to the Music Dashboard page.

6. I created four Python Lambda functions for GET, POST, PUT, and DELETE methods, respectively. Each function performs the desired operation on the DynamoDB table. Individual functions for each method provide quick and cost-effective solutions that don't go through unnecessary methods.

7. Then, I created an API in API Gateway, named "testproject," with the CORS option enabled. A resource named "/album" was added with four methods - GET, PUT, POST, and DELETE - each configured with their respective Lambda function. The API was then deployed.

8. The configuration can be tested using Postman by selecting the method and pasting the API Gateway URL. The message should return a 200 (Success) code.

9. I developed the frontend using HTML, CSS, and JavaScript, including relevant details like the DynamoDB table name, API Gateway URL, and Cognito User Pool details.

10. I created a public S3 bucket, "testprotest," and added the files. Static Web Hosting was enabled to generate a URL for external users to access. The bucket policy includes "GetObject" and "PutObject" permissions for users to get full functionality of all the files.

In summary, the implementation of the music application showcases the benefits of serverless architectures on AWS. Utilizing AWS services such as Lambda, API Gateway, DynamoDB, and Cognito, I built a scalable, cost-effective, and secure application with ease. The use of conditional expressions in DynamoDB ensured data consistency and prevented data duplication, while API Gateway endpoints provided a user-friendly interface for users to interact with the application. Furthermore, Cognito allowed for secure authentication and authorization of users. By leveraging the advantages of serverless architectures, businesses can build complex and secure applications without the need for managing servers or infrastructure, resulting in significant cost savings and increased agility.
