# DB structure

- Profile
    - Firstname : string
    - Lastname : string
    - Birthdate : Date
    - Email : string
    - Free : boolean
    - Address: string
    - Range : []
    - Car => includes license
    - Social : []
        - Name
        - Image
        - Link
    - Skills : [] 
        - Title : string
        - Tools : []
            - Title
            - Examples : []
            - Percent
    - Experiences : []
        - Company : string
        - Title : string
        - Startdate : Date
        - Enddate : Date
        - Description : string
    - Educations : []
        - Name : string
        - School : string
        - Startdate : Date
        - Enddate : Date
        - Description : string
    - Portfolio : []
        - Title
        - Description
        - Images : []
    - Hobbies : []
        - Title
        - Description
        - Icon

# Project Structure

## Modules

- Home
- Admin
- Login
- Shared
    - PDF

# User Lifecycle

Simple User : Home => Login => Home
Admin User  : Home => Login => Admin => Disconnection => Home