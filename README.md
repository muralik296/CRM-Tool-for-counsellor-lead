# CRM backend API for counsellor and lead interaction


1. The CRM account is associated with each employee/counselor of the company with their
email id.
2. There is an enquiry form which is provided to every prospective client to fill their basic details
i.e. Name, Email, Course interest etc. This form can be circulated online to capture leads or
can be shared by the counselor itself after it has connected with the student via call.
3. Inside the CRM, each employee/counselor can see all the enquiries that prospective clients
have filled. We can say these are Public Enquiries that are visible to all the
employees/counselors.
4. Against each public enquiry, the employee/counselor has a choice to “Claim” it. Claiming it will
assign the enquiry to only this counselor inside the CRM & this enquiry will no longer be
publically visible to any other employee. We can say that this is now a private enquiry.
The backend must be designed in NodeJs. You are free to use any library to design the above
system.

To start using the project, clone the repo **git clone https://github.com/muralik296/CRM-Tool-for-counsellor-lead**

Inside the project directory, create a .env file and copy paste below:  

MONGO_URI=mongodb://localhost:27017/crm
PORT=3000
TOKEN_KEY=secret

**you may change the configuration setting as you like**

After that, open project in terminal and type: (this will install all dependencies of the project)

**npm install**

After installation, type below to start service at port configured : 

**node . ** (or node index.js) 




