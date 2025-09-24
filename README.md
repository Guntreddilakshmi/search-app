Search Filter for a List of Items  
Objective: Filter and display data based on user input.  
Task: Implement a search box for filtering names.  
Pseudo Code: 
Step 1: const [search, setSearch] = useState("")
Step 2: const items = ["Apple", "Banana", "Orange", "Mango"]
Step 3: Add input → onChange={e => setSearch(e.target.value)}
Step 4: Filter → items.filter(item => item.includes(search))
Step 5: Display filtered items using map()


