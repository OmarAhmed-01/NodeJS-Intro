To configure your github and add files to their repositories follow these steps

Steps: 
1. Create an account on Github https://github.com/
2. Create a new repository and give it an appropriate name
3. Go to the folder containing your files and write in the terminal "git init"
4. from your github repo page, github will provide the commands for initial configuration

<<<
    echo "# Test" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/<your_github_id>/<repo_name>.git
    git push -u origin main
>>>

Additional notes: 
if you want to add files to github
1. Cd into project directory 
2. git add .  (for all files) or git add <filename> 
3. git commit -m "<commit_message>"
4. git branch -M main
5. git push -u origin main
