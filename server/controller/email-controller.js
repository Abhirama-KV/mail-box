import Email from "../model/email.js"


export const saveSentEmail = async (req, res) => {
    try {
        console.log(req.body)
        const email = await new Email(req.body)
        const doc = await email.save()
        res.status(200).json('email sent successfully')
        console.log('save')
    } catch {
        res.status(500).json('email not sent')
        console.log('error')
    }
}

export const getEmail = async (req, res) => {
    try {
        const doc = await Email.find({ to: req.params.type });
        console.log(doc)
        console.log(req.params)
        // req.params.type
        console.log('get email')
        res.status(200).json(doc)
    } catch {
        console.log('error while fetching emails')
        res.status(500).json('could not fetch emails')
    }
}

export const setStarred = async (req, res) => {
    try {
        console.log(req.params.id)
        const data = await Email.updateOne({ _id: req.params.id }, { $set: { starred: true } })
        console.log(data)
        res.status(200).json(data);
    } catch {
        res.status(500).json('couldnt starred')
    }
}

export const deleteMail = async (req, res) => {
    try {
        console.log(req.params.id)
        const data = await Email.deleteOne({ _id: req.params.id })
        console.log('deleted')
        console.log(data)
        res.status(200).json(data)
    } catch {
        console.log('error while deleting')
        res.status(500).json('couldnt delete')
    }
}

export const sentMail = async (req,res)=>{
    try{
        const fromMail = req.params.id;
        console.log(fromMail)    
        const data = await Email.find({from:fromMail})
        console.log('sentMail')
        res.status(200).json(data)
    }catch{
        console.log('couldnt fetch sent mails')
        res.status(500).json('couldnt fetch sent mails')
    }
}

// module.exports = saveSentEmail;