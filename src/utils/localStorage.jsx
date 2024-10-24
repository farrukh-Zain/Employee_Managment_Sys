
const employees = [
  {
    "id": 1,
    "firstname": "Arjun",
    "email": "e@e.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Complete Design Document",
        "description": "Finish the design document for the new feature.",
        "date": "2024-10-10",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Review PRs",
        "description": "Review the pending pull requests from the team.",
        "date": "2024-10-11",
        "category": "Code Review",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Fix Bugs",
        "description": "Resolve bugs reported in the QA testing phase.",
        "date": "2024-10-12",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Vikram",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Client Meeting",
        "description": "Attend the client meeting to discuss new requirements.",
        "date": "2024-10-13",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Update Documentation",
        "description": "Update API documentation based on recent changes.",
        "date": "2024-10-14",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Test New Features",
        "description": "Run tests on the newly developed features.",
        "date": "2024-10-15",
        "category": "Testing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Deploy to Production",
        "description": "Deploy the new release to production servers.",
        "date": "2024-10-16",
        "category": "DevOps",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Optimize Performance",
        "description": "Optimize the application's database performance.",
        "date": "2024-10-17",
        "category": "Optimization",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Ravi",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Prepare Report",
        "description": "Prepare the monthly performance report for the team.",
        "date": "2024-10-18",
        "category": "Reporting",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update Website",
        "description": "Update the company website with new content.",
        "date": "2024-10-19",
        "category": "Web Development",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Lakshmi",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Research New Tools",
        "description": "Research tools to improve project management efficiency.",
        "date": "2024-10-20",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Code Review",
        "description": "Review the code for the recent merge requests.",
        "date": "2024-10-21",
        "category": "Code Review",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Run Database Migrations",
        "description": "Execute database migrations for the new release.",
        "date": "2024-10-22",
        "category": "Database",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
]


  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Approve Budget",
          "description": "Approve the budget for the upcoming quarter.",
          "date": "2024-10-23",
          "category": "Finance",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Review Compliance",
          "description": "Ensure compliance with company policies.",
          "date": "2024-10-24",
          "category": "Compliance",
          "active": false,
          "newTask": true,
          "completed": true,
          "failed": false 
        }
      ]
    }
  ];
  

  export const setLocalStorage = () =>{
        localStorage.setItem('employees', JSON.stringify(employees))
        localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

     return {employees, admin}
  };