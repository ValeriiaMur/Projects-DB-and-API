# Projects-DB-and-API

Design a Projects Database and built an API with endpoints to access the data.

# Entities
A project is what needs to be done. We want to store the following data about a project:

- a unique ID.
- a name. This column is required.
- a description.
- a boolean that indicates if the project has been completed. This column is required, the default value should be false.

# A resource is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a resource:

- a unique ID.
- a name. This column is required.
- a description.
The database should not allow resources with duplicate names.

# A task is one of the steps needed to complete the project. We want to store the following data about an task.

- a unique ID.
- a description of what needs to be done. This column is required.
- a notes column to add additional information.
- a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be false.


# Requirements:

- a project can have multiple tasks.
- a task belongs to only one project.
- a project can use multiple resources. Example of resources are: computer, conference room, microphone, delivery van.
- the same resource can be used in multiple projects.
- when adding projects the client must provide a name, the description is optional.
- when adding resources the client must provide a name, the description is optional.
- when adding a task the client must provide a description, the notes are optional.
- when adding a task the client must provide the id of an existing project.
- for projects and tasks if no value is provided for the completed property, the API should provide a default value of false.
- Build an API with endpoints for:
- adding resources.
- retrieving a list of resources.
- adding projects.
- retrieving a list of projects.
- adding tasks.
- retrieving a list of tasks. The list of tasks should include the project name and project description.
