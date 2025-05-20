# [Zenless Zone Zero Progress Tracker Client](https://zzz-planner.onrender.com/login)

This client is currently updated to match with Zenless Zone Zero's Version 1.7 <br />
This is the client side for the Zenless Zone Zero Progression Tracker. Like other trackers you can set your current level and your goal level and it will calculate the materials needed to reach that goal. <br />
There is also an inventory you can use so when characters/w-engines are displayed it will show how much of a material you have relative to what you need. Each character and w-engine can be tracked separately. By tracking a character or w-engine, the inventory will display how much of an item you need based on everything you are tracking, similar to the wishlist system in Monster Hunter. <br />
There is also a section for Drive Disk. You can set what drive disk you want to use to better track builds. You can also input the number of useful substats you have per disk and the client will display a percentage to represent how well built the agent is. Agents, W-engines, and Drive Disk lists can all be re-arranged by clicking and dragging to help you be better organized. <br />
Whether you want to focus on one character/w-engine at a time or farm for materials for your account as a whole, the tracker is here to help you decide what to spend energy on. <br />

# How to run locally

1.Clone the repository <br />
2.Enter the repository directory <br />
3.Run the following command: npm install <br />
4.Set up ZZZ Planner API and run it (Link to API Documentation) <br />
5.Create .env file in /zzz-planner-client/ <br />
&emsp;a.Include variable VITE_API_URL with your base url to fetch from ZZZ Planner API <br />
6.Run the client: npm run build <br />
