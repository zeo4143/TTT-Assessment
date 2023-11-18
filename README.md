# https://ttt-assessment.vercel.app/


## Explaination

1. This Website Consists of 1 page(profile) and 2 componets(Navbar, UserDetails), and used Modular CSS for Styling And for Responsive design.

2. ### Pages : Profile 
    - In Profile Page I Used  predeifned hooks useState and UseEffect for State Management(data).
    - written a **Asynchrounous** function to fetch data using **Axios** from **public/rawData/data.json** file
    - After fetching Stored the data in a state.
    - pass this data to **User** & **Posts** components which are located at **Compnents/Profile** directory.

3. ### User - Component
    - In this Component data is getting from props and rendering safely by using **?.** and with Conditional Operator.
    - written a fuction **count** which converts the no.of followers & following into *K's and M's* if they are >10,000.

4. ### Posts - Component
    - Here also same data is getting from props
    and rendering them safely by using **?.** and with Conditional Operator.
    - written a fuction **views** which converts the no.of users viewed the post into *K's and M's* if they are >10,000.
    - written one more function which convert *timestamp* into **Date** and compare it with current date, if the timestamp in past years it fetches *complete date(Month Date, Year)*
    else *only month & year*.

5. ### Navbar  - Component
    - Its simple UI using modular CSS. Everything is Static inside it.



 






