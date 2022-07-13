import Activities from "../models/activities.js"

export const getActivities = async (req, res) => {
  try {
    const activities = await Activities.find();
    res.json(activities);  
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message }); 
  }
};

export const getActivity = async (req, res) => {
  try { 
    const { id } = req.params;
    const activities = await Activities.findById(id);
    if (activities) {
      return res.json(activities);
    }
    res.status(404).json({message: "Activities not found!!"})
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message }); 
  }
};

export const createActivities = async (req, res) => {
  try {
    const activities = new Activities(req.body);
    await activities.save();
    res.status(201).json(activities);    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message }); 
  }
};

export const updateActivities = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Activities.findByIdAndUpdate(id,req.body);
    if (updated) { 
      return res.status(200).send(updated)
    }
    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message }); 
  }
};

export const deleteActivities = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Activities.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Activity Deleted");
    }
    throw new Error("Activity not found")
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message }); 
  }
};