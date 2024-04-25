
const projectModel = require('../models/projectModel')

module.exports.addProjects = async (req, res) => {
    console.log(req.file,req.body,16)
    
    const p_title = req.body.p_title
    const p_description = req.body.p_description
    const p_exp = req.body.p_exp
    const p_link = req.body.p_link
    const p_img=req.file.path
    if (!p_title || !p_description || !p_img) {
        return res.send({ code: 400, message: 'Bad Request' })
    }
    const newProject = new projectModel({ p_title: p_title, p_description: p_description, p_exp: p_exp, p_link: p_link,p_img:p_img })
    const success = await newProject.save()
    if (success) {
        return res.send({ code: 200, message: 'sucsess' })
    } else {
        return res.send({ code: 400, message: 'Backend Error' })
    }

}
module.exports.getProjects = async (req,res) => {
    const _data= await projectModel.find({})
    if(_data)
    {
        return res.send({ code: 200, message: 'sucsess', data: _data })

    }
    else{
        return res.send({ code: 400, message: 'Backend Error' })

    }
}
module.exports.getSlider=async(req,res)=>
{
    const url1='https://media.istockphoto.com/id/1171902434/photo/smart-industry-control-concept.webp?b=1&s=170667a&w=0&k=20&c=F3flnxYp4lOY5NE9FRnMTCO_r01FhOP0IFm3F6nD42I='
    const url2='https://media.istockphoto.com/id/950693474/photo/coworkers-brainstorming-ideas-for-project.webp?b=1&s=170667a&w=0&k=20&c=6vLjEwvpmehLGDvkq4TRoQELqfsZzi-1Lx-A8sfsRYI='
    const url3='https://media.istockphoto.com/id/1213441993/photo/engineering-students-working-in-the-lab.webp?b=1&s=170667a&w=0&k=20&c=Qwy3x06MzeksDHzw5iz9-h60VS-uoJRAtMsVkeOFAR8='
    const url4='https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cm9uaWN8ZW58MHx8MHx8fDA%3D'
    const arr=[url1,url2,url3,url4]
    return res.send({code:200,message:'success',data:arr})
}