import Job from '../models/job.js'

export const saveJobData = async (request,response) => {
    try{
        const newJob=new Job(request.body);
        console.log("Hi");
        await newJob.save();
        response.status(200).json({message: "Job saved successfully"});

    } catch(error){
        console.log(error.message);
        response.status(500).json({error:error.message});

    }

}

export const getJobData = async (request,response) => {
    try{
        console.log("Hi");
        const jobs = await Job.find({});
        response.status(200).json(jobs);

    } catch(error){
        console.log(error.message);
        response.status(500).json({error:error.message});

    }

}