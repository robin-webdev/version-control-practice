## Why I made this Repository.
I already knew Git and GitHub, which I learned about 2 years ago. However, I didn't use it much except for pushing my projects to GitHub. To create a solid foundation, I created this repository where I will complete a basic version control challenge specified below.


# Git & GitHub Version Control Challenge

## 🎯 Challenge Structure
---


### Phase 1: Setup & Initialization
-  Initialize a Git repository with proper `.gitignore`
-  Create meaningful initial commit
-  Set up GitHub repository with professional documentation

---

### Phase 2: Feature Development & Branching

Create and develop on multiple feature branches simultaneously:

| Branch Name | Purpose | Commits |
|-------------|---------|---------|
| `feature/user-auth` | User authentication system | 3-4 |
| `feature/dashboard` | Dashboard interface | 3-4 |
| `feature/api-integration` | Backend API integration | 3-4 |
| `bugfix/login-error` | Login functionality bug fix | 2-3 |

**Workflow:**
1. Create each branch from `main`
2. Make 3-4 meaningful commits per branch
3. Use conventional commit messages:
   - `feat:` for features
   - `fix:` for bug fixes
   - `style:` for styling changes
   - `docs:` for documentation
   - `test:` for tests
 
**Example Commits:**



**Key Concepts:**
- Branch creation and switching
- Feature isolation
- Conventional commit messages
- Branch naming conventions

---

### Phase 3: Merge & Conflict Resolution

Master merging strategies and resolving merge conflicts:

1. **Create Intentional Conflicts**
   - Modify same files on different branches
   - Attempt merge to trigger conflicts

2. **Resolve Conflicts Manually**
   - Understand both changes
   - Make conscious decisions on which code to keep
   - Mark conflicts as resolved with `git add`

3. **Complete Merge with Professional Commit**


**Key Concepts:**
- Merge conflicts and resolution strategies
- Merge commits
- Conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)

---

### Phase 4: Advanced Git Techniques

| Technique | Challenge | Learning Outcome |
|-----------|-----------|------------------|
| **Rebase** | Rebase `feature/dashboard` onto `main` | Non-linear history management |
| **Squash Commits** | Combine multiple commits before merging | Clean commit history |
| **Stash** | Save work without committing and switch branches | Work-in-progress management |
| **Cherry-pick** | Pick specific commits and apply to another branch | Selective commit application |
| **Amend Commits** | Fix last commit message or content | Commit correction |
| **Interactive Rebase** | Reorder, squash, and edit commits | History rewriting |

**Key Concepts:**
- Rebase vs. Merge differences
- Interactive rebase workflows
- Commit history management
- Git stash operations

---

### Phase 5: GitHub Collaboration Features

#### 5.1 Pull Requests
- Push feature branches to GitHub
- Create Pull Requests with detailed descriptions
- Add meaningful PR titles and body content
- Self-review changes

#### 5.2 Issues & Linking
- Create GitHub issues for features and bugs
- Reference issues in commit messages:

- Link PRs to issues

#### 5.3 Branch Protection & Code Review
- Set up branch protection rules on `main`
- Require PR reviews before merging
- Enforce status checks

**Key Concepts:**
- Pull request workflows
- Issue tracking and linking
- GitHub branch protection
- Code review best practices

---
