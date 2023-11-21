The Vite + React application availble/deployed at 
# https://ttt-assessment.vercel.app/


## Explaination

1. This Website Consists of 1 page(profile) and 2 componets(Navbar, UserDetails), and used Modular CSS for Styling And for Responsive design.

2. ### Pages : Profile 
    - In Profile Page I Used  predeifned hooks `useState` and `UseEffect` for State Management(data).
    - written a **Asynchrounous** function to fetch data using **Axios** from **public/rawData/data.json** file.
        
        ```javascript
        const fetchData = async () => {
            try {
                const response = await axios.get("rawData/data.json");
                const data = response?.data;
                setData(data);
            } catch (error) {
                console.log({ error: error.message });
            }
        };
        ```
    - After fetching, Stored the data in a state.
    - pass this data to [**User**](https://github.com/zeo4143/TTT-Assessment/blob/master/src/Components/Profile/User/User.jsx) & [**Posts**](https://github.com/zeo4143/TTT-Assessment/blob/master/src/Components/Profile/Posts/Posts.jsx) components which are located at **Compnents/Profile** directory.
    - ~~used [**chakra-ui/react**](https://chakra-ui.com/) for border.~~(Removed).
    

3. ### User - Component
    - In this Component data is getting from props and rendering safely by using [*optional Chaining*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) **?.** and with Conditional Operator.
    - written a fuction **count** which converts the no.of followers & following into *K's and M's* if they are >10,000.
        
        ```javascript
        const count = (value) =>
            value >= 1000000
            ? `${(value / 1000000).toFixed(1)}M`
            : value >= 10000
            ? `${(value / 1000).toFixed(1)}K`
            : value?.toString();
        ```

4. ### Posts - Component
    - Here also same data is getting from props
    and rendering them safely by using **?.** and with Conditional Operator.
    - written a fuction **views** which converts the no.of users viewed the post into *K's and M's* if they are >10,000.
        
        ```javaScript
        const views = (views) =>
            views >= 1000000
            ? `${(views / 1000000).toFixed(1)}M`
            : views >= 10000
            ? `${(views / 1000).toFixed(1)}K`
            : views?.toString();
        ```

    - written one more function which convert *timestamp* into **Date** and compare it with current date, if the timestamp in past years it fetches *complete date(Month Date, Year)*
    else *only month & year*.
        
        ```javaScript
        const date = (date) =>
            new Date(date).getFullYear() === new Date().getFullYear()
                ? new Date(date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                })
                : new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
            });
        ```

    - The Content inside the post limited to 5 lines using CSS (line clamp, display : -webkitBox with orientation vertical).
        ```CSS
        .Content {
            color: var(--primary-color);
            line-height: 1.5em;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        ```

5. ### Navbar  - Component
    - Its simple UI using modular CSS. Everything is Static inside it.



 






