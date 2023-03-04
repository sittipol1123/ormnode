const { news } = require('../../models');

exports.index = async(req, res) => {
    try{
        const data = await news.findAll();
        return res.json(data);
    }catch(err){
        console.log(err);
        return res.status(500).json({error: 'somthing went wrong'});
    }
}

exports.create = async(req, res) => {
    const { title, short_detail, detail } = req.body;
    console.log(req.body)
    try{
        const models = await new news();
        models.title = title;
        models.short_detail = short_detail;
        models.detail = detail;
        models.sort = 0;
        models.publish = true;
        await models.save();
        // await news.create({
        //     title,
        //     short_detail,
        //     detail,
        //     short: 0,
        //     publish: true 
        // })
        return res.json({status: 'success'});
    }catch(err){
        console.log(err);
        return res.status(500).json({error: 'somthing went wrong'});
    }
}

exports.find = async(req, res) => {
    const id = req.param.id;
    try{
        const models = await news.findOne(id);
        return res.json(models);
    }catch(err){
        console.log(err);
        return res.status(500).json({error: 'somthing went wrong'});
    }
}

exports.update = async(req, res) => {
    const { title, short_detail, detail, sort, publish } = req.body;
    const id = req.param.id;
    try{
        const models = await news.findOne(id);
        models.title = title;
        models.short_detail = short_detail;
        models.detail = detail;
        models.sort = sort;
        models.publish = publish;
        await models.save();
        return res.json({status: 'success'});

    }catch(err){
        console.log(err);
        return res.status(500).json({error: 'somthing went wrong'});
    }
}

exports.destroy = async(req, res) => {
    const id = req.param.id;
    try{
        models = await news.findOne(id);
        models.destroy();
        return res.json({status: 'success'});
    }catch(err){
        console.log(err);
        return res.status(500).json({error: 'somthing went wrong'});
    }
}