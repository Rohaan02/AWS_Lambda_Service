# 📝 AWS Lambda Service – Todo API

This project demonstrates how to build and run a simple **Todo API** using **AWS Lambda functions**, integrated with **Serverless Framework v3**, and executed locally with **serverless-offline**. It includes APIs to create, read, update, and delete todos, all stored in a local file `todos.json`.

---

## ⚙️ AWS CLI Setup

### 1. Install AWS CLI v2

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
```

### 2. Unzip the Installer

```bash
unzip awscliv2.zip
```

### 3. Install AWS CLI

```bash
sudo ./aws/install
```

### 4. Verify the Installation

```bash
aws --version
```

---

## 🔑 Configure AWS Credentials

Run the following command:

```bash
aws configure
```

It will prompt you to enter:

- **AWS Access Key ID**
- **AWS Secret Access Key**
- **Default region name** (e.g., `us-east-1`)
- **Default output format** (e.g., `json`)

---

## 📦 Serverless Project Setup

### Create a New Serverless Project

If the directory is empty, run:

```bash
serverless create --template aws-nodejs --path .
```

If the directory is not empty, run:

```bash
serverless
```

Select:

```nginx
AWS - Node.js - Express API
```

Follow the prompt to provide a project name.

---

## 🔁 Downgrade to Serverless v3 (Recommended)

Serverless v4 requires AWS credentials and has stricter compatibility. For easier local testing, use Serverless v3.

### 1. Uninstall Serverless v4

```bash
npm uninstall -g serverless
```

### 2. Install Serverless v3 Globally

```bash
npm install -g serverless@3
```

---

## 🧪 Install serverless-offline

This plugin allows local testing of AWS Lambda functions:

```bash
npm install --save-dev serverless-offline
```

---

## ▶️ Running the Project Locally

To run the APIs locally:

```bash
serverless offline
# or
sls offline
```

---

## 📁 Project Structure

```bash
AWS_Lambda_Service/
│
├── postTodo.js        # Handles POST /todos
├── getTodo.js         # Handles GET /todos
├── updateTodo.js      # Handles PUT /todos/:id
├── deleteTodo.js      # Handles DELETE /todos/:id
├── todosStore.js      # Contains logic for storing and managing todos
├── todos.json         # JSON file that stores all todos
├── serverless.yml     # Serverless configuration file
└── README.md          # Project documentation

```

---

## 👨‍💻 Author

Built by [Rohaan Nadeem](https://github.com/rohaan02)

```vbnet

Let me know if you’d like to include deployment instructions to AWS as well!

```
