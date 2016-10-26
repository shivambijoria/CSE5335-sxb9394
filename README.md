>>####a. What server framework did you choose and why? 
I chose Nodejs,because it is fast:it uses v8 engine which compiles and executes javascript
extremely fast, npm allows easy management of modules,and
as i am already familiar with javascript.Hosting is easy,as well heroku supports
it.
>>####b. What client framework did you choose and why? 
I chose JQuery because it is easy to use and it requires less lines of code for a particular feature in comparison
great documentation and opensource community support,ajax support which helps to perform actions without reloading the whole 
page.
>>####c.What aspect of the implementation did you find easy, if any, and why? 
All the aspects i found easy,starting the nodejs server,initializing and writing the server code to deliver json data.
And client side programming to get the data and represent it in list,table,chart and map form was very easy because of 
d3js and google api's. 
>>####d.What aspect of the implementation did you find hard, if any, and why? 
Actually i found,no part to be challenging.
>>####e.What components OTHER than your client and server framework did you install, 
if any, and if so, what is their purpose for your solution? 
No,other components was needed to install separately other than modules like express which were mentioned in the package.json.
These modules were installed by executing command-npm install.But generally all the required packages like express are read from package.json and installed automatically 

>>####f.What Ubuntu commands are required to deploy and run your server? 
Commands to deploy on github
git init
git add .
git commit -m "message while commiting"
git remote add origin https://github.com/shivambijoria/CSE5335-sxb9394/git
git push origin master

Then connect the github-repository to heroku app. and then deploy it and open the following url:
https://cse5335-sxb9394.herokuapp.com/
