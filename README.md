Starts saving for your future - use this interactive and simple yet elegant *Budget Tracker App with Voice Command!*

Budget Tracker App is a full-stack application that allows users to plan their monthly budget. 

  - Users can assign a monthly budget 

  - Users is provided a different expense categories to choose from
    - can assign specific amount for specific categories

  - Users is provided with simple yet elegant dashboard for transactions and live updates 
    - the simplicity of the dashboard will provide a great experience for users - super users friendly!
    - live update of each transaction - whether it's to add budget or to add expense
    - a specific container is assign for expenses and will live update the dollar value everytime a transaction is added - same for budget

  - Users is provided a live update monitoring pie chart
    - every transactions created/added/deducted will automatically feed the pie chart - sorted per category
    - the pie chart provides the summary of transactions per categories
    - users can click the specific categories on the pie chart and the summary of the transactions for the specific category will show on the right side on a separate table - otherwise this table is hidden
    - the pie chart shows a visual confirmation of each transactions made by the users

  - Users is provided a detailed information of their activities on a separate page - this can easily be accessed on the sidebar - otherwise the sidebar is hidden
    - there is a page for users to manage a budget for specific expense categories - "Adjust Budget" page
    - there is a page for users to view a detailed information of the transaction history = "Transaction History" page

  - Users is provided with the option of darkmode screen on the main dashboard

  - Finally, this app is capable of accepting instructions thru VOICE COMMAND -  this part of the project is on the initial working state - it is working perfectly fine for simple instructions, however, we believe that we can utilize this capability more

  - Stretch feature that we are planning to add to this app in the coming months
    - Utilize the voice command more
    - Link to actual/personal bank account 
    - Generate a separate chart for each categories
  
## Some Screenshots of the Project After Completion

1. !["MainDashboard"](https://github.com/enukeWebDev/budget-tracker/blob/main/src/asset/MainDashboard.png?raw=true)

2. !["DarkMode"](https://github.com/enukeWebDev/budget-tracker/blob/main/src/asset/DarkMode.png?raw=true)

3. !["Main"](https://github.com/enukeWebDev/budget-tracker/blob/main/src/asset/MainPage.png?raw=true)


**Stack Tech and why we choose them:**

  *PostgreSQL - for Database Management*
    - Protects data integrity
    - Highly extensible
    - Robust access-control system
    - Builds fault-tolerant environments

  *Express - for Backend-End Framework*
    - Supports many middleware
    - Makes back-end code easier and simpler to write
    - Creating efficient and robust API is quick and easy
  
  *React - for Front-End Library*
    - Allows its components to be reused saving time and effort
    - Efficient and painless way to create interactive UI's
    - It guarantees stable code
    - Provided the feature of Virtual DOM

  *Node.js - for JS Runtime Environment*
    - Highly scalable
    - Highly extensible
    - Provides vast number of libraries

  *Dependencies - available in package.json*

  **Getting Started with Create React App**

    1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

    2. In the project directory, you can run 
      - npm start
    
    3. Runs the app in the development mode
    
    4. Open (http://localhost:3000) to view it in your browser

  **Database Set-up**

# Expense Tracker API

## setup

Install dependencies with `npm install`.

## Creating The DB

Use the `psql -U development` command to login to the PostgreSQL server with the username `development` and the password `development`.

Create a database with the command `CREATE DATABASE expenses;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

```
PGHOST=localhost
PGUSER=development
PGDATABASE=expenses
PGPASSWORD=development
PGPORT=5432
```

## Seeding

Run a the development server with `npm run local`.

Both of these achieve the same result.

- Make a `GET` request to `/api/debug/reset` with `curl http://localhost:7600/api/debug/reset`.
- Use the browser to navigate to `http://localhost:3002/api/debug/reset


In the project directory, you can run:


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


