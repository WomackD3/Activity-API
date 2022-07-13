import db from '../db/connection.js';
import Activity from '../models/activities.js';
import activityData from './activities.json' assert {type: 'json'};


const insertData = async () => {
  //clear database 
  await Activity.deleteMany({})

  //inset data
  await Activity.insertMany(activityData);


  //close db connection
  db.close()
}

insertData();