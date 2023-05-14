import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import schema from './schema/schema.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}))

app.listen(port, console.log(`Server running on port ${port}`))


// Yes, you can make your remote repository look exactly like your local repository. You can do this by pushing all the changes you have made locally to the remote repository. Here are the steps you can follow:

// 1. First, navigate to your local repository.
// 2. Then, set the URL of your remote repository using the following command:
// ```
// git remote set-url origin <remote_repo_URL>
// ```
// 3. Finally, push all the changes you have made locally to the remote repository using the following command:
// ```
// git push -u origin --all
// ```

// This will push all your changes to the remote repository and make it look exactly like your local repository.

// I hope this helps! Let me know if you have any other questions.

// Source: Conversation with Bing, 5/13/2023
// (1) Connect a local repository with a remote repository - Stack Overflow. https://stackoverflow.com/questions/11188801/connect-a-local-repository-with-a-remote-repository.
// (2) git - Reset local repository branch to be just like remote repository .... https://stackoverflow.com/questions/1628088/reset-local-repository-branch-to-be-just-like-remote-repository-head.
// (3) How to add a local repo and treat it as a remote repo. https://stackoverflow.com/questions/10603671/how-to-add-a-local-repo-and-treat-it-as-a-remote-repo.